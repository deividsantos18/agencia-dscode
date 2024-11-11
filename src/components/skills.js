import 'bootstrap-icons/font/bootstrap-icons.css';
import './skills.css'
import Box from './box'
import './skills-responsive.css'

const Skills = () => {
    return (
        <section className="specialties">
            <h2 className='title'>MINHAS <span>ESPECIALIDADES</span></h2>

            <div className="specialties-box">
                <div className='specialties-box-element'>
                    <Box icon="bi bi-code-square" title="Website" paragraph="Um website é essencial para empresas, pois oferece credibilidade, facilita o acesso a informações e
                        expande o alcance do negócio. Ele fortalece a presença online, ajuda a atrair novos clientes e
                        melhora o atendimento, essencial para competir no mercado atual."/>
                </div>

                <div className='specialties-box-element'>
                    <Box icon="bi bi-cart" title="Loja on-line" paragraph="Uma loja online é fundamental para ampliar as vendas, permitindo que clientes comprem a qualquer hora
                        e de qualquer lugar. Ela aumenta o alcance do negócio, reduz custos operacionais e melhora a
                        experiência do cliente, tornando o processo de compra mais prático e acessível."/>
                </div>

                <div className='specialties-box-element'>
                    <Box icon="bi bi-wordpress" title="Blog" paragraph="Um blog é uma ferramenta valiosa para negócios, pois permite compartilhar conhecimento, atrair
                        visitantes e fortalecer a marca. Ele melhora o engajamento com o público, aumenta a visibilidade nos
                        mecanismos de busca e ajuda a construir autoridade no mercado."/>
                </div>

            </div>
        </section>
    )
}

export default Skills