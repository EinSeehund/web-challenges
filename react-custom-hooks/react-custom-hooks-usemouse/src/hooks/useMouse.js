import { useEffect, useState } from "react";

export default function useMouse() {
    const [x, setX] = useState(500);
    const [y, setY] = useState(500);

    function updateCursor(event) {
        setX(event.clientX);
        setY(event.clientY);
    }

    useEffect(() => {
        document.body.addEventListener("mousemove", updateCursor);

        return () =>
            document.body.removeEventListener("mousemove", updateCursor);
    }, []);

    return [x, y];
}
