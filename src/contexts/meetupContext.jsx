import {createContext, useContext, useState} from "react";
import {data} from "../db/data.js";

const meetupContext = createContext()

const MeetupContextProvider = ({children}) => {
    const [meetups, setMeetups] = useState(data.meetups)

    const findEvent = (eventId) => {
        return meetups.find(event => event.id === eventId)
    }

    return (
        <meetupContext.Provider value={{meetups, findEvent}}>
            {children}
        </meetupContext.Provider>
    )
}

const useGlobalMeetup = () => useContext(meetupContext)

export {MeetupContextProvider, useGlobalMeetup}