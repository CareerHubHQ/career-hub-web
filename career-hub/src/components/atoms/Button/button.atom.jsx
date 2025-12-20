import PropTypes from "prop-types";
import "./button.style.scss";

const Button = ({className, variant="primary", size="medium", onClick, children, ...props }) => {

    const buttonClass = `btn btn--${variant} btn--${size} ${className}`.trim();

    return (
        <button className={buttonClass} onClick={onClick} {...props}>
            {children}
        </button>
    );
}


Button.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
}


export default Button;