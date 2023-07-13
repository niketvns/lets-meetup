import {createContext, useContext, useState} from "react";
import {data} from "../db/data.js";

const meetupContext = createContext()

const MeetupContextProvider = ({children}) => {
    const [meetups, setMeetups] = useState(data.meetups)
    const [searchInput, setSearchInput] = useState('')
    const [rsvpRecord, setRsvpRecord] = useState([])

    const findEvent = (eventId) => {
        return meetups.find(event => event.id === eventId)
    }

    const searchInputHandler = (e) =>{
        setSearchInput(e.target.value)
    }

    const rsvpFormSubmitHandler = (data) => {
        setRsvpRecord(prevState => [...prevState, data])
    }

    const isInRsvp = (eventId) => {
        return rsvpRecord.some(({id}) => id === eventId )
    }

    const filteredEvents = meetups.filter(event => event.title.toUpperCase().includes(searchInput.toUpperCase()))

    return (
        <meetupContext.Provider value={{meetups, findEvent, filteredEvents, searchInputHandler, rsvpFormSubmitHandler, isInRsvp}}>
            {children}
        </meetupContext.Provider>
    )
}

const useGlobalMeetup = () => useContext(meetupContext)

export {MeetupContextProvider, useGlobalMeetup}