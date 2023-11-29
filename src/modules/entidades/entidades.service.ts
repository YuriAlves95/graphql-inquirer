
import { Repository } from "typeorm";
import { ds } from "../../database/orm.mssql";
import { EntidadesDto } from "./models/entidades.dto";
import { EntidadesEntity } from "../../entities/entidades.entity";
import { EntidadesInput } from "./models/entidades.input";

export class EntidadesService {
   private entidadesRepository: Repository<EntidadesEntity>;

   constructor(){
      this.entidadesRepository = ds.manager.getRepository(EntidadesEntity)
   }

   async getAll(args: EntidadesInput): Promise<EntidadesDto[]>{
      return await this.entidadesRepository.find({ where: args })
   }

   async getTotSis(args: EntidadesInput): Promise<EntidadesDto[]>{
      const qry = await this.entidadesRepository.createQueryBuilder('ENT')
      .select('ENT.ID_ENTIDADES, ENT.NOME, ENT.CNPJCPF, SUM(SISCLI.VALOR) AS TOTSISTEMAS')      
      .leftJoin('SISTEMASCLIENTES', 'SISCLI', 'ENT.ID_ENTIDADES = SISCLI.ID_ENTIDADES') 
      .groupBy('ENT.ID_ENTIDADES, ENT.NOME, ENT.CNPJCPF')  
      .getRawMany();     

      return qry.map(result => {
         const entidadeDto = new EntidadesDto();
         entidadeDto.idEntidades = result.ID_ENTIDADES;
         entidadeDto.nome = result.NOME;
         entidadeDto.cnpjcpf = result.CNPJCPF;
         entidadeDto.totSistemas = parseFloat(Number(result.TOTSISTEMAS || 0).toFixed(2));
         return entidadeDto;
      });
   }   

   async getAllPaginated(page: number, perPage: number, args: EntidadesInput): Promise<EntidadesDto[]>{
     const skip = (page - 1) * perPage;
     return await this.entidadesRepository.find({
       where: args,
       take: perPage,
       skip,
     })
   }

   async getOne(idEntidades: number): Promise<EntidadesDto | null>{
      const record = await this.entidadesRepository.findOne({ where : {idEntidades} })
      return record || null
   }

   async create(data: EntidadesInput): Promise<EntidadesDto>{
      return await this.entidadesRepository.save(data)
   }

   async update(data: EntidadesInput): Promise<EntidadesDto>{
      return await this.entidadesRepository.save(data)
   }

   async remove(idEntidades: number): Promise<boolean> {
      const res = (await this.entidadesRepository.delete({ idEntidades })).affected || 0;
      return res > 0;
   }

}