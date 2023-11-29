import fs from 'fs';
import { promisify } from 'util';

export class fileWriter {
  async camelize(text: string, separator = "_"){
    return text.split(separator)
    .map((w) => w.replace(/./, (m) => m.toUpperCase()))
    .join("");
  }

  async writeFile(filePath: string, content: string, force: boolean = false) {  
    var colors = require('colors/safe');  
    const newFilePath =  filePath.replace(/\\/g, '/');  

    // Verifica se o arquivo já existe
    if (!fs.existsSync(newFilePath) || force) {
      // Cria o arquivo index.js se não existir
      fs.writeFileSync(newFilePath, Buffer.from(content));
      if (force){
        console.log(colors.yellow(`[updated]  ${newFilePath}`));
      } else {
        console.log(colors.green(`[generated]  ${newFilePath}`));
      }      
    } else {
        console.log(colors.brightRed(`[skipped]  ${newFilePath} já existe!`));
    }
  };

  async createFolder(folderPath: string) {
    const newFolderPath =  folderPath.replace(/\\/g, '/'); 
    if (!fs.existsSync(newFolderPath)) {  
      // Cria a pasta se não existir    
      fs.mkdirSync(newFolderPath);      
    } 
  };

  async updateRouteFile(filePath: string, singular: string) {
    const readFileAsync = promisify(fs.readFile);
    try {
      const dados = await readFileAsync(filePath, 'utf8');
      const importContent = await this.updateImports(dados, singular);        
      const newContent = await this.updateResolverList(importContent, singular);   
      if (importContent == '' || newContent == ''){
        return;
      }          
      await this.writeFile(filePath, newContent, true);     
    } catch (erro) {
      console.error('Erro ao ler o arquivo:', erro);
    }
  }

  async updateImports(dadosArq: string, singular: string){       
    const singularLower = singular.toLowerCase() 
    const singularLowerCamelized = await this.camelize(singularLower)
    const str = `import { ${singularLowerCamelized}Resolver } from "../modules/${singularLower}/${singularLower}.resolver";`
    
    if (dadosArq.includes(str)) {
      return '';
    }

    const posicao = dadosArq.lastIndexOf('.resolver";');                         
    const novoConteudo = dadosArq.slice(0, posicao + 11) + `\n${str}` + dadosArq.slice(posicao + 11);
    return novoConteudo      
  }

  async updateResolverList(dadosArq: string, singular: string){   
    const singularLower = singular.toLowerCase() 
    const singularLowerCamelized = await this.camelize(singularLower)
    const str = `${singularLowerCamelized}Resolver,` 

    if (dadosArq.includes(str)) {
      return '';
    }

    const posicao = dadosArq.lastIndexOf('Resolver,');                         
    const novoConteudo = dadosArq.slice(0, posicao + 9) + `\n            ${str}` + dadosArq.slice(posicao + 9);
    return novoConteudo      
  }
}