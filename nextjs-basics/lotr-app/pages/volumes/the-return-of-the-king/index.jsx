import Image from "next/image";
import { volumes } from "/lib/data";
import Link from "next/link";

export default function theReturnPage() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  console.log(volume);
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
        src="/images/the-return-of-the-king.png"
        alt="Book cover of The Return of the King"
        width={140}
        height={230}
      />
      <ul>
        <li>
          <Link href="/volumes/the-two-towers">← The Two Towers</Link>
        </li>
      </ul>
    </>
  );
}
