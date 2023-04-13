import React from "react";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { useState } from "react";

function NewExam() {
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
    const [examNumber, setExamNumber] = useState();
    const [uiShow, setUiShow] = useState();

    const handleSubmit = (e) => {
        if (examNumber < 50) {
            setUiShow(() => {
               return <div>yes</div>
            })
           
        } else {
            console.log("no");
        }
    };

    return (
        <div style={style.divBody}>
            <div>
                <h1 className="fs-4">آزمون فرعی جدید</h1>
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
                            // onChange={(e) => {
                            //     setDastmozdMoaven(e.target.value);
                            // }}
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

            <div>{uiShow}</div>
        </div>
    );
}

export default NewExam;
