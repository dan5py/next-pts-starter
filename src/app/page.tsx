import Image from "next/image";
import Link from "next/link";

function Card({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer nofollow"
      target="_blank"
      className="flex items-center justify-center"
    >
      <div
        className="h-48 w-full gap-x-8 rounded-xl border p-6 text-left shadow-xl transition-all hover:scale-[103%] hover:bg-border/25"
        style={{
          display: "grid",
          gridTemplateAreas: '"title icon" "description icon"',
        }}
      >
        {children}
      </div>
    </Link>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1
      className="flex scroll-m-20 items-end text-3xl font-extrabold tracking-tight lg:text-4xl"
      style={{
        gridArea: "title",
      }}
    >
      {children}
    </h1>
  );
}

function CardDescription({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mt-4 text-gray-500"
      style={{
        gridArea: "description",
      }}
    >
      {children}
    </p>
  );
}

function CardIcon({ src, className }: { src: string; className?: string }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        gridArea: "icon",
      }}
    >
      <Image
        src={src}
        width={64}
        height={64}
        alt="Card logo"
        className={className}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="my-16 text-center text-4xl font-bold">NextJS Template</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <Card href="https://nextjs.org">
          <CardTitle>Next.js</CardTitle>
          <CardIcon src="/next.svg" className="dark:invert" />
          <CardDescription>The React Framework for Production</CardDescription>
        </Card>
        <Card href="https://www.prisma.io/">
          <CardTitle>Prisma</CardTitle>
          <CardIcon src="/prisma.svg" className="dark:invert" />
          <CardDescription>
            Next-generation Node.js and TypeScript ORM
          </CardDescription>
        </Card>
        <Card href="https://tailwindcss.com">
          <CardTitle>TailwindCSS</CardTitle>
          <CardIcon src="/tailwind.svg" />
          <CardDescription>
            Rapidly build modern websites without ever leaving your HTML.
          </CardDescription>
        </Card>
        <Card href="https://ui.shadcn.com/">
          <CardTitle>shadcn/ui</CardTitle>
          <CardIcon src="/radix.svg" className="dark:invert" />
          <CardDescription>
            Build your component library.
            <br />
            Accessible. Customizable. Open Source.
          </CardDescription>
        </Card>
      </div>
    </main>
  );
}
