import Layout from "components/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoodsSS } from "../goods.style";
import { useRouter } from "next/router";

const BestPage = (): JSX.Element => {
  const router = useRouter();
  const [glassBest, glassBestList] = useState([]);
  const [sunglassBest, sunglassBestList] = useState([]);
  useEffect(() => {
    axios.get("https://strapi.kspark.link/glasses").then((res) => {
      const glass = res.data;

      const best = glass.filter((value) => {
        if (value.best === true) {
          return true;
        }
      });
      glassBestList(best);
    });
  }, []);
  useEffect(() => {
    axios.get("https://strapi.kspark.link/sunglasses").then((res) => {
      const sunglass = res.data;

      const best = sunglass.filter((value) => {
        if (value.Best === true) {
          return true;
        }
      });
      sunglassBestList(best);
    });
  }, []);
  return (
    <GoodsSS>
      <span>
        <div className={"title"}>BEST</div>
      </span>
      <span>
        <div className={"goods"}>
          {glassBest.map((value) => {
            return (
              <>
                <div className={"goods_img"}>
                  <figure>
                    <img
                      src={value?.img_url}
                      alt={value?.goodsName}
                      onClick={() => {
                        router.push({
                          pathname: "/goods/one/value",
                          query: value,
                        });
                      }}
                    />
                    <div className={"custom"}>{value?.IsCustom}</div>
                    <div className={"soldout"}>{value?.IsSoldout}</div>
                  </figure>
                  <figure>
                    <div>
                      <p>
                        <button>좋아요</button>
                      </p>
                      <p>{value?.goodsName}</p>
                    </div>
                    <p>{value?.price}원</p>
                  </figure>
                </div>
              </>
            );
          })}
          {sunglassBest.map((value) => {
            return (
              <>
                <div className={"goods_img"}>
                  <figure>
                    <img
                      src={value?.img_url}
                      alt={value?.goodsName}
                      onClick={() => {
                        router.push({
                          pathname: "/goods/one/value",
                          query: value,
                        });
                      }}
                    />
                    <div className={"custom"}>{value?.IsCustom}</div>
                    <div className={"soldout"}>{value?.IsSoldout}</div>
                  </figure>
                  <figure>
                    <div>
                      <p>
                        <button>좋아요</button>
                      </p>
                      <p>{value?.goodsName}</p>
                    </div>
                    <p>{value?.price}원</p>
                  </figure>
                </div>
              </>
            );
          })}
        </div>
      </span>
    </GoodsSS>
  );
};

export default BestPage;
