import React from "react";
import { Outlet } from "react-router-dom";

import NavHome from "components/NavHome/NavHome";

export default function HomeTemplate() {
  return (
    <>
      <NavHome />
      <Outlet />
    </>
  );
}
