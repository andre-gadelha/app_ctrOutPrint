import './SelectBox.css'

const SelectBox = (props) =>{

    return(
        <div className='selectbox'> 
            <label>{props.label}</label>
            <select>
                {props.itens.map(item =>{
                    return <option ket={item}>{item}</option>        
                })}   
            </select>
        </div>
    )

}

export default SelectBox