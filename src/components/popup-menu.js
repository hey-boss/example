import React, { useContext, Fragment, useRef } from "react";
import { Link } from "gatsby";
import { MenuContext } from "@/context/menu-context";
import { LogoImage, NavLinks } from "@/data";

const PopupMenu = () => {
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const menuEl = useRef(null);
  const handleMenuClick = e => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };
  return (
    <div className="show-overlay-nav">
      <div className="popup popup__menu">
        <a
          href=""
          id="close-popup"
          onClick={handleMenuClick}
          className="close-popup"
        ></a>
        <div className="container mobileContainer">
          <div className="row">
            <div className="col-lg-12 text-left">
              <div className="logo2">
                <Link to="/">
                  <img src={LogoImage.light} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="popup-inner">
                <nav
                  className="popup-menu dl-menu__wrap text-center"
                  ref={menuEl}
                >
                  <ul>
                    {NavLinks.map((links, index) => {
                      return (
                        <li
                          key={index}
                          className={`${
                            undefined !== links.subItems
                              ? "menu-item-has-children"
                              : ""
                          }`}
                        >
                          <Link to={links.url}>{links.name}</Link>
                          {undefined !== links.subItems ? (
                            <Fragment>
                              <button
                                onClick={e => {
                                  menuEl.current
                                    .querySelectorAll(".sub-menu")
                                    .forEach(item => {
                                      item.classList.remove("show");
                                    });

                                  let clickedItem = e.currentTarget.parentNode;
                                  clickedItem
                                    .querySelector(".sub-menu")
                                    .classList.toggle("show");
                                }}
                              >
                                <i className="fa fa-angle-down"></i>
                              </button>
                              <ul className="sub-menu">
                                {links.subItems.map((subLinks, index) => (
                                  <li key={index}>
                                    <Link to={subLinks.url}>
                                      {subLinks.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </Fragment>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12 text-center text-md-left">
              <ul className="footer__contacts">
                <li>Phone: 000 000 000</li>
                <li>Email: info@kaizn.com</li>
                <li>
                  Address: Street, New York United States of America
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="popUp_social text-center text-md-right">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>Linked In
                    </a>
                  </li> 
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook-square"></i>Facebook
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupMenu;
