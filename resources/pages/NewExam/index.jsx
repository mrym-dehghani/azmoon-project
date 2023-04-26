import React from "react";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { useState } from "react";
import { DatePicker } from "zaman";
import { RSSelect } from "../../components/Select";
import { AddHoze } from "../../components/AddHoze";

function NewExam() {
    const style = {
        divBody: {
            backgroundColor: "#F4F6F9",
            marginTop: "3rem",
            padding: "1.5rem 1.5rem",
            borderRadius: "1.6rem",
            minHeight: "100vh",
        },
        p: {
            borderBottom: "1.5px solid lightgray",
            paddingBottom: "2rem",
        },
    };

    const [id, setId] = useState(Math.random());
    const [examNumber, setExamNumber] = useState();
    const [examName, setExamName] = useState();
    const [examId, setExamId] = useState(Math.random());
    const [uiShow, setUiShow] = useState();
    const [shifts, setShifts] = useState([]);

    const inputToken = document.querySelector('input').value

    const handleSubmit = (e) => {
        setExamId(Math.random())
        createShifts();
        if (examNumber < 50) {
            setUiShow(() => {
                return <Nobat />;
            });
        } else {
            console.log("no");
        }

        const data = {
            name:examName,
            num_of_shifts:examNumber,
            _token: inputToken
        }

        console.log(data);

        const url= "http://localhost:8000"

        axios.post(`${url}/newExam`, { data }).then((res) => {
            console.log(res.data);
        });

    };

    //create shifts
    const Nobat = function Nobat() {
        const style = {
            divHoze: {
                width: "79.8%",
                backgroundColor: "#ecebec",
                paddingRight: "8.7rem",
            },
            p: {
                color: "#FF3464",
                fontSize: "1.4rem",
                marginBottom: "0rem",
            },
            btn: {
                borderRadius: ".4rem",
                backgroundColor: "#18C4A5",
                color: "#FFFFFF",
                border: "none",
                padding: "0rem .6rem",
                fontSize: "1.4rem",
            },
        };
    
        const [uiShow, setUiShow] = useState();
        const [hozeNumber, setHozeNumber] = useState();
        const [hoze, setHoze] = useState([]);
        const [nobatName, setNobatName] = useState();
        const [tarikh, setTarikh] = useState();
        const [nobat, setNobat] = useState("morning");
        const [show, setShow] = useState(false);
    
        const inputToken = document.querySelector('input').value
    
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
                name:nobatName,
                hold_date:tarikh,
                turn:nobat,
                num_of_areas:hozeNumber,
                exam_id: examId,
                _token: inputToken
            };
    
            console.log(data);
    
            axios.post(`http://localhost:8000/newExam`, { data }).then((res) => {
                console.log(res.data);
            });
        };
    
        const createHoze = () => {
            for (let i = 0; i < hozeNumber; i++) {
                hoze.push(<AddHoze areaId={1} examId={2} sectionId={3} key={Math.random()} id={Math.random()} />);
            }
            console.log(hoze);
        };
    
        const toggleNobat = () => {
            setShow(!show);
        };
    
        return (
            <div className="add-new-exam pt-5">
                <div className="d-flex align-items-center gap-2 mt-3 new-nobat">
                    <p style={style.p}>نوبت</p>
                    <button style={style.btn} onClick={toggleNobat}>
                        -
                    </button>
                </div>
    
                <div className="parent-nobat">
                    <div className=" w-100 d-flex align-items-center mt-3 gap-5">
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
                                <label className="fs-14 mb-2" htmlFor="time">
                                    تاریخ برگزای
                                </label>
                                <DatePicker
                                    onChange={(e) => {
                                        setTarikh(e.value.toLocaleDateString());
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
                                        { value: "morning", label: "صبح" },
                                        { value: "evening", label: "عصر" },
                                    ]}
                                    onChange={(e) => {
                                        setNobat(e.value);
                                    }}
                                    myValue={{ value: "morning", label: "صبح" }}  
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
                </div>
    
                <div style={style.divHoze} className="mt-4">
                    {hoze}
                </div>
            </div>
        );
    } 

    const createShifts = () => {
        if (examName) {
            for (let i = 0; i < examNumber; i++) {
                shifts.push(<Nobat key={Math.random()} id={Math.random()} />);
            }
            console.log(shifts);
        }
    };

    return (
        <div style={style.divBody}>
            <div>
                <h1 className="fs-4 pb-2">آزمون جدید</h1>
                <p style={style.p} className="fs-6">
                    مدیریت / آزمون ها / آزمون جدید
                </p>
            </div>

            <div className="w-100 d-flex align-items-center mt-4 gap-5">
                <div className="w-20">
                    <div className="content">
                        <TextField
                            id="exam-name"
                            label="نام آزمون"
                            type="text"
                            onChange={(e) => {
                                setExamName(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="w-9">
                    <div className="content">
                        <TextField
                            id="exam-number"
                            label="تعداد نوبت های آزمون"
                            type="number"
                            onChange={(e) => {
                                setExamNumber(e.target.value);
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

            {shifts.map((i) => {
                return <Nobat key={Math.random()} />;
            })}
        </div>
    );
}

export default NewExam;
