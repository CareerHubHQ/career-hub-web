
import PropTypes from "prop-types";
import "./input.style.scss";

const Input = ({ id, ...props }) => {
    return <input id={id} {...props} />;
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Input;
