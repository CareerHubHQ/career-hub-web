import Label from "../../atoms/Label/label";
import Input from "../../atoms/Input/input.atom";
import PropTypes from "prop-types";
import "./form-field.scss";

const FormField = ({ label, htmlFor, errorText, helperText, ...props }) => {
    return (
        <div className={`form-field ${errorText ? "has-error" : ""}`}>
            <Label htmlFor={htmlFor}>{label}</Label>
            <Input id={htmlFor} {...props} />
            <span className="input-subtext">{errorText || helperText}</span>
        </div>
    );
};

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
    errorText: PropTypes.string,
    helperText: PropTypes.string,
    showError: PropTypes.bool,
}

export default FormField;
