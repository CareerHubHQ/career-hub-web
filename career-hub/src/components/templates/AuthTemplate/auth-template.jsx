import PropTypes from "prop-types";
import "./auth-template.styles.scss";

const AuthTemplate = ({ title, subtitle, children, footer }) => {
    return (
        <div className="auth-template">
            <div className="auth-template__container">
                <div className="auth-template__header">
                    <h1 className="auth-template__title">{title}</h1>
                    {subtitle && <p className="auth-template__subtitle">{subtitle}</p>}
                </div>

                <div className="auth-template__content">
                    {children}
                </div>

                {footer && (
                    <div className="auth-template__footer">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
};

AuthTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    children: PropTypes.node.isRequired,
    footer: PropTypes.node,
};

export default AuthTemplate;
