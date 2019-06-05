import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import LogoImg from '../../resources/image/Logo.svg'

export default class Header extends React.Component{

    render() {
        return(
            <Container>
                <div></div>
                   <Logo>
                       <Link to={'/'}>
                           <img src={LogoImg}/>
                       </Link>
                   </Logo>
                <Menu>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </Menu>
                <Cart>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    <span>Cart</span>
                    <Counter>0</Counter>
                </Cart>
                <Link to={'/register'}>
                    <SignInButton>SIGN IN</SignInButton>
                </Link>
            </Container>
        )
    }
}

const Container = styled.div`
  display: grid;
  grid-template-columns:  1fr 4fr 8fr 2fr 2fr ;
  grid-template-rows: 60px;
  background: #222328;
  color: #ececed;
  padding: 0;
  margin: 0;
  align-items: center;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    display: inline-block;
    padding: 20px 10px;
    font-size: 12px;
    height: 20px;
    vertical-align: center;
    cursor: pointer;
  }
  li:hover{
    background:#0d0e11;
  }
`;


const Logo = styled.div`
  display: block;
  height: 50px;
  align-self: center;
  a{
    display: block;
    height: 50px;
    text-decoration: none;
    color: white;
  }
  img{
      height: 50px;
      align-self: center;
      display: block;
      justify-content: right;
      cursor: pointer;
  }
`;

const Counter = styled.div`
  justify-self: left;
  padding: 2px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  background: #ececed;
  color: #222328;
  width: 15px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  height: 15px;
  margin-top: -2px;
`;

const Cart = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: 20px 35px 15px;
  cursor: pointer;
  span {
    font-size: 12px;
  }
`;

const SignInButton = styled.button`
  font-family: "Gilroy", sans-serif;
  height: 30px;
  border: 2px #ececed solid;
  background: #222328;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
  width: 80px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #0d0e11;
  }
`;