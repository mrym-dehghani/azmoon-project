import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import data from "../../Data/data";
import DeleteConfirmation from "../DeleteConfirmation";
// import { useNavigate } from "react-router-dom";

function Search() {
    const styles = {
        inputStyle: {
            marginBottom: "0",
            width: "18rem",
            border: "none",
            outline: "none",
            backgroundColor: "#fff",
        },

        textfiledStyle: {
            paddingRight: ".4rem",
            width: "70%",
            height: "3.5rem",
            boxShadow: "0px 0px 15px rgba(0, 0, 0,.1)",
            borderRadius: " .4rem",
            color: "#000",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            alignItems: "center",
            backgroundColor: "#fff",
            fontSize: " 1.4rem",
        },

        editBtn: {
            width: "14%",
            height: "3.5rem",
            border: "none",
            backgroundColor: " #00B1D6",
            borderRadius: " .4rem",
            color: "#fff",
            boxShadow: " 0px 0px 15px #82c7d4",
            fontSize: " 1.4rem",
        },

        deleteBtn: {
            width: "14%",
            height: "3.5rem",
            border: "none",
            backgroundColor: " #FF3464",
            borderRadius: " .4rem",
            color: "#fff",
            fontSize: " 1.4rem",
        },
    };

    const [searchInput, setSearchInput] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        if (searchInput !== "") {
            const filteredData = data.filter((item) => {
                return Object.values(item)
                    .join("")
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
            });
            setFilteredResults(filteredData);
        } else {
            setFilteredResults(data);
        }
    };

    const [isShown, setIsShown] = useState(false);

    let itemDeletePressedId = 0;

    const handleClick = (e) => {
        itemDeletePressedId = e;
        console.log(e);
        setIsShown((current) => !current);
    };

    // const handleClickOnModalDelete = async() => {

    // }

    // const navigate = useNavigate();
    // const navigateToNewUsers = () => {
    //     navigate("/NewUsers");
    // };

    return (
        <>
            <div className="d-flex flex-column">
                <label htmlFor="search-input" className="fs-3 mb-2">
                    جستجو
                </label>
                <input
                    type="search"
                    id="search-input"
                    onChange={(e) => searchItems(e.target.value)}
                />
            </div>

            {searchInput.length > 0
                ? filteredResults.map((item) => {
                      return (
                          <div
                              className="d-flex justify-content-between mt-4"
                              key={item.id}
                          >
                              <div style={styles.textfiledStyle}>
                                  <input
                                      value={item.name}
                                      disabled
                                      style={styles.inputStyle}
                                  />
                                  <input
                                      value={item.phoneNumber}
                                      disabled
                                      style={styles.inputStyle}
                                  />
                                  <input
                                      value={item.kodeMeli}
                                      disabled
                                      style={styles.inputStyle}
                                  />
                              </div>
                              <button
                                  onClick={navigateToNewUsers}
                                  style={styles.editBtn}
                              >
                                  {" "}
                                  ویرایش{" "}
                              </button>
                              <button
                                  style={styles.deleteBtn}
                                  onClick={handleClick}
                              >
                                  حذف
                              </button>
                              {isShown && (
                                  <div className="modal">
                                      <div className="modal-mtn">
                                          <p>
                                              {" "}
                                              آیا میخواهید این کاربر ({" "}
                                              {item.name} ) را حذف کنید{" "}
                                          </p>
                                          <div className="Buttons">
                                              <button
                                                  className="cancel"
                                                  onClick={() => {
                                                      setIsShown(!isShown);
                                                  }}
                                              >
                                                  لغو
                                              </button>
                                              <button
                                                  className="close"
                                                  onClick={() => {
                                                      console.log(item.id);
                                                      setIsShown(!isShown);
                                                  }}
                                              >
                                                  حذف
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                              )}
                          </div>
                      );
                  })
                : data.map((item) => {
                      return (
                          <div
                              className="d-flex justify-content-between mt-4"
                              key={item.id}
                          >
                              <div style={styles.textfiledStyle}>
                                  <input
                                      value={item.name}
                                      disabled
                                      style={styles.inputStyle}
                                  />
                                  <input
                                      value={item.phoneNumber}
                                      disabled
                                      style={styles.inputStyle}
                                  />
                                  <input
                                      value={item.kodeMeli}
                                      disabled
                                      style={styles.inputStyle}
                                  />
                              </div>
                              <button style={styles.editBtn}> ویرایش </button>

                              <button
                                  key={item.id}
                                  style={styles.deleteBtn}
                                  onClick={handleClick}
                              >
                                  حذف
                              </button>

                              {isShown && (
                                  <div className="modal" key={item.id}>
                                      <div className="modal-mtn">
                                          <p>
                                              {" "}
                                              آیا میخواهید این کاربر ({" "}
                                              {item.name} ) را حذف کنید{" "}
                                          </p>
                                          <div className="Buttons">
                                              <button
                                                  className="cancel"
                                                  onClick={() => {
                                                      setIsShown(!isShown);
                                                  }}
                                              >
                                                  لغو
                                              </button>
                                              <button
                                                  className="close"
                                                  onClick={(e) => {
                                                      console.log(item.id);
                                                      console.log(e)
                                                      setIsShown(!isShown);
                                                  }}
                                              >
                                                  حذف
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                              )}
                          </div>
                      );
                  })}
        </>
    );
}

export default Search;
