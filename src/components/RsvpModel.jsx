import {GrClose} from 'react-icons/gr'
import {useState} from "react";

const RsvpModel = ({setIsRsvpModel, eventDetails}) => {
    const [formInput, setFormInput] = useState({
        name: '',
        email: ''
    })

    const handleFormInput = (e) => {
        const {name, value} = e.target
        setFormInput(prevState => ({...prevState, [name]: value}))
    }

    return (
        <div className='fixed inset-0 bg-black/20 flex justify-center items-center'>
            <div className="rsvp-form min-w-[400px] bg-white p-8 rounded flex flex-col gap-4 relative">
                <div className="close-icon absolute top-2 right-2 bg-black/10 p-2 rounded-full cursor-pointer hover:bg-black/20 transition duration-700" onClick={()=>setIsRsvpModel(false)}>
                    <GrClose/>
                </div>
                <h1 className='text-2xl font-bold'>Complete your RSVP</h1>
                <h2>Fill in your personal information.</h2>
                <form action="" className='flex flex-col gap-4'>
                    <label htmlFor="name" className='flex flex-col gap-2'>
                        <p>Name:</p>
                        <input type="text" required name='name' placeholder='ex: John Doe' className='border w-full p-2 rounded' value={formInput.name} onChange={handleFormInput}/>
                    </label>
                    <label htmlFor="email" className='flex flex-col gap-2'>
                        <p>Email:</p>
                        <input type="text" required name='email' placeholder='ex: johndoe@email.com' className='border w-full p-2 rounded' value={formInput.email} onChange={handleFormInput}/>
                    </label>
                    {
                        eventDetails.isPaid &&
                        <div className="mark">
                            * You have to make the payment at the venue
                        </div>
                    }
                    <button className='bg-red-500 p-2 rounded text-white'>RSVP</button>
                </form>
            </div>
        </div>
    );
};

export default RsvpModel;