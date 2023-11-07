import { useEffect, useState } from "react";

function Sales_info({ user, s_orders, sets_orders }) {
  const [selOrder, setSelOrder] = useState({});
  const [showOpenOrders, setShowOpenOrders] = useState(false);

  const openOrdersCount = s_orders.filter((order) => order.open === true).length;

  function handleOrderClick(a) {
    setSelOrder(a);
  }

  function toggleShowOpenOrders() {
    setShowOpenOrders(!showOpenOrders);
  }

  const filteredOrders = showOpenOrders
    ? s_orders.filter((order) => order.open === true)
    : s_orders;

  function newOrder(event) {
    event.preventDefault();
    const newOrder = {
      id: "",
      vendor_id: user.id,
      date_created: new Date().toLocaleString(),
      date_required: event.target.reqdate.value,
      M1: parseInt(event.target.M1req.value),
      M2: parseInt(event.target.M2req.value),
      M3: parseInt(event.target.M3req.value),
      open: true,
    };

    fetch("http://localhost:3000/s_orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });

    sets_orders((prevOrders) => [newOrder, ...prevOrders]);

    event.target.reset();
  }

  return (
    <div>
      <h1>Sales</h1>
      <div id="sOrderList">
        <h2>Open orders: {openOrdersCount}</h2>
        <button onClick={toggleShowOpenOrders}>
          {showOpenOrders ? "Show All Orders" : "Show Open Orders"}
        </button>
        {filteredOrders.map((order) => (
          <ul key={order.id} onClick={() => handleOrderClick(order)}>
            <li>Order ID: {order.id}</li>
            <li>Date Created: {order.date_created}</li>
            <li>Required Date: {order.date_required}</li>
            <li>M1 Required: {order.M1}</li>
            <li>M2 Required: {order.M2}</li>
            <li>M3 Required: {order.M3}</li>
            <li>Status: {order.open ? "Open" : "Closed"}</li>
          </ul>
        ))}
      </div>

      <div id="saleGraphs"></div>

      <div id="orderStatus"></div>





      setSelOrder

      <div id="sOrderNew">
        New Order
        <form onSubmit={newOrder}>
          <input
            type="number"
            id="M1req"
            placeholder="Motorcycle model 1 required"
          />
          <input
            type="number"
            id="M2req"
            placeholder="Motorcycle model 2 required"
          />
          <input
            type="number"
            id="M3req"
            placeholder="Motorcycle model 3 required"
          />
          <input type="date" id="reqdate" placeholder="Required date" />
          <button type="submit">Create order</button>
        </form>
      </div>
    </div>
  );
}

export default Sales_info;
