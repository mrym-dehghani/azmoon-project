import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dataHoze from "../../Data/dataHoze";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import ModalDelete from "../../components/ModalDelete";

function HozeList() {
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

    const navigate = useNavigate();
    const navigateToHozeFareiJadid = (id) => {
        navigate("/newHoze");
        console.log(id);
        // axios.post(`http://localhost:8000/newHoze`, { id })
        // .then(res => {
        //   console.log(res);
        //   console.log(res.id);
        // })
    };

    const [data, setData] = useState(dataHoze);
    const [deleteId, setDeleteId] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleDeleteItem = () => {
        setData((dataHoze) => {
            const newArray = [...dataHoze];
            return newArray.filter((item) => item.id !== deleteId);
        });
        setShow(false);
    };

    const handleClickItem = (id) => {
        setDeleteId(id);
        setShow(true);
    };

    return (
        <div style={styles.backgroundStyle}>
            <ModalDelete
                show={show}
                handleClose={handleClose}
                modalText="  آیا میخواهید این حوزه را حذف کنید؟ "
                btnDeleteMtn=" حذف "
                btnLaghvMtn=" لغو "
                handleDeleteItem={handleDeleteItem}
            ></ModalDelete>
            <div className="hr mb-5">
                <h1 className="fs-4 mb-2"> لیست حوزه های فرعی </h1>
                <p className="grayColor fs-6">
                    مدیریت / حوزه ها / لیست حوزه های فرعی
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
                        : item.hoze.toLowerCase().includes(searchInput) ||
                              item.daneshghah
                                  .toLowerCase()
                                  .includes(searchInput);
                })
                .map((item, index) => {
                    return (
                        <div
                            className="forDelete d-flex justify-content-between mt-4"
                            key={index}
                            id={item.id}
                        >
                            <div style={styles.textfiledStyle}>
                                <input
                                    value={item.hoze}
                                    disabled
                                    style={styles.inputStyle}
                                />
                                <input
                                    value={item.daneshghah}
                                    disabled
                                    style={styles.inputStyle}
                                />
                            </div>
                            <button
                                onClick={
                                    // navigateToHozeFareiJadid
                                    () => {
                                        navigateToHozeFareiJadid(id);
                                    }
                                }
                                style={styles.editBtn}
                            >
                                {" "}
                                ویرایش{" "}
                            </button>
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

export default HozeList;
