import './portfolio.css'
import './portfolio-responsive.css'

const Portfolio = ({ project01, project02, project03 }) => {
    return (
        <section className="portfolio">
            <h2 className='title'>MEU <span>PORTFÓLIO</span></h2>

            <div className='projects'>
                <div className='img-project'>
                    <p>Landing Page para aplicativo mobile</p>
                    <a href="https://deividsantos18.github.io/aplicativo/" target='_blank'>
                        <img src={project01}>
                        </img>
                    </a>
                </div>

                <div className='img-project'>
                    <p>Landing Page para loja</p>
                    <a href="https://deividsantos18.github.io/site-de-patins/" target='_blank'>
                        <img src={project02}>
                        </img>
                    </a>
                </div>

                <div className='img-project'>
                    <p>Sistema de agendamento de cabeleireiro</p>
                    <a href="https://deividsantos18.github.io/hair-day/" target='_blank'>
                        <img src={project03}>
                        </img>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Portfolio