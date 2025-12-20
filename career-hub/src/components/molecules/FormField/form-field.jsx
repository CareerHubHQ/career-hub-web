import PropTypes from "prop-types";
import Label from "../../atoms/Label/label";
import Input from "../../atoms/Input/input.atom";
import "./form-field.style.scss";

const FormField = ({ label, htmlFor, error, ...props }) => {
    return (
        <div className="form-field">
            <Label htmlFor={htmlFor}>{label}</Label>
            <Input id={htmlFor} {...props} />
            {error && <span className="form-field-error">{error}</span>}
        </div>
    );
};

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
    error: PropTypes.string,
};

export default FormField;
