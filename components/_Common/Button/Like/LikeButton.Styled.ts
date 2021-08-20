import styled from "styled-components";

//styled-component 적용하기
export const LikeButtonStyled = styled.button`
  .icons-list {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    flex-direction: column;
  }
  .button {
    cursor: pointer;
    transition: transform 300ms ease;
    font-size: 100px;
  }
  .red {
    color: red;
  }
  h3 {
    height: 30px;
    width: 100px;
  }
  .button:hover {
    transform: scale(1.1);
  }
`;
