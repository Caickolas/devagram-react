import InputPublico from "../inputPublico";
import Image from "next/image";
import Botao from "../botao";
import Link from "next/link";
import { useState } from "react";
import {validarEmail, validarSenha } from '../../utils/validadores'
import UsuarioService from "../../services/UsuarioService";

import imagemEnvelope from "../../public/imagens/envelope.svg"
import imagemChave from "../../public/imagens/chave.svg"
import imagemLogo from "../../public/imagens/logo.svg"

const usuarioService = new UsuarioService();

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [estaSubmetendo, setEstaSubmetendo] = useState(false);

    const validarFormulario = () => {
        return (
            validarEmail(email) && validarSenha(senha)
        );
    };

    const aoSubmeter = async (e) => {
        e.preventDefault();
        if (!validarFormulario()) {
            return;
        }

        setEstaSubmetendo(true);

        try {

            await usuarioService.login({
                login: email,
                senha
            });

        } catch (error) {
            alert(
                "erro ao logar usuario." + error?.response?.data?.erro
            );
        }

        setEstaSubmetendo(false);
    }

    return (
        <section className={'paginaLogin paginaPublica'}>
            <div className="logoContainer">
                <Image
                    src={imagemLogo}
                    alt="logotipo"
                    layout="fill"
                    className="logo"
                /> 
            </div>
            <div className="conteudoPaginaPublica">
                <form onSubmit={aoSubmeter}>
                    <InputPublico
                        imagem = {imagemEnvelope}
                        texto = {"E-mail"}
                        tipo="email"
                        aoAlterarValor={e => setEmail(e.target.value)}
                        valor={email}
                        mensagemValidacao="O endereço informado é invalido"
                        exibirMensagemValidacao={email && !validarEmail(email)}
                    />

                    <InputPublico
                        imagem={imagemChave}
                        texto={"Senha"}
                        tipo="password"
                        aoAlterarValor={e => setSenha(e.target.value)}
                        valor={senha}
                        mensagemValidacao="Precisa ter ao menos 4 caracteres"
                        exibirMensagemValidacao={senha && !validarSenha(senha)}
                    />

                    <Botao 
                    texto="Login"
                    tipo="submit"
                        desabilitado={!validarFormulario() || estaSubmetendo }
                    />
                </form>

                <div className="rodapePaginaPublica">
                    <p>Não possui uma Conta?</p>
                    <Link href="/cadastro"> Faça seu cadastro agora!</Link>
                </div>
            </div>
        </section>
    )
}