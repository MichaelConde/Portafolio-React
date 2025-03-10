import React from 'react'
import { NavLink } from "react-router-dom"

export const ItemNavbar = ({styles,content,route }) => {
  return (
    <li>
    <NavLink className={styles} to={route}>{content}</NavLink>
  </li>
  )
}

