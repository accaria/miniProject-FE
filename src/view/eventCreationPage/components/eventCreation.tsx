import BackHomeBar from "@/components/navBar/backHomeBar"


export default function EventCreation(){
    return(
        <>
        <div className="flex flex-col items-center justify-center">
            <BackHomeBar/>
            <div className="text-3xl font-bold mt-5">
                Create an Event with us!
            </div>
        
        </div>
        </>
    )
}