import Link from "next/link"
export default function BackDiscoverEvent(){
    return(
        <>
        <Link href={"/DiscoverEvent"}>
        <div className="text-center text-[#222432] text-2xl lg:text-3xl font-bold ">
           &lt; Back to Discover Event
        </div>
        </Link>
        </>
    )
}