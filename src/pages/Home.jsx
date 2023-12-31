import {useGlobalMeetup} from "../contexts/meetupContext.jsx";
import EventCard from "../components/EventCard.jsx";

const Home = () => {
   const {filteredEvents, setSelectedEventType} =  useGlobalMeetup()

    return (
        <main className='p-1 sm:p-4 flex flex-col sm:gap-2 items-center justify-center w-full'>
            <div className='sm:w-[90%]'>
                <div className="heading flex justify-between min-w-[90vw]">
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
                        filteredEvents.length ?
                        filteredEvents.map(event => (
                            <EventCard key={event.id} event={event}/>
                        )) :
                            <p className='text-xl text-black/30 w-full md:min-h-[60vh] flex items-center justify-center py-4'>No Event Found for your Search</p>
                    }
                </div>
            </div>
        </main>
    );
};

export default Home;