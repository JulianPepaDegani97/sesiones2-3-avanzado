import React, { useState, useRef, useEffect } from 'react';

const useBoolean = (initialState) => {
    const [value, setValue] = useState(initialState);

    const updateValue = useRef(
        {
            toggle: () => setValue(!value),
            on: () => setValue(true),
            off: () => setValue(false)
        }
    );

    return [value, updateValue.current];
}

const EjemploUseBoolean = () => {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useBoolean(false);
    const [error, setError] = useBoolean(false);

    useEffect(() => {
      setLoading.on();
      fetch('https://reqres.in/api/users')
      .then(response => {
        console.log(response.json())
      })
      .then(data => {
        setList(data);
        console.log(data)
      })
      .catch(error => {
        alert(error);
        setError.on();
      })
      .finally(() => {
        setLoading.off();
        console.log('done');
      })
    }, [list])
    
    

  return (
    <div>
        {loading && (<h3>Loading...</h3>)}
        {error && (<h3>Ha ocurrido un error</h3>)}
    </div>
  )
}

export default EjemploUseBoolean