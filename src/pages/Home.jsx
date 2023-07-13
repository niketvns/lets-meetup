import {useGlobalMeetup} from "../contexts/meetupContext.jsx";
import EventCard from "../components/EventCard.jsx";

const Home = () => {
   const {filteredEvents, setSelectedEventType} =  useGlobalMeetup()

    return (
        <main className='p-4 flex flex-col gap-2 items-center justify-center w-full'>
            <div className='w-[90%]'>
                <div className="heading flex justify-between">
                    <h1 className='text-3xl'>Meetup Events</h1>
                    <select name="filter" id="filter" className='px-4 rounded cursor-pointer outline-0' onChange={(e)=>setSelectedEventType(e.target.value)}>
                        <option value="both" disabled>--Event Type--</option>
                        <option value="both">Both</option>
                        <option value="Offline">Offline</option>
                        <option value="Online">Online</option>
                    </select>
                </div>
                <div className="all-events mt-4 flex gap-4 flex-wrap">
                    {
                        filteredEvents.map(event => (
                            <EventCard key={event.id} event={event}/>
                        ))
                    }
                </div>
            </div>
        </main>
    );
};

export default Home;