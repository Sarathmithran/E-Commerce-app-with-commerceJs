import { createContext, useEffect, useState } from "react";

export const ProdContext = createContext();

const ProductContext = ({children}) => {

    const [prodLoading, setProdLoading ] = useState(true)
    const [data,setData] = useState([]);

    //fetching products
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.chec.io/v1/products', {
                    method: "GET",
                    headers: {
                        'X-Authorization': 'pk_56071358605a875a29428978ff87f7f139cafebdd5046',
                    }
                });
                const data = await response.json();
                setData(data.data);
                setProdLoading(false);
            } catch (error) {
                console.error('An error occurred:', error);
            }
        };

        fetchData();
    }, []);
    console.log('from context',data);

    return ( 
        <div>
            <ProdContext.Provider value={{data , prodLoading}}>
                {children}
            </ProdContext.Provider>
        </div>
     );
}
 
export default ProductContext;