import { React, ReactDom } from "../deps.ts";
import Home from "../app/pages/home/Home.tsx";

(ReactDom as any).hydrate(
    <Home />,
    document.getElementById("root"),
);
