import './InputText.css'

const InputText = (props) =>{
    return(
        <div className='inp-text'>
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>       
    )

}

export default InputText