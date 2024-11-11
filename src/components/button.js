import './button.css'
import './button-responsive.css'

const Button = ({ label }) => {
    return (
        <div className="btn-contact">
            <a href="https://wa.me/5511988250878" target='_blank'>
                <button>{label}</button>
            </a>
        </div>
    )
}

export default Button