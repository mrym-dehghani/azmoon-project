import React, { useState } from "react";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";

function Settings() {
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

    const [dastmozdModir, setDastmozdModir] = useState();
    const [dastmozdNamayande, setDastmozdNamayande] = useState();
    const [dastmozdMoaven, setDastmozdMoaven] = useState();
    const [dastmozdMakhzan, setDastmozdMakhzan] = useState();
    const [dastmozdGuyande, setDastmozdGuyande] = useState();
    const [dastmozdRabet, setDastmozdRabet] = useState();
    const [dastmozdMoragheb, setDastmozdMoragheb] = useState();
    const [dastmozdShomaresh, setDastmozdShomaresh] = useState();
    const [dastmozdTatbigh, setDastmozdTatbigh] = useState();
    const [dastmozdSarparast, setDastmozdSarparast] = useState();
    const [darsadMaliat, setDarsadMaliat] = useState();


    const handleSubmitForm =(e)=> {
        
        e.preventDefault()

        const data= {
            dastmozdModir,
            dastmozdNamayande,
            dastmozdMoaven,
            dastmozdMakhzan,
            dastmozdGuyande,
            dastmozdRabet,
            dastmozdMoragheb,
            dastmozdShomaresh,
            dastmozdTatbigh,
            dastmozdSarparast,
            darsadMaliat
        }

        console.log(data);
    }

    return (
        <div style={style.divBody}>

            <div>
                <h1 className="fs-4">تنظیمات</h1>
                <p style={style.p} className="fs-6">
                    مدیریت / تنظیمات
                </p>
            </div>

            <div className="w-100 d-flex justify-content-around align-items-center mt-4 gap-5">
                <div className="w-20">
                    <div className="content">
                        <TextField
                            id="dastmozd-modir"
                            label="دستمزد مدیر حوزه"
                            type="number"
                            onChange={(e) => {
                                setDastmozdModir(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content">
                        <TextField
                            id="dastmozd-namayande"
                            label="دستمزد نماینده تام الاختیار"
                            type="number"
                            onChange={(e) => {
                                setDastmozdNamayande(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content">
                        <TextField
                            id="dastmozd-moaven"
                            label="دستمزد معاون حوزه"
                            type="number"
                            onChange={(e) => {
                                setDastmozdMoaven(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content">
                        <TextField
                            id="dastmozd-makhzan"
                            label="دستمزد مخزن فرعی"
                            type="number"
                            onChange={(e) => {
                                setDastmozdMakhzan(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content">
                        <TextField
                            id="dastmozd-guyande"
                            label="دستمزد گوینده "
                            type="number"
                            onChange={(e) => {
                                setDastmozdGuyande(e.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="w-100 d-flex justify-content-around align-items-center mt-4 gap-5">
                <div className="w-20">
                    <div className="content">
                        <TextField
                            id="dastmozd-rabet"
                            label="دستمزد رابط"
                            type="number"
                            onChange={(e) => {
                                setDastmozdRabet(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content">
                        <TextField
                            id="dastmozd-moragheb"
                            label="دستمزد مراقب"
                            type="number"
                            onChange={(e) => {
                                setDastmozdMoragheb(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content">
                        <TextField
                            id="dastmozd-shomaresh"
                            label="دستمزد شمارش"
                            type="number"
                            onChange={(e) => {
                                setDastmozdShomaresh(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content">
                        <TextField
                            id="dastmozd-tatbigh"
                            label="دستمزد تطبیق عکس"
                            type="number"
                            onChange={(e) => {
                                setDastmozdTatbigh(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content">
                        <TextField
                            id="dastmozd-sarparast"
                            label="دستمزد سرپرست سالن "
                            type="number"
                            onChange={(e) => {
                                setDastmozdSarparast(e.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="w-100 mt-4 ">
                <div className="w-18">
                    <div className="content">
                        <TextField
                            id="darsad-maliat"
                            label="درصد مالیات"
                            type="number"
                            onChange={(e) => {
                                setDarsadMaliat(e.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="d-flex algin-items-center mt-5 gap-4">
                <Button
                    style={{ backgroundColor: "#18C4A5" }}
                    type="submit"
                    onClick={handleSubmitForm}
                >
                    ذخیره
                </Button>
            </div>

        </div>

       
    );
}

export default Settings;
