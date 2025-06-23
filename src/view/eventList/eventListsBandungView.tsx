import EventsListsBandung from "./components/eventListsBandung"
import Header from "../landingPage/components/header"
import BackHomeBar from "@/components/navBar/backHomeBar"
import BackDiscoverEvent from "@/components/navBar/backToDiscoverEvent"

export default function EventListsBandungView(){
    return(
        <>
        <Header/>
        <BackHomeBar/>
        <BackDiscoverEvent/>
        <EventsListsBandung/>
        </>
    )
}