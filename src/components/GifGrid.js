import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    // USAMOS EL CUSTOM HOOK
    const {data:images, loading} = useFetchGifs( category );

    
    // necesitamos recibir la categoria y hacer una http request
    
    // getGifs();
    return (
        <>
        <h3> {category} </h3>

        { loading ? <p>Loading...</p>: null}

        <div className="card-grid">
            
            {
                images.map( (img) => {
                    return <GifGridItem id = {img.id} {...img}/>
                })
            }
                
        </div>
        </>
        
    )
}
