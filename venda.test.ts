import { Loja } from "./loja";
import { Venda } from "./venda";
import { Endereco } from "./endereco";

function verificaCampoObrigatorio(
	mensagemEsperada: string,
	departamento: Venda
) {
	let mensagemErro;
	try {
		departamento.dados_vendas();
	} catch (e) {
		mensagemErro = e.message;
	}
	expect(mensagemErro).toBe(mensagemEsperada);
}

function verificaCampoObrigatorioVenda(mensagemEsperada: string, venda: Venda) {
	try {
		venda.dados_vendas();
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

let loja_completa = new Loja(NOME_LOJA, new Endereco(LOGRADOURO, NUMERO, COMPLEMENTO, BAIRRO, MUNICIPIO, ESTADO, CEP), TELEFONE, OBSERVACAO, CNPJ, INSCRICAO_ESTADUAL)
let datahora = new Date(2020, 10, 29, 18, 5, 43)
let ccf = "1234"
let coo = "123456"
let COO_VALIDACAO = new Venda(loja_completa, datahora, ccf, "")
let CCF_VALIDACAO = new Venda(loja_completa, datahora, "", coo)

test("validação de coo", () => {
	verificaCampoObrigatorioVenda("O campo de coo é obrigatório", COO_VALIDACAO)
})

test("validação de ccf", () => {
	verificaCampoObrigatorioVenda("O campo de ccf é obrigatório", CCF_VALIDACAO)
})
