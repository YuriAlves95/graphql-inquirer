import path from "path";
import { exec, spawn } from 'child_process';
import { MSSQLConnect, executeQuery } from "./database/orm.mssql";
import { inquirerQuestions } from "./lib/inquirer";
import { apolloInit } from "./routes/routes";
import { geradorArquivos } from "./lib/gera-arquivos";

require("dotenv").config();
const port = Number(process.env.PORT) || 3000;

const start = async (generateResource: boolean = false) => {
  try {   
      //realiza conexão com o SQLServer
      await MSSQLConnect();

      //instancia o fastify com o apollo service
      let fastifyServer = await apolloInit();

      //entity generator
      if (generateResource){
        await runGen();        
        process.exit(0)                
      }

      fastifyServer.listen({ port, host: '0.0.0.0' }, async function (err, address) {
      if (err) {
        fastifyServer.log.error(err)
        process.exit(1)
      }
        console.log(`🚀 Servidor rodando >>>> http://localhost:${port}`);
        //await executeQuery('select * from agenda') //apenas para testar conexão         
      })        
  } catch (err) {
      console.error('❌ Não foi possível iniciar o servidor!', err)
      process.exit(1);
  }
};
  
start(process.argv.includes('--generate-resource'));

const runGen = async () => {  
  var colors = require('colors/safe');  
  const inquirer = new inquirerQuestions();
  const gerador = new geradorArquivos();

  console.log(` `);
  const initGenerator = await inquirer.confirmarGeracao();
  if (!initGenerator.confirm){
    return;
  }

  const infoTabela = await inquirer.perguntaDadosTabela()  

  await gerador.preparaGeracao(
    infoTabela.table,    
    infoTabela.id ,   
    path.basename(__dirname),
    infoTabela.confirmPaginacao
  );
  
  console.log(colors.black.bgWhite.bold('\nOs recursos estão prontos para uso!'));  
};