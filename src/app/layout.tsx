'use client'
import '../styles/main.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';
import Sidemenu from './sidemenu';
import Topnavbar from './topnavbar';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [showSidebar, setShowSidebar] = useState(true);
  function toggleSidebar() {
    setShowSidebar(!showSidebar);

  }
  return (
    <>
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body className='display-flex flex flex-column'>
          <Topnavbar toggleSidebar={toggleSidebar}></Topnavbar>
          <div className="flex display-flex flex-row">
            <Sidemenu showSidebar={showSidebar}></Sidemenu>
            <div className='flex page-wrapper'>
              {children} 
            </div>
          </div>
          <script src="/js/bootstrap.js" async></script>
        </body>
      </html>
    </>
  )
}
