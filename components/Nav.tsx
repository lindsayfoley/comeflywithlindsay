import { FC, useState } from "react";
import Link from "next/link";
const classNames = require('classnames');

const Nav: FC = () => {
  const [navIsVisible, setNavStatus] = useState<boolean>(false);

  return (
    <>
      <div className="hamburger-container" onClick={() => setNavStatus(!navIsVisible)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="large-12 medium-12 column">
        <nav
          className={classNames('menu-centered', {
            ['nav-open']: navIsVisible
          })}
        >
          <ul className="vertical medium-horizontal menu">
            <li>
              <Link href="/destinations">
                <a>Destinations</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>{`
        nav { 
          padding-top: 20px; 
        }
        nav li { 
          font-size: 18px; 
          font-weight: bold; 
          position: relative; 
          text-transform: uppercase; 
          padding: 0 20px; 
          letter-spacing: 1px; 
        }
        nav li a { 
          color: #F7B044; 
        }
        @media all and (min-width: 668px) {
          .hamburger-container { 
            display: none; 
          }
          nav li:not(:first-of-type):after { 
            content: '•'; 
            color: #CBCBCB; 
            position: absolute; 
            top: 7px; 
            left: -5px; 
          }
          nav li a { 
            border-bottom: 4px solid transparent; 
          }
          nav li a:hover { 
            border-color: #e6e6e6; 
          }
        }
        @media all and (max-width: 667px) {
          nav {
            height: 0;
            opacity: 0;
            transition: all 0.2s linear;
            padding-top: 0;
         }
        .menu-centered.nav-open {
          height: 140px;
          opacity: 1;
          padding-top: 20px;
        }
        .hamburger-container {
          position: absolute;
          left: 0;
          top: 10px;
          width: 75px;
          padding: 15px 0;
          margin-top: 10px;
         }
        .hamburger-container div {
          width: 22px;
          height: 4px;
          background-color: black;
          margin: 4px 0 4px 20px;
          transition: 0.4s;
         }
        .hamburger-container div:first-of-type {
          margin-top: 0;
         }
        }
      `}</style>
    </>
  )
}

export default Nav;