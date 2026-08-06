import { useState } from "react";

export default function useName() {
    const [firstName, setFirstName] = useState("Lorem");
    const [lastName, setLastName] = useState("Ipsum");

    const name = firstName + " " + lastName;

    return [name, setFirstName, setLastName];
}
