import React, { useState } from "react";
import { TextField } from "../../components/TextField";
import { RSSelect } from "../../components/Select";
import { Form } from "react-bootstrap";
import { Button } from "../../components/Button";
import "./style.css";
import ModalConfirmation from "../../components/ModalConfirmation";

function NewHoze() {
    const style = {
        divBody: {
            backgroundColor: "#F4F6F9",
            marginTop: "1.5rem",
            padding: "1.5rem 1.5rem",
            borderRadius: "1.6rem",
        },
        p: {
            borderBottom: "1.5px solid lightgray",
            paddingBottom: "1rem",
        },
    };

    const [NameHoze, setNameHoze] = useState();
    const [MainHoze, setMainHoze] = useState("دانشگاه شیراز");
    const [hozeList, setHozeList] = useState([]);

    const [todo, setTodo] = useState({
        key: Date.now(),
        name: "",
        place: "",
        zarfiat: "",
    });

    const handleAdd = (e) => {
        e.preventDefault();
        setHozeList([
            ...hozeList,
            {
                ...todo,
                createAt: new Date().toLocaleDateString(),
                id: Date.now(),
                disabled: true,
                checked: false,
                key: Date.now(),
            },
        ]);
        setTodo({
            key: Date.now(),
            name: "",
            place: "",
            zarfiat: "",
        });
    };

    const [isShownModal, setIsShownModal] = useState();
    const [isShownVirayesh, setIsShownVirayesh] = useState();

    const handleDelete = (id) => {
        console.log(id);
        setIsShownModal((current) => !current);
    };

    const uiEdit = (e) => {
        return (
            <Form className="w-100 d-flex align-items-center mt-4 gap-5">
                <div className="w-18">
                    <div className="content">
                        <TextField
                            id="hoze-name"
                            label="نام"
                            type="text"
                            value={todo.name}
                            onChange={(e) =>
                                setTodo({ ...todo, name: e.target.value })
                            }
                        />
                    </div>
                </div>

                <div className="w-18">
                    <div className="content">
                        <TextField
                            id="hoze-place"
                            label="مکان (طبقه)"
                            type="text"
                            value={todo.place}
                            onChange={(e) =>
                                setTodo({ ...todo, place: e.target.value })
                            }
                        />
                    </div>
                </div>

                <div className="w-18">
                    <div className="content">
                        <TextField
                            id="zarfiat"
                            label="ظرفیت (نفر)"
                            type="text"
                            value={todo.zarfiat}
                            onChange={(e) =>
                                setTodo({ ...todo, zarfiat: e.target.value })
                            }
                        />
                    </div>
                </div>

                <div
                    className="d-flex algin-items-center gap-4"
                    style={{ marginTop: "2.8rem" }}
                >
                    <Button
                        style={{ backgroundColor: "#00B1D6" }}
                        onClick={handleEdit}
                    >
                        ذخیره
                    </Button>

                    <Button
                        style={{ backgroundColor: "#FF3464" }}
                        onClick={handleDelete}
                    >
                        انصراف
                    </Button>
                </div>
            </Form>
        );
    };

    const handleEdit = (id) => {
        console.log(id);

        const parentVirayesh = document.querySelector(".parent-edit");

        // parentVirayesh.appendChild = uiEdit()

        setIsShownVirayesh((e) => {
            return (
                <div className="w-100 d-flex align-items-center mt-4 gap-5">
                    <div className="w-18">
                        <div className="content">
                            <TextField
                                id={1}
                                key={11}
                                label="نام"
                                type="text"
                                // value={todo.name}
                                // onChange={(e) =>
                                //     setTodo({ ...todo, name: e.target.value })
                                // }
                            />
                        </div>
                    </div>

                    <div className="w-18">
                        <div className="content">
                            <TextField
                                id={2}
                                key={12}
                                label="مکان (طبقه)"
                                type="text"
                                // value={todo.place}
                                // onChange={(e) =>
                                //     setTodo({ ...todo, place: e.target.value })
                                // }
                            />
                        </div>
                    </div>

                    <div className="w-18">
                        <div className="content">
                            <TextField
                                id={3}
                                key={13}
                                label="ظرفیت (نفر)"
                                type="text"
                                // value={todo.zarfiat}
                                // onChange={(e) =>
                                //     setTodo({ ...todo, zarfiat: e.target.value })
                                // }
                            />
                        </div>
                    </div>

                    <div
                        className="d-flex algin-items-center gap-4"
                        style={{ marginTop: "2.8rem" }}
                    >
                        <Button style={{ backgroundColor: "#00B1D6" }}>
                            ذخیره
                        </Button>

                        <Button style={{ backgroundColor: "#FF3464" }}>
                            انصراف
                        </Button>
                    </div>
                </div>
            );
        });
    };

    let uiAddList = hozeList.map((item, i) => {
        if (item?.name) {
            return (
                <div key={Date.now()}>
                    <div className="d-flex algin-items-center mt-5 gap-5">
                        <div className="div-item">
                            {i + 1}-{item?.name} - {item?.place} -{" "}
                            {item?.zarfiat}
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
                                onClick={handleDelete}
                            >
                                حذف
                            </Button>
                            {isShownModal && (
                                <ModalConfirmation
                                    modalText=" آیا میخواهید این حوزه 
                            را حذف کنید "
                                    btnLaghvText=" لغو "
                                    btnDeleteText=" حذف "
                                    onClickLaghv={() => {
                                        setIsShownModal(!isShownModal);
                                    }}
                                    onClickDelete={(e) => {
                                        console.log(item.id);
                                        setIsShownModal(!isShownModal);
                                    }}
                                ></ModalConfirmation>
                            )}
                        </div>
                    </div>
                </div>
            );
        }
    });

    // const uiEdit = (e) => {
    //     return (
    //         <Form className="w-100 d-flex align-items-center mt-4 gap-5">
    //             <div className="w-18">
    //                 <div className="content">
    //                     <TextField
    //                         id="hoze-name"
    //                         label="نام"
    //                         type="text"
    //                         value={todo.name}
    //                         onChange={(e) =>
    //                             setTodo({ ...todo, name: e.target.value })
    //                         }
    //                     />
    //                 </div>
    //             </div>

    //             <div className="w-18">
    //                 <div className="content">
    //                     <TextField
    //                         id="hoze-place"
    //                         label="مکان (طبقه)"
    //                         type="text"
    //                         value={todo.place}
    //                         onChange={(e) =>
    //                             setTodo({ ...todo, place: e.target.value })
    //                         }
    //                     />
    //                 </div>
    //             </div>

    //             <div className="w-18">
    //                 <div className="content">
    //                     <TextField
    //                         id="zarfiat"
    //                         label="ظرفیت (نفر)"
    //                         type="text"
    //                         value={todo.zarfiat}
    //                         onChange={(e) =>
    //                             setTodo({ ...todo, zarfiat: e.target.value })
    //                         }
    //                     />
    //                 </div>
    //             </div>

    //             <div
    //                 className="d-flex algin-items-center gap-4"
    //                 style={{ marginTop: "2.8rem" }}
    //             >
    //                 <Button
    //                     style={{ backgroundColor: "#00B1D6" }}
    //                     onClick={handleEdit}
    //                 >
    //                    ذخیره
    //                 </Button>

    //                 <Button
    //                     style={{ backgroundColor: "#FF3464" }}
    //                     onClick={handleDelete}
    //                 >
    //                    انصراف
    //                 </Button>
    //             </div>
    //         </Form>
    //     );
    // };

    return (
        <div style={style.divBody} className="vh-100">
            <h1 className="fs-2">حوزه فرعی جدید</h1>
            <p style={style.p} className="fs-4">
                مدیریت / حوزه ها / حوزه فرعی جدید
            </p>

            <div className="w-100 d-flex align-items-center mt-4 gap-5">
                <div className="w-18">
                    <div className="content">
                        <TextField
                            id="name-hoze"
                            label="نام حوزه فرعی"
                            type="text"
                            onChange={(e) => {
                                setNameHoze(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="w-18">
                    <div className="content d-flex flex-column w-100">
                        <label className="fs-14" htmlFor="mainHoze">
                            حوزه اصلی
                        </label>
                        <RSSelect
                            options={[
                                { value: "0", label: "دانشگاه شیراز" },
                                { value: "1", label: "..." },
                            ]}
                            onChange={(e) => {
                                setMainHoze(e.value);
                            }}
                            defaultValue="دانشگاه شیراز"
                            placeholder="دانشگاه شیراز"
                        />
                    </div>
                </div>
            </div>

            <div>
                <Form className="w-100 d-flex align-items-center mt-4 gap-5">
                    <div className="w-18">
                        <div className="content">
                            <TextField
                                id="hoze-name"
                                label="نام"
                                type="text"
                                value={todo.name}
                                onChange={(e) =>
                                    setTodo({
                                        ...todo,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div className="w-18">
                        <div className="content">
                            <TextField
                                id="hoze-place"
                                label="مکان (طبقه)"
                                type="text"
                                value={todo.place}
                                onChange={(e) =>
                                    setTodo({
                                        ...todo,
                                        place: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div className="w-18">
                        <div className="content">
                            <TextField
                                id="zarfiat"
                                label="ظرفیت (نفر)"
                                type="text"
                                value={todo.zarfiat}
                                onChange={(e) =>
                                    setTodo({
                                        ...todo,
                                        zarfiat: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <Button
                        style={{
                            backgroundColor: "#18C4A5",
                            marginTop: "2.9rem",
                        }}
                        type="submit"
                        onClick={handleAdd}
                    >
                        افزودن بخش جدید
                    </Button>
                </Form>
                <ul>{uiAddList}</ul>
                {/* {isShownVirayesh && <div id="parent-ui">{uiEdit()} </div>} */}

                <div className="parent-edit" id="parent-ui">
                    {isShownVirayesh}
                </div>
            </div>
        </div>
    );
}

export default NewHoze;
