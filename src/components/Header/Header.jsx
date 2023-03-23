import "./Header.css";
import React, {useRef,useEffect} from "react";
import logo from "../../assets/images/logo.png";
import { NavLink,Link } from "react-router-dom";
import { Container, Row, Button } from "reactstrap";

const Header = () => {
  const headerRef = useRef(null);
  const stickyHeader = () => {
    window.addEventListener('scroll',() => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add("sticky_header");
      }else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  }
  useEffect(() => {
    stickyHeader();
    return window.removeEventListener('scroll',stickyHeader);
  },[]);
  const nav_links = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/tours",
      display: "Tours",
    },
  ];
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/* ==== logo ==== */}
            <div className="logo">
              <img src={logo} alt="logo"/>
            </div>
            {/* ==== logo ==== */}
            {/* ==== menu ==== */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => {
                  return (
                    <li className="nav_item" key={index}>
                      <NavLink to={item.path}
                      className={activeClass => 
                      activeClass.isActive ?
                    'active_link' : '' }>{item.display}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* ==== menu ==== */}
            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to={"/login"}>Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to={"/register"}>Register</Link>
                </Button>
              </div>
              <div className="mobile_menu">
                <i className="ri-menu-line"></i>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
