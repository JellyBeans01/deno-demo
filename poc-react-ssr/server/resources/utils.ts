export const fileExists = async (path: string) => {
    try {
        // @ts-ignore
        const stats = await Deno.lstat(path);
        return stats && stats.isFile;
    } catch (e) {
        // @ts-ignore
        if (e && e instanceof Deno.errors.NotFound) return false;
        else throw e;
    }
};
