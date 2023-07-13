import {useNavigate} from "react-router-dom";

const EventCard = ({event}) => {
    const navigate = useNavigate()
    return (
        <div className="event-card cursor-pointer w-[45%] md:w-auto" onClick={()=>navigate(`/event-details/${event.id}`)}>
            <div className="image md:w-80 relative">
                <div className="event-type absolute top-2 left-2 bg-white px-2 rounded">{event.eventType} Event</div>
                <img src={event.eventThumbnail} alt="event-image" className='w-full h-52 object-cover rounded-t-lg'/>
            </div>
            <div className="details">
                <p>{event.eventStartTime}</p>
                <h2 className='text-xl font-bold'>{event.title}</h2>
            </div>
        </div>
    );
};

export default EventCard;