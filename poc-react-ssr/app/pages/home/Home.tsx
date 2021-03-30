import { React } from "../../../deps.ts";
import styles from "./home.styles.ts";
import sharedStyles from "../shared.styles.ts";
import Header from "../../components/layout/Header.tsx";
import Footer from "../../components/layout/Footer.tsx";

const Home = () => (
    <div style={sharedStyles.wrapper}>
        <Header activeRoute="home" />
        <div style={sharedStyles.container}>
            <div style={sharedStyles.content}>
                <div style={styles.flex}>
                    <h1 style={styles.title}>Hello Deno.land</h1>
                    <p style={{ ...sharedStyles.paragraph, ...styles.center }}>Demo project using Deno</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default Home;
