import Image from "next/image";
import { volumes } from "/lib/data";
import Link from "next/link";

export default function theTowersPage() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, index) => (
          <li key={index}>
            {book.ordinal} - {book.title}
          </li>
        ))}
      </ul>
      <Image
        src="/images/the-two-towers.png"
        alt="Book cover of The Two Towers"
        width={140}
        height={230}
      />
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            ← The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            → The Return of the King
          </Link>
        </li>
      </ul>
    </>
  );
}
