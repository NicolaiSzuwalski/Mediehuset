import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { IoSearchOutline } from "react-icons/io5";

export const Navbar = () => {
  return (
    <nav className={styles.NavContainer}>
        <ul>
            <li><NavLink to='/'>FORSIDE</NavLink></li>
            <li><NavLink to='/Lineup'>LINEUP</NavLink></li>
            <li><NavLink to='/Program'>PROGRAM</NavLink></li>
            <li><NavLink to='Camps'>CAMPS</NavLink></li>
            <li><NavLink to='/Info'>INFO</NavLink></li>
            <li><NavLink to='/Tickets'>KØB BILLET</NavLink></li>
            <li><NavLink to='/Login'>LOGIN</NavLink></li>
            <div>
            <IoSearchOutline />
            </div>
        </ul>
    </nav>
  )
}
