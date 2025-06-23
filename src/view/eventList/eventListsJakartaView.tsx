import EventsListsJakarta from "./components/eventListsJakarta"
import Header from "../landingPage/components/header"
import BackHomeBar from "@/components/navBar/backHomeBar"
import BackDiscoverEvent from "@/components/navBar/backToDiscoverEvent"

export default function EventListsJakartaView(){
    return(
        <>
        <Header/>
        <BackHomeBar/>
        <BackDiscoverEvent/>
        <EventsListsJakarta/>
        </>
    )
}