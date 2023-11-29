
import { Arg, FieldResolver, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { SistemasService } from "./sistemas.service";
import { SistemasDto } from "./models/sistemas.dto";
import { SistemasInput } from "./models/sistemas.input";

@Resolver(() => SistemasDto)
export class SistemasResolver { 
   private readonly sistemasService = new SistemasService();

   @Query(() => [SistemasDto], { name: 'sistemasAll', nullable: 'items' })
   async getAll(@Arg('filter', { nullable: true }) filter: SistemasInput){
       return await this.sistemasService.getAll(filter)
   }

   @Query(() => SistemasDto, { name: 'sistemasOne', nullable: true })
   async getOne(@Arg('idSistemas', () => Int) idSistemas: number){
      return await this.sistemasService.getOne(idSistemas)
   }

   @Mutation(() => SistemasDto, { name: 'sistemasCreate' })
   async create(@Arg('data') data: SistemasInput){
      return await this.sistemasService.create(data)
   }

   @Mutation(() => SistemasDto, { name: 'sistemasUpdate' })
   async update(@Arg('data') data: SistemasInput){
      return await this.sistemasService.update(data)
   }

   @Mutation(() => Boolean, { name: 'sistemasRemove' })
   async remove(@Arg('idSistemas', () => Int) idSistemas: number){
      return await this.sistemasService.remove(idSistemas)
   }

}