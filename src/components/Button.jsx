import PropTypes from "prop-types";
import styles from "./Button.module.css";

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
};

export default function Button({ children, onClick, type }) {
    return <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>{children}</button>;
}