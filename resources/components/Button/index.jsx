import React from 'react';
import './style.css';
import RBButton from 'react-bootstrap/Button';
 

export function Button(props) {
    return (
        <RBButton className='custom-button' {...props}>{props.children}</RBButton>
    )
}
