import { IsEmail, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailUnico } from "./validacao/email-unico.validator";


export class criarUsuarioDTO {
    @IsString()
    @IsNotEmpty({message: "nome NÃO pode ser vazio"})
    nome:string;

    @IsInt ()
    idade: Number;

    @IsString()
    cidade:string;

    @IsEmail (undefined, {message:'email é válido'})
    @EmailUnico({message: 'Email Já Cadastrado!'})
    email: string;

    @IsString()
    telefone:string;

    @MinLength (6,{message: 'Senha precisa conter pelo menos 6 digitos'})
    senha: string;


}
