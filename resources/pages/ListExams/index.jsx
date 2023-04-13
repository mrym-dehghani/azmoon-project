import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import ModalConfirmation from "../../components/ModalConfirmation";
import listExamsData from "../../Data/listExamsData";

function ListExams() {
    const styles = {
        backgroundStyle: {
            backgroundColor: "#F4F6F9",
            padding: "1.5rem",
            borderRadius: "1.6rem",
            marginTop: "1.5rem",
        },
        inputStyle: {
            marginBottom: "0",
            width: "18rem",
            border: "none",
            outline: "none",
            backgroundColor: "#fff",
        },

        textfiledStyle: {
            paddingRight: ".4rem",
            width: "70%",
            height: "3.5rem",
            boxShadow: "0px 0px 15px rgba(0, 0, 0,.1)",
            borderRadius: " .4rem",
            color: "#000",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            alignItems: "center",
            backgroundColor: "#fff",
            fontSize: " 1.4rem",
        },

        editBtn: {
            width: "14%",
            height: "3.5rem",
            border: "none",
            backgroundColor: " #00B1D6",
            borderRadius: " .4rem",
            color: "#fff",
            boxShadow: " 0px 0px 15px #82c7d4",
            fontSize: " 1.4rem",
        },

        deleteBtn: {
            width: "14%",
            height: "3.5rem",
            border: "none",
            backgroundColor: " #FF3464",
            borderRadius: " .4rem",
            color: "#fff",
            fontSize: " 1.4rem",
        },
    };

    const [searchInput, setSearchInput] = useState("");

    const [isShown, setIsShown] = useState(false);

    let itemDeletePressedId = 0;

    const handleClick = ( e ) => {
        itemDeletePressedId = e;
        setIsShown((current) => !current);
    };

    const navigate = useNavigate();
    const navigateToNewExam = () => {
        navigate("/newExam");
    };

    return (
        <div style={styles.backgroundStyle}>
            <div className="hr mb-5">
                <h1 className="fs-4 mb-2"> لیست آزمون ها </h1>
                <p className="grayColor fs-6">
                    مدیریت / آزمون ها / لیست آزمون ها
                </p>
            </div>

            <div className="d-flex flex-column">
                <label htmlFor="search-input" className="fs-3 mb-2">
                    جستجو
                </label>
                <input
                    type="search"
                    id="search-input"
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </div>

            {listExamsData
                .filter((item) => {
                    return searchInput.toLowerCase() === ""
                        ? item
                        : item.name.toLowerCase().includes(searchInput);
                })
                .map((item , index) => {
                    return (
                        <div
                            className="d-flex justify-content-between mt-4"
                            id={item.id}
                            key={index}
                        >
                            <div style={styles.textfiledStyle}>
                                <input
                                    value={item.name}
                                    disabled
                                    style={styles.inputStyle}
                                />
                            </div>
                            <button
                                onClick={navigateToNewExam}
                                style={styles.editBtn}
                            >
                                {" "}
                                ویرایش{" "}
                            </button>
                            <button
                                style={styles.deleteBtn}
                                onClick={handleClick}
                                id={item.id}
                            >
                                حذف
                            </button>
                            {isShown && (
                                <ModalConfirmation
                                    modalText=" آیا میخواهید این کاربر 
                             را حذف کنید "
                                    btnLaghvText=" لغو "
                                    btnDeleteText=" حذف "
                                    onClickLaghv={() => {
                                        setIsShown(!isShown);
                                    }}
                                    onClickDelete={(e) => {
                                        console.log(e);
                                        console.log(item.id);
                                        setIsShown(!isShown);
                                        const div = document.getElementById(item.id)
                                        div.remove()
                                    }}
                                ></ModalConfirmation>
                            )}
                        </div>
                    );
                })}
        </div>
    );
}

export default ListExams;
