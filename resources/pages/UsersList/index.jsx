import React, { useState } from "react";
import dataUser from "../../Data/dataUser";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalDelete from "../../components/ModalDelete";

function UsersList() {
    const styles = {
        backgroundStyle: {
            backgroundColor: "#F4F6F9",
            padding: "1.5rem",
            borderRadius: "1.6rem",
            marginTop: "1.5rem",
            minHeight: "85vh"
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

    const [data, setData] = useState(dataUser);
    const [deleteId, setDeleteId] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleDeleteItem = () => {
        setData((dataUser) => {
            const newArray = [...dataUser];
            return newArray.filter((item) => item.id !== deleteId);
        });
        setShow(false);
    };

    const handleClickItem = (id) => {
        setDeleteId(id);
        setShow(true);
    };

    const navigate = useNavigate();
    const navigateToNewUsers = () => {
        navigate("/");
    };

    return (
        <div style={styles.backgroundStyle}>
            <ModalDelete
                show={show}
                handleClose={handleClose}
                modalText="  آیا میخواهید این کاربر را حذف کنید؟ "
                btnDeleteMtn=" حذف "
                btnLaghvMtn=" لغو "
                handleDeleteItem={handleDeleteItem}
            ></ModalDelete>
            <div className="hr mb-5">
                <h1 className="fs-4 mb-2">کاربران</h1>
                <p className="grayColor fs-6">
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
                .map((item, index) => {
                    return (
                        <div
                            className="d-flex justify-content-between mt-4"
                            key={index}
                            id={item.id}
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

                            <Link
                                to={`/editUser?user_id=${item.id}`}
                                target="_blank"
                                className="border-0 fs-5"
                                style={{
                                    backgroundColor: "#00B1D6",
                                    width: "14%",
                                    height: "3.5rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                    color: "#fff",
                                    borderRadius: "5px",
                                }}
                                type="submit"
                            >
                                ویرایش
                            </Link>
                            <button
                                style={styles.deleteBtn}
                                onClick={() => {
                                    handleClickItem(item.id);
                                }}
                            >
                                حذف
                            </button>
                        </div>
                    );
                })}
        </div>
    );
}

export default UsersList;
