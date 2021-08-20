import React, { useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { LikeButtonStyled } from "./LikeButton.Styled";

const LikeButtonPresenter = (): JSX.Element => {
  // state = {
  //   isChecked: false,
  //   notice: " ",
  // };
  //const [isChecked, notice] = useState("");

  // const onClick = () => {
  //   isChecked
  //     ? useState({
  //         isChecked: false,
  //         notice: "",
  //       })
  //     : useState({
  //         isChecked: true,
  //         notice: "좋아요 1회",
  //       });
  // };
  const [Likes, setLikes] = useState(0);
  const [Click, setClick] = useState("");
  return (
    <>
      <LikeButtonStyled>
        {/* <div className="icons-list">
          {Click ? (
            <HeartFilled className="button red" onClick={onClick} />
          ) : (
            <HeartOutlined className="button" onClick={onClick} />
          )}
          <h3>{notice}</h3>
        </div> */}
      </LikeButtonStyled>
    </>
  );
};

export default LikeButtonPresenter;
