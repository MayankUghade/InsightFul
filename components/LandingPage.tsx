"use client";
import Link from "next/link";
import Card from "./InteractiveCard"; // Ensure the path is correct
import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

const data = [
  {
    upvotes: 12,
    title: "Customize Button",
    description:
      "User should be able to customize the buttons according to the theme.",
  },
  {
    upvotes: 5,
    title: "Add Dark Mode",
    description:
      "Implement a dark mode feature so users can browse in the dark without hurting their eyes.",
  },
  {
    upvotes: 25,
    title: "Add a Joke Feature",
    description:
      "Add a feature where users can generate a random joke. Bonus points if it makes them laugh out loud!",
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-28 xl:py-38">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Collect Feedbacks and Insights Like a Boss
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    InsightFul helps you collect valuable user feedback and
                    insights to improve your product and delight your customers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    onClick={() => signIn()}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Try InsightFul
                  </Button>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {data.map((item, index) => (
                  <Card
                    key={index}
                    title={item.title}
                    upvotes={item.upvotes}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-15">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Feedback Collection
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  InsightFul provides a suite of tools to help you collect
                  feedback from your users, analyze the data, and act on
                  insights to improve your product.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center p-5 gap-5 justify-center mt-5">
              <div className="flex flex-col items-center justify-center gap-2 p-4 bg-background border rounded-lg shadow-lg text-center">
                <div className="flex items-center gap-2">
                  <h1>💻</h1>
                  <h3 className="text-lg font-medium">Create Your project</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Create a project once you get started with InsightFul
                </p>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRightIcon className="w-6 h-6 text-muted-foreground md:flex hidden" />
              </div>
              <div className="flex flex-col items-center justify-center gap-2 p-4 bg-background border rounded-lg shadow-lg text-center">
                <div className="flex items-center gap-2">
                  <h1>🌍</h1>
                  <h3 className="text-lg font-medium">Share Public Link</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Share the Publically genated link to collect feedback
                </p>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRightIcon className="w-6 h-6 text-muted-foreground md:flex hidden" />
              </div>
              <div className="flex flex-col items-center justify-center gap-2 p-4 bg-background border rounded-lg shadow-lg text-center">
                <div className="flex items-center gap-2">
                  <h1>😎</h1>
                  <h3 className="text-lg font-medium">Collect Feedbacks</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Now collect feedbacks and insight like a chad
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-44">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Affordable Pricing for Every Team
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  InsightFul offers flexible pricing plans to fit the needs of
                  teams of all sizes. Get started for free or choose a paid plan
                  with advanced features.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl  gap-6 flex flex-col items-center justify-center">
              <div className="flex flex-col justify-center space-y-4 mt-5">
                <div className="grid gap-2">
                  <div className="text-4xl font-bold">$0</div>
                  <div className="text-sm text-muted-foreground">Free Plan</div>
                  <p className="text-muted-foreground">
                    Get started with our free plan and unlock everything Because
                    it is completly Free
                  </p>
                  <Button
                    onClick={() => signIn()}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Sign Up for Free
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Try InsightFul
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Start Collecting Feedback Today
                </h2>
                <Button
                  onClick={() => signIn()}
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Try InsightFul for Free
                </Button>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Trusted by Thousands
                </div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  InsightFul is trusted by thousands of teams around the world
                  to collect feedback, analyze data, and improve their products.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 InsightFul. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
