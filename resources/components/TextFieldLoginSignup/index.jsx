import React from "react";

function TextFieldLoginSignup({divClassName , htmlFor , labelClassName,labelText,inputType, inputId,inputClassName,inputPlaceHolder  }) {
    return (
        <div className={divClassName}>
            <label htmlFor={htmlFor} className={labelClassName}>
                {labelText}
            </label>
            <input
                type={inputType}
                id={inputId}
                className={ inputClassName}
                placeholder={inputPlaceHolder}
            />
        </div>
    );
}

export default TextFieldLoginSignup;