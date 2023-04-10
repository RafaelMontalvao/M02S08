import './App.css'
import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar'


function App() {
  
  return (
    <div className='app'>
      <Navbar/>

          <main className='main'>

           <h2>Produtos</h2> 
           <Card 
                imagem='Http://localhost:8081/assets/brandade.png'
                nome='Brandade de Bacalhau'
                descricao='Aveludada brandade de bacalhau servida em crocante de sementes, delicada base de azeite de rúcula e suas folhas com farofinha de azeitonas.'
                valor= {65}
                tempoPreparo='30 min'
                
              />

          </main> 

      <Footer/>
    </div>
      
  );
  
}

export default App
