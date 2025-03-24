import * as z from "zod";

export const studentSigninSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long.",
  }),
  rememberMe: z.boolean().default(false).optional(),
});

export const studentSignupSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 6 characters long.",
    }),
    firstName: z.string().min(1, {
      message: "First name is required.",
    }),
    lastName: z.string().min(1, {
      message: "Last name is required.",
    }),
    confirmPassword: z.string(),
    otherNames: z.string().optional(),
    phoneNumber: z.string().min(8, {
      message: "Not a valid number",
    }),
    address: z.string().min(1, {
      message: "Address name is required.",
    }),
    // dob: z.date({ required_error: 'Date of birth is required' }),
    // postcode: z.string().min(1, {
    //   message: "postcode is required.",
    // }),
    bio: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 160 characters.',
    }),
    locationConsent: z.boolean({
      required_error: "You must accept the data consent",
    }).refine((val) => val === true, {
      message: "You must accept the location data consent",
    }),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export const forgetPasswordSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export const resetPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long.",
  }),
  confirmPassword: z
    .string()
    .refine((data: any) => data.confirmPassword === data.password, {
      message: "Passwords do not match.",
    }),
});

export const studentProfileSchema = z.object({
    // dob: z.date({ required_error: 'Date of birth is required' }),
    // phoneNumber: z.string().min(8, {
    //   message: 'Not a valid number',
    // }),
    // address: z.string().min(1, {
    //   message: 'Address name is required.',
    // }),
    // country: z.string({
    //   required_error: 'Please select a country to search.',
    // }),
    // state: z.string({
    //   required_error: 'Please select a country to search.',
    // }),
    bio: z
      .string()
      .min(10, {
        message: 'Bio must be at least 10 characters.',
      })
      .max(160, {
        message: 'Bio  must not be longer than 160 characters.',
      }),
    // postcode: z.string().min(1, {
    //   message: 'postcode is required.',
    // }),
     firstName: z.string().min(1, {
        message: 'First name is required.',
      }),
      lastName: z.string().min(1, {
        message: 'Last name is required.',
      }),
      otherNames: z.string().optional(),
      phoneNumber: z.string().min(8, {
        message: 'Not a valid number',
      }),
  });

export const changePasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long.",
  }),
  oldPassword: z.string().min(6, {
    message: "Password must be at least 6 characters long.",
  }),
  confirmPassword: z.string().min(6, {
    message: "Password must be at least 6 characters long.",
  }),
});

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const fileSubmitSchema = z.object({
  imageFile: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, "Max file size is 5MB.")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Please select a valid image file (JPEG, JPG, PNG)."
    ),
});
