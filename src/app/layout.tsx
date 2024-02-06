import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { useParams } from "next/navigation";
import Control from "../../components/Control";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const resp = await fetch('http://localhost:9999/page',{
    next:{revalidate:0}
  });
  const data = await resp.json();
  console.log('data', data);
  return (
    <html lang="en">
      <body>
        <header>
          <h1><Link href="/">WEB!</Link></h1>
          <input type="text" placeholder="search?" />
        </header>
        <nav>
          <ol>
            {/* @ts-ignore */}
            {data.map((item)=>{
              return <li key={item.id}><Link href={'/read/'+item.id}>{item.title}</Link></li>
            })}
          </ol>
        </nav>
        <article>
          {children}
        </article>
        <Control></Control>
      </body>
    </html>
  );
}
