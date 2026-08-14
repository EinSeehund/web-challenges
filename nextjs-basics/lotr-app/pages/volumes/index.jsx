import Link from "next/link";
import { useRouter } from "next/router";
import { introduction, volumes } from "/lib/data";

export default function VolumesPage() {
  const router = useRouter();

  function goToRandomVolume() {
    const randomIndex = Math.floor(Math.random() * volumes.length);
    const randomSlug = volumes[randomIndex].slug;
    router.push(`volumes/${randomSlug}`);
  }

  return (
    <>
      <p>
        <Link href=".">Home</Link>
      </p>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={goToRandomVolume}>Show Random Volume</button>
    </>
  );
}
