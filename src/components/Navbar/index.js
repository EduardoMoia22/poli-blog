import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return(
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Poli <span>Blog</span>
      </NavLink>

      <ul className={styles.list_items}>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/login">
            Login
          </NavLink>

          <NavLink to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}