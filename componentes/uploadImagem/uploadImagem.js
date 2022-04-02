/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect } from "react";


export default function UploadImagem ({
    className = '',
    setImagem,
    imagemPreview,
    imagemPreviewClassName = '',
    aoSetaraReferencia,
}) {
    const referenciaInput = useRef(null);

    useEffect(() => {
        if(!aoSetaraReferencia){
            return;
        }

        aoSetaraReferencia(referenciaInput?.current)
    }, [referenciaInput?.current])

    const abrirSeletorArquivos = () => {
        referenciaInput?.current?.click()
    }

    const aoAlterarImagem = () => {

        if(!referenciaInput?.current?.files?.length) {
            return;
        }   

        const arquivo = referenciaInput?.current?.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(arquivo);
        fileReader.onloadend = () => {
            setImagem({
                preview: fileReader.result,
                arquivo,
            })
        }
    }

    return (
        <div className={`uploadImageContainer ${className}`} onClick= {abrirSeletorArquivos}>
            
            {imagemPreview && (
                <div className="imagemPreviewContainer">
                    <img 
                        src={imagemPreview}
                        alt='imagem Preview'
                        className={imagemPreviewClassName}
                        />
                </div>

            )}

            <input    
                type='file' 
                className='oculto' 
                accept="image/*" 
                ref={referenciaInput}
                onChange={aoAlterarImagem}
            />
        </div>
        );
};