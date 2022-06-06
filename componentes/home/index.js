import comAutorizacao from "../../hoc/comAutorizacao";
import { Feed } from "../feed";
import Login from "../login";


function Home({ usuarioLogado }) {
    return (
        <Feed usuarioLogado={usuarioLogado} />
    )
}

export default comAutorizacao(Home);