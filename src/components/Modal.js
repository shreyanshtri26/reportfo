import React from "react";
import userIcon from "../assets/userIcon.svg";
import FDsIcon from "../assets/FD.svg";
import Graph from "../assets/Graph.svg";
import logOut from "../assets/logOut.svg";
const Modal = ({ showModal, setShowModal }) => {
  return (
    showModal && (
      <div className="border absolute right-0 top-20 px-8 py-6 flex flex-col border rounded-lg gap-4 shadow shadow-lg bg-white z-10">
        <div className="flex gap-3">
          <img src={userIcon} alt=""/>
          <h1>My Profile</h1>
        </div>
        <div className="flex gap-3">
          <img src={FDsIcon} alt=""/>
          <h1>My FDs</h1>
        </div>
        <div className="flex gap-3">
          <img src={Graph} alt=""/>
          <h1>My Transactions</h1>
        </div>
        <div className="flex gap-3">
          <img src={logOut} alt=""/>
          <h1>Logout</h1>
        </div>
      </div>
    )
  );
};

export default Modal;
