import Layout from "components/Layout";
import React, { useCallback, useEffect, useState } from "react";
import { GoodsSS } from "../goods.style";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";

const NewPage = (): JSX.Element => {
  const router = useRouter();
  const [glassBest, glassBestList] = useState([]);
  const [sunglassBest, sunglassBestList] = useState([]);
  useEffect(() => {
    axios.get("https://strapi.kspark.link/glasses").then((res) => {
      const glass = res.data;

      const best = glass.filter((value) => {
        if (value.new === true) {
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
        if (value.New === true) {
          return true;
        }
      });
      sunglassBestList(best);
    });
  }, []);
  return (
    <Layout>
      <GoodsSS>
        <span>
          <div className={"title"}>NEW</div>
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
    </Layout>
  );
};

export default NewPage;
