import {AiOutlineTwitter, AiFillInstagram} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import logo from '../assets/Meetup-logo.png'

const Footer = () => {
    return (
        <div className={'footer-main bg-black/90 p-4 mt-4'}>
            <div className="social-logo py-2 flex flex-col sm:flex-row gap-4 items-center justify-between sm:px-16">
                <div className="logo">
                    <img src={logo} alt={'logo-app'} width={150} height={100}/>
                </div>
                <div className="social flex items-center gap-4 transition duration-1000">
                    <a href={'https://twitter.com/Niketmishravns'} className={'icon text-xl sm:text-2xl bg-blue-500 hover:bg-white text-white hover:text-blue-500 rounded-full'}>
                        <AiOutlineTwitter className={'m-2'}/>
                    </a>
                    <a href={'https://www.instagram.com/mishrank_mkp25675/'} className={'icon text-xl sm:text-2xl bg-red-500 hover:bg-white text-white hover:text-red-500 rounded-full'}>
                        <AiFillInstagram className={'m-2'}/>
                    </a>

                    <a href={'https://www.linkedin.com/in/niket-kumar-mishra-37ab5a215/'} className={'icon text-xl sm:text-2xl bg-blue-700 hover:bg-white text-white hover:text-blue-700 rounded-full'}>
                        <FaLinkedinIn className={'m-2'}/>
                    </a>
                </div>
            </div>
            <div className="links flex sm:justify-around flex-wrap gap-4 sm:gap-8 text-white my-4">
                <div className="company">
                    <h2 className='text-xl border-b w-fit'>Company</h2>
                    <ul className='flex flex-col gap-1 mt-2'>
                        <li className='cursor-pointer hover:underline transition duration-1000'>Home</li>
                        <li className='cursor-pointer hover:underline transition duration-1000'>Contact us</li>
                        <li className='cursor-pointer hover:underline transition duration-1000'>About us</li>
                        <li className='cursor-pointer hover:underline transition duration-1000'>Get started</li>
                    </ul>
                </div>
                <div className="services">
                    <h2 className='text-xl border-b w-fit'>Services</h2>
                    <ul className='flex flex-col gap-1 mt-2'>
                        <li className='cursor-pointer hover:underline transition duration-1000'>App design</li>
                        <li className='cursor-pointer hover:underline transition duration-1000'>Web design</li>
                        <li className='cursor-pointer hover:underline transition duration-1000'>Logo design</li>
                        <li className='cursor-pointer hover:underline transition duration-1000'>Banner design</li>
                    </ul>
                </div>
                <div className="account">
                    <h2 className='text-xl border-b w-fit'>Account</h2>
                    <ul className='flex flex-col gap-1 mt-2'>
                        <li className='cursor-pointer hover:underline transition duration-1000'>Profile</li>
                        <li className='cursor-pointer hover:underline transition duration-1000'>My account</li>
                        <li className='cursor-pointer hover:underline transition duration-1000'>Prefrences</li>
                        <li className='cursor-pointer hover:underline transition duration-1000'>Purchase</li>
                    </ul>
                </div>
                <div className="courses">
                    <h2 className='text-xl border-b w-fit'>Courses</h2>
                    <ul className='flex flex-col gap-1 mt-2'>
                        <li className='cursor-pointer hover:underline transition duration-1000'>HTML & CSS</li>
                        <li className='cursor-pointer hover:underline transition duration-1000'>JavaScript</li>
                        <li className='cursor-pointer hover:underline transition duration-1000'>Photography</li>
                        <li className='cursor-pointer hover:underline transition duration-1000'>Photoshop</li>
                    </ul>
                </div>
                <div className="subscribe flex flex-col gap-2 w-full sm:w-auto sm:px-4 sm:p-0">
                    <h2 className='text-xl border-b w-fit'>Subscribe</h2>
                    <input type="text" placeholder='Enter Your Email'
                           className='bg-transparent border border-white outline-0 text-white p-2 sm:min-w-[250px] rounded'/>
                    <button className='bg-white text-black p-2 rounded'>Subscribe</button>
                </div>
            </div>
            <div className="copyright text-white py-4 flex flex-col gap-3 sm:flex-row justify-between items-center sm:px-16">
                <p>Copyright © 2023 Let's Meet. All rights reserved</p>
                <div className="terms flex items-center flex-wrap gap-4">
                    <p className='hover:underline cursor-pointer w-fit'>Privacy Policy </p>
                    <p className='hover:underline cursor-pointer w-fit'>Terms & Conditions</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;