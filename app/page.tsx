"use client";
import Image from "next/image";
import profileImage from "@/src/assets/images/avatar-jessica.jpeg";
import { Lista } from "@/src/components/Lista";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex items-center justify-center">
        <div className="gap-x-4 rounded-xl p-10 bg-(--grey800) ">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-5 pb-8 ">
              <Image
                src={profileImage}
                width={100}
                height={100}
                alt="Imagen de perfil"
                className="rounded-full"
              />
            </div>
            <div className="flex gap-3 flex-col items-center pb-7">
              <p className="text-3xl font-[700]">Jessica Randall</p>
              <p className="font-[600] text-(--green)">London, United Kingdom</p>
              <p className="font-[400] last:pt-5">"Front-end developer and avid reader."</p>
            </div>
            <Lista />
          </div>
        </div>
      </div>
      <footer className="flex items-center justify-center">
        <div className="attribution">Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>
          . Coded by <a href="https://github.com/DaniellyCardoso">Danielly Cardoso</a>.
        </div>
      </footer>
    </main>
  );
}
