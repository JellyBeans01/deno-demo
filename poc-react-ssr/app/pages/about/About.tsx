import { React } from "../../../deps.ts";
import styles from "./about.styles.ts";
import sharedStyles from "../shared.styles.ts";
import Header from "../../components/layout/Header.tsx";
import Footer from "../../components/layout/Footer.tsx";

const About = () => (
    <div style={sharedStyles.wrapper}>
        <Header activeRoute="about" />
        <div style={sharedStyles.container}>
            <div style={sharedStyles.content}>
                <h1 style={styles.title}>About</h1>
                <h2 style={styles.h2}>Getting Started</h2>

                <h3 style={styles.h3}>Installation</h3>

                <p style={styles.paragraph}>Using shell (macOS and Linux)</p>
                <code style={styles.code}>curl -fsSL https://deno.land/x/install/install.sh | sh</code>

                <p style={styles.paragraph}>Using PowerShell (Windows)</p>
                <code style={styles.code}>iwr https://deno.land/x/install/install.ps1 -useb | iex</code>

                <p style={styles.paragraph}>Using Scoop (Windows)</p>
                <code style={styles.code}>scoop install deno</code>

                <p style={styles.paragraph}>Using Chocolatey (Windows)</p>
                <code style={styles.code}>choco install deno</code>

                <p style={styles.paragraph}>Using Homebrew (macOS)</p>
                <code style={styles.code}>brew install deno</code>

                <p style={styles.paragraph}>Using Cargo (Windows, macOS, Linux)</p>
                <code style={styles.code}>cargo install deno</code>

                <p style={styles.paragraph}>
                    After the installation, run
                    {" "}
                    <code style={styles.code}>deno --version</code>
                    . If this prints the Deno version to the console the installation was successful.
                </p>

                <h3 style={styles.h3}>Setup Environment</h3>
                <ul style={styles.ul}>
                    <li style={styles.li}>
                        <a
                            href="https://plugins.jetbrains.com/plugin/14382-deno/versions/"
                            rel="noreferrer noopener"
                            target="_blank"
                            style={styles.a}
                        >
                            WebStorm Plugin
                        </a>
                    </li>
                    <li style={styles.li}>
                        <a
                            href="https://github.com/denoland/vscode_deno"
                            rel="noreferrer noopener"
                            target="_blank"
                            style={styles.a}
                        >
                            VSCode Plugin
                        </a>
                    </li>
                </ul>

                <h3 style={styles.h3}>Flags</h3>
                <p style={styles.paragraph}>Deno is a secure runtime, se we need to set the correct permission flags when running a script.</p>

                <h4 style={styles.h4}>Integrity Flags</h4>
                <ul style={styles.ul}>
                    <li style={styles.li}>
                        <code style={styles.code}>--lock FILE</code>
                        : Check the specified lock file
                    </li>
                    <li style={styles.li}>
                        <code style={styles.code}>--lock-write</code>
                        : Write lock file, use with
                        <code style={styles.code}>--lock</code>
                    </li>
                </ul>

                <h4 style={styles.h4}>Cache / Compilation Flags</h4>
                <ul style={styles.ul}>
                    <li style={styles.li}>
                        <code style={styles.code}>--config FILE</code>
                        : Load tsconfig.json file
                    </li>
                    <li style={styles.li}>
                        <code style={styles.code}>--import-map FILE</code>
                        : UNSTABLE: Load import map file
                    </li>
                    <li style={styles.li}>
                        <code style={styles.code}>--no-remote</code>
                        : Do not resolve remote modules
                    </li>
                    <li style={styles.li}>
                        <code style={styles.code}>--reload=CACHE_BLOCKLIST</code>
                        : Reload source code cache (recompile TypeScript)
                    </li>
                    <li style={styles.li}>
                        <code style={styles.code}>--unstable</code>
                        : Enable unstable APIs
                    </li>
                </ul>

                <h4 style={styles.h4}>Permission Flags</h4>
                <ul style={styles.ul}>
                    <li style={styles.li}>
                        <code style={styles.code}>-A, --allow-all</code>
                        : Allow all permissions. This disables all security
                    </li>
                    <li style={styles.li}>
                        <code style={styles.code}>`--allow-env</code>
                        : Allow environment access for things like getting and setting of environment variables
                    </li>
                    <li style={styles.li}>
                        <code style={styles.code}>--allow-hrtime</code>
                        : Allow high-resolution time measurement. High-resolution time can be used in timing attacks and
                        fingerprinting
                    </li>
                    <li style={styles.li}>
                        <code style={styles.code}>--allow-net=allow-net</code>
                        : Allow network access. You can specify an optional, comma-separated list of domains to provide
                        an allow-list of allowed domains
                    </li>
                    <li style={styles.li}>
                        <code style={styles.code}>--allow-plugin</code>
                        : Allow loading plugins. Please note that --allow-plugin is an unstable feature
                    </li>
                    <li style={styles.li}>
                        <code style={styles.code}>--allow-read=allow-read</code>
                        : Allow file system read access. You can specify an optional, comma-separated list of
                        directories or files to provide a allow-list of allowed file system access
                    </li>
                    <li style={styles.li}>
                        <code style={styles.code}>--allow-run</code>
                        : Allow running subprocesses. Be aware that subprocesses are not run in a sandbox and therefore
                        do not have the same security restrictions as the deno process. Therefore, use with caution
                    </li>
                    <li style={styles.li}>
                        <code style={styles.code}>--allow-write=allow-write</code>
                        : Allow file system write access. You can specify an optional, comma-separated list of
                        directories or files to provide an allow-list of allowed file system access
                    </li>
                </ul>

                <h4 style={styles.h4}>Other Runtime Flags</h4>
                <ul style={styles.ul}>
                    <li style={styles.li}>
                        <code style={styles.code}>--cached-only</code>
                        : Require that remote dependencies are already cached
                    </li>
                    <li style={styles.li}>
                        <code style={styles.code}>--inspect=HOST:PORT</code>
                        : Activate inspector on host:port
                    </li>
                    <li style={styles.li}>
                        <code style={styles.code}>--v8-flags=v8-flags</code>
                        : Set V8 command line options
                    </li>
                </ul>

                <h2 style={styles.h2}>Using TypeScript</h2>
                <h3 style={styles.h3}>Type Checking</h3>
                <p style={styles.paragraph}>
                    One of the main advantages of TypeScript is that you can make code more type safe, so that what
                    would be syntactically valid JavaScript becomes TypeScript with warnings about being "unsafe".
                </p>
                <p style={styles.paragraph}>
                    In Deno we handle TypeScript in two major ways. We can type check TypeScript, the default, or you can
                    opt into skipping that checking using the
                    {" "}
                    <code style={styles.code}>--no-check</code>
                    {" "}
                    flag. For example if you had a program you
                    wanted to run, normally you would do something like this:
                </p>
                <code style={styles.code}>deno run --allow-net my_server.ts</code>
                <p style={styles.paragraph}>But if you wanted to skip the type checking, you would do something like this:</p>
                <code style={styles.code}>deno run --allow-net --no-check my_server.ts</code>
                <p style={styles.paragraph}>
                    Type checking can take a significant amount of time, especially if you are working on a code base
                    where you are making a lot of changes. We have tried to optimise the type checking, but it still
                    comes at a cost. If you just want to hack at some code, or if you are working in an IDE which is
                    type checking your code as you author it, using
                    {" "}
                    <code style={styles.code}>--no-check</code>
                    {" "}
                    can certainly speed up the process of running TypeScript in Deno.
                </p>

                <h3 style={styles.h3}>File Types</h3>
                <p style={styles.paragraph}>
                    Since Deno supports JavaScript, TypeScript, JSX, TSX modules, Deno has to make a decision about how
                    to treat each of these kinds of files. For local modules, Deno makes this determination based fully
                    on the extension. When the extension is absent in a local file, it is assumed to be JavaScript.
                </p>
                <p style={styles.paragraph}>
                    For remote modules, the media type (mime-type) is used to determine the type of the module, where
                    the path of the module is used to help influence the file type, when it is ambiguous what type of
                    file it is.
                </p>

                <h3 style={styles.h3}>Configuration</h3>
                <h4 style={styles.h4}>Configuring TypeScript</h4>
                <p style={styles.paragraph}>
                    It is possible to use your own
                    {" "}
                    <code style={styles.code}>tsconfig.json</code>
                    {" "}
                    configuration file, but it is advised to use the default config file by Deno.
                </p>
                <blockquote style={styles.quote}>
                    "Do consider though that if you are creating libraries that require a configuration file, all of the
                    consumers of your modules will require that configuration file too if you distribute your modules as
                    TypeScript. In addition, there could be settings you do in the configuration file that make other
                    TypeScript modules incompatible. Honestly it is best to use the Deno defaults and to think long and
                    hard about using a configuration file."
                </blockquote>
                <p style={styles.paragraph}>You can still use your own configuration by running</p>
                <code style={styles.code}>deno run --config ./tsconfig.json main.ts</code>

                <h4 style={styles.h4}>How Deno uses a configuration file</h4>
                <p style={styles.paragraph}>
                    Deno only looks at the
                    {" "}
                    <code style={styles.code}>compilerOptions</code>
                    {" "}
                    section of a config file, and even then it only considers certain compiler options, with the rest
                    being ignored.
                </p>
                <p style={styles.paragraph}>
                    This because Deno does not process a TypeScript configuration file like `tsc` does, as there are
                    lots of parts of a TypeScript configuration file that are meaningless in a Deno context or would
                    cause Deno to not function properly if they were applied.
                </p>

                <h2 style={styles.h2}>Testing</h2>
                <p style={styles.paragraph}>
                    To help developers write tests the Deno standard library comes with a built in assertions module
                    which can be imported from `https://deno.land/std@0.89.0/testing/asserts.ts`.
                </p>
                <p style={styles.paragraph}>
                    The assertion module provides assertions which can be found
                    {" "}
                    <a
                        href="https://deno.land/manual@v1.8.0/testing/assertions"
                        rel="noreferrer noopener"
                        target="_blank"
                        style={styles.a}
                    >
                        here
                    </a>
                    .
                </p>
            </div>
        </div>
        <Footer />
    </div>
);

export default About;