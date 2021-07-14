import React, { useState } from "react";
import cx from "classnames";
import Styles from "./Joinus.module.css";
import globalStyles from "../../../Assets/Global-Styles/bootstrap.min.module.css";

function Joinus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submitForm = (e) => {
    const newEntry = {
      name,
      email,
      department,
    };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };
  return (
    <>
      <div className={cx(Styles.body, globalStyles["row"])}>
        <div
          className={cx(
            Styles.leftSec,
            globalStyles["col-lg-4"],
            globalStyles["col-md-4"],
            globalStyles["col-sm-12"],
            globalStyles["mx-auto"],
            globalStyles["pt-4"]
          )}
        >
          <div className={Styles.imgWrap}>
            <img
              src="https://picsum.photos/800/500"
              className={cx(Styles.picture, globalStyles["img-fluid"])}
              maxWidth="100%"
            />
          </div>
        </div>

        <div
          className={cx(
            Styles.rightSec,
            globalStyles["col-lg-8"],
            globalStyles["col-md-8"],
            globalStyles["col-sm-6"],
            globalStyles["mx-auto"],
            globalStyles["pt-5"],
            globalStyles["pl-3"]
          )}
        >
          <div className={Styles.wrapForm}>
            <h2 className={Styles.heading}>Want to join us?</h2>
            <p className={Styles.info}>
              Fill the form below and we'll get in touch
            </p>

            <form action="" onSubmit={submitForm}>
              <div
                className={cx(
                  globalStyles["form-group"],
                  Styles.formRow,
                  globalStyles["row"]
                )}
              >
                <label
                  htmlFor="name"
                  className={cx(
                    globalStyles["col-sm-3"],
                    globalStyles["col-form-label"]
                  )}
                >
                  Name
                </label>
                <div
                  className={cx(globalStyles["col-sm-9"], globalStyles["pt-2"])}
                >
                  <input
                    autoComplete="off"
                    name="Name"
                    className={Styles.inputform}
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div
                className={cx(
                  globalStyles["form-group"],
                  Styles.formRow,
                  globalStyles["row"]
                )}
              >
                <label
                  htmlFor="mail"
                  className={cx(
                    globalStyles["col-sm-3"],
                    globalStyles["col-form-label"]
                  )}
                >
                  Mail Id
                </label>
                <div
                  className={cx(globalStyles["col-sm-9"], globalStyles["pt-2"])}
                >
                  <input
                    autoComplete="off"
                    name="Mail Id"
                    id="mail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div
                className={cx(
                  globalStyles["form-group"],
                  Styles.formRow,
                  globalStyles["row"]
                )}
              >
                <label
                  htmlFor="department"
                  className={cx(
                    globalStyles["col-sm-3"],
                    globalStyles["col-form-label"]
                  )}
                >
                  Department
                </label>
                <div
                  className={cx(globalStyles["col-sm-9"], globalStyles["pt-2"])}
                >
                  <input
                    autoComplete="off"
                    name="Department"
                    id="dept"
                    type="text"
                    required
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  />
                </div>
              </div>

              <div
                className={cx(
                  globalStyles["form-group"],
                  globalStyles["row"],
                  Styles.formRow
                )}
              >
                <div
                  className={cx(
                    globalStyles["col-sm-2"],
                    globalStyles["col-form-label"]
                  )}
                ></div>

                <div
                  className={cx(
                    globalStyles["col-sm-10"],
                    globalStyles["pt-0"]
                  )}
                >
                  <button
                    className={cx(globalStyles["btn"], Styles.btn)}
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Joinus;
