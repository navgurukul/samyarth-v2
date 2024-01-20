import Link from "next/link";
import { useState, useEffect } from "react";
import AppData from "@data/app.json";
import { useRouter } from "next/router";

import BackToTop from "../back-to-top/Index";
import Pentagon from "@layouts/pentagon/Index";

const DefaultHeader = ({ extraClass }) => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const { asPath } = useRouter();

  const navItems = AppData.header.menu.map((item, index) => {
    let s_class1 = "";

    if (item.children !== 0) {
      s_class1 = "mil-has-children";
    }
    if (
      (asPath.indexOf(item.link) !== -1 && item.link !== "/") ||
      asPath === item.link
    ) {
      s_class1 += " mil-active";
    }
    let newobj = { ...item, classes: s_class1 };
    return newobj;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setShow(window.innerWidth <= 1200);
      };

      window.addEventListener("resize", handleResize);
    }
  }, []);

  const clickedMobileMenuItemParent = (e) => {
    e.preventDefault();

    const lists = document.querySelectorAll(".mil-has-children ul");
    lists.forEach((list) => {
      list.classList.remove("mil-active");
    });

    const links = document.querySelectorAll(".mil-has-children a");
    links.forEach((link) => {
      link.classList.remove("mil-active");
    });

    e.target.classList.toggle("mil-active");
    e.target.parentNode.querySelector("ul").classList.toggle("mil-active");
  };

  return (
    <>
      {/* menu */}
      <div
        className=""
        style={{
          backgroundColor: "#000",
          padding: "10px 0",
          display: `${toggle ? "none" : "flex"}`,
          justifyContent: "space-between",
          position: "fixed",
          width: "100%",
          zIndex: 999,
          padding: "20px 20px",
          transition: "0.9s",
          backdropFilter: "invert(100%)",
        }}
      >
        <Link href={AppData.header.logo.link} className="mil-logo">
          <img
            src={AppData.header.logo.image}
            alt={AppData.header.logo.symbol}
          />
        </Link>
        <div
          className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          <span />
        </div>
      </div>

      <div className={`mil-menu-frame ${toggle ? "mil-active" : ""}`}>
        {/* frame clone */}
        <div className="mil-frame-top">
          <Link href={AppData.header.logo.link} className="mil-logo">
            <img
              src={AppData.header.logo.image}
              alt={AppData.header.logo.symbol}
            />
          </Link>
          <div
            className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
        {/* frame clone end */}
        <div className="container">
          <div className="mil-menu-content">
            <div className="row">
              <div className="col-xl-5">
                <nav className="mil-main-menu" id="swupMenu">
                  <ul>
                    {navItems.map((item, key) => (
                      <li
                        className={item.classes}
                        key={`header-menu-item-${key}`}
                      >
                        <Link
                          href={item.link}
                        onClick={()=>{
                          if(item.link=='/') setToggle(false);

                          if(item?.link=="/#team")
                            setToggle(false)
                          
                        }}
                        >
                          {item.label}
                        </Link>
                        {item.children !== 0 && (
                          <ul>
                            {item.children.map((subitem, key2) => (
                              <li
                                key={`header-submenu${key}-item-${key2}`}
                                className={
                                  (asPath.indexOf(subitem.link) !== -1 &&
                                    subitem.link !== "/") ||
                                  asPath === subitem.link
                                    ? "mil-active"
                                    : ""
                                }
                              >
                                <Link href={subitem.link}>{subitem.label}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* menu */}

      {/* curtain */}
      <div className="mil-curtain" />
      {/* curtain end */}

      {/* frame */}
      <div className="mil-frame">
        {show && (
          <div className="mil-frame-top">
            <Link
              href={AppData.header.logo.link}
              className="mil-logo"
              // style={{height:"20px", marginTop:"-2rem"}}
            >
              <img
                src={AppData.header.logo.image}
                alt={AppData.header.logo.symbol}
              />
            </Link>
            <div
              className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </div>
          </div>
        )}

        <div className="mil-frame-bottom">
          {/* <div className="mil-current-page" /> */}

          <BackToTop />
        </div>
      </div>
      {/* frame end */}
    </>
  );
};
export default DefaultHeader;
