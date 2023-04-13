import React, { useState } from "react";
import Select from "react-select";
import "./style.css";

export function RSSelect(props) {
    return (
        <Select
            {...props}
            key={props.id}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    border: "none",
                    height: "3.5rem",
                    marginTop: ".6rem",
                    border: "none",
                    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
                    borderRadius: " .8rem",
                    fontSize: " 1.2rem",
                }),
                placeholder(base, state) {
                    return {
                        ...base,
                        // display: "none",
                    };
                },
            }}
        />
    );
}
