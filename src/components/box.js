import './box.css'

const Box = ({ icon, title, paragraph}) => {
    return (
        <div className="box">
            <i className={icon}></i>
            <h3>{title}</h3>
            <p>{paragraph}</p>
        </div>
    )
}

export default Box