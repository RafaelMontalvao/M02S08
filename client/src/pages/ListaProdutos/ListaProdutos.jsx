import './ListaProdutos.css';
import {Card} from '../../components/Card';
import { useListaProdutos } from '../../Hooks/useListaProdutos';

export const ListaProdutos =()=>{
    const{error, isLoading,produtos} = useListaProdutos();
    console.log(produtos)
    return(
        <section className='secao'>
            <h2 className='secao-title'>Produtos</h2>
            <hr/>

            <div className='lista'>
                <Card
                    imagem='Http://localhost:8081/assets/brandade.png'
            nome='Brandade de Bacalhau'
            descricao='Aveludada brandade de bacalhau servida em crocante de sementes, delicada base de azeite de rúcula e suas folhas com farofinha de azeitonas.'
            valor= {65}
            tempoPreparo='30 min'
        />

        </div>
        </section>
)}