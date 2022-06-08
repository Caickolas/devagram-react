import { useState, useEffect } from "react";
import FeedService from "../../services/FeedService";
import Postagem from "./Postagem";

const feedService = new FeedService();

export function Feed({ usuarioLogado }) {
    const [listaDePostagens, setListaDePostagens] = useState([]);

    useEffect(async () => {
        const { data } = await feedService.carregarPostagens();
        console.log(data);
        setListaDePostagens([
            {
                id: '1',
                usuario: {
                    id: '1',
                    nome: 'caick',
                    avatar: null,
                },
                fotodopost: 'https://pbs.twimg.com/media/FUiFBuaWYAAiXu4?format=jpg&name=small',
                descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                curtidas:[],
                comentarios: [
                    {
                        nome: 'victor',
                        mensagem: 'sapeca'
                    }
                ]
            }
        ])
    }, [usuarioLogado])
    
    return (
        <div className="feedContainer largura30pctDesktop">
            {listaDePostagens.map(dadosPostagem => (
                <Postagem key={dadosPostagem.id} 
                {...dadosPostagem}
                usuarioLogado={usuarioLogado}
                />
            ))}
        </div>
    )
}