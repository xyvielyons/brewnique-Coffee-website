'use client'
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee"
const reviews = [
  {
    name: "Johnte",
    username: "@Johntez",
    body: "This place is absolutely fantastic. The vibe, the coffee—everything is spot on. Highly recommend!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Kamaaa",
    username: "@Kamaaa",
    body: "The ambiance here makes it my favorite spot to unwind. Truly a hidden gem.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "UhuruKenyatta",
    username: "@UhuruKenyatta",
    body: "Perfect place for a morning pick-me-up. The staff is always so friendly and welcoming.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Zakayo",
    username: "@zakayo",
    body: "I tried their new seasonal brew and I’m hooked. Can't wait to come back!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Wanjiku mbugua",
    username: "@Wanjiku mbugua",
    body: "Such a relaxing atmosphere, with great attention to detail. It feels like home.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "xyvie lyons",
    username: "@Creator of website",
    body: "Great Wi-Fi, great coffee, and an even greater experience. Ideal for remote work days!",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "GeorgeK",
    username: "@GeorgeKungu",
    body: "This is my go-to spot for catching up with friends. The outdoor patio is a must-try.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Yvonne waithera",
    username: "@Yvonnee",
    body: "I love how sustainable and eco-conscious this place is. It really makes a difference.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Ndemi Kirru",
    username: "@NdemiK",
    body: "Every visit is a delightful experience. The quality and service are unmatched.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
        <div className="flex items-center justify-center flex-col py-[24px] pb-4">
            <h1 className="md:text-[32px] text-[24px] text-primarycolor font-bold">Public cheers for us.</h1>
            <p className="text-sm text-slate-600 font-medium">Find out what our customers are saying about us.</p>
        </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-orange-200 dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-orange-200 dark:from-background"></div>
    </div>
  );
}
