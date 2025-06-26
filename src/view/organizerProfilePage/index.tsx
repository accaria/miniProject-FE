import Header from "../landingPage/components/header"
import BackHomeBar from "@/components/navBar/backHomeBar"

export default function OrganizerProfileView(){
    return(
        <>
        <Header/>
        <BackHomeBar/>
        <div className="flex flex-col justify-center items-center space-y-5 p-5">
        <div className="text-3xl lg:text-5xl font-bold">
            Our Event Organizers
        </div>
        <div className=" lg:text-2xl font-medium text-center lg:w-1/2">
            Go behind the scenes with the likes of Company A, Company B, and Company C to see why we're the most loved ticketing platform.
        </div>
        {/*From below, insert code for Event creators */}
        </div>
        </>
    )
}