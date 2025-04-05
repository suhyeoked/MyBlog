import React from 'react'
import NabiBa from './NabiBa'
import './BlogWriting.css'

function BlogWriting() {
  return (
    <>
      <NabiBa />
      <div className="BlogWriting">
        <div className="BlogWritingTitle">
          <input type="text" placeholder='제목을 입력하시오' maxlength={10}/>
          <textarea className="BlogWritingBody" placeholder='내용을 입력하세요' rows={10} cols={50}/>
        </div>
      </div>
      <div className="BlogWritingSuccess">
          <button>
            작성 완료
          </button>
      </div>
    </>
  )
}

export default BlogWriting
