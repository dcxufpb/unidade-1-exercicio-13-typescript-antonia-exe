import { isEmpty } from "./loja"

export class Endereco {

    constructor(public logradouro: string, public numero: number, public complemento: string,
        public bairro: string, public municipio: string, public estado: string, public cep: string) { }
    
    public validacao_endereco(){
        if(isEmpty(this.logradouro)){
            throw new Error(`O campo logradouro do endereço é obrigatório`);
        }
        if(isEmpty(this.municipio)){
            throw new Error(`O campo município do endereço é obrigatório`);
        }
        if(isEmpty(this.estado)){
            throw new Error(`O campo estado do endereço é obrigatório`);
        }

    }
    
    public endereco_info(){
        this.validacao_endereco()
        let numero1 : string
        if(this.numero <= 0){
            numero1 = "s/n"
        }
        else{
            numero1 = this.numero.toString()
        }

        var linha2 = `${this.logradouro}, ${numero1}`;
        if (! isEmpty (this.complemento)){
            linha2 += ` ${this.complemento}`;
        }
        var linha3 = "";
        if (! isEmpty (this.bairro)){
            linha3 += `${this.bairro} - `;
        }
        linha3 += `${this.municipio} - ${this.estado}`;
        
        var linha4 = "";
        if (! isEmpty (this.cep)){
            linha4 = `CEP:${this.cep}`;
        }

        let enderecoP = `${linha2}\n`
        enderecoP += `${linha3}\n`
        enderecoP += `${linha4}`
        return enderecoP
    }

}