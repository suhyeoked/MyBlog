import React, { useState } from 'react';
import NabiBa from './NabiBa';
import './BlogWriting.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function BlogWriting() {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, blogBody } = location.state || {};
  const [blogTitleText, setBlogTitleText] = useState("");
  const [blogBodyText, setBlogBodyText] = useState("");

  const handleSubmit = () => {
    let copyTitle = [...title];
    copyTitle.unshift(blogTitleText);
    let copyBody = [...blogBody];
    copyBody.unshift(blogBodyText);

    // 글을 작성한 후, main 페이지로 이동하면서 새로운 데이터를 전달
    navigate("/", { state: { title: copyTitle, blogBody: copyBody } });
  };

  return (
    <>
      <NabiBa />
      <div className="BlogWriting">
        <div className="BlogWritingTitle">
          <input
            type="text"
            placeholder="제목을 입력하시오"
            maxLength={10}
            onChange={(e) => setBlogTitleText(e.target.value)}
          />
          <textarea
            className="BlogWritingBody"
            placeholder="내용을 입력하세요"
            rows={10}
            cols={50}
            onChange={(e) => setBlogBodyText(e.target.value)}
          />
          <div className="BlogWritingSuccess">
            <button onClick={handleSubmit}>작성 완료</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogWriting;
