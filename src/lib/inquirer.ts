import inquirer from 'inquirer';

export class inquirerQuestions {
  async confirmarGeracao() {
    const questions = [
      {
        name: 'confirm',
        type: 'confirm',
        message: 'Gerar novo recurso?',
        validate: function (value: any) {
           return true;
        },
      },
    ];
    return inquirer.prompt(questions);
  }

  async perguntaDadosTabela() {
    const questions = [
      {
        name: 'table',
        type: 'input',
        message: '  Qual o nome da tabela a ser gerada:',
        filter: function (val: string) {
          return val.toUpperCase();
        },
        validate: function (value: string | any[]) {
          if (value.length) {
            return true;
          } else {
            return '  Favor informar o nome da tabela a ser gerada.';
          }
        },
      },      
      {
        name: 'id',
        type: 'input',
        message: `  Qual o nome do campo ID:`,
        filter: function (val: string) {
          return val.toUpperCase();
        },
        default: (answers: { table: any; }) => `ID_${answers.table}`,
        validate: function (value: any) {
          return true;
        },
      },    
      {
        name: 'confirmPaginacao',
        type: 'confirm',
        message: '  Gerar consulta paginada para esta tabela?',
        validate: function (value: any) {
           return true;
        },
      },
    ];
    
    return inquirer.prompt(questions);
  };

  async confirmarRelacao(fieldName: string) {
    const questions = [
      {
        name: 'confirmRelacao',
        type: 'confirm',
        message: `    Deseja gerar a relação para o campo ${fieldName}?`,
        validate: function (value: any) {
           return true;
        },
      },
    ];
    return inquirer.prompt(questions);
  } 

  async perguntaDadosRelacao(tableSugestion: string) {
    const questions = [      
      {
        name: 'table',
        type: 'input',
        message: '        Informe o nome da Tabela a ser relacionada:',
        filter: function (val: string) {
          return val.toUpperCase();
        },
        default: tableSugestion,
        validate: function (value: string | any[]) {
          if (value.length) {
            return true;
          } else {
            return '        Favor informar o nome da Tabela a ser relacionada:';
          }
        },
      },          
      {
        name: 'idField',
        type: 'input',
        message: `        Qual o ID da tabela relacionada:`,
        filter: function (val: string) {
          return val.toUpperCase();
        },
        default: (answers: { table: any; }) => `ID_${answers.table}`,
        validate: function (value: any) {
          return true;
        },
      },        
    ];
    
    return inquirer.prompt(questions);
  }; 
} 