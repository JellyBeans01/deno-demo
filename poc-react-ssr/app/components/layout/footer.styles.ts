import colors from "../../resources/colors.ts";

const styles = {
    container: {
        textAlight: "center",
        backgroundColor: colors.secondary,
        padding: "20px 10px"
    },
    text: {
        color: colors.white,
        textAlign: "center" as "center", // <-- this throws a typing error????
        fontSize: "16px",
    }
};

export default styles;