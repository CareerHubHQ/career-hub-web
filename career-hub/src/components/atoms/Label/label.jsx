import PropTypes from "prop-types";

const Label = ({ children, htmlFor, ...props }) => {
    return <label htmlFor={htmlFor} {...props}>{children}</label>;
}

Label.propTypes = {
    children: PropTypes.node.isRequired,
    htmlFor: PropTypes.string.isRequired,
};

export default Label;
