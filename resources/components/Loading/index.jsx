import React from 'react';
import Spinner from "react-bootstrap/Spinner";
import "./style.css"

export function Loading() {
    return (
        <div className="div-spinner">
            <Spinner animation="grow" style={{transform:"scale(4,4)"}}/>
        </div>
    );
}
