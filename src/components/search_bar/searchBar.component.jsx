import React from "react";

import './searchBar.style.css'


export const  SearchBar = ({placeholder, changeHandler})=>{
    return <input className="search" type='search' placeholder={placeholder} onChange={changeHandler}/>
}
