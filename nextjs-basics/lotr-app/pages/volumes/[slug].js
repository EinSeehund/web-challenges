import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "/lib/data";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volume = volumes.find((volume) => volume.slug === slug);
  const volumeIndex = volumes.indexOf(volume);

  if (!volume) {
    return null;
  }

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
        src={volume.cover}
        alt={`Book cover of ${volume.title}`}
        width={140}
        height={230}
      />
      <ul>
        {volumeIndex > 0 && (
          <li key="goBack">
            <Link href={`/volumes/${volumes[volumeIndex - 1].slug}`}>
              ← {`${volumes[volumeIndex - 1].title}`}
            </Link>
          </li>
        )}
        {volumeIndex < volumes.length - 1 && (
          <li key="goNext">
            <Link href={`/volumes/${volumes[volumeIndex + 1].slug}`}>
              → {`${volumes[volumeIndex + 1].title}`}
            </Link>
          </li>
        )}
      </ul>
    </>
  );
}
