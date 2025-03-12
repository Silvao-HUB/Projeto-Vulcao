import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailUnico } from "./validacao/email-unico.validator";



export class alteraUsuarioDTO {
    @IsString()
    @IsNotEmpty({message: "nome NÃO pode ser vazio"})
    @IsOptional()
    nome:string;

    @IsInt ()
    @IsOptional()
    idade: Number;

    @IsString()
    @IsOptional()
    cidade:string;

    @IsEmail (undefined, {message:'email é válido'})
    @EmailUnico({message: 'Email Já Cadastrado!'})
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    telefone:string;

    @MinLength (6,{message: 'Senha precisa conter pelo menos 6 digitos'})
    @IsOptional()
    senha: string;


}
