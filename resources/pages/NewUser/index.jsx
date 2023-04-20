import React, { useState } from "react";
import { TextField } from "../../components/TextField";
import { RSSelect } from "../../components/Select";
import { Form } from "react-bootstrap";
import Dropzone from "react-dropzone";
import { Button } from "../../components/Button";
import { DatePicker } from "zaman";
import "./style.css";

function NewUser() {
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
        textarea: {
            height: "16rem",
            border: "none",
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
            borderRadius: ".8rem",
            fontSize: "1.4rem",
        },
        dropzoneStyle: {
            padding: "1.5rem",
            border: "1px dashed #00B1D6",
            borderRadius: ".8rem",
            fontSize: "1.4rem",
            height: "16rem",
        },
        placeholder: {
            placeholder: "none",
        },
    };

    const [file, setFile] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [nationalCode, setNationalCode] = useState();
    const [birthday, setBirthday] = useState();
    const [maritalStatus, setMaritalStatus] = useState("0");
    const [job, setJob] = useState("دانشجو");
    const [gender, setGender] = useState("0");
    const [jobPlace, setJobPlace] = useState("دانشگاه شیراز");
    const [education, setEducation] = useState("کارشناسی");
    const [phoneNumber, setPhoneNumber] = useState();
    const [bankAccountNumber, setBankAccountNumber] = useState();
    const [address, setAddress] = useState();

    const inputToken = document.querySelector("input").value;

    const handleSubmitForm = (e) => {
        e.preventDefault();

        function blobToBase64(blob) {
            return new Promise((resolve, _) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.readAsDataURL(blob);
            });
        }

        const submitForm = async () => {
            const image = await blobToBase64(file);

            const formdata = new FormData();
            formdata.append("firstName", firstName);
            formdata.append("lastName", lastName);
            formdata.append("nationalCode", nationalCode);
            formdata.append("birthday", birthday);
            formdata.append("gender", gender);
            formdata.append("maritalStatus", maritalStatus);
            formdata.append("job", job);
            formdata.append("jobPlace", jobPlace);
            formdata.append("education", education);
            formdata.append("phoneNumber", phoneNumber);
            formdata.append("bankAccountNumber", bankAccountNumber);
            formdata.append("address", address);
            formdata.append("file", image);
            formdata.append("_token", inputToken);
            console.log(formdata.getAll("_token"));

            axios
                .post(`http://localhost:8000/newUser`, { formdata })
                .then((res) => {
                    console.log(res.data.status);
                });
        };
        submitForm();
    };

    const [isShowModal, setisShowModal] = useState();

    const handleDeleteForm = (e) => {
        e.preventDefault();

        const inputs = document.querySelectorAll("input");
        const lableProfile = document.querySelector(".form-lable-profile ");
        const textArea = document.querySelector("textarea");

        inputs.forEach((input) => {
            input.value = "";
        });

        textArea.value = "";

        lableProfile.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#00B1D6"  fill-opacity= "0.3" className="bi bi-image" viewBox="0 0 16 16">
        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
        </svg>`;
    };

    return (
        <Form style={style.divBody}>
            <div>
                <h1 className="fs-4">کاربر جدید</h1>
                <p style={style.p} className="fs-6">
                    مدیریت / کاربران / کاربر جدید
                </p>
            </div>

            <div className="w-100 d-flex justify-content-around align-items-center mt-4 gap-5">
                <div className="w-20">
                    <div className="content">
                        <TextField
                            id="first-name"
                            label="نام"
                            type="text"
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content">
                        <TextField
                            id="last-name"
                            label="نام خانوادگی"
                            type="text"
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content">
                        <TextField
                            id="code-melli"
                            label="کد ملی"
                            type="number"
                            onChange={(e) => {
                                setNationalCode(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content d-flex flex-column">
                        <label className="fs-14" htmlFor="gender">
                            تاریخ تولد
                        </label>
                        <DatePicker
                            className="input-datePiker"
                            onChange={(e) => {
                                setBirthday(e.value.toLocaleDateString());
                            }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content d-flex flex-column">
                        <label className="fs-14" htmlFor="gender">
                            جنسیت
                        </label>
                        <RSSelect
                            options={[
                                { value: "female", label: "زن" },
                                { value: "male", label: "مرد" },
                                { value: "other", label: "دیگر" },
                            ]}
                            onChange={(e) => {
                                setGender(e.value);
                            }}
                            defaultValue="male"
                            myValue={{ label: "مرد", value: "male" }}
                            placeholder="جنسیت"
                        />
                    </div>
                </div>
            </div>

            <div className="w-100 d-flex justify-content-around align-items-center mt-4 gap-5">
                <div className="w-20">
                    <div className="content d-flex flex-column">
                        <label className="fs-14" htmlFor="select2">
                            وضعیت تاهل
                        </label>
                        <RSSelect
                            options={[
                                { value: "0", label: "مجرد" },
                                { value: "1", label: "متاهل" },
                            ]}
                            onChange={(e) => {
                                setMaritalStatus(e.value);
                            }}
                            myValue={{ label: "مجرد", value: "0" }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content d-flex flex-column">
                        <label className="fs-14" htmlFor="select3">
                            وضعیت شغلی
                        </label>
                        <RSSelect
                            options={[
                                { value: "0", label: "دانشجو" },
                                { value: "1", label: "شاغل" },
                                { value: "2", label: "بیکار" },
                            ]}
                            onChange={(e) => {
                                setJob(e.value);
                            }}
                            myValue={{ label: "دانشجو", value: "0" }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content d-flex flex-column">
                        <label className="fs-14" htmlFor="select3">
                            محل اشتغال
                        </label>
                        <RSSelect
                            options={[
                                {
                                    value: "0 ",
                                    label: " دانشگاه شیراز",
                                },
                                { value: "...", label: "..." },
                            ]}
                            onChange={(e) => {
                                setJobPlace(e.value);
                            }}
                            myValue={{ label: "دانشگاه شیراز", value: "0" }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content d-flex flex-column">
                        <label className="fs-14" htmlFor="select3">
                            وضعیت تحصیلی
                        </label>
                        <RSSelect
                            options={[
                                { value: "کارشناسی", label: "کارشناسی" },
                                {
                                    value: "کارشناسی ارشد",
                                    label: "کارشناسی ارشد",
                                },
                                { value: "...", label: "..." },
                            ]}
                            onChange={(e) => {
                                setEducation(e.value);
                            }}
                            myValue={{
                                label: "کارشناسی ارشد",
                                value: "کارشناسی ارشد",
                            }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content">
                        <TextField
                            id="shomare-tamas"
                            label="شماره تماس"
                            type="number"
                            onChange={(e) => {
                                setPhoneNumber(e.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="w-100 mt-4 ">
                <div className="w-18">
                    <div className="content">
                        <TextField
                            id="shomare-hesab"
                            label="شماره حساب بانک ملت"
                            type="number"
                            onChange={(e) => {
                                setBankAccountNumber(e.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="w-100 d-flex justify-content-around align-items-center mt-4 gap-5">
                <div className="w-50">
                    <div className="content">
                        <TextField
                            id="adres"
                            label="آدرس محل سکونت"
                            as="textarea"
                            styles={style.textarea}
                            className="height"
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="w-50">
                    <label className="fs-14 mb-2" htmlFor="profile">
                        تصویر پروفایل
                    </label>
                    <Dropzone
                        onDrop={(acceptedFiles) => {
                            setFile(acceptedFiles[0]);
                        }}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <div
                                {...getRootProps()}
                                style={style.dropzoneStyle}
                                className="w-100"
                            >
                                <div
                                    htmlFor="formFile"
                                    className="form-lable-profile form-label h-100 w-100 d-flex align-items-center justify-content-center"
                                >
                                    {file?.name ? (
                                        file.name
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="48"
                                            height="48"
                                            fill="#00B1D6"
                                            fillOpacity="0.3"
                                            className="bi bi-image"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                        </svg>
                                    )}
                                </div>
                                <input
                                    {...getInputProps()}
                                    className="form-control"
                                    type="file"
                                    id="formFile"
                                />
                            </div>
                        )}
                    </Dropzone>
                </div>
            </div>

            <div className="d-flex algin-items-center mt-4 gap-4">
                <Button
                    style={{ backgroundColor: "#18C4A5" }}
                    type="submit"
                    onClick={handleSubmitForm}
                >
                    ذخیره
                </Button>

                <Button
                    style={{ backgroundColor: "#FF3464" }}
                    type="submit"
                    onClick={handleDeleteForm}
                >
                    پاک کردن
                </Button>

                <div>{isShowModal}</div>
            </div>
        </Form>
    );
}

export default NewUser;
