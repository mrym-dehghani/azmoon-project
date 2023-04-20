import React, { useState } from "react";
import { TextField } from "../../components/TextField";
import { RSSelect } from "../../components/Select";
import { Form } from "react-bootstrap";
import { Button } from "../../components/Button";
import ModalDelete from "./../../components/ModalDelete/index";
import "./style.css";

function NewHoze() {
    const style = {
        divBody: {
            backgroundColor: "#F4F6F9",
            marginTop: "1.5rem",
            padding: "1.5rem 1.5rem",
            borderRadius: "1.6rem",
            minHeight: "100vh",
        },
        p: {
            borderBottom: "1.5px solid lightgray",
            paddingBottom: "1rem",
        },
    };

    const [NameHoze, setNameHoze] = useState();
    const [mainHoze, setMainHoze] = useState("دانشگاه شیراز");
    const [hozeList, setHozeList] = useState([]);
    const [isShownVirayesh, setIsShownVirayesh] = useState();
    const [deleteId, setDeleteId] = useState("");
    const [show, setShow] = useState(false);

    const inputToken = document.querySelector("input").value;

    const [todo, setTodo] = useState({
        key: Math.random(),
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
                id: Math.random(),
                disabled: true,
                checked: false,
                key: Math.random(),
                hozeName: NameHoze,
                mainHoze: mainHoze,
                _token: inputToken,
            },
        ]);
        setTodo({
            key: Math.random(),
            name: "",
            place: "",
            zarfiat: "",
        });

        axios
            .post(`http://localhost:8000/newHoze`, { hozeList })
            .then((res) => {
                console.log(res.data);
            });
    };

    console.log(hozeList);

    function AddNewHoze({ item, i, defaultValue, place, zarfiat, onChange }) {
      
        const handleClickItem = (id) => {
            setDeleteId(id);
            setShow(true);
        };

        const handleClose = () => {
            setShow(false);
        };

        const handleDeleteItem = () => {
            setShow(false);
            return setHozeList(hozeList.filter((item) => item.id !== deleteId));
        };

        const handleEdit = (id) => {
            console.log(id);

            const handleCancle = () => {
                setIsShownVirayesh(" ");
            };

            setIsShownVirayesh(() => {
                return (
                    <div
                        key={Math.random()}
                        className="div-parent-add-edit w-100 d-flex align-items-center mt-4 gap-5"
                    >
                        <div className="w-18-5 div-parent-text-field">
                            <div className="content">
                                <TextField
                                    id={1}
                                    key={11}
                                    label="نام"
                                    type="text"
                                    defaultValue={defaultValue}
                                    onChange={onChange}
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
                                />
                            </div>
                        </div>

                        <div
                            className="div-parent-buttons d-flex algin-items-center gap-4"
                            style={{ marginTop: "2.8rem" }}
                        >
                            <Button 
                                style={{ backgroundColor: "#00B1D6" }}
                                // onClick={handleSave}
                            >
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
            <div className="add-new-hoze" key={Math.random()} id={item?.id}>
                <div className="d-flex algin-items-center mt-5 gap-5">
                    <div className="div-item">
                        {i + 1}-{item?.name} - {item?.place} - {item?.zarfiat}
                    </div>

                    <div className="d-flex algin-items-center gap-4 mt-1">
                        <Button
                            style={{ backgroundColor: "#00B1D6" }}
                            onClick={()=>{handleEdit(item.id)}}
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

    return (
        <div style={style.divBody}>
            <h1 className="fs-4">حوزه فرعی جدید</h1>
            <p style={style.p} className="fs-6">
                مدیریت / حوزه ها / حوزه فرعی جدید
            </p>

            <div className="w-100 d-flex align-items-center mt-4 gap-5">
                <div className="w-18 div-parent-text-field">
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

                <div className="w-18 div-parent-select-input">
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
                            myValue= {{value: "0", label: "دانشگاه شیراز"}}

                        />
                    </div>
                </div>
            </div>

            <div className="div-parent-form">
                <Form className="w-100 d-flex align-items-center mt-4 gap-5">
                    <div className="w-18 div-parent-text-field">
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

                    <div className="w-18 div-parent-text-field">
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

                    <div className="w-18 div-parent-text-field">
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

                <div className="div-parent-add-list-hoze">
                    {hozeList.map((item, i) => {
                        if (item?.name) {
                            return (
                                <AddNewHoze
                                    key={Math.random()}
                                    item={item}
                                    i={i}
                                    defaultValue={item.name}
                                    place={item.place}
                                    zarfiat={item.zarfiat}
                                    onChange={(e) => {
                                        item.name = e.target.value;
                                    }}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default NewHoze;
