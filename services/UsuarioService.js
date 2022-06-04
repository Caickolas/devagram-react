import HttpService from "./Httpservice";
/* import imagemAvatar from "../../public/imagens/avatar.svg"; */

export default class UsuarioService extends HttpService {
    async login(credenciais) {
        const {data} = await this.post('/login', credenciais);

        localStorage.setItem("nome", data.nome);
        localStorage.setItem("email", data.email);
        localStorage.setItem("token", data.token);

        const usuario = await this.get('/usuario');
        localStorage.setItem("id", usuario.data._id)
        
        if(usuario.data.avatar) {
            localStorage.setItem("avatar", usuario.data.avatar)
        }
    }
    async cadastro(dados) {
        return this.post('/cadastro', dados);
    }

    estaAutenticado() {
        return localStorage.getItem('token') !== null
    }

    async pesquisar(termodaPesquisa) {
        return this.get('/pesquisa?filtro=' + termodaPesquisa);
    }

}