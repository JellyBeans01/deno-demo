import colors from "../../resources/colors.ts";

const styles = {
    title: {
        color: colors.white,
        fontSize: "40px",
    },
    h2: {
        color: colors.white,
        fontSize: "30px",
        marginTop: "30px",
        paddingBottom: "5px",
        borderBottom: `1px solid ${colors.white}`,
    },
    h3: {
        color: colors.white,
        fontSize: "25px",
        marginTop: "25px",
    },
    h4: {
        color: colors.white,
        fontSize: "22px",
        marginTop: "22px",
    },
    paragraph: {
        color: colors.white,
        fontSize: "16px",
        fontWeight: "normal" as const,
        margin: "10px 0",
        lineHeight: "32px",
    },
    code: {
        color: colors.white,
        backgroundColor: colors.secondary,
        padding: "5px 10px",
        fontSize: "16px",
        fontWeight: "normal" as const,
        marginBottom: "20px",
        lineHeight: "32px",
    },
    ul: {
        marginLeft: "20px",
        color: colors.white,
        fontSize: "18px",
        fontWeight: "normal" as const,
    },
    li: {
        margin: "10px 0",
        lineHeight: "32px",
    },
    a: {
        color: colors.blue,
        fontSize: "16px",
        fontWeight: "normal" as const,
        lineHeight: "32px",
        textDecoration: "none",
    },
    quote: {
        fontStyle: "italic",
        fontSize: "20px",
        margin: "0 30px",
        borderLeft: `2px solid ${colors.white}`,
        paddingLeft: "10px",
        color: colors.white,
        fontWeight: "normal" as const,
    }
};

export default styles;