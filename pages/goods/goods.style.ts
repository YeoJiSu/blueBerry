import styled from "styled-components";
//import { theme } from "@/styles/theme";
//display: flex; 만 하면 옆으로 넘기는 거 가능
export const GoodsSS = styled.div`
  height: 100%;
  min-width: 860px;
  .name {
    padding-top: 60px;
    text-align: center;
    font-weight: 800;
  }
  .name span {
    border-radius: 50%;
    padding: 10px;
  }
  .name span:hover {
    color: white;
    background-color: purple;
    cursor: pointer;
  }
  .wrap {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    //align-items: center;
    padding-bottom: 60px;
  }
  .wrap .sort {
    float: right;
    margin-right: 90px;
  }

  .wrap .sort ul li {
    display: inline-block;
    margin-left: 60px;
    position: relative;
  }

  .wrap .sort ul li div {
    color: #1e1e1e;
    font-size: 16px;
    display: inline-block;
    font-weight: 500;
    position: relative;
    line-height: 42px;
  }

  .wrap .sort ul li div.active:after {
    opacity: 1;
  }

  .wrap .sort ul li div:hover:after {
    opacity: 1;
  }

  .wrap .sort ul li div:after {
    position: absolute;
    left: 0;
    bottom: 7px;
    width: 100%;
    height: 2px;
    background: #1e1e1e;
    content: "";
    opacity: 0;
    -webkit-transform: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .wrap .sort ul li:hover .sub-menu {
    visibility: visible;
    opacity: 1;
    margin-top: 0;
  }

  .wrap .sort ul li .sub-menu {
    position: absolute;
    list-style: none;
    width: 220px;
    left: 0;
    top: 100%;
    padding: 20px 0;
    visibility: hidden;
    opacity: 0;
    margin-top: 50px;
    background: #fff;
    z-index: 99;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    -webkit-box-shadow: 2px 7px 20px rgba(0, 0, 0, 0.2);
    box-shadow: 2px 7px 20px rgba(0, 0, 0, 0.2);
  }

  .wrap .sort ul li .sub-menu li {
    display: block;
    margin: 0;
  }

  .wrap .sort ul li .sub-menu li div {
    display: block;
    color: #000;
    margin-right: 0;
    padding: 0px 20px;
    font-size: 14px;
    line-height: 2.3;
    :hover {
      color: white;
      background-color: purple;
      cursor: pointer;
    }
  }

  .wrap .sort ul li .sub-menu li div:after {
    display: none;
  }

  span {
    .title {
      text-align: center;
      font-weight: 800;
      font-size: 80px;
      margin-top: 200px;
    }

    .goods {
      flex-wrap: wrap;
      display: flex;
      justify-content: center;

      .goods_img {
        figure {
          padding-bottom: 5px;
          position: relative;
          //overflow: hidden;
        }

        figure img {
          width: 300px;
        }
        figure .custom {
          position: absolute;
          left: 20px;
          top: 20px;
          //padding: 5px 16px;
          font-size: 20px;

          color: purple;
        }
        figure .soldout {
          position: absolute;
          right: 20px;
          top: 20px;
          //padding: 5px 16px;
          font-size: 18px;
          //background: white;
          color: white;

          background-color: black;
          letter-spacing: 5px;
          text-indent: 5px;
          text-shadow: 2px 1px red;
        }
        figure div {
          p :nth-child(1) {
            float: right;
          }
          p :nth-child(2) {
            display: flex;
          }
        }
      }
    }
  }
`;
