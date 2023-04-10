import React from 'react'
import Form from 'react-bootstrap/Form';
import "./style.css";

export function TextField({id , placeholder, type , value , label , disabled , inputProps , formText , className , styles , as ,onChange}) {

  const style = {
    label: {
      fontSize: "1.4rem",
    }
  }
  return (
    <div className={className}>
        <Form.Label style={style.label} htmlFor={id}>{label}</Form.Label>
        <Form.Control style={styles} value={value} onChange={onChange} as={as} {...inputProps} id={id} type={type} placeholder={placeholder}/>
        <Form.Text>
         {formText}
        </Form.Text>
    </div>
  )
}
