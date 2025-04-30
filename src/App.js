import './App.css';
import Banner from './componentes/banner/Banner';
import InputText from './componentes/InputText/Index';


function App() {
  return (    
    <div className="App">
      <Banner />
      <InputText label="Código" placeholder="Informe o código" />
      <InputText label="Descrição" placeholder="Informe a descrição do Toner" />
      <InputText label="Nota" placeholder="Informe o código da nota " />
      <InputText label="Data de Recebimento" placeholder="Informe a data de Recebimento" />
      <InputText label="Tipo" placeholder="Informe o tipo do Toner " />
      <InputText label="Cor" placeholder="Informe a cor do Toner" />      
    </div>
  );
}

export default App;
