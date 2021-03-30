import { React, ReactDom } from "../deps.ts";
import About from "../app/pages/about/About.tsx";

(ReactDom as any).hydrate(
    <About />,
    document.getElementById("root"),
);
