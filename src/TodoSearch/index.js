import React from 'react';
import "./TodoSearch.css"

function TodoSearch ({ searchValue, setSearchValue }){

    const changeHandle = (e => {
        setSearchValue(e.target.value);
    })

    return (
        <input 
            className="InputSearch"
            placeholder="optimizar SEO en portafolio"
            value={searchValue} 
            onChange={changeHandle}
        />
    );
}

export { TodoSearch };