import { Controller, Post } from "@nestjs/common";

Controller ('/usuarios')
export class UsuarioController {
    @Post ()
    async criarUsuario(){
        return 'Usuário Criado'
    }
}