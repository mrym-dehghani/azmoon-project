import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "../../components/Search";

function UsersList() {
    const styles = {
        backgroundStyle: {
            backgroundColor: "#F4F6F9",
            padding: "1.5rem",
            borderRadius: "1.6rem",
        },
    };

    return (
        <div style={styles.backgroundStyle}>
            <div className="hr mb-5">
                <h1 className="fs-3 mb-2">کاربران</h1>
                <p className="grayColor font-13">
                    مدیریت / کاربران / ویرایش کاربران
                </p>
            </div>
            <Search></Search>
        </div>
    );
}

export default UsersList;
