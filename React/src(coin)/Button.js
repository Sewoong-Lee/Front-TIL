import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button ({text}){
    return <button className={styles.btn}>{text}</button> //css 클래스 적용
}
Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;