import mongoose from "mongoose";
import dotenv from "dotenv";

import Admin from "../models/admin.model.js";
import { hashPassword } from "../utils/hashPassword.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";

    const existingAdmin = await Admin.findOne({ email: adminEmail });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit(0);
    }

    const hashedPassword = await hashPassword(adminPassword);

    await Admin.create({
      email: adminEmail,
      password: hashedPassword
    });

    console.log("Admin created successfully");
    console.log("Email:", adminEmail);
    console.log("Password:", adminPassword);

    process.exit(0);
  } catch (error) {
    console.error("Admin seeding failed:", error);
    process.exit(1);
  }
};

seedAdmin();
