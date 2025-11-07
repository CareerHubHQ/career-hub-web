import PropTypes from 'prop-types';
import './textinput.style.scss';

const TextInput = ({
    className,
    variant,
    size,
    label,
    inputId,
    ...props
}) => {

    const labelElement = label ? <label htmlFor={inputId} className="textinput__label">{label}</label> : null;
    const variantClass = variant  ? `textinput--${variant}` : '';
    const sizeClass = size  ? `textinput--${size}` : '';
    const inputClass = `textinput ${variantClass} ${sizeClass} ${className || ""}`.trim();

    return (
        <div className="textinput-wrapper">
            {labelElement}
            <input id={inputId} className={inputClass} {...props} />
        </div>
    );
};

TextInput.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'filled', 'outline']),
    label: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    inputId: PropTypes.string.isRequired,
};

export default TextInput;
