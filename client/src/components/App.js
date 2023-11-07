import { Switch, Route } from "react-router-dom";
import Header from "./subapp/Header";
import Home from "./subapp/Home.js";
import Mail from "./subapp/Mail"
import Sales from "./subapp/Sales"
import Inventory from "./subapp/Inventory"
import Production_status from "./subapp/Production_status"
import Components_orders from "./subapp/Components_orders"

function App() {




  return (
    <div>
      <Header />
      <main>

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/mail">
            <Mail />
          </Route>

          <Route exact path="/sales">
            <Sales />
          </Route>

          <Route exact path="/productionstatus">
            <Production_status />
          </Route>

          <Route exact path="/inventory">
            <Inventory />
          </Route>



          
          <Route exact path="/componentsorders">
            <Components_orders />
          </Route>


        </Switch>
      </main>
    </div>
  );
}

export default App;