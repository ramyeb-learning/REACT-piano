import React from 'react'

export default function Touche(props) {


    const playFunction = () => {
        props.fonctionPlaySound(props.name)
    }

    return (
        <div onClick={playFunction} className={props.className}>
            
        </div>
    )
}
