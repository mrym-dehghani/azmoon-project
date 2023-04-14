import React from "react";
import { TextField } from "../TextField";
import { DatePicker } from "zaman";
import { RSSelect } from "../Select";
import { Button } from "../Button";
import { useState } from "react";
import { AddHoze } from "../addHoze";

export function Nobat({index}) {

    const style = {
        divHoze: {
            width: "79.8%",
            backgroundColor: "#ecebec",
            paddingRight: "8.7rem",
        },
        p: {
            color: "#FF3464",
            fontSize: "1.4rem",
            marginBottom: "0rem"
        },
        btn: {
            borderRadius: ".4rem",
            backgroundColor: "#18C4A5",
            color: "#FFFFFF",
            border: "none",
            padding:"0rem .6rem",
            fontSize: "1.4rem",
        }
    };

    const [uiShow, setUiShow] = useState();
    const [hozeNumber, setHozeNumber] = useState();
    const [hoze, setHoze] = useState([]);

    const [nobatName, setNobatName] = useState();
    const [tarikh,setTarikh] = useState();
    const [nobat,setNobat] = useState("صبح");


    const handleSubmit = (e) => {
        createHoze();
        if (hozeNumber < 50) {
            setUiShow(() => {
                return <div>1</div>;
            });
        } else {
            console.log("no");
        }

        const data = {
            nobatName,
            tarikh,
            nobat,
            hozeNumber
        }
        console.log(data);
    };

    const createHoze = () => {
        for (let i = 0; i < hozeNumber; i++) {
            hoze.push(<AddHoze/>);
        }
        console.log(hoze);
    };

    return (
        <div>
            <div className="d-flex align-items-center gap-2 mt-4">
                <p style={style.p}>نوبت</p>
                <button style={style.btn}>-</button>
            </div>
            <div className="w-100 d-flex align-items-center mt-2 gap-5">
                <div className="w-20">
                    <div className="content">
                        <TextField
                            id="nobat-name"
                            label="نام نوبت"
                            type="text"
                            onChange={(e) => {
                                setNobatName(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content d-flex flex-column">
                        <label className="fs-14" htmlFor="time">
                            تاریخ برگزای
                        </label>
                        <DatePicker
                        onChange={(e) => {
                            setTarikh(e.value);
                        }}
                        />
                    </div>
                </div>

                <div className="w-6">
                    <div className="content d-flex flex-column">
                        <label className="fs-14" htmlFor="gender">
                            نوبت
                        </label>
                        <RSSelect
                            options={[
                                { value: "0", label: "صبح" },
                                { value: "1", label: "عصر" },
                            ]}
                            onChange={(e) => {
                                setNobat(e.value);
                            }}
                            defaultValue="صبح"
                            placeholder="صبح"
                        />
                    </div>
                </div>

                <div className="w-14">
                    <div className="content">
                        <TextField
                            id="hoze-number"
                            label="تعداد حوزه های برگزاری"
                            type="number"
                            onChange={(e) => {
                                setHozeNumber(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="d-flex algin-items-center w-9">
                    <Button
                        className="border-0 fs-5"
                        style={{
                            backgroundColor: "#18C4A5",
                            marginTop: "2.8rem",
                            width: "100%",
                            height: "3.5rem",
                        }}
                        type="submit"
                        onClick={handleSubmit}
                    >
                        تایید
                    </Button>
                </div>
            </div>

            <div style={style.divHoze} className="mt-4">{hoze}</div>

        </div>
    );
}
