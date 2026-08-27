import { server } from "./server.js";
const PORT = 8001;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
