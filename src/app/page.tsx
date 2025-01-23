import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center md:min-h-screen p-8 sm:p-20">
      <main className="flex flex-col md:flex-row gap-8 items-center">
        <Image
          src="/profile.jpg"
          alt="Picture of Alyssa"
          width={250}
          height={250}
          unoptimized={true}
          priority
        />
        <div className="flex gap-4 items-start flex-col">
          <h1 className="font-bold text-2xl lg:text-4xl">Hi, {`I'm Alyssa!`}</h1>
          <p className="text-justify lg:text-2xl">
            I have recently graduated from <a className="underline underline-offset-4 decoration-coral hover:underline hover:underline-offset-4 hover:text-coral" href="https://www.dlsu.edu.ph/">
            De La Salle University (DLSU)</a> with a {`bachelor's`} degree in Computer Science, majoring in Software Technology. I am currently 
            looking for roles related to front-end development and UI/UX design or research. If you are aware of any opportunities where I might 
            be a good fit, feel free to contact me!
          </p>
          {/* <div className="flex flex-row gap-4">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div> */}
        </div>
      </main>
    </div>
  );
}
