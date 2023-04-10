import './App.css'
import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar'
import { ListaProdutos} from './pages/ListaProdutos';


function App() {
  
  return (
    <div className='app'>
      <Navbar/>

          <main className='main'>

          <ListaProdutos/>

          </main> 

      <Footer/>
    </div>
      
  );
  
}

export default App
