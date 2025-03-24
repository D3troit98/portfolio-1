import * as z from 'zod';

export const formSchema = z.object({
  fullName: z.string({
    required_error: 'Please enter your full name',
  }),
  email: z
    .string({
      required_error: 'Please enter a valid email address',
    })
    .email({
      message: 'Please enter a valid email address',
    }),
  bio: z.string({
    required_error: 'Please provide a bio',
  }),
  video: z.string().url({
    message: 'Please enter a valid video URL',
  }),
  reqType: z.string({
    required_error: 'Please select a request type',
  }),
  schoolName: z.string({
    required_error: 'Please enter school name',
  }),
  schooleEmail: z
    .string({
      required_error: 'Please enter school email',
    })
    .email({
      message: 'Please enter a valid school email address',
    }),
  schoolPhone: z.string({
    required_error: 'Please enter school phone number',
  }),
  numberOfStudents: z.number({
    required_error: 'Please enter number of students',
  }),
  candidateName: z.string({
    required_error: 'Please enter candidate name',
  }),
  candidiateClass: z.string({
    required_error: 'Please enter candidate class',
  }),
  instutetion: z.string({
    required_error: 'Please enter institution',
  }),
  country: z.string({
    required_error: 'Please select a country',
  }),
  options: z.array(z.string()),
  testMode: z.string({
    required_error: 'Please select test mode',
  }),
  comingFrom: z.string({
    required_error: 'Please enter origin country',
  }),
  goingTO: z.string({
    required_error: 'Please enter destination country',
  }),
});

export const starPikinSchema = z.object({
  fullName: z.string({
    required_error: 'Please enter your full name',
  }),
  email: z
    .string({
      required_error: 'Please enter a valid email address.',
    })
    .email({
      message: 'Please enter a valid email address.',
    }),
  educationalLevel: z.string({
    required_error: 'Please select a educational level.',
  }),
  country: z.string({
    required_error: 'Please enter origin country',
  }),
  options: z.array(z.string()),

  testMode: z.string({
    required_error: 'Please select test mode',
  }),
});

export const ninjaNinjaSchema = z.object({
  fullName: z.string({
    required_error: 'Please enter your full name',
  }),
  email: z
    .string({
      required_error: 'Please enter a valid email address',
    })
    .email({
      message: 'Please enter a valid email address',
    }),

  country: z.string({
    required_error: 'Please enter origin country',
  }),
  options: z.array(z.string()),
  testMode: z.string({
    required_error: 'Please select test mode',
  }),
});

export const touristSchema = z.object({
  fullName: z.string({
    required_error: 'Please enter your full name',
  }),
  email: z
    .string({
      required_error: 'Please enter a valid email address',
    })
    .email({
      message: 'Please enter a valid email address',
    }),
  comingFrom: z.string({
    required_error: 'Please enter origin country',
  }),
  goingTO: z.string({
    required_error: 'Please enter destination country',
  }),
  options: z.array(z.string()),
  testMode: z.string({
    required_error: 'Please select test mode',
  }),
});

// const MAX_FILE_SIZE = 5000000;
// // eslint-disable-next-line
// const ACCEPTED_IMAGE_TYPES = [
//   'image/jpeg',
//   'image/jpg',
//   'image/png',
//   'image/webp',
// ];
// const ACCEPTED_VIDEO_TYPES = ['video/mp4', 'video/mpeg', 'video/quicktime'];

export const swapSchema = z.object({
  instutetion: z.string({
    required_error: 'Please enter institution',
  }),
  fullName: z.string({
    required_error: 'Please enter your full name',
  }),
  email: z
    .string({
      required_error: 'Please enter a valid email address',
    })
    .email({
      message: 'Please enter a valid email address',
    }),
  country: z.string({
    required_error: 'Please select a country',
  }),

  shareSwapExperience: z
    .string()
    .min(10, {
      message: 'Swap Experience must be at least 10 characters.',
    })
    .max(160, {
      message: 'Swap Experience must not be longer than 30 characters.',
    }),
  //   swapFile: z
  //     .any()
  //     .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max file size is 5MB.')
  //     .refine(
  //       (file) => ACCEPTED_VIDEO_TYPES.includes(file?.type),
  //       'Please select a valid video file (MP4, MPEG, QuickTime).'
  //     ),
  video: z.string().url({
    message: 'Please enter a valid video URL',
  }),
});

// const someSchema = z.object({
//   image: z
//     .any()
//     .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
//     .refine(
//       (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
//       "Only .jpg, .jpeg, .png and .webp formats are supported.",
//     ),
// });
// Base schema with common fields
const baseSchema = {
    reqType: z.enum(["individual", "school"], {
      required_error: "Please select a registration type",
    }),
    fullName: z.string({
      required_error: "Please enter your full name",
    }),
    email: z.string().email({
        message: "Please enter a valid email address",
    })
  };

  // Schema for individual registration
  const individualSchema = z.object({
    ...baseSchema,
    reqType: z.literal("individual"),
    candidateName: z.string({
      required_error: "Please enter candidate name",
    }),
    candidiateClass: z.string({
      required_error: "Please enter candidate class",
    }),
  });

  // Schema for school registration
  const schoolSchema = z.object({
    ...baseSchema,
    reqType: z.literal("school"),
    schoolName: z.string({
      required_error: "Please enter school name",
    }),
    schooleEmail: z
      .string({
        required_error: "Please enter school email",
      })
      .email({
        message: "Please enter a valid school email address",
      }),
    schoolPhone: z.string({
      required_error: "Please enter school phone number",
    }),
    numberOfStudents: z
      .string({
        required_error: "Please enter number of students",
      }),
  });

  // Combined schema using discriminated union
  export const scholarPlatformSchema = z.discriminatedUnion("reqType", [
    individualSchema,
    schoolSchema,
  ]);



export const helpDeskSchema = z.object({
  message: z
    .string()
    .min(10, {
      message: 'Messages must be at least 10 characters.',
    })
    .max(160, {
      message: 'Messages must not be longer than 30 characters.',
    }),
  email: z
    .string({
      required_error: 'Please enter a valid email address.',
    })
    .email({
      message: 'Please enter a valid email address.',
    }),
  fullName: z.string({
    required_error: 'Please select a Valid Name.',
  }),
});
