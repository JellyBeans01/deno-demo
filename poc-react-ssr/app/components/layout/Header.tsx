import { React } from "../../../deps.ts";
import styles from "./header.styles.ts";
import sharedStyles from "../../pages/shared.styles.ts";
import navigate from "../../resources/navigation.ts";

type HeaderPropsType = { activeRoute: "home" | "about" | "register" | "login" };
const Header = ({ activeRoute }: HeaderPropsType) => {
    const { host, href } = window.location;

    const getStyles = (isActive: boolean) => isActive ? { ...styles.text, ...sharedStyles.active } : styles.text;

    return (
        <div style={styles.container}>
            <div style={styles.items}>
                <div
                    role="button"
                    style={getStyles(activeRoute === "home")}
                    onClick={() => navigate("/")}
                >
                    Home
                </div>
                <div
                    role="button"
                    style={getStyles(activeRoute === "about")}
                    onClick={() => navigate("/about")}
                >
                    About
                </div>
            </div>
            <div style={styles.items}>
                <div
                    role="button"
                    style={getStyles(activeRoute === "login")}
                    onClick={() => navigate("/login")}
                >
                    Log in
                </div>
                <div
                    role="button"
                    style={getStyles(activeRoute === "register")}
                    onClick={() => navigate("/register")}
                >
                    Register
                </div>
            </div>
        </div>
    );
}

export default Header;