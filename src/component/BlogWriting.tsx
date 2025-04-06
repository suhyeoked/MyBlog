import React, { createContext, useContext, useState } from 'react';
import NabiBa from './NabiBa'
import './BlogWriting.css'

interface BlogWritingInterface {
  title : string[]
  setTitle : React.Dispatch<React.SetStateAction<string[]>>
  blogBody : string[]
  setBlogBody : React.Dispatch<React.SetStateAction<string[]>> 
  textBlog : string
  setTextBlog : React.Dispatch<React.SetStateAction<string>> 
}

function BlogWriting(props : BlogWritingInterface) {

  return (
    <>
      <NabiBa />
      <div className="BlogWriting">
        <div className="BlogWritingTitle">
          <input type="text" placeholder='제목을 입력하시오' maxLength={10}
          onChange={(e)=>{
            props.setTextBlog(e.target.value)
            console.log(e.target.value)
          }}
          />
          <textarea className="BlogWritingBody" placeholder='내용을 입력하세요' rows={10} cols={50} 
          onChange={(e)=>{
            props.setTextBlog(e.target.value)
            console.log(e.target.value)
          }}/>
          <div className="BlogWritingSuccess">
          <button onClick={()=>{
            let copy = [...props.title]
            copy.unshift(props.textBlog)
            props.setTextBlog(copy)
          }}>
            작성 완료
          </button>
      </div>
        </div>
        
      </div>
      
    </>
  )
}

export default BlogWriting
