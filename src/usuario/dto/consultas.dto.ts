export class listaUsuarioDTO{
    constructor (
        readonly id: string,
        readonly nome: string,
        readonly cidade: string,
        readonly email: string
    ){}
}