import { DataSource } from "typeorm";
import { configMSSQL } from "../config/ormconfig";

export const ds = new DataSource(configMSSQL)

export const MSSQLConnect = async () => {    
    await ds.initialize()
    .then(() => {        
        console.log("✅ Conexão com a base de dados realizada!")
    })
    .catch((err) => {
        console.error("❌ Erro ao conectar à base de dados!", err)
    }) 
}

//método para testes de consultas
export const executeQuery = async (sql: string) => {  
  const data = await ds.manager.query(sql);  
  return data
};
