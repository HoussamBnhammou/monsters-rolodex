import React from "react";
import './card_list.css'
import { Card } from "../card/card.component";
const CardList = (props)=>{
    return (
        <div id="bf" className="card">
            {props.monsters.map(monster => <Card key={monster.id} monster={monster}/>)}
        </div>
    )
}

export default CardList;