import React from 'react'
import { Link } from 'react-router-dom'

const UserProfile = () => {
  return (
    <>
     <div
            className="dropdown-menu profile-card shadow border-0"
              aria-labelledby="dropdownMenuButton"
            >
              <div className="row card_imf">
                <div className="col-1">
                  {/* <div className="avatar_icon text-center">
                    <p
                      style={{ paddingTop: "13%", color: "#6b69df" }}
                      className="bold"
                    >
                    </p>
                  </div> */}
                </div>
                <div className="col-10">
                  <div className="card-text text-center profile-fontSize">
                    {" "}
                   <h6>Welcome Guest !!</h6> 
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="dropdown-item addrow_btn btn btn-link text-center"
                >
                  Logout
                </button>
              </div>
            </div>
    
    </>
  )
}

export default UserProfile