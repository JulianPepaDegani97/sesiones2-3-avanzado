import React, { useMemo, useCallback, useState } from 'react';

// useMemo() ---> React.memo() ---> Funciones creacionales de componentes que deben memorizar algo
// useCallback() ---> React.useCallback() ---> Memorizar valores listados en la dependencia. Funciones en línea

const MiComponente = ({names}) => {
    const [name, setName] = useState(null);

    const getName = useCallback(
        () => {
          // Obtener nombre aleatorio
          const randomName = Math.floor(Math.random() * (names.length));
          setName(names[randomName]);
        },
        [name],
      )

      const clearName = useCallback(
        () => {
          setName(null);
        },
        [],
      )
      

    return(
        <>
            {
                React.useMemo(() => {
                    console.log('rendering...');
                    return(
                        <h1>
                            Nombre generado: {name ? name : 'none'}
                        </h1>
                    )
                }, [name])
            }
            <button onClick={getName}>
                Get random name
            </button>
            <button onClick={clearName}>
                Clear name
            </button>
        </>
    )
}

export default MiComponente;


//const Memorization = useMemo(() => MiComponente, [a, b])