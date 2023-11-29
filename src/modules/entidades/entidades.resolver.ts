
import { Arg, FieldResolver, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { EntidadesService } from "./entidades.service";
import { EntidadesDto } from "./models/entidades.dto";
import { EntidadesInput } from "./models/entidades.input";
import { CidadesDto } from "../cidades/models/cidades.dto";
import { CidadesService } from "../cidades/cidades.service";
import { SistemasclientesDto } from "../sistemasclientes/models/sistemasclientes.dto";
import { SistemasclientesService } from "../sistemasclientes/sistemasclientes.service";

@Resolver(() => EntidadesDto)
export class EntidadesResolver { 
   private readonly cidadesService = new CidadesService();
   private readonly entidadesService = new EntidadesService();
   private readonly sistemasClientesService = new SistemasclientesService();

   @Query(() => [EntidadesDto], { name: 'entidadesAll', nullable: 'items' })
   async getAll(@Arg('filter', { nullable: true }) filter: EntidadesInput){
       return await this.entidadesService.getAll(filter)
   }

   @Query(() => [EntidadesDto], { name: 'entidadesAllTotaisSistema', nullable: 'items' })
   async getTotSis(@Arg('filter', { nullable: true }) filter: EntidadesInput){
       return await this.entidadesService.getTotSis(filter)
   }

   @Query(() => EntidadesDto, { name: 'entidadesOne', nullable: true })
   async getOne(@Arg('idEntidades', () => Int) idEntidades: number){
      return await this.entidadesService.getOne(idEntidades)
   }

   @Mutation(() => EntidadesDto, { name: 'entidadesCreate' })
   async create(@Arg('data') data: EntidadesInput){
      return await this.entidadesService.create(data)
   }

   @Mutation(() => EntidadesDto, { name: 'entidadesUpdate' })
   async update(@Arg('data') data: EntidadesInput){
      return await this.entidadesService.update(data)
   }

   @Mutation(() => Boolean, { name: 'entidadesRemove' })
   async remove(@Arg('idEntidades', () => Int) idEntidades: number){
      return await this.entidadesService.remove(idEntidades)
   }

   @Query(() => [EntidadesDto], { name: 'entidadesPaginated', nullable: 'items' })
   async getAllPaginated(
       @Arg('page', () => Int, { defaultValue: 1 }) page: number,
       @Arg('perPage', () => Int, { defaultValue: 10 }) perPage: number,
       @Arg('filter', { nullable: true }) filter: EntidadesInput
   ): Promise<EntidadesDto[]> { 
       const paginated = await this.entidadesService.getAllPaginated(page, perPage, filter)
       return paginated;
   }

   @FieldResolver(() => CidadesDto, { nullable: true })
    async cidades(@Root() reference: EntidadesDto){
        return await this.cidadesService.getOne(reference.idCidades || 0)
   }

   @FieldResolver(() => [SistemasclientesDto], { nullable: true })
    async sistemasCliente(@Root() reference: EntidadesDto){
        return await this.sistemasClientesService.getAll({idEntidades: reference.idEntidades})
   }

}