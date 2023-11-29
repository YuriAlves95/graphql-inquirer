
import { Field, Int, Float, ObjectType } from "type-graphql";
import { EntidadesEntity } from "../../../entities/entidades.entity";

@ObjectType()
export class EntidadesDto implements EntidadesEntity {
   @Field(() => Int, { nullable: true })
   idEntidades?: number;

   @Field(() => Int, { nullable: true })
   idCidadescobranca?: number;

   @Field(() => Int, { nullable: true })
   idOperadores?: number;

   @Field(() => Int, { nullable: true })
   idCidades?: number;

   @Field(() => Int, { nullable: true })
   idRepresentantes?: number;

   @Field(() => Int, { nullable: true })
   codigo?: number;

   @Field(() => String, { nullable: true })
   nome?: string;

   @Field(() => String, { nullable: true })
   razaosocial?: string;

   @Field(() => String, { nullable: true })
   endereco?: string;

   @Field(() => String, { nullable: true })
   enderecocobranca?: string;

   @Field(() => String, { nullable: true })
   bairro?: string;

   @Field(() => String, { nullable: true })
   bairrocobranca?: string;

   @Field(() => String, { nullable: true })
   dtacadastro?: string;

   @Field(() => Int, { nullable: true })
   pessoa?: number;

   @Field(() => String, { nullable: true })
   cep?: string;

   @Field(() => String, { nullable: true })
   cepcobranca?: string;

   @Field(() => String, { nullable: true })
   cnpjcpf?: string;

   @Field(() => String, { nullable: true })
   ierg?: string;

   @Field(() => String, { nullable: true })
   telefone1?: string;

   @Field(() => String, { nullable: true })
   telefone2?: string;

   @Field(() => String, { nullable: true })
   telefone3?: string;

   @Field(() => Int, { nullable: true })
   cxpostal?: number;

   @Field(() => Int, { nullable: true })
   cxpostalcobranca?: number;

   @Field(() => String, { nullable: true })
   observacoes?: string;

   @Field(() => String, { nullable: true })
   internet?: string;

   @Field(() => String, { nullable: true })
   contato?: string;

   @Field(() => Int, { nullable: true })
   diapgto?: number;

   @Field(() => Float, { nullable: true })
   vlrmensalidade?: number;

   @Field(() => Float, { nullable: true })
   vlrrepresentante?: number;

   @Field(() => Boolean, { nullable: true })
   emitirboleto?: boolean;

   @Field(() => String, { nullable: true })
   dtacontrato?: string;

   @Field(() => String, { nullable: true })
   senha?: string;

   @Field(() => Boolean, { nullable: true })
   emitircomprovante?: boolean;

   @Field(() => String, { nullable: true })
   obsgeral?: string;

   @Field(() => String, { nullable: true })
   obstecnica?: string;

   @Field(() => Boolean, { nullable: true })
   pendencia?: boolean;

   @Field(() => Boolean, { nullable: true })
   bloqueado?: boolean;

   @Field(() => Boolean, { nullable: true })
   libadicional?: boolean;

   @Field(() => Int, { nullable: true })
   nrodias?: number;

   @Field(() => String, { nullable: true })
   autenticacao?: string;

   @Field(() => String, { nullable: true })
   categoria?: string;

   @Field(() => String, { nullable: true })
   dtaproxcobranca?: string;

   @Field(() => String, { nullable: true })
   dtaliberado?: string;

   @Field(() => String, { nullable: true })
   dtavcto?: string;

   @Field(() => Int, { nullable: true })
   nrori?: number;

   @Field(() => Boolean, { nullable: true })
   contratoassinado?: boolean;

   @Field(() => Boolean, { nullable: true })
   documentacao?: boolean;

   @Field(() => String, { nullable: true })
   dtaentregacontrato?: string;

   @Field(() => String, { nullable: true })
   dtaentregadocumentacao?: string;

   @Field(() => String, { nullable: true })
   dtaultimaalteracao?: string;

   @Field(() => Boolean, { nullable: true })
   matriz?: boolean;

   @Field(() => Int, { nullable: true })
   codmatriz?: number;

   @Field(() => Boolean, { nullable: true })
   tef?: boolean;

   @Field(() => Int, { nullable: true })
   idPlanodecontas?: number;

   @Field(() => Float, { nullable: true })
   vlrirrf?: number;

   @Field(() => String, { nullable: true })
   dtarescisao?: string;

   @Field(() => Boolean, { nullable: true })
   obrigatorioecf?: boolean;

   @Field(() => Boolean, { nullable: true })
   replicacao?: boolean;

   @Field(() => Boolean, { nullable: true })
   termoadesao?: boolean;

   @Field(() => Int, { nullable: true })
   clienteFornecedor?: number;

   @Field(() => String, { nullable: true })
   dtaultimoacessonet?: string;

   @Field(() => Int, { nullable: true })
   codalternativo?: number;

   @Field(() => Boolean, { nullable: true })
   ativo?: boolean;

   @Field(() => String, { nullable: true })
   dtacobranca?: string;

   @Field(() => Int, { nullable: true })
   codimportacao?: number;

   @Field(() => String, { nullable: true })
   dtacomodata?: string;

   @Field(() => String, { nullable: true })
   dtalimitecontrato?: string;

   @Field(() => String, { nullable: true })
   rowguid?: string;

   @Field(() => Boolean, { nullable: true })
   trr?: boolean;

   @Field(() => Int, { nullable: true })
   tipocliente?: number;

   @Field(() => Int, { nullable: true })
   idContasbancarias?: number;

   @Field(() => Int, { nullable: true })
   numero?: number;

   @Field(() => Int, { nullable: true })
   numerocobranca?: number;

   @Field(() => String, { nullable: true })
   dtaentregacomodato?: string;

   @Field(() => Boolean, { nullable: true })
   comodatoassinado?: boolean;

   @Field(() => String, { nullable: true })
   dtaentradatermoadesao?: string;

   @Field(() => Boolean, { nullable: true })
   carne?: boolean;

   @Field(() => Int, { nullable: true })
   tipodespesa?: number;

   @Field(() => String, { nullable: true })
   datavctocarne?: string;

   @Field(() => Float, { nullable: true })
   percvendasfornecedores?: number;

   @Field(() => Float, { nullable: true })
   percmensalidadefornecedores?: number;

   @Field(() => Float, { nullable: true })
   vlrcomissaofornecedor?: number;

   @Field(() => Int, { nullable: true })
   codpais?: number;

   @Field(() => String, { nullable: true })
   nomepais?: string;

   @Field(() => String, { nullable: true })
   ufembarque?: string;

   @Field(() => String, { nullable: true })
   locembarque?: string;

   @Field(() => String, { nullable: true })
   instancia?: string;

   @Field(() => String, { nullable: true })
   serialpc?: string;

   @Field(() => Boolean, { nullable: true })
   prorrogado?: boolean;

   @Field(() => Boolean, { nullable: true })
   enviaremail?: boolean;

   @Field(() => Boolean, { nullable: true })
   serasa?: boolean;

   @Field(() => Int, { nullable: true })
   tipocontabil?: number;

   @Field(() => Int, { nullable: true })
   categoriarescisao?: number;

   @Field(() => Boolean, { nullable: true })
   xpid?: boolean;

   @Field(() => Int, { nullable: true })
   idGrupoeconomico?: number;

   @Field(() => Boolean, { nullable: true })
   nfse?: boolean;

   @Field(() => Int, { nullable: true })
   statusri?: number;

   @Field(() => String, { nullable: true })
   complemento?: string;

   @Field(() => String, { nullable: true })
   complementocob?: string;

   @Field(() => Int, { nullable: true })
   tipocartao?: number;

   @Field(() => String, { nullable: true })
   datarep?: string;

   @Field(() => Boolean, { nullable: true })
   cadastroprovisorio?: boolean;

   @Field(() => String, { nullable: true })
   localdespacho?: string;

   @Field(() => Boolean, { nullable: true })
   comissaodistribuidor?: boolean;

   @Field(() => String, { nullable: true })
   motivorescisao2?: string;

   @Field(() => String, { nullable: true })
   motivorescisao?: string;

   @Field(() => Boolean, { nullable: true })
   clienteperdido?: boolean;

   @Field(() => Boolean, { nullable: true })
   seal?: boolean;

   @Field(() => Int, { nullable: true })
   tipoContribuinte?: number;

   @Field(() => Int, { nullable: true })
   consumidorFinal?: number;

   @Field(() => Float, { nullable: true })
   lat?: number;

   @Field(() => Float, { nullable: true })
   lng?: number;

   @Field(() => String, { nullable: true })
   vctomensalidade?: string;

   @Field(() => String, { nullable: true })
   obsfinanceiro?: string;

   @Field(() => String, { nullable: true })
   internet2?: string;

   @Field(() => String, { nullable: true })
   motivonaoaddfilial?: string;

   @Field(() => Boolean, { nullable: true })
   localabastecimento?: boolean;

   @Field(() => Int, { nullable: true })
   qtdecaminhoes?: number;

   @Field(() => Boolean, { nullable: true })
   atualizar?: boolean;

   @Field(() => String, { nullable: true })
   nomecontabilidade?: string;

   @Field(() => String, { nullable: true })
   fonecontabilidade?: string;

   @Field(() => Boolean, { nullable: true })
   produtorrural?: boolean;

   @Field(() => String, { nullable: true })
   propostacomercial?: string;

   @Field(() => Int, { nullable: true })
   idDistribadicional?: number;

   @Field(() => Float, { nullable: true })
   comissaoadicional?: number;

   @Field(() => Int, { nullable: true })
   idEntidadesposto?: number;

   @Field(() => Int, { nullable: true })
   idEntidadesconveniencia?: number;

   @Field(() => Boolean, { nullable: true })
   semliberacaochave?: boolean;

   @Field(() => Boolean, { nullable: true })
   converterdolar?: boolean;

   @Field(() => String, { nullable: true })
   ibm?: string;

   @Field(() => Boolean, { nullable: true })
   alterardatareajuste?: boolean;

   @Field(() => Boolean, { nullable: true })
   destacarfiliais?: boolean;

   @Field(() => Boolean, { nullable: true })
   removecontaspagar?: boolean;

   @Field(() => Boolean, { nullable: true })
   cobrancaunificada?: boolean;

   //campo totalizador. Este não existe na tabela de entidades
   //criado para ser valorizado em consultas com o query builder
   @Field(() => Float, { nullable: true })
   totSistemas?: number;

}