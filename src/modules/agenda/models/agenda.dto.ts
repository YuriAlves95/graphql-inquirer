
import { Field, Int, Float, ObjectType } from "type-graphql";
import { AgendaEntity } from "../../../entities/agenda.entity";

@ObjectType()
export class AgendaDto implements AgendaEntity {
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