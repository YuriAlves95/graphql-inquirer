export class templates {
  async fixTypes(type: string){
    if (
      type == "varchar" || 
      type == "text" || 
      type == "char" || 
      type == "nvarchar" ||
      type == "uniqueidentifier"
    ) {            
      return 'string';
    }

    if (type == "datetime" || type == "smalldatetime") {            
      return 'date';
    }

    if (type == "smallint" || type == "int" || type == "tinyint") {            
      return 'number';
    }

    if (
      type == "float" ||
      type == "currency" ||
      type == "money" ||
      type == "real" ||
      type == "bigint" ||
      type == "numeric" ||
      type == "smallmoney" ||
      type == "decimal"
    ) {           
      return 'float';
    }

    if (type == "bit") {            
      return 'boolean';
    }
  }

  async camelize(text: string, separator = "_"){
    return text.split(separator)
    .map((w) => w.replace(/./, (m) => m.toUpperCase()))
    .join("");
  }

  async entity(tabela: string, id: string, dados: any) {
    let schema: any = ``;
    schema += `\nimport { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n`;
    schema += `@Entity('${tabela}')\n`;
    schema += `export class ${await this.camelize(tabela.toLowerCase())}Entity {\n`;
  
    await Promise.all(dados.map(async (el: any) => {
      const type = await this.fixTypes(el.DATA_TYPE);
  
      if (el.COLUMN_NAME != "DATAREPL") {
        let campo = await this.camelize(el.COLUMN_NAME.toLowerCase());
        campo = campo[0].toLowerCase() + campo.slice(1);
  
        if (el.COLUMN_NAME == id) {
          schema += `   @PrimaryGeneratedColumn({ name: '${el.COLUMN_NAME}' })\n`;
          schema += `   ${campo}?: number;\n\n`;
        } else {
          if (type == 'string') {
            schema += `   @Column({ name: '${el.COLUMN_NAME}', nullable: true })\n`;
            schema += `   ${campo}?: string;\n\n`;
          }
          if (type == 'date') {
            schema += `   @Column({ name: '${el.COLUMN_NAME}', nullable: true })\n`;
            schema += `   ${campo}?: string;\n\n`;
          }
          if (type == 'number') {
            schema += `   @Column({ name: '${el.COLUMN_NAME}', nullable: true })\n`;
            schema += `   ${campo}?: number;\n\n`;
          }
          if (type == 'float') {
            schema += `   @Column({ name: '${el.COLUMN_NAME}', nullable: true })\n`;
            schema += `   ${campo}?: number;\n\n`;
          }
          if (type == 'boolean') {
            schema += `   @Column({ name: '${el.COLUMN_NAME}', nullable: true })\n`;
            schema += `   ${campo}?: boolean;\n\n`;
          }
        }
      }
    }));
  
    schema += `   repl?: boolean;\n`;
    schema += `}`;
  
    return schema;
  }
  
  async dto(tabela: string, id: string, dados: any){
    let schema: any;
    const singularLower = tabela.toLowerCase() 
    const singularLowerCamelized = await this.camelize(singularLower)

    schema = ``;
    schema += `\nimport { Field, Int, Float, ObjectType } from "type-graphql";\n`;
    schema += `import { ${singularLowerCamelized}Entity } from "../../../entities/${singularLower}.entity";\n\n`

    schema += `@ObjectType()\n`
    schema += `export class ${singularLowerCamelized}Dto implements ${singularLowerCamelized}Entity {\n`;

    await Promise.all(dados.map(async (el: any) => { 
      const type = await this.fixTypes(el.DATA_TYPE) 

      if (el.COLUMN_NAME != "DATAREPL") {        
        let campo = await this.camelize(el.COLUMN_NAME.toLowerCase());
        campo = campo[0].toLowerCase() + campo.slice(1);

        if (el.COLUMN_NAME == id) {                  
          schema += `   @Field(() => Int, { nullable: true })\n`;
          schema += `   ${campo}?: number;\n\n`;                  
        } else {
          if (type == 'string') {            
            schema += `   @Field(() => String, { nullable: true })\n`;
            schema += `   ${campo}?: string;\n\n`;
          }
          if (type == 'date') {            
            schema += `   @Field(() => String, { nullable: true })\n`;
            schema += `   ${campo}?: string;\n\n`;
          }
          if (type == 'number') {            
            schema += `   @Field(() => Int, { nullable: true })\n`;
            schema += `   ${campo}?: number;\n\n`;
          }
          if (type == 'float') {           
            schema += `   @Field(() => Float, { nullable: true })\n`;
            schema += `   ${campo}?: number;\n\n`;
          }
          if (type == 'boolean') {            
            schema += `   @Field(() => Boolean, { nullable: true })\n`;
            schema += `   ${campo}?: boolean;\n\n`;
          }
        }
      }      
    }));
    schema += `}`;

    return schema;
  }

  async input(tabela: string, id: string, dados: any){
    let schema: any;
    const singularLower = tabela.toLowerCase() 
    const singularLowerCamelized = await this.camelize(singularLower)

    schema = ``;
    schema += `\nimport { Field, Int, Float, InputType } from "type-graphql";\n`;
    schema += `import { ${singularLowerCamelized}Dto } from "./${singularLower}.dto";\n\n`

    schema += `@InputType()\n`
    schema += `export class ${singularLowerCamelized}Input implements ${singularLowerCamelized}Dto {\n`;

    await Promise.all(dados.map(async (el: any) => { 
      const type = await this.fixTypes(el.DATA_TYPE) 

      if (el.COLUMN_NAME != "DATAREPL") {        
        let campo = await this.camelize(el.COLUMN_NAME.toLowerCase());

        campo = campo[0].toLowerCase() + campo.slice(1);

        if (el.COLUMN_NAME == id) {                  
          schema += `   @Field(() => Int, { nullable: true })\n`;
          schema += `   ${campo}?: number;\n\n`;                  
        } else {
          if (type == 'string') {            
            schema += `   @Field(() => String, { nullable: true })\n`;
            schema += `   ${campo}?: string;\n\n`;
          }
          if (type == 'date') {            
            schema += `   @Field(() => String, { nullable: true })\n`;
            schema += `   ${campo}?: string;\n\n`;
          }
          if (type == 'number') {            
            schema += `   @Field(() => Int, { nullable: true })\n`;
            schema += `   ${campo}?: number;\n\n`;
          }
          if (type == 'float') {           
            schema += `   @Field(() => Float, { nullable: true })\n`;
            schema += `   ${campo}?: number;\n\n`;
          }
          if (type == 'boolean') {            
            schema += `   @Field(() => Boolean, { nullable: true })\n`;
            schema += `   ${campo}?: boolean;\n\n`;
          }
        }
      }      
    }));
    schema += `}`;

    return schema;    
  }

  async resolver(tabela: string, id: string, references: any, paginar: boolean){
    let schema: any;
    const singularLower = tabela.toLowerCase() 
    const singularLowerCamelized = await this.camelize(singularLower)
    let regularId = await this.camelize(id.toLowerCase());
    regularId = regularId[0].toLowerCase() + regularId.slice(1);

    let importRefStr: string = '';
    let newServiceStr: string = '';
    let fieldResolver: string = '';    

    for (let i = 0; i < references.length; i++) {
      const ref = references[i];      

      const refSingularLower = ref.table.toLowerCase() 
      const refSingularLowerCamelized = await this.camelize(refSingularLower)
      let refField = await this.camelize(ref.referenceName.toLowerCase());
      refField = refField[0].toLowerCase() + refField.slice(1);

      importRefStr += `import { ${refSingularLowerCamelized}Dto } from "../${refSingularLower}/models/${refSingularLower}.dto";\n`
      importRefStr += `import { ${refSingularLowerCamelized}Service } from "../${refSingularLower}/${refSingularLower}.service";\n`

      newServiceStr += `   private readonly ${refSingularLower}Service = new ${refSingularLowerCamelized}Service();\n`

      fieldResolver += `   @FieldResolver(() => ${refSingularLowerCamelized}Dto, { nullable: true })\n`
      fieldResolver += `    async ${refSingularLower}(@Root() reference: ${singularLowerCamelized}Dto){\n`
      fieldResolver += `        return await this.${refSingularLower}Service.getOne(reference.${refField} || 0)\n`
      fieldResolver += `   }\n\n`
    }

    schema = `\n`;
    schema += `import { Arg, Authorized, FieldResolver, Int, Mutation, Query, Resolver, Root } from "type-graphql";\n`;
    schema += `import { ${singularLowerCamelized}Service } from "./${singularLower}.service";\n`
    schema += `import { ${singularLowerCamelized}Dto } from "./models/${singularLower}.dto";\n`
    schema += `import { ${singularLowerCamelized}Input } from "./models/${singularLower}.input";\n` 
    schema += importRefStr   

    schema += `\n`
    schema += `@Resolver(() => ${singularLowerCamelized}Dto)\n`
    schema += `export class ${singularLowerCamelized}Resolver { \n`
    schema += newServiceStr 
    schema += `   private readonly ${singularLower}Service = new ${singularLowerCamelized}Service();\n\n`

    schema += `   @Query(() => [${singularLowerCamelized}Dto], { name: '${singularLower}All', nullable: 'items' })\n`
    schema += `   @Authorized()\n`
    schema += `   async getAll(@Arg('filter', { nullable: true }) filter: ${singularLowerCamelized}Input){\n`
    schema += `       return await this.${singularLower}Service.getAll(filter)\n`
    schema += `   }\n\n`

    schema += `   @Query(() => ${singularLowerCamelized}Dto, { name: '${singularLower}One', nullable: true })\n`
    schema += `   @Authorized()\n`
    schema += `   async getOne(@Arg('${regularId}', () => Int) ${regularId}: number){\n`
    schema += `      return await this.${singularLower}Service.getOne(${regularId})\n`
    schema += `   }\n\n`

    schema += `   @Mutation(() => ${singularLowerCamelized}Dto, { name: '${singularLower}Create' })\n`
    schema += `   @Authorized()\n`
    schema += `   async create(@Arg('data') data: ${singularLowerCamelized}Input){\n`
    schema += `      return await this.${singularLower}Service.create(data)\n`
    schema += `   }\n\n`

    schema += `   @Mutation(() => ${singularLowerCamelized}Dto, { name: '${singularLower}Update' })\n`
    schema += `   @Authorized()\n`
    schema += `   async update(@Arg('data') data: ${singularLowerCamelized}Input){\n`
    schema += `      return await this.${singularLower}Service.update(data)\n`
    schema += `   }\n\n`

    schema += `   @Mutation(() => Boolean, { name: '${singularLower}Remove' })\n`
    schema += `   @Authorized()\n`
    schema += `   async remove(@Arg('${regularId}', () => Int) ${regularId}: number){\n`
    schema += `      return await this.${singularLower}Service.remove(${regularId})\n`
    schema += `   }\n\n`

    if (paginar){
      schema += `   @Query(() => [${singularLowerCamelized}Dto], { name: '${singularLower}Paginated', nullable: 'items' })\n`
      schema += `   @Authorized()\n`
      schema += `   async getAllPaginated(\n`
      schema += `       @Arg('page', () => Int, { defaultValue: 1 }) page: number,\n`
      schema += `       @Arg('perPage', () => Int, { defaultValue: 10 }) perPage: number,\n`
      schema += `       @Arg('filter', { nullable: true }) filter: ${singularLowerCamelized}Input\n`
      schema += `   ): Promise<${singularLowerCamelized}Dto[]> { \n`
      schema += `       const paginated = await this.${singularLower}Service.getAllPaginated(page, perPage, filter)\n`
      schema += `       return paginated;\n`
      schema += `   }\n\n`      
    }
    
    schema += fieldResolver;
       
    schema += `}`;
    return schema;   
  }

  async service(tabela: string, id: string, paginar: boolean){
    let schema: any;
    const singularLower = tabela.toLowerCase() 
    const singularLowerCamelized = await this.camelize(singularLower)
    let regularId = await this.camelize(id.toLowerCase());
    regularId = regularId[0].toLowerCase() + regularId.slice(1);

    schema = ``;
    schema += `\nimport { Repository } from "typeorm";\n`;
    schema += `import { ds } from "../../database/orm.mssql";\n`;
    schema += `import { ${singularLowerCamelized}Dto } from "./models/${singularLower}.dto";\n`;
    schema += `import { ${singularLowerCamelized}Entity } from "../../entities/${singularLower}.entity";\n`;
    schema += `import { ${singularLowerCamelized}Input } from "./models/${singularLower}.input";\n\n`;
  
    schema += `export class ${singularLowerCamelized}Service {\n`;
    schema += `   private ${singularLower}Repository: Repository<${singularLowerCamelized}Entity>;\n\n`;

    schema += `   constructor(){\n`;
    schema += `      this.${singularLower}Repository = ds.manager.getRepository(${singularLowerCamelized}Entity)\n`;
    schema += `   }\n\n`;

    schema += `   async getAll(args: ${singularLowerCamelized}Input): Promise<${singularLowerCamelized}Dto[]>{\n`;
    schema += `      return await this.${singularLower}Repository.find({ where: args })\n`;
    schema += `   }\n\n`;    

    if (paginar){
      schema += `   async getAllPaginated(page: number, perPage: number, args: ${singularLowerCamelized}Input): Promise<${singularLowerCamelized}Dto[]>{\n`;
      schema += `     const skip = (page - 1) * perPage;\n`;
      schema += `     return await this.${singularLower}Repository.find({\n`;
      schema += `       where: args,\n`;
      schema += `       take: perPage,\n`;
      schema += `       skip,\n`;
      schema += `     })\n`;
      schema += `   }\n\n`;      
    }  

    schema += `   async getOne(${regularId}: number): Promise<${singularLowerCamelized}Dto | null>{\n`;
    schema += `      const record = await this.${singularLower}Repository.findOne({ where : {${regularId}} })\n`;
    schema += `      return record || null\n`;
    schema += `   }\n\n`;

    schema += `   async create(data: ${singularLowerCamelized}Input): Promise<${singularLowerCamelized}Dto>{\n`;
    schema += `      return await this.${singularLower}Repository.save(data)\n`;
    schema += `   }\n\n`;

    schema += `   async update(data: ${singularLowerCamelized}Input): Promise<${singularLowerCamelized}Dto>{\n`;
    schema += `      return await this.${singularLower}Repository.save(data)\n`;
    schema += `   }\n\n`;

    schema += `   async remove(${regularId}: number): Promise<boolean> {\n`;
    schema += `      const res = (await this.${singularLower}Repository.delete({ ${regularId} })).affected || 0;\n`;
    schema += `      return res > 0;\n`;
    schema += `   }\n\n`;    
    
    schema += `}`;
    return schema; 
  }
}