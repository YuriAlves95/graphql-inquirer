import path from "path";
import { executeQuery } from "../database/orm.mssql";
import { fileWriter } from "./file-writer";
import { templates } from "./templates";
import { inquirerQuestions } from "./inquirer";

interface ObjReference {
  referenceName: string,
  table: string,
  idField: string,
  mainTable: boolean,
  paginate: boolean,
  tableStructure: any
}

interface ObjGerador {
  table: string,
  idField: string,
  mainTable: boolean,
  paginate: boolean,
  tableStructure: any,
  references: ObjReference[];
}

export class geradorArquivos {
  async preparaGeracao(tabela: string, id: string, rootPath: string, paginar: boolean = false){
    
    const mainTableStructure = await executeQuery(await this.buildTableSql(tabela))

    let objGerador: ObjGerador = {
      table: tabela,      
      idField: id,
      mainTable: true,
      paginate: paginar,
      tableStructure: mainTableStructure,
      references: [] 
    }

    for (let i = 0; i < mainTableStructure.length; i++) {      
      const field = mainTableStructure[i].COLUMN_NAME;

      if (field.startsWith("ID_") && field != id) {        
        console.log(`\n##########################################################\n`)        
        const relacionar = await new inquirerQuestions().confirmarRelacao(field);

        if (relacionar.confirmRelacao){          
          let nomeTabelaAprox = field.substring(3);
          const dadosRelacao = await new inquirerQuestions().perguntaDadosRelacao(nomeTabelaAprox)
          const referenceTableStructure = await executeQuery(await this.buildTableSql(dadosRelacao.table))

          const objRef = {
            referenceName: field,
            table: dadosRelacao.table,            
            idField: dadosRelacao.idField,
            mainTable: false,
            paginate: false,
            tableStructure: referenceTableStructure,
          }
          objGerador.references.push(objRef)
        }   
      }
    } 

    const paths = await this.joinPaths(objGerador.table, rootPath);     
    await this.gerar(objGerador.table, objGerador.idField, objGerador.tableStructure, paths, objGerador.paginate, objGerador.references);
    
    for (let i = 0; i < objGerador.references.length; i++) {
      const ref = objGerador.references[i];
      
      const paths = await this.joinPaths(ref.table, rootPath);     
      await this.gerar(ref.table, ref.idField, ref.tableStructure, paths, ref.paginate);
    }        
  }

  async gerar(table: string, idField: string, tableStructure: any, paths: any, paginate: boolean, references: ObjReference[] = []){
    const geraTemplate = new templates();
    const writer = new fileWriter();

    console.log(`\n##########################################################\n`)
    
    //geração das pastas base
    await writer.createFolder(path.resolve(paths.entitiesPath)); //src/entities
    await writer.createFolder(path.resolve(paths.modulesPath)); //src/modules/**/
    await writer.createFolder(path.resolve(paths.modelsPath)); //src/modules/**/models
    
    const entityContent = await geraTemplate.entity(table, idField, tableStructure)         
    await writer.writeFile(path.resolve(paths.entityFilePath), entityContent)

    const resolverContent = await geraTemplate.resolver(table, idField, references, paginate)         
    await writer.writeFile(path.resolve(paths.resolverFilePath), resolverContent)    
    await writer.updateRouteFile(path.resolve(paths.routesFilePath), table)   

    const serviceContent = await geraTemplate.service(table, idField, paginate)
    await writer.writeFile(path.resolve(paths.serviceFilePath), serviceContent)

    const dtoContent = await geraTemplate.dto(table, idField, tableStructure)
    await writer.writeFile(path.resolve(paths.dtoFilePath), dtoContent)

    const inputContent = await geraTemplate.input(table, idField, tableStructure)
    await writer.writeFile(path.resolve(paths.inputFilePath), inputContent)
  }

  async buildTableSql(tabela: string){    
    const sql: string = `select COLUMN_NAME, IS_NULLABLE, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH 
    from INFORMATION_SCHEMA.columns where table_name = '${tabela}'`;
    return sql; 
  }  

  async joinPaths(tableName: string, rootPath: string){    
    const tbl = tableName.toLowerCase() 
    const objPaths = {
      entitiesPath: `${rootPath}/entities`,
      entityFilePath: `${rootPath}/entities/${tbl}.entity.ts`, 
      modulesPath: `${rootPath}/modules/${tbl}`,
      resolverFilePath: `${rootPath}/modules/${tbl}/${tbl}.resolver.ts`,
      serviceFilePath: `${rootPath}/modules/${tbl}/${tbl}.service.ts`,
      modelsPath: `${rootPath}/modules/${tbl}/models`, 
      dtoFilePath: `${rootPath}/modules/${tbl}/models/${tbl}.dto.ts`, 
      inputFilePath: `${rootPath}/modules/${tbl}/models/${tbl}.input.ts`,  
      routesFilePath: `${rootPath}/routes/routes.ts`   
    }
    return objPaths; 
  } 
  
  async camelize(text: string, separator = "_"){
    return text.split(separator)
    .map((w) => w.replace(/./, (m) => m.toUpperCase()))
    .join("");
  }
}