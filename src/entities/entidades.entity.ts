
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ENTIDADES')
export class EntidadesEntity {
   @PrimaryGeneratedColumn({ name: 'ID_ENTIDADES' })
   idEntidades?: number;

   @Column({ name: 'ID_CIDADESCOBRANCA', nullable: true })
   idCidadescobranca?: number;

   @Column({ name: 'ID_OPERADORES', nullable: true })
   idOperadores?: number;

   @Column({ name: 'ID_CIDADES', nullable: true })
   idCidades?: number;

   @Column({ name: 'ID_REPRESENTANTES', nullable: true })
   idRepresentantes?: number;

   @Column({ name: 'CODIGO', nullable: true })
   codigo?: number;

   @Column({ name: 'NOME', nullable: true })
   nome?: string;

   @Column({ name: 'RAZAOSOCIAL', nullable: true })
   razaosocial?: string;

   @Column({ name: 'ENDERECO', nullable: true })
   endereco?: string;

   @Column({ name: 'ENDERECOCOBRANCA', nullable: true })
   enderecocobranca?: string;

   @Column({ name: 'BAIRRO', nullable: true })
   bairro?: string;

   @Column({ name: 'BAIRROCOBRANCA', nullable: true })
   bairrocobranca?: string;

   @Column({ name: 'DTACADASTRO', nullable: true })
   dtacadastro?: string;

   @Column({ name: 'PESSOA', nullable: true })
   pessoa?: number;

   @Column({ name: 'CEP', nullable: true })
   cep?: string;

   @Column({ name: 'CEPCOBRANCA', nullable: true })
   cepcobranca?: string;

   @Column({ name: 'CNPJCPF', nullable: true })
   cnpjcpf?: string;

   @Column({ name: 'IERG', nullable: true })
   ierg?: string;

   @Column({ name: 'TELEFONE1', nullable: true })
   telefone1?: string;

   @Column({ name: 'TELEFONE2', nullable: true })
   telefone2?: string;

   @Column({ name: 'TELEFONE3', nullable: true })
   telefone3?: string;

   @Column({ name: 'CXPOSTAL', nullable: true })
   cxpostal?: number;

   @Column({ name: 'CXPOSTALCOBRANCA', nullable: true })
   cxpostalcobranca?: number;

   @Column({ name: 'OBSERVACOES', nullable: true })
   observacoes?: string;

   @Column({ name: 'INTERNET', nullable: true })
   internet?: string;

   @Column({ name: 'CONTATO', nullable: true })
   contato?: string;

   @Column({ name: 'DIAPGTO', nullable: true })
   diapgto?: number;

   @Column({ name: 'VLRMENSALIDADE', nullable: true })
   vlrmensalidade?: number;

   @Column({ name: 'VLRREPRESENTANTE', nullable: true })
   vlrrepresentante?: number;

   @Column({ name: 'EMITIRBOLETO', nullable: true })
   emitirboleto?: boolean;

   @Column({ name: 'DTACONTRATO', nullable: true })
   dtacontrato?: string;

   @Column({ name: 'SENHA', nullable: true })
   senha?: string;

   @Column({ name: 'EMITIRCOMPROVANTE', nullable: true })
   emitircomprovante?: boolean;

   @Column({ name: 'OBSGERAL', nullable: true })
   obsgeral?: string;

   @Column({ name: 'OBSTECNICA', nullable: true })
   obstecnica?: string;

   @Column({ name: 'PENDENCIA', nullable: true })
   pendencia?: boolean;

   @Column({ name: 'BLOQUEADO', nullable: true })
   bloqueado?: boolean;

   @Column({ name: 'LIBADICIONAL', nullable: true })
   libadicional?: boolean;

   @Column({ name: 'NRODIAS', nullable: true })
   nrodias?: number;

   @Column({ name: 'AUTENTICACAO', nullable: true })
   autenticacao?: string;

   @Column({ name: 'CATEGORIA', nullable: true })
   categoria?: string;

   @Column({ name: 'DTAPROXCOBRANCA', nullable: true })
   dtaproxcobranca?: string;

   @Column({ name: 'DTALIBERADO', nullable: true })
   dtaliberado?: string;

   @Column({ name: 'DTAVCTO', nullable: true })
   dtavcto?: string;

   @Column({ name: 'NRORI', nullable: true })
   nrori?: number;

   @Column({ name: 'CONTRATOASSINADO', nullable: true })
   contratoassinado?: boolean;

   @Column({ name: 'DOCUMENTACAO', nullable: true })
   documentacao?: boolean;

   @Column({ name: 'DTAENTREGACONTRATO', nullable: true })
   dtaentregacontrato?: string;

   @Column({ name: 'DTAENTREGADOCUMENTACAO', nullable: true })
   dtaentregadocumentacao?: string;

   @Column({ name: 'DTAULTIMAALTERACAO', nullable: true })
   dtaultimaalteracao?: string;

   @Column({ name: 'MATRIZ', nullable: true })
   matriz?: boolean;

   @Column({ name: 'CODMATRIZ', nullable: true })
   codmatriz?: number;

   @Column({ name: 'TEF', nullable: true })
   tef?: boolean;

   @Column({ name: 'ID_PLANODECONTAS', nullable: true })
   idPlanodecontas?: number;

   @Column({ name: 'VLRIRRF', nullable: true })
   vlrirrf?: number;

   @Column({ name: 'DTARESCISAO', nullable: true })
   dtarescisao?: string;

   @Column({ name: 'OBRIGATORIOECF', nullable: true })
   obrigatorioecf?: boolean;

   @Column({ name: 'REPLICACAO', nullable: true })
   replicacao?: boolean;

   @Column({ name: 'TERMOADESAO', nullable: true })
   termoadesao?: boolean;

   @Column({ name: 'CLIENTE_FORNECEDOR', nullable: true })
   clienteFornecedor?: number;

   @Column({ name: 'DTAULTIMOACESSONET', nullable: true })
   dtaultimoacessonet?: string;

   @Column({ name: 'CODALTERNATIVO', nullable: true })
   codalternativo?: number;

   @Column({ name: 'ATIVO', nullable: true })
   ativo?: boolean;

   @Column({ name: 'DTACOBRANCA', nullable: true })
   dtacobranca?: string;

   @Column({ name: 'CODIMPORTACAO', nullable: true })
   codimportacao?: number;

   @Column({ name: 'DTACOMODATA', nullable: true })
   dtacomodata?: string;

   @Column({ name: 'DTALIMITECONTRATO', nullable: true })
   dtalimitecontrato?: string;

   @Column({ name: 'rowguid', nullable: true })
   rowguid?: string;

   @Column({ name: 'TRR', nullable: true })
   trr?: boolean;

   @Column({ name: 'TIPOCLIENTE', nullable: true })
   tipocliente?: number;

   @Column({ name: 'ID_CONTASBANCARIAS', nullable: true })
   idContasbancarias?: number;

   @Column({ name: 'NUMERO', nullable: true })
   numero?: number;

   @Column({ name: 'NUMEROCOBRANCA', nullable: true })
   numerocobranca?: number;

   @Column({ name: 'DTAENTREGACOMODATO', nullable: true })
   dtaentregacomodato?: string;

   @Column({ name: 'COMODATOASSINADO', nullable: true })
   comodatoassinado?: boolean;

   @Column({ name: 'DTAENTRADATERMOADESAO', nullable: true })
   dtaentradatermoadesao?: string;

   @Column({ name: 'CARNE', nullable: true })
   carne?: boolean;

   @Column({ name: 'TIPODESPESA', nullable: true })
   tipodespesa?: number;

   @Column({ name: 'DATAVCTOCARNE', nullable: true })
   datavctocarne?: string;

   @Column({ name: 'PERCVENDASFORNECEDORES', nullable: true })
   percvendasfornecedores?: number;

   @Column({ name: 'PERCMENSALIDADEFORNECEDORES', nullable: true })
   percmensalidadefornecedores?: number;

   @Column({ name: 'VLRCOMISSAOFORNECEDOR', nullable: true })
   vlrcomissaofornecedor?: number;

   @Column({ name: 'CODPAIS', nullable: true })
   codpais?: number;

   @Column({ name: 'NOMEPAIS', nullable: true })
   nomepais?: string;

   @Column({ name: 'UFEMBARQUE', nullable: true })
   ufembarque?: string;

   @Column({ name: 'LOCEMBARQUE', nullable: true })
   locembarque?: string;

   @Column({ name: 'INSTANCIA', nullable: true })
   instancia?: string;

   @Column({ name: 'SERIALPC', nullable: true })
   serialpc?: string;

   @Column({ name: 'PRORROGADO', nullable: true })
   prorrogado?: boolean;

   @Column({ name: 'ENVIAREMAIL', nullable: true })
   enviaremail?: boolean;

   @Column({ name: 'SERASA', nullable: true })
   serasa?: boolean;

   @Column({ name: 'TIPOCONTABIL', nullable: true })
   tipocontabil?: number;

   @Column({ name: 'CATEGORIARESCISAO', nullable: true })
   categoriarescisao?: number;

   @Column({ name: 'XPID', nullable: true })
   xpid?: boolean;

   @Column({ name: 'ID_GRUPOECONOMICO', nullable: true })
   idGrupoeconomico?: number;

   @Column({ name: 'NFSE', nullable: true })
   nfse?: boolean;

   @Column({ name: 'STATUSRI', nullable: true })
   statusri?: number;

   @Column({ name: 'COMPLEMENTO', nullable: true })
   complemento?: string;

   @Column({ name: 'COMPLEMENTOCOB', nullable: true })
   complementocob?: string;

   @Column({ name: 'TIPOCARTAO', nullable: true })
   tipocartao?: number;

   @Column({ name: 'DATAREP', nullable: true })
   datarep?: string;

   @Column({ name: 'CADASTROPROVISORIO', nullable: true })
   cadastroprovisorio?: boolean;

   @Column({ name: 'LOCALDESPACHO', nullable: true })
   localdespacho?: string;

   @Column({ name: 'COMISSAODISTRIBUIDOR', nullable: true })
   comissaodistribuidor?: boolean;

   @Column({ name: 'MOTIVORESCISAO2', nullable: true })
   motivorescisao2?: string;

   @Column({ name: 'MOTIVORESCISAO', nullable: true })
   motivorescisao?: string;

   @Column({ name: 'CLIENTEPERDIDO', nullable: true })
   clienteperdido?: boolean;

   @Column({ name: 'SEAL', nullable: true })
   seal?: boolean;

   @Column({ name: 'TIPO_CONTRIBUINTE', nullable: true })
   tipoContribuinte?: number;

   @Column({ name: 'CONSUMIDOR_FINAL', nullable: true })
   consumidorFinal?: number;

   @Column({ name: 'lat', nullable: true })
   lat?: number;

   @Column({ name: 'lng', nullable: true })
   lng?: number;

   @Column({ name: 'VCTOMENSALIDADE', nullable: true })
   vctomensalidade?: string;

   @Column({ name: 'OBSFINANCEIRO', nullable: true })
   obsfinanceiro?: string;

   @Column({ name: 'INTERNET2', nullable: true })
   internet2?: string;

   @Column({ name: 'MOTIVONAOADDFILIAL', nullable: true })
   motivonaoaddfilial?: string;

   @Column({ name: 'LOCALABASTECIMENTO', nullable: true })
   localabastecimento?: boolean;

   @Column({ name: 'QTDECAMINHOES', nullable: true })
   qtdecaminhoes?: number;

   @Column({ name: 'ATUALIZAR', nullable: true })
   atualizar?: boolean;

   @Column({ name: 'NOMECONTABILIDADE', nullable: true })
   nomecontabilidade?: string;

   @Column({ name: 'FONECONTABILIDADE', nullable: true })
   fonecontabilidade?: string;

   @Column({ name: 'PRODUTORRURAL', nullable: true })
   produtorrural?: boolean;

   @Column({ name: 'PROPOSTACOMERCIAL', nullable: true })
   propostacomercial?: string;

   @Column({ name: 'ID_DISTRIBADICIONAL', nullable: true })
   idDistribadicional?: number;

   @Column({ name: 'COMISSAOADICIONAL', nullable: true })
   comissaoadicional?: number;

   @Column({ name: 'ID_ENTIDADESPOSTO', nullable: true })
   idEntidadesposto?: number;

   @Column({ name: 'ID_ENTIDADESCONVENIENCIA', nullable: true })
   idEntidadesconveniencia?: number;

   @Column({ name: 'SEMLIBERACAOCHAVE', nullable: true })
   semliberacaochave?: boolean;

   @Column({ name: 'CONVERTERDOLAR', nullable: true })
   converterdolar?: boolean;

   @Column({ name: 'IBM', nullable: true })
   ibm?: string;

   @Column({ name: 'ALTERARDATAREAJUSTE', nullable: true })
   alterardatareajuste?: boolean;

   @Column({ name: 'DESTACARFILIAIS', nullable: true })
   destacarfiliais?: boolean;

   @Column({ name: 'REMOVECONTASPAGAR', nullable: true })
   removecontaspagar?: boolean;

   @Column({ name: 'COBRANCAUNIFICADA', nullable: true })
   cobrancaunificada?: boolean;

   repl?: boolean;
}