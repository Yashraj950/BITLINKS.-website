import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
    <main className="bg-purple-100 my-20">
      <section className="grid grid-cols-2 ">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-4xl font-bold">
            The best place to shorten your links
          </p>
          <p className="px-52 text-center">
            We are the most straightforward URL shortener in the world , The
            best place to shorten your links We are the most straightforward URL
            shortener in the world , The best place Uk to shorten learning!
          </p>
          <div className='flex gap-3'>
       <Link href="/shorten"> <button className='bg-blue-500  text-white shadow-lg p-2 rounded-lg hover:-translate-x-2 hover:scale-110 hover:bg-cyan-500 py-1 font-bold '>Try Now</button></Link>
       <Link href="/github"><button className='bg-blue-500 text-white  shadow-lg p-2 rounded-lg hover:-translate-x-1 hover:scale-110 hover:bg-cyan-500 py-1 font-bold'>github</button></Link>
        </div>
        </div>
        <div className=" flex justify-center relative ">
          <Image
            className="mix-blend-darken"
            src={"/vector.jpg"}
            alt="hero"
            width={400}
            height={400}
          />
        </div>
      </section>
    </main>
  );
}
