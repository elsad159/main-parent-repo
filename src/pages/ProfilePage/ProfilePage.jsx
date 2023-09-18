import React, { useRef, useState } from "react";
import Root from "../../routes/root";
import "./ProfilePage.css";
import { AiOutlineEdit } from "react-icons/ai";

const ProfilePage = () => {
  const fileInputRef = useRef(null);
  const [avatarImage, setAvatarImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuTlcCctMXq1q9QJtnBmP4gD7KMGcJvD0OfQ&usqp=CAU"
  );

  const handleEditPhoto = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setAvatarImage(objectURL);
    }
  };

  return (
    <div className="course-account-page">
      <Root />
      <div className="course-account-content">
        <h1 className="account-title">Account</h1>
        <div className="parent-section">
          <div className="parent-details">
            <div className="parent-avatar">
              <img src={avatarImage} alt="Parent Avatar" />
              <div
                style={{ cursor: "pointer", color: "grey" }}
                className="edit-photo-text"
                onClick={handleEditPhoto}
              >
                <span style={{ display: "flex", alignItems: "center", marginLeft: 60 }}>
                  Edit
                  <AiOutlineEdit />
                </span>
              </div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
            <div className="parent-info">
              <h3 className="parent-name">Tofiq İsmayilov</h3>
              <p className="parent-email">tofiqismayilov@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
