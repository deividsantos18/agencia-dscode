import './footer.css'


const Footer = ({ logo }) => {
    return (
        <footer>
            <a href="#">
                <img src={logo} alt="Logo" />
            </a>

        </footer>
    )
}

export default Footer