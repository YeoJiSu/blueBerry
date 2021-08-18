import styled from "styled-components";
//import { theme } from "@/styles/theme";
//display: flex; 만 하면 옆으로 넘기는 거 가능
export const GoodsSS = styled.div`
  height: 100%;
  .hello {
    padding-top: 100px;
    text-align: center;
  }
  .wrap {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    //align-items: center;
    .sort {
      float: left;
    }
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
      align-items: center;

      .goods_img {
        margin: 10px;

        img {
          width: 300px;
        }
      }
    }
  }
`;
