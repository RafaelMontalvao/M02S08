import { useEffect, useState } from "react"
import { apiService } from "../../service/api";

export const useListaProdutos = ()=>{

        const [ListaProdutos, setListaProdutos] = useState(null);
        const [isLoading, setIsloading] = useState(false);
        const [error, setError] = useState(null);
     
        const fetchData = async () => {
            setIsloading(true)
            
            const {data, error} = await apiService.get('/produtos')

            if(data){
                 const entradas = data.filter((item)=> item.secao === 'Entradas');
                 const principais = data.filter((item)=> item.secao === 'Principais');
                 const sobremesas = data.filter((item)=> item.secao === 'Sobremesas');
                 
                 setListaProdutos({entradas, principais, sobremesas});
            }
            
       
            setError(error);
            setIsloading(false)
    }

    useEffect(()=> {
        fetchData();
    },[]);
    
    return { ListaProdutos, isLoading, error};    
    };