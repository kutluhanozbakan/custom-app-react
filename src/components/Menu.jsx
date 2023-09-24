import React from "react";
import {Data} from "../helpers/Data";
import { MenuItem } from "./MenuItem";
import '../styles/Menu.css';
function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Skills</h1>
      <div className="menuList">
        {Data.map((menuItem, key) => {
          return <MenuItem 
          key={key}
          image = {menuItem.image}
          name = {menuItem.name}
          content = {menuItem.content}
          />;
        })}
      </div>
    </div>
  );
}

export default Menu;
