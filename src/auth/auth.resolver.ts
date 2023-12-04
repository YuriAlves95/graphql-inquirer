import { Arg, Mutation, Query, Resolver } from "type-graphql";
import AuthConfig from "../config/auth";
import { sign } from "jsonwebtoken";
import { AuthDto } from "./models/auth.dto";
import { OperadoresService } from "../modules/operadores/operadores.service";

@Resolver(() => AuthDto)
export class AuthResolver {
  private readonly operadoresService = new OperadoresService();

  @Query(() => AuthDto)
  async login(
    @Arg("nome") nome: string,
    @Arg("password") password: string,
  ) {
    const login = await this.operadoresService.getLogin(nome, password);   
   
    if (!login) {
      throw new Error('Dados de login incorretos!');
    }

    const { secret, expiresIn } = AuthConfig.jwt;

    const token = sign({}, secret, {subject: `${login}`, expiresIn});

    return {
      token,
      user: login
    }
  }
}