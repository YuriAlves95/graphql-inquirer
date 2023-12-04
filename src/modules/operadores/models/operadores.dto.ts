
import { Field, Int, Float, ObjectType } from "type-graphql";
import { OperadoresEntity } from "../../../entities/operadores.entity";

@ObjectType()
export class OperadoresDto implements OperadoresEntity {
   @Field(() => Int, { nullable: true })
   idOperadores?: number;

   @Field(() => String, { nullable: true })
   nome?: string;

   @Field(() => String, { nullable: true })
   senha?: string;
}