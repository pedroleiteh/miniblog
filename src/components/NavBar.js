import { NavLink } from "react-router-dom"

import { useAuthentication } from "../hooks/useAuthentication"

import { useAuthValue } from "../context/AuthContext"

import styles from './NavBar.module.css'

const NavBar = () => {
  const {user} = useAuthValue()

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {!user && (
          <>
            <li>
             <NavLink to="/login">Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/register">Cadastrar-se</NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
             <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/posts/create">Novo Post</NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar