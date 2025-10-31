// components/MeetOurTeamSection.tsx
import Image from "next/image";
import { cn } from "@/lib/utils";
import team1 from "../../media/team1.png";
import team2 from "../../media/team2.png";
import team3 from "../../media/team3.png";
import team4 from "../../media/team4.png";

type Member = {
  name: string;
  title1?: string;
  img: string;
  alt: string;
  // optional flag to render the decorative blob behind the portrait
  accent?: boolean;
};

const team: Member[] = [
  {
    name: "Chada El Islam Benmahcene",
    title1: " Entrogx Ventures Founder & CEO",
    img: team1.src,
    alt: "Portrait of Chada El Islam Benmahcene",
    accent: true,
  },
  {
    name: "Mohammed Ikbal ",
    title1: "Entrogx Ventures Representative ",
    img: team2.src,
    alt: "Portrait of Mohammed Ikbal Benmahcene",
  },
  {
    name: "Abigail Olayinka Shobaloju",
    title1: "Product manager",
    img: team3.src,
    alt: "Portrait of Abigail Olayinka Shobaloju",
  },
  {
    name: "Benazouz Ayat",
    title1: "Graphic and UI/UX Designer",
    img: team4.src,
    alt: "Portrait of Benazouz Ayat",
  },
];

function TeamCard({ name, title1, img, alt, accent }: Member) {
  return (
    <article
      className={cn(
        "group h-full flex flex-col rounded-2xl border w-full hover:bg-[#E7EFFD] bg-white shadow-sm transition-transform transform ",
        "border-gray-200"
      )}
      aria-label={name}
    >
      {/* image area */}
      <div className="lg:p-4 p-3 ">
        {/* fixed responsive height here ensures equal image height across all cards */}
        <div className="relative mx-auto w-full  h-25 md:h-64 lg:h-72 overflow-hidden rounded-xl bg-muted">
          <div className="relative z-10 h-full  overflow-hidden rounded-xl w-full bg-gray-100">
            <Image
              src={img || "/placeholder.svg"}
              alt={alt}
              fill
              className="object-fill"
              priority={false}
            />
          </div>
        </div>
      </div>

      {/* content */}
      <div className="mb-auto px-5  py-3 pb-5 lg:py-5 lg:pb-7 text-center">
        <h3 className="text-sec-h3 font-semibold text-[#212121]">{name}</h3>
        <p className="mt-1 text-[9px] lg:text-[16px] font-semibold text-[#5A5959]">
          {title1}
        </p>
      </div>
    </article>
  );
}

export function MeetOurTeamSection() {
  return (
    <section className=" 2xl:max-w-[74%]  max-w-[95%] mx-auto px-4 lg:px-6  py-8 md:py-22">
      <div className="mx-auto  text-center">
        <h2 className="text-pretty text-hero-h1 font-semibold tracking-tight text-[#212121] lg:block hidden">
          Meet Our Team
        </h2>{" "}
        <h2 className="text-pretty text-[18px] font-semibold tracking-tight text-[#212121] lg:hidden block ">
          Meet Our Team
        </h2>
      </div>

      {/* Responsive grid:
          2 col on mobile, 2 on sm, 3 on md, 4 on lg+ */}
      <div
        className="mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        role="list"
        aria-label="Team members"
      >
        {team.map((m) => (
          <div key={m.name} role="listitem" className="flex ">
            {/* flex ensures cards stretch to same height */}
            <TeamCard {...m} />
          </div>
        ))}
      </div>
    </section>
  );
}
