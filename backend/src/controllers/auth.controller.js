import { loginAdminService } from "../services/auth.service.js";

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginAdminService(email, password);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
