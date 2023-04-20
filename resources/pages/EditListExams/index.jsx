import React, { useEffect } from "react";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { useState } from "react";
import { Nobat } from "../../components/Nobat";
import { Loading } from "../../components/Loading";

function EditListExam() {
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
    const [uiShow, setUiShow] = useState();
    const [shifts, setShifts] = useState([]);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const inputToken = document.querySelector("input").value;

    const handleSubmit = (e) => {
        createShifts();
        if (examNumber < 50) {
            setUiShow(() => {
                return <Nobat />;
            });
        } else {
            console.log("no");
        }

        const data = {
            examName,
            examNumber,
            _token: inputToken,
        };

        console.log(data);

        axios.post(`http://localhost:8000/newExam`, { data }).then((res) => {
            console.log(res.data);
        });
    };

    const createShifts = () => {
        if (examName) {
            for (let i = 0; i < examNumber; i++) {
                shifts.push(<Nobat key={Math.random()} id={Math.random()} />);
            }
            console.log(shifts);
        }
    };

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);
    if (isLoading) {
        return <Loading />;
    }
    if (data) {
        return (
            <div style={style.divBody}>
                <div>
                    <h1 className="fs-4 pb-2">آزمون جدید</h1>
                    <p style={style.p} className="fs-6">
                        مدیریت / آزمون ها / آزمون جدید
                    </p>
                </div>
    
                <div className="w-100 d-flex align-items-center mt-4 gap-5" id={id}>
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
    
}

export default EditListExam;
