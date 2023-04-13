import React, { useState } from "react";
import data from "../../Data/data";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalConfirmation from "../../components/ModalConfirmation";

function UsersList() {
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

    const handleClick = (e) => {
        itemDeletePressedId = e;
        console.log(e);
        setIsShown((current) => !current);
    };

    const navigate = useNavigate();
    const navigateToNewUsers = () => {
        navigate("/");
    };

    return (
        <div style={styles.backgroundStyle}>
            <div className="hr mb-5">
                <h1 className="fs-3 mb-2">کاربران</h1>
                <p className="grayColor font-13">
                    مدیریت / کاربران / ویرایش کاربران
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

            {data
                .filter((item) => {
                    return searchInput.toLowerCase() === ""
                        ? item
                        : item.name.toLowerCase().includes(searchInput);
                })
                .map((item) => {
                    return (
                        <div
                            className="d-flex justify-content-between mt-4"
                            key={item.id}
                        >
                            <div style={styles.textfiledStyle}>
                                <input
                                    value={item.name}
                                    disabled
                                    style={styles.inputStyle}
                                />
                                <input
                                    value={item.phoneNumber}
                                    disabled
                                    style={styles.inputStyle}
                                />
                                <input
                                    value={item.kodeMeli}
                                    disabled
                                    style={styles.inputStyle}
                                />
                            </div>
                            <button
                                onClick={navigateToNewUsers}
                                style={styles.editBtn}
                            >
                                {" "}
                                ویرایش{" "}
                            </button>
                            <button
                                style={styles.deleteBtn}
                                onClick={handleClick}
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
                                        console.log(item.id);
                                        setIsShown(!isShown);
                                    }}
                                ></ModalConfirmation>
                            )}
                        </div>
                    );
                })}
        </div>
    );
}

export default UsersList;