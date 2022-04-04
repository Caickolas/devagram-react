export default function Botao({
    tipo = 'button',
    texto,
    cor = 'primaria',
    desabilitado = false,
    manipularClick
}) {
    return (
        <button
            type={tipo}
            className={`btn ${cor}`}
            disabled={desabilitado}
            onClick={manipularClick}
        >
            {texto}
        </button>
    )
}