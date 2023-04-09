import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function DeleteConfirmation({ modalText , btnDeleteText , btnLaghvText }) {

    return (
        <>
            <div className="modal">
                <div className="modal-mtn">
                    <p> {props.modalText}</p>
                    <div className="Buttons">
                        <button className="cancel" onClick={handlePressOnBtnLaghv}>
                            {props.btnLaghvText}
                        </button>
                        <button className="close" onClick={handlePressOnBtnHazf}> {props.btnDeleteText} </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeleteConfirmation;
