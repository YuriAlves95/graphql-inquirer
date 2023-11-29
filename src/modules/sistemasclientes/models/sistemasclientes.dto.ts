
import { Field, Int, Float, ObjectType } from "type-graphql";
import { SistemasclientesEntity } from "../../../entities/sistemasclientes.entity";

@ObjectType()
export class SistemasclientesDto implements SistemasclientesEntity {
   @Field(() => Int, { nullable: true })
   idSistemasclientes?: number;

   @Field(() => Int, { nullable: true })
   idEntidades?: number;

   @Field(() => Int, { nullable: true })
   idSistemas?: number;

   @Field(() => Float, { nullable: true })
   valor?: number;

   @Field(() => Float, { nullable: true })
   vlrrepresentante?: number;

   @Field(() => String, { nullable: true })
   mac?: string;

   @Field(() => Int, { nullable: true })
   idPlanosistemas?: number;

   @Field(() => String, { nullable: true })
   dtacobranca?: string;

   @Field(() => String, { nullable: true })
   dtaprorrogacao?: string;

   @Field(() => String, { nullable: true })
   dtacontrato?: string;

   @Field(() => Boolean, { nullable: true })
   ativo?: boolean;

   @Field(() => String, { nullable: true })
   dtaproxcobranca?: string;

   @Field(() => String, { nullable: true })
   dtadevolucaocontrato?: string;

   @Field(() => String, { nullable: true })
   datarep?: string;

   @Field(() => String, { nullable: true })
   dataultimarep?: string;

   @Field(() => String, { nullable: true })
   dtareajuste?: string;

   @Field(() => Int, { nullable: true })
   idProdutos?: number;

   @Field(() => String, { nullable: true })
   datalicencamobile?: string;

}