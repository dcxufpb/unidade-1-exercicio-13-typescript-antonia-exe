import { Loja } from './loja';
import { Endereco } from './endereco';
import { Venda } from './venda';


function verificaCampoObrigatorio(mensagemEsperada: string, loja: Loja) {
  try {
    loja.dados_loja();
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
  }
}
const NOME_LOJA = "Loja 1"
const LOGRADOURO = "Log 1"
const NUMERO = 10
const COMPLEMENTO = "C1"
const BAIRRO = "Bai 1"
const MUNICIPIO = "Mun 1"
const ESTADO = "E1"
const CEP = "11111-111"
const TELEFONE = "(11) 1111-1111"
const OBSERVACAO = "Obs 1"
const CNPJ = "11.111.111/1111-11"
const INSCRICAO_ESTADUAL = "123456789"

const TEXTO_ESPERADO_LOJA_COMPLETA: string = `Loja 1
Log 1, 10 C1
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_NUMERO: string = `Loja 1
Log 1, s/n C1
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_COMPLEMENTO: string = `Loja 1
Log 1, 10
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_BAIRRO: string = `Loja 1
Log 1, 10 C1
Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_CEP: string = `Loja 1
Log 1, 10 C1
Bai 1 - Mun 1 - E1
Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_TELEFONE: string = `Loja 1
Log 1, 10 C1
Bai 1 - Mun 1 - E1
CEP:11111-111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_OBSERVACAO: string = `Loja 1
Log 1, 10 C1
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111

CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_NUMERO_SEM_COMPLEMENTO: string = `Loja 1
Log 1, s/n
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_NUMERO_SEM_COMPLEMENTO_SEM_BAIRRO: string = `Loja 1
Log 1, s/n
Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;


test('Loja Completa', () => {
  let lojaCompleta: Loja = new Loja(NOME_LOJA, new Endereco(LOGRADOURO, NUMERO, COMPLEMENTO,
    BAIRRO, MUNICIPIO, ESTADO, CEP), TELEFONE, OBSERVACAO, CNPJ,
    INSCRICAO_ESTADUAL);
  expect(lojaCompleta.dados_loja()).toBe(TEXTO_ESPERADO_LOJA_COMPLETA);
});

test('Nome vazio', () => {
  let nomeVazio: Loja = new Loja("", new Endereco(LOGRADOURO, NUMERO, COMPLEMENTO, BAIRRO,
    MUNICIPIO, ESTADO, CEP), TELEFONE, OBSERVACAO, CNPJ, INSCRICAO_ESTADUAL);
  verificaCampoObrigatorio(`O campo nome da loja é obrigatório`, nomeVazio);
});

test('Logradouro vazio', () => {
  let logradouroVazio: Loja = new Loja(NOME_LOJA, new Endereco("", NUMERO, COMPLEMENTO,
    BAIRRO, MUNICIPIO, ESTADO, CEP), TELEFONE, OBSERVACAO, CNPJ,
    INSCRICAO_ESTADUAL);
  verificaCampoObrigatorio(`O campo logradouro do endereço é obrigatório`,
    logradouroVazio);
});

test('Número zero', () => {
  let numeroZero: Loja = new Loja(NOME_LOJA, new Endereco(LOGRADOURO, 0, COMPLEMENTO,
    BAIRRO, MUNICIPIO, ESTADO, CEP), TELEFONE, OBSERVACAO, CNPJ,
    INSCRICAO_ESTADUAL);
  expect(numeroZero.dados_loja()).toBe(TEXTO_ESPERADO_SEM_NUMERO);
});

test('Complemento vazio', () => {
  let complementoVazio: Loja = new Loja(NOME_LOJA, new Endereco(LOGRADOURO, NUMERO, "",
    BAIRRO, MUNICIPIO, ESTADO, CEP), TELEFONE, OBSERVACAO, CNPJ,
    INSCRICAO_ESTADUAL);
  expect(complementoVazio.dados_loja())
    .toBe(TEXTO_ESPERADO_SEM_COMPLEMENTO);
});

test('Bairro vazio', () => {
  let bairroVazio: Loja = new Loja(NOME_LOJA, new Endereco(LOGRADOURO, NUMERO, COMPLEMENTO,
    "", MUNICIPIO, ESTADO, CEP), TELEFONE, OBSERVACAO, CNPJ,
    INSCRICAO_ESTADUAL);
  expect(bairroVazio.dados_loja()).toBe(TEXTO_ESPERADO_SEM_BAIRRO);
});

test('Município vazio', () => {
  let municipioVazio: Loja = new Loja(NOME_LOJA, new Endereco(LOGRADOURO, NUMERO,
    COMPLEMENTO, BAIRRO, "", ESTADO, CEP), TELEFONE, OBSERVACAO, CNPJ,
    INSCRICAO_ESTADUAL);
  verificaCampoObrigatorio(`O campo município do endereço é obrigatório`,
    municipioVazio);
});

test('Estado vazio', () => {
  let estadoVazio: Loja = new Loja(NOME_LOJA, new Endereco(LOGRADOURO, NUMERO,
    COMPLEMENTO, BAIRRO, MUNICIPIO, "", CEP), TELEFONE, OBSERVACAO, CNPJ,
    INSCRICAO_ESTADUAL);
  verificaCampoObrigatorio(`O campo estado do endereço é obrigatório`,
    estadoVazio);
});

test('CEP vazio', () => {
  let cepVazio: Loja = new Loja(NOME_LOJA, new Endereco(LOGRADOURO, NUMERO,
    COMPLEMENTO, BAIRRO, MUNICIPIO, ESTADO, ""), TELEFONE, OBSERVACAO, CNPJ,
    INSCRICAO_ESTADUAL);
  expect(cepVazio.dados_loja()).toBe(TEXTO_ESPERADO_SEM_CEP);
});

test('Telefone vazio', () => {
  let telefoneVazio: Loja = new Loja(NOME_LOJA, new Endereco(LOGRADOURO, NUMERO,
    COMPLEMENTO, BAIRRO, MUNICIPIO, ESTADO, CEP), "", OBSERVACAO, CNPJ,
    INSCRICAO_ESTADUAL);
  expect(telefoneVazio.dados_loja()).toBe(TEXTO_ESPERADO_SEM_TELEFONE);
});

test('Observação vazia', () => {
  let observacaoVazia: Loja = new Loja(NOME_LOJA, new Endereco(LOGRADOURO, NUMERO,
    COMPLEMENTO, BAIRRO, MUNICIPIO, ESTADO, CEP), TELEFONE, "", CNPJ,
    INSCRICAO_ESTADUAL);
  expect(observacaoVazia.dados_loja())
    .toBe(TEXTO_ESPERADO_SEM_OBSERVACAO);
});

test('CNPJ vazio', () => {
  let cnpjVazio: Loja = new Loja(NOME_LOJA, new Endereco(LOGRADOURO, NUMERO,
    COMPLEMENTO, BAIRRO, MUNICIPIO, ESTADO, CEP), TELEFONE, OBSERVACAO, "",
    INSCRICAO_ESTADUAL);
  verificaCampoObrigatorio(`O campo CNPJ da loja é obrigatório`, cnpjVazio);
});

test('Inscrição estadual vazia', () => {
  let ieVazia: Loja = new Loja(NOME_LOJA, new Endereco(LOGRADOURO, NUMERO,
    COMPLEMENTO, BAIRRO, MUNICIPIO, ESTADO, CEP), TELEFONE, OBSERVACAO, CNPJ,
    "");
  verificaCampoObrigatorio(`O campo inscrição estadual da loja é obrigatório`,
    ieVazia);
});

test('Número zero e complemento vazio', () => {
  let numeroZeroComplementoVazio: Loja = new Loja(NOME_LOJA, new Endereco(LOGRADOURO, 0, "",
    BAIRRO, MUNICIPIO, ESTADO, CEP), TELEFONE, OBSERVACAO, CNPJ,
    INSCRICAO_ESTADUAL);
  expect(numeroZeroComplementoVazio.dados_loja())
    .toBe(TEXTO_ESPERADO_SEM_NUMERO_SEM_COMPLEMENTO);
});

test('Número zero, complemento e bairro vazios', () => {
  let numeroZeroComplementoVazioBairroVazio: Loja = new Loja(NOME_LOJA,
    new Endereco(LOGRADOURO, 0, "", "", MUNICIPIO, ESTADO, CEP), TELEFONE, OBSERVACAO, CNPJ,
    INSCRICAO_ESTADUAL);
  expect(numeroZeroComplementoVazioBairroVazio.dados_loja())
    .toBe(TEXTO_ESPERADO_SEM_NUMERO_SEM_COMPLEMENTO_SEM_BAIRRO);
});

test('Exercício 2 - customizado', () => {

  let nome_loja = "Magic Box";
  let logradouro = "Baker St";
  let numero = 221;
  let complemento = "EDA A24/25/26";
  let bairro = "Marylebone";
  let municipio = "Sunnydale";
  let estado = "CA";
  let cep = "79297";
  let telefone = "(213) 70374-7092";
  let observacao = "Loja TW (BTVS)";
  let cnpj = "98.650.809/0001-63";
  let inscricao_estadual = "55021852-1";

  let expected = "Magic Box\n";
  expected += "Baker St, 221 EDA A24/25/26\n";
  expected += "Marylebone - Sunnydale - CA\n";
  expected += "CEP:79297 Tel (213) 70374-7092\n";
  expected += "Loja TW (BTVS)\n";
  expected += "CNPJ: 98.650.809/0001-63\n";
  expected += "IE: 55021852-1\n";

  let endereco_customizado: Endereco = new Endereco(logradouro, numero,
    complemento, bairro, municipio, estado, cep);

  let loja_customizada: Loja = new Loja(nome_loja, endereco_customizado, telefone, observacao, cnpj,
    inscricao_estadual);

  expect(loja_customizada.dados_loja()).toBe(expected);
});
