import React from 'react'
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
  return (
    <footer class="footer mt-auto py-3 bg-light sticky-top">
      <div class="container d-flex flex-row">
        <span class="text-muted col">© {new Date().getFullYear()} You Shop We Ship! All rights reserved.</span>
        <SocialIcon style={{ height: 30, width: 30, marginRight: '10px' }} url="https://facebook.com/You-Shop-We-Ship-104797934816411" />
        <SocialIcon style={{ height: 30, width: 30 }} url="https://instagram.com/youshopweship7" />
      </div>
    </footer>

  )
}

export default Footer
