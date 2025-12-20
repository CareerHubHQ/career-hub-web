import PropTypes from "prop-types";
import "./form.style.scss";

const Form = ({ className, onSubmit, children, ...props }) => {
    return (
        <form className={className} onSubmit={onSubmit} {...props}>
            {children}
        </form>
    );
};

Form.propTypes = {
    className: PropTypes.string,
    onSubmit: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default Form;
