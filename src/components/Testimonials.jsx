import { cn } from "../lib/utils";
import { Marquee } from "../components/magicui/marquee";

const reviews = [
  {
    name: "Leo Rivera",
    username: "@leopedals",
    body: "Rented a trail bike last weekend and it handled like a dream. PedalUp rocks!",
    img: "https://avatar.vercel.sh/leo",
  },
  {
    name: "Maya Cruz",
    username: "@mayaonwheels",
    body: "Smooth booking, quality bikes, and I loved the eco-friendly vibes.",
    img: "https://avatar.vercel.sh/maya",
  },
  {
    name: "Tyler Woods",
    username: "@tycycles",
    body: "Great value for money. I use PedalUp every weekend for city cruising.",
    img: "https://avatar.vercel.sh/tyler",
  },
  {
    name: "Ava Santos",
    username: "@avaspin",
    body: "I love the variety of kits available! The gravel bike I got was perfect for my adventure.",
    img: "https://avatar.vercel.sh/ava",
  },
  {
    name: "Juno Lim",
    username: "@junorides",
    body: "As a first-time rider, PedalUp made it super easy and fun. Highly recommended!",
    img: "https://avatar.vercel.sh/juno",
  },
  {
    name: "Kai Mendoza",
    username: "@kaipedals",
    body: "I’ve tried other rentals before, but nothing beats the experience here.",
    img: "https://avatar.vercel.sh/kai",
  },
  {
    name: "Lara Dean",
    username: "@larasaddle",
    body: "Their e-bike saved my daily commute. Battery life was insane!",
    img: "https://avatar.vercel.sh/lara",
  },
  {
    name: "Eli Tan",
    username: "@tantrails",
    body: "PedalUp helped me explore hidden gems in the city. Super intuitive rental process.",
    img: "https://avatar.vercel.sh/eli",
  },
  {
    name: "Nico Reyes",
    username: "@nicospins",
    body: "Bike felt brand new and super comfortable. Will definitely rent again!",
    img: "https://avatar.vercel.sh/nico",
  },
  {
    name: "Cleo Yamada",
    username: "@cleoride",
    body: "Big fan of how clean and well-maintained their bikes are. Solid service!",
    img: "https://avatar.vercel.sh/cleo",
  },
  {
    name: "Miles Castro",
    username: "@milesmoves",
    body: "Tried the mountain bike kit – wild ride! Exactly what I needed for the trails.",
    img: "https://avatar.vercel.sh/miles",
  },
  {
    name: "Sasha Velez",
    username: "@sashapedals",
    body: "PedalUp's support team is super friendly. Helped me pick the perfect fit.",
    img: "https://avatar.vercel.sh/sasha",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

function ReviewCard({ img, name, username, body }) {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt={`${name}'s profile`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-500 dark:text-white/40">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-700 dark:text-white/80">
        {body}
      </blockquote>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="relative w-full py-12 overflow-hidden bg-background mb-32">
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Riders' Raves
        </h2>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Hear from our community of trailblazers and city riders who’ve experienced the freedom of PedalUp.
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <Marquee pauseOnHover className="text-[#ff6b00] [--duration:20s] gap-4">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="text-[#ff6b00] [--duration:20s] gap-4 mt-4">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
      </div>
    </section>
  );
}
