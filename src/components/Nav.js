import { NavLink } from 'react-router-dom'; 

//Navigation set up for pre-determined navigation elements
const Nav = () => {
    return (
        <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/dancing">
              Dancing
            </NavLink>
          </li>
          <li>
            <NavLink to="/acting">
              Acting
            </NavLink>
          </li>
          <li>
            <NavLink to="/painting">
              Painting
            </NavLink>
          </li>
          </ul>
      </nav>
    )
}

export default Nav; 