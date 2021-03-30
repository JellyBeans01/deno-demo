import { BUNDLE_KEY } from "./constants.ts";

const bundleJS = () => {
    const options = { bundle: "esm", compilerOptions: { lib: ["dom", "es2020", "deno.ns", "dom.iterable"] }  }
    return Promise.all([
    // @ts-ignore
        Deno.emit("./client/home.tsx", options),
        // @ts-ignore
        Deno.emit("./client/about.tsx", options),
    ]).then(async ([home, about]) => {
        // @ts-ignore
        if (home.diagnostics?.length) console.warn("HOME ERR:", Deno.formatDiagnostics(home.diagnostics));
        // @ts-ignore
        if (about.diagnostics?.length) console.warn("ABOUT ERR:", Deno.formatDiagnostics(about.diagnostics));

        // @ts-ignore
        await Deno.writeTextFile("./server/public/js/home.bundle.js", home.files[BUNDLE_KEY]);
        // @ts-ignore
        await Deno.writeTextFile("./server/public/js/about.bundle.js", about.files[BUNDLE_KEY]);

        return {
            homeBundle: home.files[BUNDLE_KEY],
            aboutBundle: about.files[BUNDLE_KEY],
        };
    });
}

export default bundleJS;