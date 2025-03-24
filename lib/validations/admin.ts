/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as z from "zod";

export const adminSigninSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
      }),
      password: z.string().min(6, {
        message: "Password must be at least 6 characters long.",
      }),
});

const MAX_FILE_SIZE = 5000000;
const MAX_TOTAL_FILES = 4;
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "application/pdf", // Corrected the PDF MIME type
];

const youtubeLinkRegex =
  /^https:\/\/(www\.youtube\.com\/(watch\?v=|live\/)|youtu\.be\/).+$/i;

export const createResourceSchema = z.object({
department: z.string().min(1, "Department is required"),
  subject: z.string().min(1, "Subject is required"),
  descrption: z.string().min(10, "Description must be at least 10 characters").max(500, "Description must not exceed 500 characters"),
  link: z.string().url("Must be a valid URL")
});


export const AdminSignupSchema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
    otherNames: z.string().optional(),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    passKey: z.string().min(10, { message: "Pass key must be at least 10 characters" }),
    passConfirm: z.string(),
    phoneNumber: z.string().min(10, { message: "Invalid phone number" }),
    addressLine1: z.string().min(5, { message: "Address must be at least 5 characters" }),
    locationConsent: z.boolean().refine((val) => val === true, {
        message: "You must consent to location sharing"
      })
  }).refine((data) => data.password === data.passConfirm, {
    message: "Passwords do not match",
    path: ["passConfirm"]
  });

  // Signin Schema
  export const AdminSigninSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" })
  });

  // Change Password Schema
  export const AdminChangePasswordSchema = z.object({
    passKey: z.string().min(10, { message: "Pass key must be at least 10 characters" }),
    currentPass: z.string().min(8, { message: "Current password must be at least 8 characters" }),
    password: z.string().min(8, { message: "New password must be at least 8 characters" }),
    passConfirm: z.string()
  }).refine((data) => data.password === data.passConfirm, {
    message: "Passwords do not match",
    path: ["passConfirm"]
  });
