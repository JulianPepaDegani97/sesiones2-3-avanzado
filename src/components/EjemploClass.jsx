import React, { Component, PureComponent } from 'react'

const MyComponent = (props) => {
    return(
        <h1>Memorized component</h1>
    )
}

const compareProps = (prevProps, nextProps) => {

}

export const EjemploComponent = React.memo(MyComponent, compareProps);
