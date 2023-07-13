import {useGlobalMeetup} from "../contexts/meetupContext.jsx";
import {useParams} from "react-router-dom";
import {BiTimeFive} from 'react-icons/bi'
import {ImLocation2} from 'react-icons/im'
import RsvpModel from "../components/RsvpModel.jsx";
import {useState} from "react";

const EventDetails = () => {
    const [isRsvpModel, setIsRsvpModel] = useState(false)
    const {findEvent, isInRsvp} = useGlobalMeetup()
    const {eventId} = useParams()
    const eventDetails = findEvent(eventId)

    return (
        <>
            <div className='event-details px-16 py-8 flex gap-16'>
                <div className="event-discription w-[50%] flex flex-col gap-4">
                    <h1 className='text-3xl font-bold'>{eventDetails.title}</h1>
                    <div className="host">
                        <p className='font-bold'>Hosted By:</p>
                        <p>{eventDetails.hostedBy}</p>
                    </div>
                    <div className="image w-full">
                        <img src={eventDetails.eventThumbnail} alt="event-image" className='w-full'/>
                    </div>
                    <div className="details">
                        <h2 className='text-xl font-bold'>Details:</h2>
                        <p>{eventDetails.eventDescription}</p>
                    </div>
                    <div className="additional">
                        <h2 className='text-xl font-bold'>Additional Information:</h2>
                        <p><span className='font-bold'>Dress Code: </span>{eventDetails.additionalInformation.dressCode}</p>
                        <p><span className='font-bold'>Age Restrictions: </span> 18 and Above</p>
                    </div>
                    <div className="all-tags flex flex-col gap-2">
                        <h2 className='text-xl font-bold'>Event tags:</h2>
                        <div className="tags flex gap-4">
                            {
                                eventDetails.eventTags.map(tag => (
                                    <p className='bg-red-400 text-white p-2 rounded'>marketing</p>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="right flex-1 flex flex-col gap-6 items-center">
                    <div className="event-vanue min-w-[450px] bg-white p-4 px-10 rounded flex flex-col gap-2">
                        <div className="event-vanue-timing flex gap-4 items-center">
                            <div className="icon"><BiTimeFive/></div>
                            <div className="timing">
                                <p>{eventDetails.eventStartTime} to</p>
                                <p>{eventDetails.eventEndTime}</p>
                            </div>
                        </div>
                        <div className="marketing-city flex gap-4 items-center">
                            <div className="icon"><ImLocation2/></div>
                            <div className="city-name">
                                <p>Marketing City</p>
                                <p>{eventDetails.address ? eventDetails.address : eventDetails.location}</p>
                            </div>
                        </div>
                        <div className="price-details flex gap-4 items-center">
                            <div className="icon">&#8377;</div>
                            <div className="price">
                                <p>{eventDetails.price}</p>
                            </div>
                        </div>
                    </div>
                    {
                        eventDetails.speakers.length ?
                            <div className="speaker flex flex-col gap-2">
                                <h2 className='text-2xl font-bold'>Speakers: ({eventDetails.speakers.length})</h2>
                                <div className="all-speakers flex gap-4">
                                    {
                                            eventDetails.speakers.map(speaker => (
                                                <div className="speaker rounded bg-white min-w-[200px] flex flex-col justify-center items-center p-2">
                                                    <div className="img w-16">
                                                        <img src={speaker.image} alt="speaker-image" className='aspect-square object-fill rounded-full'/>
                                                    </div>
                                                    <div className="speaker-details w-full flex justify-center flex-col items-center px-4">
                                                        <h2 className='font-bold'>{speaker.name}</h2>
                                                        <h2>{speaker.designation}</h2>
                                                    </div>
                                                </div>
                                            ))
                                    }
                                </div>
                            </div> :
                            <p>Speaker Not available</p>
                    }
                    <div className="rsvp">
                        {
                            isInRsvp(eventDetails.id) ?
                                <button className='bg-red-300 cursor-not-allowed text-white px-12 min-w-[200px] py-2 rounded'>Already RSVP</button> :
                                <button className='bg-red-500 text-white px-12 min-w-[200px] py-2 rounded' onClick={()=>setIsRsvpModel(true)}>RSVP</button>
                        }

                        </div>
                </div>
            </div>
            { isRsvpModel && <RsvpModel setIsRsvpModel={setIsRsvpModel} eventDetails={eventDetails}/>}
        </>
    );
};

export default EventDetails;