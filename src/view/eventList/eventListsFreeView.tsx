import EventsListsFree from "./components/eventsListsFree"
import Header from "../landingPage/components/header"
import BackHomeBar from "@/components/navBar/backHomeBar"
import BackDiscoverEvent from "@/components/navBar/backToDiscoverEvent"

export default function EventListsFreeView(){
    return(
        <>
        <Header/>
        <BackHomeBar/>
        <BackDiscoverEvent/>
        <EventsListsFree/>
        </>
    )
}