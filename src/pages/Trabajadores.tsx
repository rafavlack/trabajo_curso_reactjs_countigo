import styles from "../style";
import {Navbar} from "../components";
import TrabajadoresComponen from "../components/TrabajadoresComponen";

const Trabajadores = () => (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <TrabajadoresComponen/>
            </div>
        </div>

    </div>
);

export default Trabajadores;
