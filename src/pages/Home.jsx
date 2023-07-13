import {useGlobalMeetup} from "../contexts/meetupContext.jsx";
import EventCard from "../components/EventCard.jsx";

const Home = () => {
   const {meetups} =  useGlobalMeetup()

    return (
        <main className='p-4 flex flex-col gap-2 items-center justify-center w-full'>
            <div className='w-[90%]'>
                <h1 className='text-3xl'>Meetup Events</h1>
                <div className="all-events mt-4 flex gap-4 flex-wrap">
                    {
                        meetups.map(event => (
                            <EventCard key={event.id} event={event}/>
                        ))
                    }
                </div>
            </div>
        </main>
    );
};

export default Home;