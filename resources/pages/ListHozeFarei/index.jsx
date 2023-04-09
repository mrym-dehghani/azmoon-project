import React from "react";
import Search from "../../components/Search";

function ListHozeFarei() {
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
                <h1 className="fs-3 mb-2"> لیست حوزه های فرعی </h1>
                <p className="grayColor font-13">
                    مدیریت / حوزه ها / لیست حوزه های فرعی
                </p>
            </div>
            <Search></Search>
        </div>
    );
}

export default ListHozeFarei;
