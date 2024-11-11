import './about.css'
import './about-responsive.css'

const About = ({ imgSecundary }) => {
    return (
        <section className="about">
            <div className='img-about'>
                <img src={imgSecundary} />
            </div>

            <div className='txt-about'>
                <h2 className='title'>MUITO PRAZER,<br/> <span>   SOU DEIVID SANTOS</span></h2>
                <p>Sou graduando em Engenharia de Software, com foco em desenvolvimento de sites personalizados para
                    empresas que buscam crescer no ambiente digital. Com uma base sólida em tecnologia e experiência em
                    criação de sites funcionais e atrativos, estou comprometido em ajudar negócios a estabelecerem sua
                    presença online de forma estratégica e eficiente. Meu objetivo é entregar soluções de qualidade, que se
                    adaptem às necessidades de cada cliente, aumentando visibilidade e facilitando a conexão com seu
                    público-alvo.</p>
                <div className='btn-social'>
                    <a href="https://www.facebook.com/profile.php?id=61560013007726" target='_blank'>
                        <button><i class="bi bi-facebook"></i></button>
                    </a>

                    <a href="https://wa.me/5511988250878" target='_blank'>
                        <button><i class="bi bi-whatsapp"></i>
                        </button>
                    </a>
                    <a href="https://www.instagram.com/deivid_santos_ccc/?__pwa=1" target='_blank'>
                        <button><i class="bi bi-instagram"></i></button>
                    </a>
                </div>
            </div>
        </section >

    )
}

export default About