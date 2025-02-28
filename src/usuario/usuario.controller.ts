import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuariosArmazenados } from "./usuario.dm";
import { UsuarioEntity } from "./usuario.entity";
import { criarUsuarioDTO } from "./dto/usuario.dto";

import {v4 as uuid} from 'uuid';
import { listaUsuarioDTO } from "./dto/consultas.dto";

@Controller('/usuarios')

export class UsuarioController {

    constructor(private clsUsuariosArmazenados: UsuariosArmazenados) {}
    @Post()

    async criaUsuario(@Body() dadosUsuario: criarUsuarioDTO) {
        
        var novoUsuario = new UsuarioEntity(uuid(), dadosUsuario.nome, dadosUsuario.idade, dadosUsuario.cidade,
            dadosUsuario.email, dadosUsuario.telefone, dadosUsuario.senha);
        this.clsUsuariosArmazenados.AdicionarUsuario(novoUsuario);

        var usuario = {
            dadosUsuario: dadosUsuario,
            status: "Usuario Criado"
        }
        return usuario
    }


    @Get()
    async listaUsuarios(){
        
        const usuariosListados = this.clsUsuariosArmazenados.Usuarios;
        const listaRetorno = usuariosListados.map(
            usuario => new listaUsuarioDTO(
                usuario.id,
                usuario.cidade,
                usuario.email
            )
        );
        return listaRetorno
    }

}