import colors from "../resources/colors.ts";

const sharedStyles = {
    wrapper: {
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "space-between",
        minHeight: "100vh"
    },
    container: {
        backgroundColor: colors.background,
        flex: "1 1 0%",
        padding: "40px 20px",
    },
    content: {
        maxWidth: "960px",
        margin: "0 auto",
    },
    active: {
        color: colors.blue,
    },
    paragraph: {
        fontSize: "16px",
        color: colors.white,
        fontWeight: "normal" as const,
    },
};

export default sharedStyles;