import Link from "next/link"
export default function EventCreationBar(){
    return(
        <>
        <div className="flex flex-col justify-center items-center mt-5">
        <div className="text-3xl font-bold text-center">
        Create your own event! Share what you love with everyone!
        </div>
        <Link href={"/EventCreation"}>
        <div className="bg-[#222432] text-white font-bold px-6 py-4 rounded-2xl mt-5">
            Create your Event
        </div>
        </Link>
        </div>
        </>
    )
}