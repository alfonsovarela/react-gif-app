import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['Akira', 'One Punch', 'Dragon Ball'];
    // Aplicamos useState
    const [categories, setCategories] = useState(['Akira']);

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'One Piece'] );
    //     setCategories( elements => [...elements, 'One Piece']);
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            
            <ol>
                {
                    categories.map( ( category ) => {
                        return <GifGrid key={ category } category={ category } />
                    })
                }
            </ol>
        </div>
    )
}