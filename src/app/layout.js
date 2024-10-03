import { faCopyright, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import localFont from "next/font/local";
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
      <body>
      <header className="header">
        <div className="flex justify-around text-xs w-full items-center ">
          {/* Left section */}
          <div className="flex items-center justify-start ">
            <FontAwesomeIcon className='top-icon mx-2' icon={faPhone} />
            <p>+251 992 93 9495</p>
          </div>

          {/* Center section */}
          <div className="flex items-center justify-center ">
            <FontAwesomeIcon className='top-icon mx-2' icon={faCopyright} />
            <p>2024 All rights reserved | Rediet Muluken</p>
          </div>

          {/* Right section */}
          <div className=" flex items-center justify-end ">
            <select className='lang-options' defaultValue="en">
              <option value="en">En</option>
              <option value="amh">Am</option>
            </select>
          </div>
        </div>
      </header>


        <main>{children}</main>
      </body>
    </html>
  )
}
