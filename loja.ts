import { Endereco } from "./endereco";

export function isEmpty(str: string): boolean {
    let spaceCount = str.length - str.replace(" ", "").length;
    return str == null || spaceCount == str.length;
  }

export class Loja {

    constructor(public nome_loja: string, public endereco: Endereco,
        public telefone: string, public observacao: string, public cnpj: string, public inscricao_estadual: string) { }

    
    public validacao_loja(){
        if (isEmpty(this.nome_loja)) {
            throw new Error(`O campo nome da loja é obrigatório`);
        } 
        if (isEmpty(this.cnpj)) {
            throw new Error(`O campo CNPJ da loja é obrigatório`);
        }
        if (isEmpty(this.inscricao_estadual)) {
            throw new Error(`O campo inscrição estadual da loja é obrigatório`);
        }
    }

    public dados_loja(): string {
        
        this.validacao_loja();

        let linha4 = this.endereco.endereco_info()

        if (! isEmpty(this.telefone)){
            if (! isEmpty(this.endereco.cep)){
                linha4 += ` `;
            }
        linha4 += `Tel ${this.telefone}`;
        }
        if (! isEmpty(linha4)){
            linha4 += `\n`;
        }

        var linha5 = "";
        if (! isEmpty(this.observacao)){
            linha5 += `${this.observacao}`;
        }

        let lojaP = `${this.nome_loja}\n`;
        lojaP += `${linha4}`;
        lojaP += `${linha5}\n`;
        lojaP += `CNPJ: ${this.cnpj}\n`;
        lojaP += `IE: ${this.inscricao_estadual}\n`;

        return lojaP;
    }
}