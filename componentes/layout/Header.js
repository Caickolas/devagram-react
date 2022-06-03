import Image from 'next/image';
import { useState } from 'react';
import logoHorizontalImg from '../../public/imagens/logoHorizontal.svg';
import lupaImg from '../../public/imagens/lupa.svg';
import Navegacao from './Navegacao';
import ResultadoPesquisa from './ResultadoPesquisa';

export default function Header() {
    const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
    const [termoPesquisado, setTermoPesquisado] = useState([])
    
    const aoPesquisar = (e) => {
        setTermoPesquisado(e.target.value);
        setResultadoPesquisa([]);

        if(termoPesquisado.length < 3){
            return;
        }
    
        setResultadoPesquisa([
            {
                avatar: '',
                nome: 'Caick',
                email: 'Caicksim',
                _id: '434343'
            }
        ])
    }
    
    const aoClicarResultadoPesquisa = (id) => {
        console.log('aoClicarResultadoPesquisa', {id})
    }


    return(
        <header className='headerPrincipal'>
            <div className='conteudoHeaderPrincipal'>
                <div className='logoHeaderPrincipal'>
                    <Image
                        src={logoHorizontalImg}
                        alt='Logo Devagram'
                        layout='fill'
                    />

                </div>

                <div className='barraPesquisa'>
                    <div className='containerImagemLupa'>
                        <Image
                            src={lupaImg}
                            alt='icone Lupa'
                            layout='fill'
                        />
                    </div>

                    <input 
                        type='text'
                        placeholder='Pesquisar'
                        value={termoPesquisado}
                        onChange={aoPesquisar}
                    />

                </div>

                <Navegacao className='desktop' />
            </div>

            {resultadoPesquisa.length > 0 && (
                <div className='resultadoPesquisaContainer'>
                    {resultadoPesquisa.map(r => (
                        <ResultadoPesquisa 
                        avatar={r.avatar}
                        nome={r.nome}
                        email={r.email}
                        key={r._id}
                        id={r._id}
                        onClick={aoClicarResultadoPesquisa}
                        
                        />
                    ))}
                </div>
            )}
        </header>
    );
}