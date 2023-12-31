import './App.css'
import Home from "./pages/Home.jsx";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import EventDetails from "./pages/EventDetails.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <div className='bg-black/10 min-h-[100vh]'>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/event-details/:eventId' element={<EventDetails/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;