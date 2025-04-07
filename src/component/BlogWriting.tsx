import React, { createContext, useContext, useState } from 'react';
import NabiBa from './NabiBa'
import './BlogWriting.css'
import { Link } from 'react-router-dom';

interface BlogWritingInterface {
  title : string[]
  setTitle : React.Dispatch<React.SetStateAction<string[]>>
  blogBody : string[]
  setBlogBody : React.Dispatch<React.SetStateAction<string[]>> 
  blogTitleText : string
  setBlogTitleText : React.Dispatch<React.SetStateAction<string>>
  blogBodyText : string
  setBlogBodyText : React.Dispatch<React.SetStateAction<string>> 
}

function BlogWriting(props : BlogWritingInterface) {

  return (
    <>
      <NabiBa />
      <div className="BlogWriting">
        <div className="BlogWritingTitle">
          <input type="text" placeholder='제목을 입력하시오' maxLength={10}
          onChange={(e)=>{
            props.setBlogTitleText(e.target.value)
            console.log(e.target.value)
          }}
          />
          <textarea className="BlogWritingBody" placeholder='내용을 입력하세요' rows={10} cols={50} 
          onChange={(e)=>{
            props.setBlogBodyText(e.target.value)
            console.log(e.target.value)
          }}/>
          <div className="BlogWritingSuccess">
            <Link to="/" onClick={()=>{
             let copyTitle = [...props.title];
             copyTitle.unshift(props.blogTitleText);
             props.setTitle(copyTitle); 

             let copyBody = [...props.blogBody];
             copyBody.unshift(props.blogBodyText);
             props.setBlogBody(copyBody); 
          }}>
            작성 완료

          </Link>
          
      </div>
        </div>
        
      </div>
      
    </>
  )
}

export default BlogWriting
