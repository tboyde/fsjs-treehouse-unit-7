import { NavLink } from 'react-router-dom'; 


const Nav = ({lookUp}) => {
    return (
        <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/dancing" onClick={() => lookUp("dancing")}>
              Dancing
            </NavLink>
          </li>
          <li>
            <NavLink to="/acting" onClick={() => lookUp("acting")}>
              Acting
            </NavLink>
          </li>
          <li>
            <NavLink to="/painting" onClick={() => lookUp("painting")}>
              Painting
            </NavLink>
          </li>
          </ul>
      </nav>
    )
}

export default Nav; 