import React from 'react';
import { Form } from 'react-bootstrap';
import "./style.css"

export function Input({styles , value , onChange , as , id , type , placeholder ,inputProps}) {
  return (
    <div>
        <Form.Control style={styles} value={value} onChange={onChange} as={as} {...inputProps} id={id} type={type} placeholder={placeholder}/>
    </div>
  )
}
