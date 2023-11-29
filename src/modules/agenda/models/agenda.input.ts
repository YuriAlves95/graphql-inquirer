
import { Field, Int, Float, InputType } from "type-graphql";
import { AgendaDto } from "./agenda.dto";

@InputType()
export class AgendaInput implements AgendaDto {
   @Field(() => Int, { nullable: true })
   idAgenda?: number;

   @Field(() => Int, { nullable: true })
   idOperadores?: number;

   @Field(() => String, { nullable: true })
   data?: string;

   @Field(() => String, { nullable: true })
   titulo?: string;

   @Field(() => String, { nullable: true })
   conteudo?: string;

   @Field(() => Boolean, { nullable: true })
   ok?: boolean;

   @Field(() => String, { nullable: true })
   rowguid?: string;

}