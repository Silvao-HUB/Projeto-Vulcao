import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuariosArmazenados } from "./usuario.dm";
import { EmailUnicoValidator } from "./dto/validacao/email-unico.validator";

@Module ({
    imports: [],
    controllers:[UsuarioController],
    providers: [UsuariosArmazenados, EmailUnicoValidator]

})

export class UsuarioModule{}