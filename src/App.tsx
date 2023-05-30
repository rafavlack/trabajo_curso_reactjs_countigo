import styles from "./style";
import { Navbar, BodyCentro } from "./components/index";

const App: React.FC = () => (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <BodyCentro />
            </div>
        </div>
    </div>
);

export default App;

