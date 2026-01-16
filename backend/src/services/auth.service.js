import Admin from "../models/admin.model.js";
import { comparePassword } from "../utils/hashPassword.js";
import generateToken from "../utils/generateToken.js";

export const loginAdminService = async (email, password) => {
  const admin = await Admin.findOne({ email });

  if (!admin) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await comparePassword(password, admin.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  return generateToken(admin._id);
};
