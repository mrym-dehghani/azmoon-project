import React, { useState } from "react";
import { RSSelect } from "../../components/Select";
import { Button } from "../../components/Button";
import { TableRow } from "../../components/TableRow";
import "./style.css";

function Organizers() {
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

    const [modir, setModir] = useState("امین حاجی زاده");
    const [namayande, setNamayande] = useState("دکتر مسلم باقری");
    const [moaven, setMoaven] = useState("دکتر مسلم باقری");
    const [makhzan, setMakhzan] = useState("دکتر مسلم باقری");
    const [guyande, setGuyande] = useState("دکتر مسلم باقری");
    const [fromNumber, setFromNumber] = useState("");
    const [toNumber, setToNumber] = useState("");
    const [rabet, setRabet] = useState("امین حاجی زاده");
    const [moragheb, setMoragheb] = useState("امین حاجی زاده");
    const [shomaresh, setShomaresh] = useState("امین حاجی زاده");
    const [tatbigh, setTatbigh] = useState("امین حاجی زاده");
    const [sarparast, setSarparast] = useState("امین حاجی زاده");

    const handleSubmit = () => {
        const data = {
            modir,
            namayande,
            moaven,
            makhzan,
            guyande,
            fromNumber,
            toNumber,
            rabet,
            moragheb,
            shomaresh,
            tatbigh,
            sarparast,
        };
        console.log(data);
    };

    return (
        <div style={style.divBody}>
            <div>
                <h1 className="fs-4">عوامل برگزاری آزمون</h1>
                <p style={style.p} className="fs-6">
                    مدیریت / آزمون ها / آزمون جدید
                </p>
            </div>

            <div className="d-flex align-items-center mt-4">
                <h2 className="flex-grow-1 fs-4">حوزه پردیس علوم</h2>

                <div className="btn-submit d-flex algin-items-center justify-content-end w-25">
                    <Button
                        className="w-35 border-0 fs-5"
                        style={{ backgroundColor: "#18C4A5" }}
                        type="submit"
                        onClick={handleSubmit}
                    >
                        تایید
                    </Button>
                </div>
            </div>

            <div className="w-100 d-flex justify-content-around align-items-center mt-4 gap-5">
                <div className="w-20 div-input-select">
                    <div className="content d-flex flex-column">
                        <label className="fs-14" htmlFor="gender">
                            مدیر حوزه
                        </label>
                        <RSSelect
                            options={[
                                { value: "0", label: "امین حاجی زاده" },
                                { value: "1", label: "..." },
                            ]}
                            onChange={(e) => {
                                setModir(e.value);
                            }}
                            defaultValue="امین حاجی زاده"
                            placeholder="امین حاجی زاده"
                        />
                    </div>
                </div>

                <div className="w-20 div-input-select">
                    <div className="content d-flex flex-column">
                        <label className="fs-14" htmlFor="gender">
                            نماینده تام الاختیار
                        </label>
                        <RSSelect
                            options={[
                                { value: "0", label: "دکتر مسلم باقری" },
                                { value: "1", label: "..." },
                            ]}
                            onChange={(e) => {
                                setNamayande(e.value);
                            }}
                            defaultValue="دکتر مسلم باقری"
                            placeholder="دکتر مسلم باقری"
                        />
                    </div>
                </div>

                <div className="w-20  div-input-select">
                    <div className="content d-flex flex-column">
                        <label className="fs-14" htmlFor="gender">
                            معاون حوزه
                        </label>
                        <RSSelect
                            options={[
                                { value: "0", label: "دکتر مسلم باقری" },
                                { value: "1", label: "..." },
                            ]}
                            onChange={(e) => {
                                setMoaven(e.value);
                            }}
                            defaultValue="دکتر مسلم باقری"
                            placeholder="دکتر مسلم باقری"
                        />
                    </div>
                </div>

                <div className="w-20 div-input-select">
                    <div className="content d-flex flex-column">
                        <label className="fs-14" htmlFor="gender">
                            مسِئول مخزن فرعی
                        </label>
                        <RSSelect
                            options={[
                                { value: "0", label: "دکتر مسلم باقری" },
                                { value: "1", label: "..." },
                            ]}
                            onChange={(e) => {
                                setMakhzan(e.value);
                            }}
                            defaultValue="دکتر مسلم باقری"
                            placeholder="دکتر مسلم باقری"
                        />
                    </div>
                </div>

                <div className="w-20 div-input-select">
                    <div className="content d-flex flex-column">
                        <label className="fs-14" htmlFor="gender">
                            گوینده
                        </label>
                        <RSSelect
                            options={[
                                { value: "0", label: "دکتر مسلم باقری" },
                                { value: "1", label: "..." },
                            ]}
                            onChange={(e) => {
                                setGuyande(e.value);
                            }}
                            defaultValue="دکتر مسلم باقری"
                            placeholder="دکتر مسلم باقری"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-5 div-parent-table">
                <table>
                    <tr>
                        <th>ردیف</th>
                        <th colSpan={2}>محل آزمون</th>
                        <th>از شماره</th>
                        <th>تا شماره</th>
                        <th>تعداد</th>
                        <th>رابط</th>
                        <th>مراقب</th>
                        <th>شمارش</th>
                        <th>تطبیق عکس</th>
                        <th>سرپرست سالن</th>
                    </tr>

                    <TableRow
                        onChangeFrom={(e) => {
                            setFromNumber(e.target.value);
                        }}
                        onChangeTo={(e) => {
                            setToNumber(e.target.value);
                        }}
                        onChangeRabet={(e) => {
                            setRabet(e.value);
                        }}
                        onChangeMoragheb={(e) => {
                            setMoragheb(e.value);
                        }}
                        onChangeShomaresh={(e) => {
                            setShomaresh(e.value);
                        }}
                        onChangeTatbigh={(e) => {
                            setTatbigh(e.value);
                        }}
                        onChangeSarparast={(e) => {
                            setSarparast(e.value);
                        }}
                    />

                    <TableRow
                        onChangeFrom={(e) => {
                            setFromNumber(e.target.value);
                        }}
                        onChangeTo={(e) => {
                            setToNumber(e.target.value);
                        }}
                        onChangeRabet={(e) => {
                            setRabet(e.value);
                        }}
                        onChangeMoragheb={(e) => {
                            setMoragheb(e.value);
                        }}
                        onChangeShomaresh={(e) => {
                            setShomaresh(e.value);
                        }}
                        onChangeTatbigh={(e) => {
                            setTatbigh(e.value);
                        }}
                        onChangeSarparast={(e) => {
                            setSarparast(e.value);
                        }}
                    />

                    <TableRow
                        onChangeFrom={(e) => {
                            setFromNumber(e.target.value);
                        }}
                        onChangeTo={(e) => {
                            setToNumber(e.target.value);
                        }}
                        onChangeRabet={(e) => {
                            setRabet(e.value);
                        }}
                        onChangeMoragheb={(e) => {
                            setMoragheb(e.value);
                        }}
                        onChangeShomaresh={(e) => {
                            setShomaresh(e.value);
                        }}
                        onChangeTatbigh={(e) => {
                            setTatbigh(e.value);
                        }}
                        onChangeSarparast={(e) => {
                            setSarparast(e.value);
                        }}
                    />

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Organizers;
