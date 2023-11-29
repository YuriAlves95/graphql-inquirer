
import { Field, Int, Float, ObjectType } from "type-graphql";
import { CidadesEntity } from "../../../entities/cidades.entity";

@ObjectType()
export class CidadesDto implements CidadesEntity {
   @Field(() => Int, { nullable: true })
   idCidades?: number;

   @Field(() => String, { nullable: true })
   nome?: string;

   @Field(() => String, { nullable: true })
   estado?: string;

   @Field(() => Boolean, { nullable: true })
   ativo?: boolean;

   @Field(() => Int, { nullable: true })
   codimportacao?: number;

   @Field(() => String, { nullable: true })
   rowguid?: string;

   @Field(() => String, { nullable: true })
   codalternativo?: string;

   @Field(() => String, { nullable: true })
   datarep?: string;

   @Field(() => String, { nullable: true })
   dataultimarep?: string;

   @Field(() => Float, { nullable: true })
   latitude?: number;

   @Field(() => Float, { nullable: true })
   longitude?: number;

   @Field(() => Int, { nullable: true })
   idMicrorregiao?: number;

   @Field(() => Int, { nullable: true })
   nroanp?: number;

   @Field(() => Int, { nullable: true })
   nroclientes?: number;

}