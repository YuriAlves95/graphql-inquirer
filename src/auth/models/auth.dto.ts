import {Field, Int, ObjectType} from "type-graphql";
import { OperadoresDto } from "../../modules/operadores/models/operadores.dto";

interface IAuth {
  token: string;
  user: OperadoresDto;
}

@ObjectType()
export class AuthDto implements IAuth {

  @Field({ nullable: false })
  token: string;

  @Field(() => OperadoresDto, { nullable: false })
  user: OperadoresDto;
}