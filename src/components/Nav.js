import {NavLink} from 'react-router-dom'; 

const Nav = () => {
    return (
        <nav className="main-nav">
        <ul>
          <li><NavLink to='/Dancing'>Dancing</NavLink></li>
          <li><NavLink to='/Acting'>Acting</NavLink></li>
          <li><NavLink to='/Painting'>Painting</NavLink></li>
        </ul>
      </nav>
    )
}

export default Nav; 