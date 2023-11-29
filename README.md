
## graphQL-backend

Projeto base para criação de backend's com graphql. base de dados SQL-server.
neste projeto os resources são gerados automaticamente da base de dados, considerando os
inputs do usuário em uma CLI criada utilizando o inquirer.

### Principais bibliotecas utilizadas

| Biblioteca | Docs |
| ------ | ------ |
| TypeORM | https://typeorm.io/ |
| GraphQL | https://graphql.org/learn/ |
| Fastify | https://fastify.dev/docs/latest/Guides/Getting-Started |
| Apollo Server | https://www.apollographql.com/docs/apollo-server/getting-started |

### Inicialização

NODE_VERSION: 18.x

Primeiramente realize a instalação dos pacotes
```bash
  yarn install
```
Caso seja necessária a remoção da node_modules (deep deletion) e reinstalação dos pacotes
```bash
  yarn reinstall
```
Para gerar um novo recurso utilize (este comando iniciará uma CLI, que deverá gerar uma estrutura pronta para ser consumida)
```bash
  yarn gen
```
Para rodar a API direto sem a criação de resources utilize
```bash
  yarn dev
```
### Exemplos de consultas com TypeOrm
🔹 método do service utilizando parametros de filtragem dinâmica
```bash   
  async getAll(filter: EntidadesInput): Promise<EntidadesDto[]>{
      return await this.entidadesRepository.find({where: filter})
   }   
```
🔹 resolver consumindo o método acima
```bash 
  @Query(() => [EntidadesDto], { name: 'entidadesAll', nullable: 'items' })
   async getAll(@Arg('filter', { nullable: true }) filter: EntidadesInput): Promise<EntidadesDto[]> {
      return await this.entidadesService.getAll(filter);
   }  
```

### Exemplos de utilização de referencias

🔹 cria referencia da tabela cidades com a tabela entidades.id_cidades. **(1 para 1)**
```bash   
  @FieldResolver(() => CidadesDto, { nullable: true })
    async cidades(@Root() reference: EntidadesDto){
        return await this.cidadesService.getOne(reference.idCidades || 0)
   }  
```
🔹 cria referencia da tabela entidades com a tabela sistemasclientes.id_entidades. **(1 para N)**
```bash 
  @FieldResolver(() => [SistemasclientesDto], { nullable: true })
    async sistemasCliente(@Root() reference: EntidadesDto){
        return await this.sistemasClientesService.getAll({idEntidades: reference.idEntidades})
   }
```

### Exemplo utilizando o QueryBuilder
🔹 realiza uma consulta criando um novo campo **TOTSISTEMAS** este campo deverá também ser criado no EndidadeDto
```bash
  async getTotSis(args: EntidadesInput): Promise<EntidadesDto[]>{
      const qry = await this.entidadesRepository.createQueryBuilder('ENT')
      .select('ENT.ID_ENTIDADES, ENT.NOME, ENT.CNPJCPF, SUM(SISCLI.VALOR) AS TOTSISTEMAS')      
      .leftJoin('SISTEMASCLIENTES', 'SISCLI', 'ENT.ID_ENTIDADES = SISCLI.ID_ENTIDADES') 
      .groupBy('ENT.ID_ENTIDADES, ENT.NOME, ENT.CNPJCPF')  
      .getRawMany();      

      return qry.map(result => {
         const entidadeDto = new EntidadesDto();
         entidadeDto.idEntidades = result.ID_ENTIDADES;
         entidadeDto.nome = result.NOME;
         entidadeDto.cnpjcpf = result.CNPJCPF;
         entidadeDto.totSistemas = parseFloat(Number(result.TOTSISTEMAS || 0).toFixed(2));
         return entidadeDto;
      });
   }
```


### Testes PlayGround

Informar no campo **sandbox** do [Apollo Studio](https://studio.apollographql.com/sandbox/explorer) o endereço **localhost:3000/graphql**.

esta plataforma permite realizar os testes de forma facilitada além de gerar toda a documentação da api.

![sandbox](https://img.shields.io/badge/done-blue)
