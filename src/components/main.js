import Button from './button'
import './main.css'
import './main-responsive.css'

const Main = ({ imgPrimary }) => {
    return (
        <main>
            <div className='main'>
                <div className="txt-top-site">
                    <h1>TRANSFORMANDO IDEIAS EM REALIDADE DIGITAL</h1>
                    <p>Criatividade e inovação andam lado a lado. Com uma combinação única de design impactante, funcionalidade intuitiva e otimização para resultados, estou pronto para criar a presença on-line dos seus sonhos.</p>
                    < Button className="btn" label="Entre em contato" />
                </div>
                <div className="img-top-site">
                    <img src={imgPrimary}></img>
                </div>


            </div>
        </main>
    )
}

export default Main