import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
    const [lights, setLights] = useState([
        { id: 1, name: "Living Room", isOn: true },
        { id: 2, name: "Kitchen", isOn: false },
        { id: 3, name: "Bedroom", isOn: false },
        { id: 4, name: "Bathroom", isOn: true },
        { id: 5, name: "Garage", isOn: false },
        { id: 6, name: "Porch", isOn: false },
        { id: 7, name: "Garden", isOn: true },
        { id: 8, name: "Office", isOn: false },
    ]);

    const lightCount = lights.filter((light) => light.isOn === true).length;
    const allLightsOn = lights.every((light) => light.isOn === true);
    const allLightsOff = lights.every((light) => light.isOn === false);

    function handleToggle(id) {
        setLights(
            lights.map((light) =>
                light.id === id ? { ...light, isOn: !light.isOn } : light,
            ),
        );
    }

    function turnAllOn() {
        setLights(lights.map((light) => ({ ...light, isOn: true })));
    }

    function turnAllOff() {
        setLights(lights.map((light) => ({ ...light, isOn: false })));
    }

    return (
        <Layout isDimmed={allLightsOff}>
            <GlobalStyle />
            <Component
                {...pageProps}
                lights={lights}
                toggleLight={handleToggle}
                lightCount={lightCount}
                turnAllOn={turnAllOn}
                turnAllOff={turnAllOff}
                allLightsOn={allLightsOn}
                allLightsOff={allLightsOff}
            />
        </Layout>
    );
}
