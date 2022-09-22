import React from "react";
import "../css/MyPageCard.css";
import FrequentPlace from "./FrequentPlace";
import UploadPhoto from "./UploadPhoto";
import TripStyle from "./TripStyle";
import UserInfo from "./UserInfo";

const MyPageCard = () => {
  return (
    <div className="cardContainer">
      <div>
        <UploadPhoto type="avatar" />
      </div>
      <div className="mt-10">
        <UserInfo />
      </div>
      <div className="mt-5">
        <TripStyle />
      </div>
      <div className="mt-5">
        <FrequentPlace />
      </div>
    </div>
  );
};

export default MyPageCard;