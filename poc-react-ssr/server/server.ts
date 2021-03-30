import { Application } from "../deps.ts";
import { PORT } from "./resources/constants.ts";
import router from "./routing/router.tsx";
import bundleJS from "./resources/bundle.ts";
import { staticFile } from "./middleware/staticFile.ts";

const app = new Application();

await bundleJS();

app.use(staticFile);

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`React SSR Server running on http://localhost:${PORT}/`);
await app.listen({ port: PORT });
