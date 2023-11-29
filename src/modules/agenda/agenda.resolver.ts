
import { Arg, FieldResolver, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { AgendaService } from "./agenda.service";
import { AgendaDto } from "./models/agenda.dto";
import { AgendaInput } from "./models/agenda.input";

@Resolver(() => AgendaDto)
export class AgendaResolver { 
   private readonly agendaService = new AgendaService();

   @Query(() => [AgendaDto], { name: 'agendaAll', nullable: 'items' })
   async getAll(){
       return await this.agendaService.getAll()
   }

   @Query(() => AgendaDto, { name: 'agendaOne', nullable: true })
   async getOne(@Arg('idAgenda', () => Int) idAgenda: number){
      return await this.agendaService.getOne(idAgenda)
   }

   @Mutation(() => AgendaDto, { name: 'agendaCreate' })
   async create(@Arg('data') data: AgendaInput){
      return await this.agendaService.create(data)
   }

   @Mutation(() => AgendaDto, { name: 'agendaUpdate' })
   async update(@Arg('data') data: AgendaInput){
      return await this.agendaService.update(data)
   }

   @Mutation(() => Boolean, { name: 'agendaRemove' })
   async remove(@Arg('idAgenda', () => Int) idAgenda: number){
      return await this.agendaService.remove(idAgenda)
   }

}