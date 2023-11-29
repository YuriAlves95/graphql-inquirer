
import { Field, Int, Float, ObjectType } from "type-graphql";
import { SistemasEntity } from "../../../entities/sistemas.entity";

@ObjectType()
export class SistemasDto implements SistemasEntity {
   @Field(() => Int, { nullable: true })
   idSistemas?: number;

   @Field(() => String, { nullable: true })
   descricao?: string;

   @Field(() => Boolean, { nullable: true })
   ativo?: boolean;

   @Field(() => String, { nullable: true })
   rowguid?: string;

   @Field(() => Int, { nullable: true })
   idProdutos?: number;

   @Field(() => Boolean, { nullable: true })
   internet?: boolean;

   @Field(() => Boolean, { nullable: true })
   alteracao?: boolean;

   @Field(() => Boolean, { nullable: true })
   manutencoes?: boolean;

   @Field(() => Float, { nullable: true })
   vlrminimocc?: number;

   @Field(() => Float, { nullable: true })
   vlrminimosc?: number;

   @Field(() => Boolean, { nullable: true })
   certificadoiso?: boolean;

   @Field(() => Int, { nullable: true })
   codimportacao?: number;

}