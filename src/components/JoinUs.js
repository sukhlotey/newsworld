import React from "react";
import { useEffect, useState } from "react";
import jwt_Decode from "jwt-decode";
export default function JoinUs() {
  const [user, setUser] = useState({});

  function handlerCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_Decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handlerSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {

    /* global google */
    google.accounts.id.initialize({
      client_id:
        "680228076458-3a3gksp0urcfeo55kcv8ohnm8309cs26.apps.googleusercontent.com",
      callback: handlerCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();

  }, []);

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark" id="exampleModalToggleLabel">
                Join <i className="bi bi-person"></i>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ backgroundColor: "#0c1626" }}>
              <footer className="text-center text-white">
                <div
                  className="container p-4"
                  style={{ backgroundColor: "#0c1626" }}
                >
                  <section style={{ backgroundColor: "#0c1626" }}>
                    <div id="signInDiv"></div>
                   
                    {user && (
                      <div>
                        <img
                          style={{ borderRadius: "50%" }}
                          src={user.picture}
                      // eslint-disable-next-line
                      alt=" "
                          />
                        <h3>{user.name}</h3>
                        <h5 className="email-h3">{user.email}</h5>
                      </div>
                    )}
                     {
                      // eslint-disable-next-line
                      Object.keys(user).length != 0 && (
                        <button className="btnOut" onClick={(e) => handlerSignOut(e)}>
                          SignOut <i className="bi bi-box-arrow-right"></i>
                        </button>
                      )
                    }
                  </section>
                </div>
                <div className="text-center text-light p-3" style={{ backgroundColor: "#0f213b" }}>
                  NEWS DAILY
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
