
import { Field, Int, Float, InputType } from "type-graphql";
import { OperadoresDto } from "./operadores.dto";

@InputType()
export class OperadoresInput implements OperadoresDto {
   @Field(() => Int, { nullable: true })
   idOperadores?: number;

   @Field(() => String, { nullable: true })
   nome?: string;

   @Field(() => String, { nullable: true })
   senha?: string;
}