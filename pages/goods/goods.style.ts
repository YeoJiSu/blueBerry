import styled from "styled-components";
//import { theme } from "@/styles/theme";
//display: flex; 만 하면 옆으로 넘기는 거 가능
export const GoodsSS = styled.div`
  //min-width: 1200px;
  width: 100%;
  min-width: 1530px;

  .title {
    width: 90%;
    margin-left: 5%;
    text-align: center;
    font-weight: 800;
    font-size: 80px;
    margin-top: 300px;
  }

  .goods {
    margin-left: 5%;
    //margin-right: 20px;
    align-items: center;
    //width: 100%;
    display: flex;
    //flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
    //margin-left: 5%;
    //position: absolute;
    //margin-left: 10%;
    //margin-top: 200px;
    //margin-bottom: 100px;

    //width: 1360px;
    .goods_img {
      margin: 20px;
      img {
        width: 300px;
      }
    }
  }
`;
