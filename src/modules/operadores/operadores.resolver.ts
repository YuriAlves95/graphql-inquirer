
import { Arg, Authorized, FieldResolver, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { OperadoresService } from "./operadores.service";
import { OperadoresDto } from "./models/operadores.dto";
import { OperadoresInput } from "./models/operadores.input";

@Resolver(() => OperadoresDto)
export class OperadoresResolver { 
   private readonly operadoresService = new OperadoresService();

   @Query(() => [OperadoresDto], { name: 'operadoresAll', nullable: 'items' })
   @Authorized()
   async getAll(@Arg('filter', { nullable: true }) filter: OperadoresInput){
       return await this.operadoresService.getAll(filter)
   }

   @Query(() => OperadoresDto, { name: 'operadoresOne', nullable: true })
   @Authorized()
   async getOne(@Arg('idOperadores', () => Int) idOperadores: number){
      return await this.operadoresService.getOne(idOperadores)
   }

   @Mutation(() => OperadoresDto, { name: 'operadoresCreate' })
   @Authorized()
   async create(@Arg('data') data: OperadoresInput){
      return await this.operadoresService.create(data)
   }

   @Mutation(() => OperadoresDto, { name: 'operadoresUpdate' })
   @Authorized()
   async update(@Arg('data') data: OperadoresInput){
      return await this.operadoresService.update(data)
   }

   @Mutation(() => Boolean, { name: 'operadoresRemove' })
   @Authorized()
   async remove(@Arg('idOperadores', () => Int) idOperadores: number){
      return await this.operadoresService.remove(idOperadores)
   }

}