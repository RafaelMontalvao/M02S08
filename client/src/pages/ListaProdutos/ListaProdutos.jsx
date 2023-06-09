import './ListaProdutos.css';
import {Card} from '../../components/Card';
import { useListaProdutos } from '../../Hooks/useListaProdutos';
import { useState } from 'react';

export const ListaProdutos =()=>{
    const{error, isLoading,ListaProdutos} = useListaProdutos();
    const[selecionados, setSelecionados] = useState([]);


    const isSelecionado = (id) => {

        return selecionados.some((item) => item === id);
    }

    const handleSelecionar = (id) =>{
        if(isSelecionado(id)){
         setSelecionados((prev) => prev.filter((item) => item !== id));

            return;
            
        }
        
        setSelecionados((prev) => [...prev, id]);
    };

    if(isLoading){

      return  <p>Carregando...</p>
    }

    if(error){

        return  <p>{error}</p>
      }
      

    return(
            <>
            {!!ListaProdutos &&
            
            Object.keys(ListaProdutos).map((secao)=> (
                 <section key={secao} className='secao'>
                 <h2 className='secao-title'>{secao}</h2>
             <hr/>
     
             <div className='lista'>
                {ListaProdutos[secao].map((item)=> (
                    <Card
                     key = {item.id}
                     id= {item.id}
                     imagem={item.img}
                     nome={item.nome}
                     descricao={item.descricao}
                     valor= {item.valor}
                     tempoPreparo={item.tempoPreparo}
                    selecionado={isSelecionado(item.id)}
                    onSelecionar = {handleSelecionar}

                 />
))}
                 
     
         </div>
         </section>



    ))}
            
        
            </>
           
            
       
    
            
);};