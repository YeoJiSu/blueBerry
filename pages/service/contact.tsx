import Layout from "components/Layout";
import React from "react";

const ContactPage = (): JSX.Element => {
  return (
    <Layout>
      <main>
        <div>문의</div>
        <div>
          문의 글을 보내주시면 운영시간 내에 고객님의 이메일로 답변드리도록
          하겠습니다.
          <br />
          서비스 지원 언어 : English, Chinese, Korean
          <br />
          서비스 운영시간 : 9:00am to 6:00pm (GMT +9) Monday to Friday.
        </div>
        <div>분류</div>
        <div>배송지선택</div>
        <div>제목</div>
        <div>문의내용</div>
        <div>
          고객센터 이메일 : cs@gentlemonster.com
          <br />
          블루베리 본사 : 서울특별시 마포구 어울마당로5길 41 / 전화번호 1600.
          2126
        </div>
      </main>
    </Layout>
  );
};

export default ContactPage;
