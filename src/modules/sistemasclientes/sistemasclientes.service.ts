
import { Repository } from "typeorm";
import { ds } from "../../database/orm.mssql";
import { SistemasclientesDto } from "./models/sistemasclientes.dto";
import { SistemasclientesEntity } from "../../entities/sistemasclientes.entity";
import { SistemasclientesInput } from "./models/sistemasclientes.input";

export class SistemasclientesService {
   private sistemasclientesRepository: Repository<SistemasclientesEntity>;

   constructor(){
      this.sistemasclientesRepository = ds.manager.getRepository(SistemasclientesEntity)
   }

   async getAll(args: SistemasclientesInput): Promise<SistemasclientesDto[]>{
      return await this.sistemasclientesRepository.find({ where: args })
   }

   async getOne(idSistemasclientes: number): Promise<SistemasclientesDto | null>{
      const record = await this.sistemasclientesRepository.findOne({ where : {idSistemasclientes} })
      return record || null
   }

   async create(data: SistemasclientesInput): Promise<SistemasclientesDto>{
      return await this.sistemasclientesRepository.save(data)
   }

   async update(data: SistemasclientesInput): Promise<SistemasclientesDto>{
      return await this.sistemasclientesRepository.save(data)
   }

   async remove(idSistemasclientes: number): Promise<boolean> {
      const res = (await this.sistemasclientesRepository.delete({ idSistemasclientes })).affected || 0;
      return res > 0;
   }

}