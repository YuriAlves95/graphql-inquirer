
import { Arg, FieldResolver, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { CidadesService } from "./cidades.service";
import { CidadesDto } from "./models/cidades.dto";
import { CidadesInput } from "./models/cidades.input";

@Resolver(() => CidadesDto)
export class CidadesResolver { 
   private readonly cidadesService = new CidadesService();

   @Query(() => [CidadesDto], { name: 'cidadesAll', nullable: 'items' })
   async getAll(@Arg('filter', { nullable: true }) filter: CidadesInput){
       return await this.cidadesService.getAll(filter)
   }

   @Query(() => CidadesDto, { name: 'cidadesOne', nullable: true })
   async getOne(@Arg('idCidades', () => Int) idCidades: number){
      return await this.cidadesService.getOne(idCidades)
   }

   @Mutation(() => CidadesDto, { name: 'cidadesCreate' })
   async create(@Arg('data') data: CidadesInput){
      return await this.cidadesService.create(data)
   }

   @Mutation(() => CidadesDto, { name: 'cidadesUpdate' })
   async update(@Arg('data') data: CidadesInput){
      return await this.cidadesService.update(data)
   }

   @Mutation(() => Boolean, { name: 'cidadesRemove' })
   async remove(@Arg('idCidades', () => Int) idCidades: number){
      return await this.cidadesService.remove(idCidades)
   }

}