export default function Botao({
    type = 'button',
    texto,
    cor = 'primaria',
    desabilitado = false,
    manipularClick
}) {
    return (
        <button
            type={type}
            className={`btn ${cor}`}
            disabled={desabilitado}
            onClick={manipularClick}
        >
            {texto}
        </button>
    )
}