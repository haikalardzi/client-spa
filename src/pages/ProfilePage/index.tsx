import React from 'react';
import ReactDOM from 'react-dom/client';
import './Profile.css'

function Profile() {
    return (
        <div className="ProfilePageContainer">
            <h1>
                Account Details
            </h1>
            <div className="text-field">
                <label className="detail-label">Email</label>
                {/* <input className="detail-value" type="text" id="email-value" placeholder=
                <?php echo isset($_SESSION["email"])?$_SESSION['email']:"<nologin>"?> 
                disabled> */}
            </div>
            <div className="text-field">
                <label className="detail-label">Username</label>
                {/* <input className="detail-value" type="text" id="username-value" placeholder=
                <?php echo isset($_SESSION["username"])?$_SESSION['username']:"<nologin>"?>
                disabled> */}
            </div>
            <div className="text-field">
                <label className="detail-label">Password</label>
                {/* <input className="detail-value password" type="password" id="password-value" placeholder="--------" disabled oninput="confirmPassword()" onchange="cancelConfirmPassword()"> */}
                <p className="password-criteria"></p>
            </div>
            <div className="text-field" id="confirm-password-field">
                <label className="detail-label">Confirm Password</label>
                {/* <input className="detail-value password" type="password" id="confirm-password-value" placeholder="Re-Type Password" oninput="confirmCorrectRetype()"> */}
                <p className="password-criteria"></p>    
            </div>
            <div className="button-field">
                <button id="edit-profile-button" 
                // onclick="startEdit()"
                >
                    Edit profile
                </button>
                <button id="cancel-edit-button" 
                // onclick="cancelEdit()"
                >
                    Cancel
                    </button>
                <button id="submit-edit-button" 
                // onclick="submitEdit()"
                >
                    Submit
                    </button>
            </div>
        </div>
    )
}

export default Profile;