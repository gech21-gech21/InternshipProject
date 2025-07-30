"use client";
import Link from "next/link";
import Image from "next/image";
export default function firstproject() {
  return (
    <div className="text-center justify-center items-center">
      <h1 className="text-center font-bold p-9 shadow-lg">
        Exploring the Beauty of Nature
      </h1>{" "}
      <Image
        src="/image/agrow.png"
        className="object-contain mx-auto rounded-lg mt-4 "
        width={900}
        height={600}
        alt="agrow image"
      />
      <h1 className="m-10">about farming</h1>
      <p className="m-15 ">
        Agro-farming in Ethiopia is a cornerstone of the nation's economy and
        food security, involving diverse agricultural practices across its
        varied climates and landscapes. Predominantly characterized by
        smallholder farms, the sector produces key crops like teff, coffee,
        maize, and sorghum, while livestock farming is also significant. Despite
        its potential, Ethiopian agriculture faces challenges such as climate
        change, soil degradation, and limited access to modern technologies,
        which hinder productivity and market access. The government is actively
        working to enhance agricultural growth through initiatives that promote
        sustainable practices and improved infrastructure. Overall, the success
        of agro-farming is crucial for improving livelihoods and ensuring food
        security in the country.
      </p>
      <Link href="/comment"  className="rounded-lg bg-green-400 w-13 p-6"> Add comment</Link>
    </div>
  );
}
