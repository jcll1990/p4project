import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./subapp/Header";
import Home from "./subapp/Home.js";
import Mail from "./subapp/Mail"
import Sales from "./subapp/Sales"
import Inventory_orders from "./subapp/Inventory_orders"
import Production_status from "./subapp/Production_status"
import Production_line from "./subapp/Production_line"

function App() {


  const [mail, setMail] = useState([]);
  const [user, setUser] = useState  ({});
  const [s_orders, sets_orders] = useState([]);



  useEffect(() => {
    fetch("http://localhost:3000/mail")
      .then((r) => r.json())
      .then(setMail);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/user/1")
      .then((r) => r.json())
      .then(setUser);
  }, []);

  useEffect(() => {
    if (user.id) {
      fetch("http://localhost:3000/s_orders")
        .then((r) => r.json())
        .then((data) => {
          const filteredOrders = data.filter((order) => order.vendor_id === user.id);
          sets_orders(filteredOrders);
        });
    }
  }, [user]);
  





  return (
    <div>
      <Header />
      <main>

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/mail">
            <Mail 
            user = {user}
            mail = {mail}
            setMail = {setMail}
            />
          </Route>

          <Route exact path="/sales">
            <Sales 
             user = {user}
             s_orders = {s_orders}
             sets_orders={sets_orders}

            />
          </Route>

          <Route exact path="/productionstatus">
            <Production_status />
          </Route>






          <Route exact path="/productionline">
            <Production_line />
          </Route>


          <Route exact path="/inventoryorders">
            <Inventory_orders />
          </Route>


        </Switch>
      </main>
    </div>
  );
}

export default App;