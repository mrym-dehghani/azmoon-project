import React from "react";
import { RSSelect } from "../Select";
import { Button } from "../Button";
import { useNavigate, Link } from 'react-router-dom';
import { useState } from "react";

export function AddHoze() {

    const [hoze , setHoze]=useState("پردیس علوم")

    const navigate = useNavigate();
    const navigateToOrganizers =()=> {
        navigate("/organizers",false);
    }

    const handleSubmit=()=> {
        const data = {
            hoze,
        }
        console.log(data);
    }

    return (
        <div>
            <div>
                <div className="d-flex gap-5 mt-4">
                    <div className="w-35 my-3">
                        <div className="content d-flex flex-column ">
                            <label className="fs-14" htmlFor="hoze">
                                حوزه 
                            </label>
                            <RSSelect
                                options={[
                                    { value: "0", label: "پردیس علوم" },
                                    { value: "1", label: "..." },
                                ]}
                                onChange={(e) => {
                                    setHoze(e.value);
                                }}
                                defaultValue="پردیس علوم"
                                placeholder="پردیس علوم"
                            />
                        </div>
                    </div>

                    <div className="d-flex algin-items-center gap-5 flex-grow-1 mt-3">
                        <Link
                            to="/organizers"
                            target="_blank"
                            className="border-0 fs-5"
                            style={{
                                backgroundColor: "#00B1D6",
                                marginTop: "2.8rem",
                                width: "21%",
                                height: "3.5rem",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center",
                                textDecoration:"none",
                                color:"#fff",
                                borderRadius:"5px",
                            }}
                            type="submit"
                            // onClick={navigateToOrganizers}
                        >
                            عوامل حوزه
                        </Link>

                        <Button
                            className="border-0 fs-5"
                            style={{
                                backgroundColor: "#18C4A5",
                                marginTop: "2.8rem",
                                width: "21%",
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
        </div>
    );
}
