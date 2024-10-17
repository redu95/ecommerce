import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import localFont from "next/font/local";
import { AppProvider } from './context/AppContext';
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ecommerce",
  description: "Rediet Muluken's portfolio project",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='./favicon.ico' />
      </head>
      <body>
      <header className="header fixed w-full z-20">
        <div className="flex justify-around text-xs w-full items-center ">
          
          <div className="flex items-center justify-start ">
            <FontAwesomeIcon className='top-icon mx-2' icon={faPhone} />
            <p>+251 992 93 9495</p>
          </div>

        
          <div className="flex items-center justify-center ">
            <FontAwesomeIcon className='top-icon mx-2' icon={faCopyright} />
            <p>2024 All rights reserved | Rediet Muluken</p>
          </div>

          
          <div className=" flex items-center justify-end ">
            <select className='lang-options' defaultValue="en">
              <option value="en">En</option>
              <option value="amh">Am</option>
            </select>
          </div>
        </div>
      </header>


      <AppProvider>
          <main>{children}</main>
        </AppProvider>
        

        {/* <footer style={{ backgroundColor: '#555', padding: '20px 0', marginTop: '40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '20px' }}>
              <div>
                <h4>Romlina</h4>
                <p>Your one-stop shop for electronics and more.</p>
              </div>
              <div>
                <h4>Quick Links</h4>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/terms">Terms & Conditions</a></li>
                  <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h4>Follow Us</h4>
                <div className='flex flex-row flex-wrap'>
                  <a target='blank_' href="https://facebook.com" style={{ marginRight: '10px' }}><FontAwesomeIcon icon={faFacebook} className='w-4'/></a>
                  <a target='blank_' href="https://twitter.com" style={{ marginRight: '10px' }}><FontAwesomeIcon icon={faTwitter} className='w-4'/></a>
                  <a target='blank_' href="https://instagram.com" style={{ marginRight: '10px' }}><FontAwesomeIcon icon={faInstagram} className='w-4'/></a>
                  <a target='blank_' href="https://web.telegram.org" style={{ marginRight: '10px' }}><FontAwesomeIcon icon={faTelegramPlane} className='w-4'/></a>
                </div>
              </div>
            </div>
            <p style={{ fontSize: '14px' }}>© 2024 Romlina. All Rights Reserved.</p>
          </div>
        </footer> */}

      </body>
    </html>
  )
}
