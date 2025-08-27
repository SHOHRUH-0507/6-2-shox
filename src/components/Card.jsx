import React from 'react'
import CardTop from './Cardtop'
import CardBottom from './CardBottom'

function Card() {
    return (
        <div className="w-[540px] flex flex-col gap-6">
            <CardTop></CardTop>
            <CardBottom></CardBottom>
        </div>
    )
}

export default Card
