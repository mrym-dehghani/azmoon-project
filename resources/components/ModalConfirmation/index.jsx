import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalConfirmation({ modalText , btnDeleteText , btnLaghvText , onClickLaghv , onClickDelete , show}) {

    return (
        <>
            <div className="modal" show={show}>
                <div className="modal-mtn">
                    <p> {modalText}</p>
                    <div className="Buttons">
                        <button className="cancel" onClick={onClickLaghv}>
                            {btnLaghvText}
                        </button>
                        <button className="close" onClick={onClickDelete}> {btnDeleteText} </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalConfirmation;
