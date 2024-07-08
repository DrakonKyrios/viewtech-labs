import { getTime } from "date-fns";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

const ProfileIdentity = tw.div`absolute transition-opacity duration-1000 delay-50 ease-in-out w-full text-center flex justify-between pb-4 `;
const ProfileHeader = tw.div`font-futura-medium`;
export default function FunFact() {
  let [phase, setPhase] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log(phase);
      setPhase(phase++);
    }, 2000);
  }, []);

  return (
    <section className="relative h-8">
      <ProfileIdentity
        className={`${phase % 4 === 0 ? "opacity-100" : "opacity-0"}`}
      >
        <ProfileHeader>Bevarage:</ProfileHeader>
        <div>Masala Chai</div>
      </ProfileIdentity>
      <ProfileIdentity
        className={`${phase % 4 === 1 ? "opacity-100" : "opacity-0"}`}
      >
        <ProfileHeader>Food:</ProfileHeader>
        <div>Donkatsu</div>
      </ProfileIdentity>
      <ProfileIdentity
        className={`${phase % 4 === 2 ? "opacity-100" : "opacity-0"}`}
      >
        <ProfileHeader>Hobby:</ProfileHeader>
        <div>Puzzles</div>
      </ProfileIdentity>
      <ProfileIdentity
        className={`${phase % 4 === 3 ? "opacity-100" : "opacity-0"}`}
      >
        <ProfileHeader>Sport:</ProfileHeader>
        <div>Fútbol</div>
      </ProfileIdentity>
    </section>
  );
}
