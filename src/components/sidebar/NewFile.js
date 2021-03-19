import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "../../Styles/NewFile.css";

import firebase from "firebase";
import { storage, db } from "../../firebase";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

function NewFile() {
  return (
    <div className="newFile">
      <div className="newFile__container">
        <AddIcon />
        <p>New</p>
      </div>
    </div>
  );
}

export default NewFile;
