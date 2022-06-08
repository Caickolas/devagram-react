import Avatar from "../avatar";

export function FazerComentario ({usuarioLogado}) {
    return (
        <div className="containerFazerComentario">
            <Avatar src={usuarioLogado.avatar}/>
            <textarea 
            rows={1}
            placeholder="Adicione um comentario"></textarea>

            <button 
            className="btnPublicacao desktop"
            type="button"
             > Publicar </button>

        </div>
    )
}