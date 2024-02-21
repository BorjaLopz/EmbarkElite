import React, { useState } from "react";
import SearchComponent from "../SearchComponent/SearchComponent";
import "./style.css";

function HeaderComponent() {
  return (
    <header>
      <SearchComponent />
    </header>
  );
}

export default HeaderComponent;
