import { useEffect, useState } from "react"
import { apiService } from "../../service/api";

export const useListaProdutos = ()=>{

        const [produtos, setProdutos] = useState(null);
        const [isLoading, setIsloading] = useState(false);
        const [error, setError] = useState(null);
     
        const fetchData = async () => {
            setIsloading(true)

            const {data, error} = await apiService.get('/produtos')

            if(data){
                 const entradas = data.filter((item)=> item.secao === 'Entradas');
                 const principais = data.filter((item)=> item.secao === 'Principais');
                 const sobremesas = data.filter((item)=> item.secao === 'Sobremesas');
                 setProdutos({entradas, principais, sobremesas});
            }
            
       
            setError(error);
            setIsloading(false)
    }

    useEffect(()=> {
        fetchData();
    },[]);
    
    return { produtos, isLoading, error};


    
    };