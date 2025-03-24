import * as z from 'zod';

export const tutorFilterSchema = z.object({
  subject: z.string().optional(),
  level: z.string().optional(),
  meetingMethod: z.custom<string>().optional(),
  morningSession: z.boolean().default(false).optional(),
  afternoonSession: z.boolean().default(false).optional(),
  eveningSession: z.boolean().default(false).optional(),
  postcode: z.string().optional(),
});

export const tutorBookingFilterSchema = z.object({
  department: z.string({
    required_error: 'Please select a subject to search.',
  }),
  subject: z
    .string({
      required_error: 'Please select a subject to search.',
    })
    .optional(),
  country: z
    .string({
      required_error: 'Please select a country to search.',
    })
    .optional(),
  state: z
    .string({
      required_error: 'Please select a subject to search.',
    })
    .optional(),
  meetingMethod: z.enum(['online', 'onSite', 'hybrid'], {
    required_error: 'You need to select a meeting method',
  }),
  morningSession: z.boolean().default(false).optional(),
  afternoonSession: z.boolean().default(false).optional(),
  eveningSession: z.boolean().default(false).optional(),
});

export const tutorSignInchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters long.',
  }),
  rememberMe: z.boolean().default(false).optional(),
});

export const tutorSignupSchema = z
  .object({
    email: z.string().email({
      message: 'Please enter a valid email address.',
    }),
    password: z.string().min(8, {
      message: 'Password must be at least 6 characters long.',
    }),
    firstName: z.string().min(1, {
      message: 'First name is required.',
    }),
    lastName: z.string().min(1, {
      message: 'Last name is required.',
    }),
    confirmPassword: z.string(),
    // dob: z.date({ required_error: 'Date of birth is required' }),
    otherNames: z.string().optional(),
    occupation: z.string().min(1, {
      message: 'Occupation is required.',
    }),
    phoneNumber: z.string().min(8, {
      message: 'Not a valid number',
    }),
    address: z.string().min(1, {
      message: 'Address is required.',
    }),
    // country: z.string({
    //   required_error: 'Please select a country.',
    // }),
    qualification: z.string(),
    // state: z.string({
    //   required_error: 'Please select a state.',
    // }),
    bio: z
      .string()
      .min(50, {
        message: 'Bio must be at least 50 characters.',
      })
      .max(500, {
        message: 'Bio must not be longer than 500 characters.',
      }),
    // postcode: z.string().min(1, {
    //   message: 'Postcode is required.',
    // }),
    // identityType: z.object({
    //   type: z.enum(['BVN', 'VOTER_ID', 'NIN'], {
    //     required_error: 'You need to select a verification method',
    //   }),
    //   identityNumber: z.string().min(6, {
    //     message: 'Identification number is required',
    //   }),
    // }),
    locationConsent: z.boolean({
        required_error: "You must accept the data consent",
      }).refine((val) => val === true, {
        message: "You must accept the location data consent",
      }),
    // // New bank information fields
    // nameOnAccount: z.string().optional(),
    // accountNumber: z.string().min(1, {
    //   message: "Account number is required.",
    // }),
    // sortCode: z.string().min(1, {
    //   message: "Sort code is required.",
    // }),
    // swiftCode: z.string().optional(),
    // bankName: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });

export const studentTutorBookingSchema = z.object({
  level: z.string({
    required_error: 'Please select a subject to search.',
  }),
  subject: z.string({
    required_error: 'Please select a subject to search.',
  }),
  hoursInDay: z.string({
    required_error: 'Please select a subject to search.',
  }),
  numberOfMonths: z.string({
    required_error: 'Please select a subject to search.',
  }),
  meetingMethod: z.enum(['online', 'onSite', 'hybrid'], {
    required_error: 'You need to select a meeting method',
  }),
  morningSession: z.boolean().default(false).optional(),
  afternoonSession: z.boolean().default(false).optional(),
  eveningSession: z.boolean().default(false).optional(),
});

export const tutorProfileSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  dob: z.date({ required_error: 'Date of birth is required' }),
  firstName: z.string().min(1, {
    message: 'First name is required.',
  }),
  otherNames: z.string().optional(),
  lastName: z.string().min(1, {
    message: 'Last name is required.',
  }),
  occupation: z.string().min(1, {
    message: 'Occupation is required.',
  }),
  phoneNumber: z.string().min(8, {
    message: 'Not a valid number',
  }),
  address: z.string().min(1, {
    message: 'Address name is required.',
  }),
  country: z.string({
    required_error: 'Please select a country to search.',
  }),
  qualification: z.string(),
  state: z.string({
    required_error: 'Please select a country to search.',
  }),
  bio: z
    .string()
    .min(10, {
      message: 'Bio  must be at least 10 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 160 characters.',
    }),
  postcode: z.string().min(1, {
    message: 'postcode is required.',
  }),
  // New bank information fields
  nameOnAccount: z.string().optional(),
  accountNumber: z.string().min(1, {
    message: 'Account number is required.',
  }),
  sortCode: z.string().min(1, {
    message: 'Sort code is required.',
  }),
  swiftCode: z.string().optional(),
  bankName: z.string().optional(),
});



export const tutorSetupSchema = z.object({
  subjects: z
    .array(
      z.object({
        department: z.string(),
        subject: z.string(),
        hourlyRate: z.string({
          required_error: 'select a valid hourly rate',
        }),
        meetingMethod: z.enum(['online', 'onSite', 'hybrid'], {
          required_error: 'You need to select a meeting method',
        }),
        level: z.string({
          required_error: 'Please select a level.',
        }),
        morningSession: z.boolean().default(false).optional(),
        afternoonSession: z.boolean().default(false).optional(),
        eveningSession: z.boolean().default(false).optional(),
      })
    )
    .min(1), // Ensure at least one grid input is submitted
});
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const tutorVerifyidentitySchema = z.object({
  identityType: z.object({
    type: z.enum(['BVN', 'VOTER_ID', 'NIN'], {
      required_error: 'You need to select a verification method',
    }),
    identityNumber: z.string().min(6, {
      message: 'Identification number is required',
    }),
  }),
  frontalDocumentImage: z
    .any()
    .refine((file) => {
      // console.log(file);
      return file?.size <= MAX_FILE_SIZE;
    }, 'Max file size is 5MB.')
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Please select a valid image file (JPEG, JPG, PNG).'
    ),
});

// export const tutorVerifyidentitySchema = z.object({
//   identityType: z
//     .object({
//       type: z.enum(["bvn", "passport", "nimc"], {
//         required_error: "You need to select a verification method",
//       }),
//       identityNumber: z
//         .string({ required_error: "BVN number is required" })
//         .optional(),
//     })
//     .refine(
//       (identity) => {
//         if (identity.type === "bvn") {
//           return identity.bvnNumber !== undefined && identity.bvnNumber !== "";
//         } else {
//           return true; // For other types, no additional check needed
//         }
//       },
//       {
//         message: "BVN Number is required for BVN verification",
//       },
//     ),
//   frontalDocumentImage: z
//     .any()
//     .refine((file) => {
//       console.log(file);
//       return file?.size <= MAX_FILE_SIZE;
//     }, "Max file size is 5MB.")
//     .refine(
//       (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
//       "Please select a valid image file (JPEG, JPG, PNG).",
//     ),
// });

export const otpSchema = z.object({
  pin: z.string().min(6, {
    message: 'Your number must be 6 characters.',
  }),
});


// Enum for document types
export const DocumentTypeEnum = z.enum([
    'NIN',
    'BVN',
    'PASSPORT',
    // 'ID_CARD',
    'DRIVERS_LICENSE',
    // 'RESIDENCE_PERMIT',
    // 'VISA'
  ]);

  // KYC Validation Schema
  export const kycSchema = z.object({
    documentType: DocumentTypeEnum,
    identityNumber: z.string()
      .min(5, { message: "Identity number must be at least 5 characters" })
      .max(20, { message: "Identity number cannot exceed 20 characters" })
  });

  // Type inference for TypeScript
  export type KYCFormData = z.infer<typeof kycSchema>;
