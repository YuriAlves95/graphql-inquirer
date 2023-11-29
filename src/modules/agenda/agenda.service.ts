
import { Repository } from "typeorm";
import { ds } from "../../database/orm.mssql";
import { AgendaDto } from "./models/agenda.dto";
import { AgendaEntity } from "../../entities/agenda.entity";
import { AgendaInput } from "./models/agenda.input";

export class AgendaService {
   private agendaRepository: Repository<AgendaEntity>;

   constructor(){
      this.agendaRepository = ds.manager.getRepository(AgendaEntity)
   }

   async getAll(): Promise<AgendaDto[]>{
      return await this.agendaRepository.find()
   }

   async getOne(idAgenda: number): Promise<AgendaDto | null>{
      const record = await this.agendaRepository.findOne({ where : {idAgenda} })
      return record || null
   }

   async create(data: AgendaInput): Promise<AgendaDto>{
      return await this.agendaRepository.save(data)
   }

   async update(data: AgendaInput): Promise<AgendaDto>{
      return await this.agendaRepository.save(data)
   }

   async remove(idAgenda: number): Promise<boolean> {
      const res = (await this.agendaRepository.delete({ idAgenda })).affected || 0;
      return res > 0;
   }

}