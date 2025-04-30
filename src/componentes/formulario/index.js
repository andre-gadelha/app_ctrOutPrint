import InputText from '../InputText/Index'
import SelectBox from '../selectBox/SelectBox'
import './Formulario.css'

const Formulario = () => {


    const tipo = ['MONOCROMÁTICA','POLICROMÁTICA']
    const cor = ['CYAN', 'MAGENTA', 'PRETO','YELLO']

    return(
        <section>
            <form>
                <InputText label="Código" placeholder="Informe o código" />
                <InputText label="Descrição" placeholder="Informe a descrição do Toner" />
                <InputText label="Nota" placeholder="Informe o código da nota " />
                <InputText label="Data de Recebimento" placeholder="Informe a data de Recebimento" />
                <SelectBox label="Tipo" itens={tipo} />
                <SelectBox label="Cor" itens={cor} />              
            </form>
        </section>
    )

}

export default Formulario