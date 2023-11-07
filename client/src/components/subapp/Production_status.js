import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Production_status() {


  return (
    <div>
            <h1>Production status</h1>

      <div id="pOrderList" ></div>
      <div id="saleGraphs" ></div>
      <div id="orderStatus" ></div>
      <div id="sOrderNew" ></div>
    </div>
  );
}

export default Production_status;
