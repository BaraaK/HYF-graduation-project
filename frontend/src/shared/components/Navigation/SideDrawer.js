import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

function SideDrawer(props) {
  const child = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
  );
  const container = document.getElementById("drawer-hook");
  // render children into a DOM node that exists outside the DOM hierarchy of the parent component.
  return ReactDOM.createPortal(child, container);
}

export default SideDrawer;
