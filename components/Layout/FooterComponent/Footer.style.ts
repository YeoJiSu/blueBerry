import styled from "styled-components";
//import { theme } from "@/styles/theme";

export const FooterSS = styled.div`
  min-width: 948px;
  bottom: 0;
  color: white;

  left: 0;
  right: 0;

  .footer-top {
    padding-top: 15px;
    background-color: rgb(0 0 0 / 5%);
    color: black;

    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 150px;
    p {
      margin-right: 100px;
      margin-left: 100px;
      font-size: 16px;
      font-weight: 700;
    }
    a p {
      font-size: 14px;
      font-weight: 400;
      line-height: 12px;
    }
    a p:hover {
      color: purple;
      cursor: pointer;
      font-weight: 900;
    }

    img:hover {
      background-color: #4200529e;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .footer-middle {
    background-color: rgb(0 0 0 / 5%);
    padding-top: 20px;
    padding-bottom: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: black;

    span:nth-child(1) {
      //padding: 30px;
      font-weight: 900;
      margin-right: 100px;
      margin-left: 100px;
    }
    span:nth-child(2) {
      //padding: 30px;
      font-size: 13px;
      margin-right: 100px;
      margin-left: 100px;
    }
  }
  .footer-bottom {
    //float: center;

    z-index: 1;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    box-shadow: 0 0.0875rem 0.375rem rgb(0 0 0 / 30%);
    height: 60px;
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
    ul li a img:hover {
      cursor: pointer;
    }
  }
`;
