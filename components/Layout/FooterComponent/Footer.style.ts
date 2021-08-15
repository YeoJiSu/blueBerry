import styled from "styled-components";
//import { theme } from "@/styles/theme";

export const FooterSS = styled.div`
  color: white;
  min-width: 600px;
  //position: relative;
  .footer-bottom {
    //float: center;
    height: 100px;
    z-index: 1;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    box-shadow: 0 0.0875rem 0.375rem rgb(0 0 0 / 30%);
    height: 50px;
    text-align: center;
    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      //width: 100%;
    }
    ul li {
      width: 20%;
      align-items: center;
    }

    ul li a {
      color: black;
      //color: ${({ isLoggedIn }) => (isLoggedIn ? "#3e0f5a" : "black")};
      display: inline-block;
      position: relative;
    }

    ul li a:hover:after {
      opacity: 1;
    }

    ul li a:after {
      position: absolute;
      left: 0;
      //bottom: 0px;
      width: 100%;
      height: 2px;
      background: black;
      content: "";
      opacity: 0;
      -webkit-transform: all 0.3s;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
    }
    ul li a span {
      font-size: 11px;
      color: #1e1e1e;
      width: 18px;
      height: 18px;
      border: 2px solid #d0d7db;
      background: #fff;
      display: inline-block;
      line-height: 15px;
      text-align: center;
      border-radius: 50%;
      font-weight: 600;
      position: absolute;
      left: -9px;
      top: 14px;
    }
  }
`;
