import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import React from "react";
import "../../Styles/SidebarItem.css";

function SidebarItem({ arrow, icon, label }) {
  return (
    <div className="sidebarItem">
      <div className="sidebarItem__arrow">{arrow && <ArrowRightIcon />}</div>
      <div className="sidebarItem__main">
        {icon}
        <p>{label} </p>
      </div>
    </div>
  );
}

export default SidebarItem;
