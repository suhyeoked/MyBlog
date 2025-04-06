import React, { useState } from 'react';
import './App.css';
import NabiBa from './component/NabiBa';
import { Link } from "react-router-dom";
import BlogWriting from './component/BlogWriting';

function App() {
  let [title, setTitle] = useState<string[]>(["예시 1"]);
  let [blogBody , setBlogBody] = useState<string[]>([])
  let [good, setGood] = useState<number[]>(new Array(title.length).fill(0));
  let [isWriting, setIsWriting] = useState<boolean>(false);
  
  return (
    <>
      <NabiBa />
      {
        title.map((title, i) => {
          return (
            <section className="Blog">
              <div className="BlogTitle">
                <Link to="/" target="_blank">
                <h1>{title}</h1>
                </Link>
                <span className="GoodBtn">
                  <button onClick={() =>{
                    let copy = [...good]
                    copy[i] += 1
                    setGood(copy)
                  } 
                  }>
                    공감
                  </button>
                </span>
                <span>
                  {good[i]}
                </span>
              </div>
            </section>
          );
        })
      }
      <section className="BlogFooter">
        <Link to = "./BlogWriting" target="_blank">
          글쓰기
          </Link>
      {isWriting && (
        <BlogWriting 
          title={title} 
          setTitle={setTitle} 
          blogBody={blogBody} 
          setBlogBody={setBlogBody}
        />
      )}
      </section>
    </>
  );
}

export default App;
