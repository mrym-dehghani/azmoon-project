import React, {
    useEffect,
    useState
} from "react";
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

    const [file, setFile] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nationalCode, setNationalCode] = useState("");
    const [birthday, setBirthday] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("no");
    const [job, setJob] = useState("آزاد");
    const [gender, setGender] = useState("male");
    const [jobPlace, setJobPlace] = useState("سایر");
    const [education, setEducation] = useState("کارشناسی");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [bankAccountNumber, setBankAccountNumber] = useState("");
    const [address, setAddress] = useState("");
    const [selectJob,setSelectJob] = useState([]);
    const [selectJobPlace,setSelectJobPlace] = useState([]);
    const [selectEducation,setSelectEducation] = useState([]);

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
            const formdata = new FormData();
            formdata.append("first_name", firstName);
            formdata.append("last_name", lastName);
            formdata.append("international_code", nationalCode);
            formdata.append("birth_date", birthday);
            formdata.append("gender", gender);
            formdata.append("marriage", maritalStatus);
            formdata.append("job", job);
            formdata.append("job_place", jobPlace);
            formdata.append("education", education);
            formdata.append("phone_number", phoneNumber);
            formdata.append("account_number", bankAccountNumber);
            formdata.append("address", address);
            if(file !== undefined && file !== "")
            {
                const image = await blobToBase64(file);
                formdata.append("image", image);
            }
            formdata.append("_token", inputToken);
            console.log(formdata.getAll("image"));

            // const url= "http://localhost:8000"

            axios
                .post(`/organizers/new`, formdata)
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

    useEffect(() => {
        axios.get("/organizers/organizers_factors").then((response) => {
            const resp = response.data;

            if(resp.status === 1)
            {
                setSelectJob(resp.data.job);
                setSelectJobPlace(resp.data.job_place);
                setSelectEducation(resp.data.education);
                console.log(resp.data.education)
            }
        })
    },[]);

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
                                { value: "no", label: "مجرد" },
                                { value: "yse", label: "متاهل" },
                                { value: "unknown", label: "نامشخص" },
                            ]}
                            onChange={(e) => {
                                setMaritalStatus(e.value);
                            }}
                            myValue={{ label: "مجرد", value: "no" }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content d-flex flex-column">
                        <label className="fs-14" htmlFor="select3">
                            وضعیت شغلی
                        </label>
                        <RSSelect
                            options={selectJob.map((job) => {
                                return {label:job , value:job}
                            })}
                            onChange={(e) => {
                                setJob(e.value);
                            }}
                            myValue={{ label: "آزاد", value: "آزاد" }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content d-flex flex-column">
                        <label className="fs-14" htmlFor="select3">
                            محل اشتغال
                        </label>
                        <RSSelect
                            options={selectJobPlace.map((job) => {
                                return {label:job , value:job}
                            })}
                            onChange={(e) => {
                                setJobPlace(e.value);
                            }}
                            myValue={{ label: "سایر", value: "سایر" }}
                        />
                    </div>
                </div>

                <div className="w-20">
                    <div className="content d-flex flex-column">
                        <label className="fs-14" htmlFor="select3">
                            وضعیت تحصیلی
                        </label>
                        <RSSelect
                            options={selectEducation.map((job) => {
                                return {label:job , value:job}
                            })}
                            onChange={(e) => {
                                setEducation(e.value);
                            }}
                            myValue={{
                                label: "کارشناسی",
                                value: "کارشناسی",
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
