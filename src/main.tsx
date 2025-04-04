import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Route, Routes } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import BlogWriting from './component/BlogWriting.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/BlogWriting" element={<BlogWriting />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
