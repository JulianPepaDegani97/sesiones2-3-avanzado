import React, { useState } from 'react'

export const Ejemplo = () => {
    const names = ["Julián", "Princesa"];
    const [name, setName] = useState('');
    const getName = () => {
        const random = Math.floor(Math.random() * (names.length - 1));
        setName(names[random]);
    }
    const clearName = () => {
        setName('');
    }

  return (
    <div>
        <NombresAleatorios name={name} clearName={clearName}/>
        <button onClick={getName}>
            Get name
        </button>
    </div>
  )
}

export const WrappedComponent = (props) => {
    console.log('renderizando...')
    return(
        
        <div>
            <h2>{props.name}</h2>
            <button onClick={() => props.clearName()}>
                Delete name
            </button>
        </div>
    )
}
const areNamesEqual = (prevProps, nextProps) => {
    return prevProps.name !== nextProps.name;
}
export const NombresAleatorios = React.memo(WrappedComponent, areNamesEqual);