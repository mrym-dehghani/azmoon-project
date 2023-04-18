import React, { useState } from "react";
import { Button } from "../Button";
import { TextField } from "../TextField";
import ModalDelete from "../ModalDelete";

function AddNewHoze({ item, i, defaultValue, place, zarfiat, onChange }) {
    const [isShownVirayesh, setIsShownVirayesh] = useState();
    const [deleteId, setDeleteId] = useState("");
    const [show, setShow] = useState(false);

    const handleClickItem = (id) => {
        // console.log(id);
        setDeleteId(id);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    const handleDeleteItem = () => {};

    const handleEdit = (id) => {
        console.log(id);

        const handleCancle = () => {
            setIsShownVirayesh(" ");
        };

        setIsShownVirayesh(() => {
            return (
                <div className="div-parent-add-edit w-100 d-flex align-items-center mt-4 gap-5">
                    <div className="w-18-5 div-parent-text-field">
                        <div className="content">
                            <TextField
                                id={1}
                                key={11}
                                label="نام"
                                type="text"
                                defaultValue={defaultValue}
                                onChange={onChange}
                                // onChange={(e) =>
                                //     setTodo({ ...todo, name: e.target.value })
                                // }
                            />
                        </div>
                    </div>

                    <div className="w-18-5 div-parent-text-field">
                        <div className="content">
                            <TextField
                                id={2}
                                key={12}
                                label="مکان (طبقه)"
                                type="text"
                                defaultValue={place}

                                // onChange={(e) =>
                                //     setTodo({ ...todo, place: e.target.value })
                                // }
                            />
                        </div>
                    </div>

                    <div className="w-18-5 div-parent-text-field">
                        <div className="content">
                            <TextField
                                id={3}
                                key={13}
                                label="ظرفیت (نفر)"
                                type="text"
                                defaultValue={zarfiat}
                                // onChange={(e) =>
                                //     setTodo({ ...todo, zarfiat: e.target.value })
                                // }
                            />
                        </div>
                    </div>

                    <div
                        className="div-parent-buttons d-flex algin-items-center gap-4"
                        style={{ marginTop: "2.8rem" }}
                    >
                        <Button style={{ backgroundColor: "#00B1D6" }}>
                            ذخیره
                        </Button>

                        <Button
                            style={{ backgroundColor: "#FF3464" }}
                            onClick={handleCancle}
                        >
                            انصراف
                        </Button>
                    </div>
                </div>
            );
        });
    };
    return (
        <div key={Date.now()} id={Date.now()}>
            <div className="d-flex algin-items-center mt-5 gap-5">
                <div className="div-item">
                    {i + 1}-{item?.name} - {item?.place} - {item?.zarfiat}
                </div>

                <div className="d-flex algin-items-center gap-4 mt-1">
                    <Button
                        style={{ backgroundColor: "#00B1D6" }}
                        onClick={handleEdit}
                    >
                        ویرایش
                    </Button>

                    <Button
                        style={{ backgroundColor: "#FF3464" }}
                        onClick={() => {
                            handleClickItem(item.id);
                        }}
                    >
                        حذف
                    </Button>

                    <ModalDelete
                        show={show}
                        handleClose={handleClose}
                        modalText="  آیا میخواهید این حوزه را حذف کنید؟ "
                        btnDeleteMtn=" حذف "
                        btnLaghvMtn=" لغو "
                        handleDeleteItem={handleDeleteItem}
                    ></ModalDelete>
                </div>
            </div>

            <div>{isShownVirayesh}</div>
        </div>
    );
}

export default AddNewHoze;
