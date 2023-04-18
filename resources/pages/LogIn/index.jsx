import React from "react";
import "./styles.css";
import { Button } from "../../components/Button";
import { useState } from "react";
import TextFieldLoginSignup from "../../components/TextFieldLoginSignup";

function LogIn() {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className="form-div">
            <div>
                <h1 className="d-flex justify-content-center"> ورود </h1>

                <TextFieldLoginSignup
                    divClassName="mt-3"
                    htmlFor="email-input"
                    labelClassName="fs14"
                    labelText=" ایمیل :"
                    inputType="email"
                    inputId="email-input"
                    inputClassName="d-block mt-2 fs14"
                ></TextFieldLoginSignup>

                <TextFieldLoginSignup
                    divClassName="mt-3"
                    htmlFor="password-input"
                    labelClassName="fs14"
                    labelText=" رمز :"
                    inputType={passwordShown ? "text" : "password"}
                    inputId="password-input"
                    inputClassName="d-block mt-2 fs14"
                ></TextFieldLoginSignup>

                <button
                    onClick={togglePassword}
                    className="d-block btn-show-hide-pass mt-1 mb-3"
                >
                    {" "}
                    {passwordShown ? " مخفی کردن رمز " : " نشان دادن رمز "}{" "}
                </button>

                <Button> ورود </Button>

            </div>
        </div>
    );
}

export default LogIn;