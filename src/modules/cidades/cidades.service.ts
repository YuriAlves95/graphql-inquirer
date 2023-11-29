
import { Repository } from "typeorm";
import { ds } from "../../database/orm.mssql";
import { CidadesDto } from "./models/cidades.dto";
import { CidadesEntity } from "../../entities/cidades.entity";
import { CidadesInput } from "./models/cidades.input";

export class CidadesService {
   private cidadesRepository: Repository<CidadesEntity>;

   constructor(){
      this.cidadesRepository = ds.manager.getRepository(CidadesEntity)
   }

   async getAll(args: CidadesInput): Promise<CidadesDto[]>{
      return await this.cidadesRepository.find({ where: args })
   }

   async getOne(idCidades: number): Promise<CidadesDto | null>{
      const record = await this.cidadesRepository.findOne({ where : {idCidades} })
      return record || null
   }

   async create(data: CidadesInput): Promise<CidadesDto>{
      return await this.cidadesRepository.save(data)
   }

   async update(data: CidadesInput): Promise<CidadesDto>{
      return await this.cidadesRepository.save(data)
   }

   async remove(idCidades: number): Promise<boolean> {
      const res = (await this.cidadesRepository.delete({ idCidades })).affected || 0;
      return res > 0;
   }

}