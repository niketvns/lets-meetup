import {createContext, useContext, useState} from "react";
import {data} from "../db/data.js";

const meetupContext = createContext()

const MeetupContextProvider = ({children}) => {
    const [meetups, setMeetups] = useState(data.meetups)
    const [searchInput, setSearchInput] = useState('')
    const [rsvpRecord, setRsvpRecord] = useState([])
    const [selectedEventType, setSelectedEventType] = useState('both')

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

    let filteredEvents = meetups.filter(event => event.title.toUpperCase().includes(searchInput.toUpperCase()))

    if(selectedEventType === 'both'){
        filteredEvents = meetups.filter(event => event.title.toUpperCase().includes(searchInput.toUpperCase()))
    }else if(selectedEventType === 'Offline' || selectedEventType === 'Online'){
        filteredEvents = meetups.filter(event => event.eventType === selectedEventType)
    }

    return (
        <meetupContext.Provider value={{meetups, findEvent, filteredEvents, searchInputHandler, rsvpFormSubmitHandler, isInRsvp, setSelectedEventType}}>
            {children}
        </meetupContext.Provider>
    )
}

const useGlobalMeetup = () => useContext(meetupContext)

export {MeetupContextProvider, useGlobalMeetup}