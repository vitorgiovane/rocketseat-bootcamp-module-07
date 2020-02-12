import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Cart } from './styles'
import Logo from '../../assets/images/logo.svg'
import { MdShoppingBasket } from 'react-icons/md'

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My cart</strong>
          <span>3 items</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  )
}
