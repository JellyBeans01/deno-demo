import colors from "../../resources/colors.ts";

const styles = {
    container: {
        backgroundColor: colors.primary,
        padding: "30px 50px",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between"
    },
    items: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "flex-start",
    },
    text: {
        fontSize: "18px",
        padding: "10px 15px",
        margin: "0 15px",
        cursor: "pointer",
        color: colors.white,
    }
};

export default styles;