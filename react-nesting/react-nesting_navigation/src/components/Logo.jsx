import Image from "./Image";

export default function Logo({src}) {
    return (
        <>
            <a href="#">
                <Image className="round-image" src={src} alt="logo" />
            </a>
        </>
    );
}
