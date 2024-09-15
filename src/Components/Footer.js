import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
      <a href="/convert-case" className='logo'><img className='logo' src={`${process.env.PUBLIC_URL}/icon.png`} alt="website-logo" />Convert Case</a> 
        <p>This tool is developed by Mr. Nikhil Sharma <br /> You can reach me out at <a href="https://github.com/srmnikhil" target='_blank' rel='noreferrer'><img className="github-logo" src={`${process.env.PUBLIC_URL}/github-mark-white.png`} alt="" /></a></p>
        <p>Copyright @ 2024</p>
    </div>
  )
}
