
██████╗░███████╗███╗░░██╗░█████╗░  
██╔══██╗██╔════╝████╗░██║██╔══██╗  
██║░░██║█████╗░░██╔██╗██║██║░░██║  
██║░░██║██╔══╝░░██║╚████║██║░░██║  
██████╔╝███████╗██║░╚███║╚█████╔╝  
╚═════╝░╚══════╝╚═╝░░╚══╝░╚════╝░  

## What is deno?
Deno is a secure runtime for JavaScript and TypeScript.
It was invented by the creator of NodeJS and it is designed to fix a list of inherent problems in NodeJS.
A few of the problems are:
    - security: You have access to all sorts of system calls (more info on this later in this document)
    - require modules without extension
    - dependencies
    - ...

### Some Goals
#### Security
Deno is written from a point of view that a file should not have access to various system calls, networks, ...
So this is why you need to explicitly pass arguments to allow a deno script to do those things.

#### Modules
NO compatibility with existing Node modules.
Imports are relative or absolute and allow URL's only. They also must provide an extensions.
Remote URL's are fetched and cached indefinitely on the first load. You can reload the modules when passing an additional
flag. Vendoring can still be done by specifying a non-default cache directory.

## Documentation
Documentation can be found [here](https://deno.land/manual).
it involves Setup, Deno Runtime, Modules, Using TypeScript, Examples, ... .

## Community
The Deno community is currently most active on Discord.
The community is growing, but right now, it's maybe 1% of the current NodeJS community

## Deno vs Node
Deno ships as a single executable with no dependencies and comes with some build-in tools to make the developer 
experience easier.

These tools include:
    - Bundler
    - Debugger
    - Dependency Inspector
    - Documentation Generator
    - Formatter
    - Test Runner
    - Linter

Deno is based on TypeScript, so it supports it OOTB without the need to install / configure other tools.

Like mentioned above, one of the main focuses of Deno is security.

Deno uses ES Modules whereas Node uses CommonJS. (mainly because when Node was created, JavaScript didn't have its 
own module system)

Deno uses URL's for loading modules and doesn't need a package manager. It isn't dependent on a centralised server for
module distribution.

Deno uses Promises whereas Node uses async await with callbacks.

The Deno Development Team also decided to use the browser API's where it's practical to do so. Like so, Deno provides a
global `window` object and API's such as `addEventListener`, `onLoad`, `fetch`, ... . 

## Production ready?
Deno became production ready with its 1.0.0 release in May 2020. It is already supported by notable players in the 
industry (AWS Lambda, Azure Functions, Google Cloud Run).

## Roadmap
A minor release for the `deno` cli is released every 6 weeks. After 1.9.0, they'll be switching to a 4 week release cycle.
A new patch version is released weekly.

Some upcoming minor releases are:
- 1.9.0: 13/04/21
- 1.10.0: 11/05/21
- 1.11.0: 08/06/21

## Getting started
### Installation
Using Shell (macOS and Linux):
```shell
curl -fsSL https://deno.land/x/install/install.sh | sh
```
Using PowerShell (Windows):
```shell
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

Using Scoop (Windows):
```shell
scoop install deno
```

Using Chocolatey (Windows):
```shell
choco install deno
```

Using Homebrew (macOS):
```shell
brew install deno
```

Using Cargo (Windows, macOS, Linux):
```shell
cargo install deno
```

After the  installation, run `deno --version`. If this prints the Deno version to the console the installation was successful.

### Setup environment
[WebStorm Plugin](https://plugins.jetbrains.com/plugin/14382-deno/versions/)  
[VSCode Plugin](https://github.com/denoland/vscode_deno)

### Flags
Deno is a secure runtime, se we need to set the correct permission flags when running a script

#### Integrity Flags
- `--lock <FILE>`: Check the specified lock file
- `--lock-write`: Write lock file, use with `--lock`

#### Cache / Compilation Flags
- `--config <FILE>`: Load tsconfig.json file
- `--import-map <FILE>`: UNSTABLE: Load import map file
- `--no-remote`: Do not resolve remote modules
- `--reload=<CACHE_BLOCKLIST>`: Reload source code cache (recompile TypeScript)
- `--unstable`: Enable unstable APIs

#### Permission Flags
- `-A, --allow-all`: Allow all permissions. This disables all security
- `--allow-env`: Allow environment access for things like getting and setting of environment variables
- `--allow-hrtime`: Allow high-resolution time measurement. High-resolution time can be used in timing attacks and fingerprinting
- `--allow-net=<allow-net>`: Allow network access. You can specify an optional, comma-separated list of domains to provide an allow-list of allowed domains
- `--allow-plugin`: Allow loading plugins. Please note that --allow-plugin is an unstable feature
- `--allow-read=<allow-read>`: Allow file system read access. You can specify an optional, comma-separated list of directories or files to provide a allow-list of allowed file system access
- `--allow-run`: Allow running subprocesses. Be aware that subprocesses are not run in a sandbox and therefore do not have the same security restrictions as the deno process. Therefore, use with caution
- `--allow-write=<allow-write>`: Allow file system write access. You can specify an optional, comma-separated list of directories or files to provide an allow-list of allowed file system access

#### Other Runtime Flags
- `--cached-only`: Require that remote dependencies are already cached
- `--inspect=<HOST:PORT>`: Activate inspector on host:port
- `--v8-flags=<v8-flags>`: Set V8 command line options

## Using TypeScript
### Type Checking
One of the main advantages of TypeScript is that you can make code more type safe, so that what would be syntactically
valid JavaScript becomes TypeScript with warnings about being "unsafe".

In Deno we handle TypeScript in two major ways. We can type check TypeScript, the default, or you can opt into skipping
that checking using the `--no-check` flag. For example if you had a program you wanted to run, normally you would do
something like this:
```shell
deno run --allow-net my_server.ts
```
But if you wanted to skip the type checking, you would do something like this:
```shell
deno run --allow-net --no-check my_server.ts
```
Type checking can take a significant amount of time, especially if you are working on a code base where you are making a
lot of changes. We have tried to optimise the type checking, but it still comes at a cost. If you just want to hack at 
some code, or if you are working in an IDE which is type checking your code as you author it, using `--no-check` can 
certainly speed up the process of running TypeScript in Deno.

### File Types
Since Deno supports JavaScript, TypeScript, JSX, TSX modules, Deno has to make a decision about how to treat each of 
these kinds of files. For local modules, Deno makes this determination based fully on the extension. When the extension 
is absent in a local file, it is assumed to be JavaScript.

For remote modules, the media type (mime-type) is used to determine the type of the module, where the path of the module
is used to help influence the file type, when it is ambiguous what type of file it is.

### Configuration
#### Configuring TypeScript
It is possible to use your own `tsconfig.json` configuration file, but it is advised to use the default config file by Deno.
> "Do consider though that if you are creating libraries that require a configuration file, all of the consumers of your
> modules will require that configuration file too if you distribute your modules as TypeScript. In addition, there could
> be settings you do in the configuration file that make other TypeScript modules incompatible. Honestly it is best to use
> the Deno defaults and to think long and hard about using a configuration file."

You can still use your own configuration by running
```shell
denu run --config ./tsconfig.json main.ts
```

#### How Deno uses a configuration file
Deno only looks at the `compilerOptions` section of a config file, and even then it only considers certain compiler options,
with the rest being ignored.

This because Deno does not process a TypeScript configuration file like `tsc` does, as there are lots of parts of a 
TypeScript configuration file that are meaningless in a Deno context or would cause Deno to not function properly if 
they were applied.

## Testing
To help developers write tests the Deno standard library comes with a built in assertions module which can be imported 
from `https://deno.land/std@0.89.0/testing/asserts.ts`.

```js
import { assert } from "https://deno.land/std@0.89.0/testing/asserts.ts";

Deno.test("Hello Test", () => {
  assert("Hello");
});
```

The assertion module provides assertions which can be found [here](https://deno.land/manual@v1.8.0/testing/assertions).
