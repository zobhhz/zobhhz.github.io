import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow justify-center items-center p-8 sm:px-20 max-w-7xl mx-auto">
      <main className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <Image
          src="/images/profile.jpg"
          alt="Picture of Alyssa"
          className="rounded-md shadow-sm"
          width={250}
          height={250}
          unoptimized={true}
          priority
        />
        <div className="flex gap-4 items-center md:items-start flex-col">
          <h1 className="font-bold text-2xl lg:text-4xl">Hi, {`I'm Alyssa!`}</h1>
          <p className="text-justify text-lg lg:text-2xl">
            I&apos;m a <a className="underline underline-offset-4 decoration-coral" href="https://www.dlsu.edu.ph/">
              DLSU</a> graduate with a {`bachelor's`} degree in Computer Science, majoring in Software Technology.
            I love bringing ideas to life through code and design, especially through front-end and full stack development.
            I&apos;m excited to start my career in web development and UI/UX design! Feel free to reach out if you&apos;d like to collaborate or connect 💗
          </p>
          <a
            href="https://drive.google.com/file/d/1nGFwNCS31xuO0OXrC7JKvGNBYQwz91N7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="align-center px-4 py-2 bg-coral text-white rounded text-center hover:text-white inline-block"
          >
            View CV
          </a>
        </div>
      </main>
    </div>
  );
}
