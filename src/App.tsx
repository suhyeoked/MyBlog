import { useState } from 'react'
import './App.css'
import NabiBa from './component/NabiBa'
import {Link } from "react-router-dom";

function App() {
  let [good , setGood] = useState<number>(0)

  return (
    <>
     <NabiBa/>
     <section className="Blog">
      <div className="BlogTitle">
      <h1>
        title
      </h1>
      <span className="GoodBtn">
        <button onClick={()=>{
          setGood(good + 1)
        }}>
          공감
        </button>
      </span>
      <span>
        {good}
      </span>
      </div>
      <p>
        title-Body
      </p>
      <p>
        발행 날짜
      </p>
     </section>
     <section className="BlogFooter">
      <div>
        <Link to="/BlogWriting">
        글쓰기
        </Link>
        </div>
     </section>
    </>
  )
}

export default App
