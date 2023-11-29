
import { Repository } from "typeorm";
import { ds } from "../../database/orm.mssql";
import { SistemasDto } from "./models/sistemas.dto";
import { SistemasEntity } from "../../entities/sistemas.entity";
import { SistemasInput } from "./models/sistemas.input";

export class SistemasService {
   private sistemasRepository: Repository<SistemasEntity>;

   constructor(){
      this.sistemasRepository = ds.manager.getRepository(SistemasEntity)
   }

   async getAll(args: SistemasInput): Promise<SistemasDto[]>{
      return await this.sistemasRepository.find({ where: args })
   }

   async getOne(idSistemas: number): Promise<SistemasDto | null>{
      const record = await this.sistemasRepository.findOne({ where : {idSistemas} })
      return record || null
   }

   async create(data: SistemasInput): Promise<SistemasDto>{
      return await this.sistemasRepository.save(data)
   }

   async update(data: SistemasInput): Promise<SistemasDto>{
      return await this.sistemasRepository.save(data)
   }

   async remove(idSistemas: number): Promise<boolean> {
      const res = (await this.sistemasRepository.delete({ idSistemas })).affected || 0;
      return res > 0;
   }

}