import bcrypt from "bcryptjs";

export const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return re.test(String(password));
};

export const hashPassword = async (password) => {
    const randomSalt = 10;
    const hashedPassword = bcrypt.hashSync(password, randomSalt);
    return hashedPassword;
};
