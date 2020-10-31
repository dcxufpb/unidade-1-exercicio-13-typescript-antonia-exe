export class ItemVenda{
    constructor(
        public item : number,
        public codigo:number, 
        public descricao: string, 
        public quantidade: number, 
        public unidade: string, 
        public valor_unitario: number, 
        public substituicao_tributaria: string){}

    total(){
        return this.quantidade*this.valor_unitario

    }
}