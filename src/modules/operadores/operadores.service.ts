
import { Repository } from "typeorm";
import { ds } from "../../database/orm.mssql";
import { OperadoresDto } from "./models/operadores.dto";
import { OperadoresEntity } from "../../entities/operadores.entity";
import { OperadoresInput } from "./models/operadores.input";

export class OperadoresService {
   private operadoresRepository: Repository<OperadoresEntity>;

   constructor(){
      this.operadoresRepository = ds.manager.getRepository(OperadoresEntity)
   }

   async getAll(args: OperadoresInput): Promise<OperadoresDto[]>{
      return await this.operadoresRepository.find({ where: args })
   }

   async getOne(idOperadores: number): Promise<OperadoresDto | null>{
      const record = await this.operadoresRepository.findOne({ where : {idOperadores} })
      return record || null
   }

   async getLogin(nome: string, senha: string): Promise<OperadoresDto | null>{
      const record = await this.operadoresRepository.findOne({ where : {nome, senha} })
      return record || null
   }

   async create(data: OperadoresInput): Promise<OperadoresDto>{
      return await this.operadoresRepository.save(data)
   }

   async update(data: OperadoresInput): Promise<OperadoresDto>{
      return await this.operadoresRepository.save(data)
   }

   async remove(idOperadores: number): Promise<boolean> {
      const res = (await this.operadoresRepository.delete({ idOperadores })).affected || 0;
      return res > 0;
   }

}