import EventsListsPaid from "./components/eventsListsPaid"
import Header from "../landingPage/components/header"
import BackHomeBar from "@/components/navBar/backHomeBar"
import BackDiscoverEvent from "@/components/navBar/backToDiscoverEvent"

export default function EventListsPaidView(){
    return(
        <>
        <Header/>
        <BackHomeBar/>
        <BackDiscoverEvent/>
        <EventsListsPaid/>
        </>
    )
}