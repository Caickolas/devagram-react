import HttpService from "./Httpservice";

export default class UsuarioService extends HttpService {
    async login() {
        
    }
    async cadastro(dados) {
        return this.post('/cadastro', dados)
    }
}