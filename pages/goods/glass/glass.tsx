import React, { ReactChild, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { GoodsSS } from "../goods.style";
import Link from "next/link";
import { useRouter } from "next/router";

const GlassPage = (): JSX.Element => {
  const router = useRouter();
  const [glass, glassList] = useState([]);
  const menu = [
    ["모두"],
    ["custom", "non-custom"],
    ["남자", "여자", "남여공용", "키즈"],
    ["뿔테", "메탈", "티타늄", "하금테/콤비"],
    [
      "블랙",
      "브라운,호피",
      "골드",
      "로즈골드",
      "실버,그레이",
      "투명",
      "엠버",
      "화이트",
      "컬러풀",
    ],
    [
      "라운드",
      "스퀘어",
      "다각형",
      "캣츠아이",
      "투브릿지",
      "하금테",
      "오버사이즈",
      "보잉",
      "클립온",
      "스포츠",
    ],
    [
      "브랜드1",
      "브랜드2",
      "브랜드3",
      "브랜드4",
      "브랜드5",
      "브랜드6",
      "브랜드7",
      "브랜드8",
      "브랜드9",
      "브랜드10",
      "브랜드11",
      "브랜드12",
      "브랜드13",
      "브랜드14",
      "브랜드15",
      "브랜드16",
      "브랜드17",
      "브랜드18",
      "브랜드19",
      "브랜드20",
    ],
    ["10만원대", "20만원대", "30만원대", "40만원대", "50만원대"],
  ];
  const menus = [[], [], [], [], [], [], [], []];
  const All = (name: any) => {
    var value;
    axios.get("https://strapi.kspark.link/glasses").then((res) => {
      //모두
      const all = res.data;
      if (name === "all") value = all;
      //커스텀에 따라
      const custom = all.filter((fil) => {
        if (fil.IsCustom === "custom") {
          return true;
        }
      });
      if (name === "custom") value = custom;
      const noncustom = all.filter((fil) => {
        if (fil.IsCustom !== "custom") {
          return true;
        }
      });
      if (name === "noncustom") value = noncustom;
      //사용자에 따라
      menu[2].map((str, index) => {
        menus[2][index] = all.filter((fil) => {
          if (fil.byUser === index + 1) {
            return true;
          }
        });
        if (name === str) value = menus[2][index];
      });
      //재료에 따라
      menu[3].map((str, index) => {
        menus[3][index] = all.filter((fil) => {
          if (fil.byMaterial === index + 1) {
            return true;
          }
        });
        if (name === str) value = menus[3][index];
      });
      //색상에 따라
      menu[4].map((str, index) => {
        menus[4][index] = all.filter((fil) => {
          if (fil.byFrame_color === index + 1) {
            return true;
          }
        });
        if (name === str) value = menus[4][index];
      });
      //스타일에 따라
      menu[5].map((str, index) => {
        menus[5][index] = all.filter((fil) => {
          if (fil.byStyle === index + 1) {
            return true;
          }
        });
        if (name === str) value = menus[5][index];
      });
      //브랜드에 따라
      menu[6].map((str, index) => {
        menus[6][index] = all.filter((fil) => {
          if (fil.byBrand === index + 1) {
            return true;
          }
        });
        if (name === str) value = menus[6][index];
      });
      //가격에 따라
      menu[7].map((str, index) => {
        menus[7][index] = all.filter((fil) => {
          if (fil.byPrice === index + 1) {
            return true;
          }
        });
        if (name === str) value = menus[7][index];
      });

      glassList(value);
    });
  };

  return (
    <GoodsSS>
      <span>
        <div className={"title"}>GLASS</div>
      </span>
      <div className={"hello"} onClick={() => All("all")}>
        All
      </div>
      <div className={"wrap"}>
        <div className={"sort"}>
          ---custom에 따른 분류
          <div onClick={() => All("custom")}>커스텀</div>
          <div onClick={() => All("noncustom")}>non커스텀</div>
        </div>
        <div className={"sort"}>
          ---대상에 따른 분류
          {menu[2].map((value) => {
            return (
              <>
                <div onClick={() => All(value)}>{value}</div>
              </>
            );
          })}
        </div>
        <div className={"sort"}>
          ---material에 따른 분류
          {menu[3].map((value) => {
            return (
              <>
                <div onClick={() => All(value)}>{value}</div>
              </>
            );
          })}
        </div>
        <div className={"sort"}>
          ---frame_color 에 따른 분류
          {menu[4].map((value) => {
            return (
              <>
                <div onClick={() => All(value)}>{value}</div>
              </>
            );
          })}
        </div>
        <div className={"sort"}>
          ---style 에 따른 분류
          {menu[5].map((value) => {
            return (
              <>
                <div onClick={() => All(value)}>{value}</div>
              </>
            );
          })}
        </div>
        <div className={"sort"}>
          ---brand 에 따른 분류
          {menu[6].map((value) => {
            return (
              <>
                <div onClick={() => All(value)}>{value}</div>
              </>
            );
          })}
        </div>
        <div className={"sort"}>
          ---price에 따른 분류
          {menu[7].map((value) => {
            return (
              <>
                <div onClick={() => All(value)}>{value}</div>
              </>
            );
          })}
        </div>
      </div>

      <span>
        <div className={"goods"}>
          {glass.map((value) => {
            return (
              <>
                <div className={"goods_img"}>
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
                  <div>
                    <p>커스텀이니? {value?.IsCustom}</p>
                    <p>{value?.goodsName}</p>
                    <p>{value?.price}원</p>
                    <p>{value?.IsSoldout}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </span>
    </GoodsSS>
  );
};

export default GlassPage;
