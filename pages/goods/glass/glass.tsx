import React, { useCallback, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { GoodsSS } from "../goods.style";

const GlassPage = (): JSX.Element => {
  const [glass, glassList] = useState([]);
  useEffect(() => {
    axios
      .get("https://strapi.kspark.link/glasses")
      .then((response: AxiosResponse) => {
        const glassNew = response.data; /*
          .filter((value) => {
            if (value.New === true) {
              return true;
            }
          })
          .map((value) => {
            return value;
          });*/
        //console.log("glassNew", glassNew);
        glassList(glassNew);
      });
  }, []);

  return (
    <GoodsSS>
      <div className={"title"}>GLASS</div>
      <div className={"goods"}>
        {glass.map((value, index) => {
          return (
            <>
              <div className={"goods_img"}>
                <img
                  src={glass[index]?.img_url}
                  alt={glass[index]?.goodsName}
                />
                <p>{glass[index]?.goodsName}</p>
                <p>{glass[index]?.price}원</p>
              </div>
            </>
          );
        })}
      </div>
    </GoodsSS>
  );
};

export default GlassPage;
