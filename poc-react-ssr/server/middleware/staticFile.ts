import { Context, send } from "../../deps.ts";
import { fileExists } from "../resources/utils.ts";

export const staticFile = async (ctx: Context, next: Function) => {
    // @ts-ignore
    const path = `${Deno.cwd()}/server/public${ctx.request.url.pathname}`;
    // @ts-ignore
    const root = `${Deno.cwd()}/server/public`;

    if (await fileExists(path)) await send(ctx, ctx.request.url.pathname, { root });
    else await next();
};