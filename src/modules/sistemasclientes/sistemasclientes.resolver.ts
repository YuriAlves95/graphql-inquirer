
import { Arg, FieldResolver, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { SistemasclientesService } from "./sistemasclientes.service";
import { SistemasclientesDto } from "./models/sistemasclientes.dto";
import { SistemasclientesInput } from "./models/sistemasclientes.input";
import { SistemasDto } from "../sistemas/models/sistemas.dto";
import { SistemasService } from "../sistemas/sistemas.service";

@Resolver(() => SistemasclientesDto)
export class SistemasclientesResolver { 
   private readonly sistemasService = new SistemasService();
   private readonly sistemasclientesService = new SistemasclientesService();

   @Query(() => [SistemasclientesDto], { name: 'sistemasclientesAll', nullable: 'items' })
   async getAll(@Arg('filter', { nullable: true }) filter: SistemasclientesInput){
       return await this.sistemasclientesService.getAll(filter)
   }

   @Query(() => SistemasclientesDto, { name: 'sistemasclientesOne', nullable: true })
   async getOne(@Arg('idSistemasclientes', () => Int) idSistemasclientes: number){
      return await this.sistemasclientesService.getOne(idSistemasclientes)
   }

   @Mutation(() => SistemasclientesDto, { name: 'sistemasclientesCreate' })
   async create(@Arg('data') data: SistemasclientesInput){
      return await this.sistemasclientesService.create(data)
   }

   @Mutation(() => SistemasclientesDto, { name: 'sistemasclientesUpdate' })
   async update(@Arg('data') data: SistemasclientesInput){
      return await this.sistemasclientesService.update(data)
   }

   @Mutation(() => Boolean, { name: 'sistemasclientesRemove' })
   async remove(@Arg('idSistemasclientes', () => Int) idSistemasclientes: number){
      return await this.sistemasclientesService.remove(idSistemasclientes)
   }

   @FieldResolver(() => SistemasDto, { nullable: true })
    async sistemas(@Root() reference: SistemasclientesDto){
        return await this.sistemasService.getOne(reference.idSistemas || 0)
   }

}