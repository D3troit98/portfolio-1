import * as z from "zod";

export const admissionProcessingSchema = z.object({
  fullName: z.string().min(1, {
    message: "First name is required.",
  }),
  cgpa: z.string().min(1, {
    message: "First name is required.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  course: z.string().min(1, {
    message: "First name is required.",
  }),
  phonenumber: z.string().min(8, {
    message: "First name is required.",
  }),
  gender: z.string({
    required_error: "Please select a subject to search.",
  }),
  countryOfResidence: z.string({
    required_error: "Please select a subject to search.",
  }),
  destinationCountry: z.string({
    required_error: "Please select a subject to search.",
  }),
  nameoflastschoolattended: z.string().min(2, {
    message: "First name is required.",
  }),
  program: z.string().min(1, {
    message: "First name is required.",
  }),
  choiceOfUniversity: z.string().min(1, {
    message: "First name is required.",
  }),
  intendedCourse: z.string().min(1, {
    message: "First name is required.",
  }),
  tuitionBudget: z.string().min(1, {
    message: "First name is required.",
  }),
  passportNumber: z.string().min(5, {
    message: "First name is required.",
  }),
  academicSession: z.string().min(1, {
    message: "First name is required.",
  }),
  hearAboutUs: z
    .string()
    .min(10, {
      message: "Swap Experience must be at least 10 characters.",
    })
    .max(160, {
      message: "Swap Experience must not be longer than 30 characters.",
    }),
});

export const testRegistrationSchema = z.object({
  fullName: z.string().min(1, {
    message: "First name is required.",
  }),
  examDate: z.string().min(1, {
    message: "First name is required.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  examType: z.string({
    required_error: "Please select a Exam Type to search.",
  }),
  preferredExamCentre: z.string().min(1, {
    message: "First name is required.",
  }),
  phonenumber: z.string().min(8, {
    message: "First name is required.",
  }),
  issueDate: z.string().min(2, {
    message: "First name is required.",
  }),
  examMode: z.string({
    required_error: "Please select a subject to search.",
  }),

  expireDate: z.string().min(1, {
    message: "First name is required.",
  }),

  passportNumber: z.string().min(5, {
    message: "First name is required.",
  }),
  hearAboutUs: z
    .string()
    .min(10, {
      message: "Swap Experience must be at least 10 characters.",
    })
    .max(160, {
      message: "Swap Experience must not be longer than 30 characters.",
    }),
});

export const visaCouncillingFormSchema = z.object({
  fullName: z.string().min(1, {
    message: "First name is required.",
  }),
  examDate: z.string().min(1, {
    message: "First name is required.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  examType: z.string({
    required_error: "Please select a Exam Type to search.",
  }),

  phonenumber: z.string().min(8, {
    message: "First name is required.",
  }),
  gender: z.string({
    required_error: "Please select a subject to search.",
  }),
  countryOfResidence: z.string({
    required_error: "Please select a subject to search.",
  }),
  purpose: z.string().min(5, {
    message: "First name is required.",
  }),
  issueDate: z.string().min(2, {
    message: "First name is required.",
  }),

  destinationCountry: z.string({
    required_error: "Please select a subject to search.",
  }),
  expireDate: z.string().min(1, {
    message: "First name is required.",
  }),
  countriesVisited: z.string().min(5, {
    message: "First name is required.",
  }),
  passportNumber: z.string().min(5, {
    message: "First name is required.",
  }),
  hearAboutUs: z
    .string()
    .min(10, {
      message: "Swap Experience must be at least 10 characters.",
    })
    .max(160, {
      message: "Swap Experience must not be longer than 30 characters.",
    }),
});

export const tutorialServiceFormSchema = z.object({
  fullName: z.string().min(1, {
    message: "First name is required.",
  }),
  examDate: z.string().min(1, {
    message: "First name is required.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  examType: z.string({
    required_error: "Please select a Exam Type to search.",
  }),
  addressIfOnsite: z
    .string()
    .min(3, {
      message: "First name is required.",
    })
    .optional(),
  gender: z.string({
    required_error: "Please select a subject to search.",
  }),
  phonenumber: z.string().min(8, {
    message: "First name is required.",
  }),
  daysInWeek: z.string({
    required_error: "Please select a valid days in the week.",
  }),
  tutorialMode: z.string({
    required_error: "Please select a Mode of tutorial",
  }),
  studentClass: z.string().min(1, {
    message: "First name is required.",
  }),
  hoursInDay: z.string().min(1, {
    message: "First name is required.",
  }),
  timeOfDay: z.string().min(1, {
    message: "First name is required.",
  }),
  subjects: z
    .string()
    .min(10, {
      message: "Lists of subjects",
    })
    .max(160, {
      message: "Swap Experience must not be longer than 30 characters.",
    }),
  hearAboutUs: z
    .string()
    .min(10, {
      message: "Swap Experience must be at least 10 characters.",
    })
    .max(160, {
      message: "Swap Experience must not be longer than 30 characters.",
    }),
});

export const teacherTrainingSchema = z.object({
  fullName: z.string().min(1, {
    message: "First name is required.",
  }),
  countryOfResidence: z.string({
    required_error: "Please select a subject to search.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  numberOfTrainee: z.string({
    required_error: "Please select a valid number",
  }),

  phonenumber: z.string().min(8, {
    message: "First name is required.",
  }),
  trainingType: z.string({
    required_error: "Please select a valid days in the week.",
  }),
  nameOfSchool: z.string({
    required_error: "Write a valid name of school",
  }),
  additionalInformation: z
    .string()
    .min(1, {
      message: "First name is required.",
    })
    .optional(),
  hoursInDay: z.string().min(1, {
    message: "First name is required.",
  }),
  addressOfSchool: z.string().min(1, {
    message: "First name is required.",
  }),
  hearAboutUs: z
    .string()
    .min(10, {
      message: "Swap Experience must be at least 10 characters.",
    })
    .max(160, {
      message: "Swap Experience must not be longer than 30 characters.",
    }),
});

export const travelManagementSchema = z.object({
  fullName: z.string().min(1, {
    message: "First name is required.",
  }),
  countryOfResidence: z.string({
    required_error: "Please select a subject to search.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phonenumber: z.string().min(8, {
    message: "First name is required.",
  }),
  studentClass: z.string({
    required_error: "Please select a valid Student Class.",
  }),
  nameOfSchool: z.string({
    required_error: "Write a valid name of school",
  }),
  additionalInformation: z
    .string()
    .min(1, {
      message: "Additional information is required.",
    })
    .optional(),
  numberOfDays: z.string().min(1, {
    message: "number of days to be spent.",
  }),
  visaAdvisory: z.string().min(1, {
    message: "Do you need visa Advisory.",
  }),
  hearAboutUs: z
    .string()
    .min(10, {
      message: "Swap Experience must be at least 10 characters.",
    })
    .max(160, {
      message: "Swap Experience must not be longer than 30 characters.",
    }),
});
