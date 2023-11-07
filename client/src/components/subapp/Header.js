

  import { Link, NavLink } from 'react-router-dom'

  const Header = ({ isDarkMode, onToggleDarkMode }) => {
    const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";
  
    return (
      <header>
        <nav>
          <h1> Motorcycles </h1>
          <div className="navigation">

          <NavLink className="button" exact to="/">
              Home
            </NavLink>

            <NavLink className="button" exact to="/mail">
              Mail
            </NavLink>

            <NavLink className="button" exact to="/sales">
              Sales
            </NavLink>

            <NavLink className="button" exact to="/productionstatus">
              Production status
            </NavLink>

            <NavLink className="button" exact to="/productionline">
              Production line
            </NavLink>

            <NavLink className="button" exact to="/inventoryorders">
              Inventory and Orders
            </NavLink>



          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;