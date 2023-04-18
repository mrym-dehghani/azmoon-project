import React, { useState } from "react";
import { TextField } from "../../components/TextField";
import { RSSelect } from "../../components/Select";
import { Form } from "react-bootstrap";
import { Button } from "../../components/Button";
import AddNewHoze from "../../components/AddNewHoze";
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
            },
        ]);
        setTodo({
            key: Math.random(),
            name: "",
            place: "",
            zarfiat: "",
        });

        axios.post(`http://localhost:8000/newHoze`, { hozeList }).then((res) => {
            console.log(res.data.status);
        });
    };

    console.log(hozeList);
 
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
                            defaultValue="دانشگاه شیراز"
                            placeholder="دانشگاه شیراز"
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
                    {hozeList.map((item,i) => {
                        if (item?.name) {
                            return <AddNewHoze key={Math.random()} item={item} i={i} defaultValue={item.name} place={item.place} zarfiat={item.zarfiat} onChange={(e)=> {
                                item.name = e.target.value
                            }}/>
                        }
                    })}
                </div>

            </div>
        </div>
    );
}

export default NewHoze;
