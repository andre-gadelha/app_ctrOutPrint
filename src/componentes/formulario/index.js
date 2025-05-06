import InputText from '../InputText/Index'
import Botao from '../botao/botao'
import SelectBox from '../selectBox/SelectBox'
import './Formulario.css'

const Formulario = () => {


    const tipo = ['MONOCROMÁTICA','POLICROMÁTICA']
    const cor = ['CYAN', 'MAGENTA', 'PRETO','YELLO']

    const enviar =(evento) =>{
        evento.preventDefault()//Não permite recarregar página
        alert('teste')
    }

    return(
        <section>
            <form onSubmit={enviar}>
                <InputText label="Código" placeholder="Informe o código" obrigatorio={true} />
                <InputText label="Descrição" placeholder="Informe a descrição do Toner" />
                <InputText label="Nota" placeholder="Informe o código da nota " />
                <InputText label="Data de Recebimento" placeholder="Informe a data de Recebimento" />
                <SelectBox label="Tipo" itens={tipo} />
                <SelectBox label="Cor" itens={cor} /> 
                <Botao>Enviar</Botao>             
            </form>
        </section>
    )

}

export default Formulario