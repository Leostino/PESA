// import react

import React from "react"


// google sign in component

function GoogleButton() {
    return (
        <div className="g-signin2 float-right mr-4" 
            data-onsuccess="onSignIn"
            data-scope="https://www.googleapis.com/auth/plus.login"
            data-accesstype="offline"
            data-redirecturi="https://pesajobs.herokuapp.com/view/jobs">
        </div>
    )
}


export default GoogleButton;






// <button className="btn btn-primary" onClick={props}>{props.children}</button>