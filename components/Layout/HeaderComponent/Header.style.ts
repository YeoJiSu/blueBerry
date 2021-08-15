import styled from "styled-components";

//styled-component 적용하기
export const HeaderSS = styled.div<{ isLoggedIn: boolean }>`
  //background-color: ${(props) => props.theme.blue};
  z-index: 2;
  min-width: 1100px;
  position: fixed;
  background-color: white;
  left: 0;
  right: 0;
  top: 0;
  height: 80px;
  padding: 0px 30px 10px 30px;

  //min-width: 750px;
  .logo {
    float: left;
    img {
      width: 200px;
      padding-top: 5px;
    }
    img:hover {
      cursor: pointer;
    }
  }
  .description {
    display: none;
  }
  .reserve {
    display: none;
  }

  .header-login {
    float: right;
    padding-right: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    height: 100%;
    margin-top: 15px;
    p {
      text-align: center;
    }
    span {
      border-radius: 40px;
      padding: 5px 20px 5px 20px;
      margin-right: 10px;

      width: 170px;
      font-size: 15px;
      font-weight: 500;
      background-color: ${({ isLoggedIn }) =>
        isLoggedIn ? "#3e0f5a" : "black"};
      color: white;
    }
    span:hover {
      cursor: pointer;
    }
  }

  .pages {
    float: right;

    ul li {
      display: inline-block;
      margin-right: 60px;
      padding-top: 5px;
      position: relative;
    }
    ul li a {
      //color: ${({ isLoggedIn }) => (isLoggedIn ? "#3e0f5a" : "black")};
      font-size: 16px;
      display: inline-block;
      font-weight: 500;
      position: relative;
      line-height: 42px;
    }
    ul li a:hover {
      cursor: pointer;
    }
    ul li a:hover:after {
      opacity: 1;
    }

    ul li a:after {
      position: absolute;
      left: 0;
      bottom: 7px;
      width: 100%;
      height: 2px;
      background: black;
      content: "";
      opacity: 0;
      -webkit-transform: all 0.3s;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
    }
  }
  .header-bottom {
    display: none;
  }

  @media screen and (max-width: ${(props) => props.theme.new_width}) {
    min-width: 670px;
    .header-login {
      display: none;
    }
    .pages {
      display: none;
    }
    .description {
      display: flex;
      float: right;
      margin-top: -14px;
      margin-right: -70px;
      img {
        width: 150px;
      }
    }
    .reserve {
      display: flex;
      float: right;
      padding-right: 60px;
      flex-direction: row;
      align-items: center;
      flex-wrap: nowrap;
      height: 100%;
      margin-top: 15px;
      p {
        text-align: center;
      }
      span {
        border-radius: 40px;
        padding: 10px 30px 10px 30px;
        margin-right: 10px;

        width: 170px;
        font-size: 20px;
        font-weight: 200;
        background-color: ${({ isLoggedIn }) =>
          isLoggedIn ? "#3e0f5a" : "black"};
        color: white;
      }
    }
  }
  @media screen and (max-width: 485px) {
    height: 200px;
    //min-width: 4500px;//왜 적용이 안되지..?

    .logo img {
      width: 450px;
      padding-top: 20px;
    }
    .header-login {
      display: none;
    }
    .pages {
      display: none;
    }
    .description {
      display: flex;
      float: right;
      margin-top: 0px;
      margin-right: -70px;
      img {
        width: 300px;
      }
    }
    .reserve {
      display: flex;
      float: right;
      padding-right: 60px;
      flex-direction: row;
      align-items: center;
      flex-wrap: nowrap;
      height: 100%;
      margin-top: 15px;
      p {
        text-align: center;
      }
      span {
        border-radius: 40px;
        padding: 10px 30px 10px 30px;
        margin-right: 10px;

        width: 170px;
        font-size: 50px;
        font-weight: 200;
        background-color: ${({ isLoggedIn }) =>
          isLoggedIn ? "#3e0f5a" : "black"};
        color: white;
      }
    }
  }
`;
