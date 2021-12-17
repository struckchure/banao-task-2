import React from "react";
import Controller from "../components/Controller";
import "../assets/scss/layouts.scss";
import Controller2 from "../components/Controller2";

export default function BasLayout({ children, controller_bg }) {
  return (
    <main>
      <div className="page-content">
        {/* <Controller controller_bg={controller_bg} /> */}
        <Controller2 controller_bg={controller_bg} />

        {children}
      </div>
    </main>
  );
}
