import { React, ReactDomServer, Router, Context } from "../../deps.ts";
import ComponentNames from "../resources/enums/componentNames.ts";

/* Pages
 ========================= */
import Home from "../../app/pages/home/Home.tsx";
import About from "../../app/pages/about/About.tsx";


const handlePage = (ctx: Context, component: any, componentName: ComponentNames) => {
    try {
        const body = (ReactDomServer as any).renderToString(component);
        ctx.response.body =
            `<!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Deno SSR PoC</title>
                    <link rel="icon" type="image/png" href="/favicon.ico"/>
                    <style>* { font-family: Helvetica; padding: 0 0; margin: 0 0; }; html { font-size: 62.5% }</style>
                </head>
                <body>
                    <div id="root"><h1>${body}</h1></div>
                    <script src="/js/${componentName}.bundle.js"></script>
                </body>
            </html>`
    } catch (e) {
      console.log(e);
    }
};

const router = new Router();

// Pages
router.get("/", (ctx: Context) => handlePage(ctx, <Home />, ComponentNames.HOME));
router.get("/about", (ctx: Context) => handlePage(ctx, <About />, ComponentNames.ABOUT));

export default router;
