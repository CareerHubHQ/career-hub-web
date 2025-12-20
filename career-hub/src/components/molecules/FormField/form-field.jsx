import Label from "../../atoms/Label/label";
import Input from "../../atoms/Input/input.atom";

const FormField = ({ label, htmlFor, ...props }) => {
    return (
        <div className="form-field">
            <Label htmlFor={htmlFor}>{label}</Label>
            <Input id={htmlFor} {...props} />
        </div>
    );
};
export default FormField;
