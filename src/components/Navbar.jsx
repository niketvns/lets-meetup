import logo from '../assets/Meetup-logo.png'
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <header className='flex justify-between items-center px-6 py-2 border-b'>
            <div className="logo w-32 cursor-pointer">
                <img src={logo} alt="logo" className='w-full' onClick={()=>navigate('/')}/>
            </div>
            <div className="search">
                <input type="search" placeholder='Search by title and tags...' className='border w-60 outline-black/20 p-2 rounded'/>
            </div>
        </header>
    );
};

export default Navbar;