'use client';
import Image from "next/image";
import profileImage from "@/src/assets/images/avatar-jessica.jpeg";
import { Lista } from "@/src/components/Lista";

export default function Home() {
  return (
    <main>
      <div>
        <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg 
      outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-5 pb-5 ">
              <Image
                src={profileImage}
                width={100}
                height={100}
                alt="Imagen de perfil"
                className="rounded-full"
              />
              <div>Jessica Randall</div>
            </div>
            <Lista />
          </div>
        </div>

        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Danielly Cardoso</a>.
        </div>
      </div>
    </main>
  );
}
