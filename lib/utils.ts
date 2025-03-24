import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (
  amount: number | string,
  userCountry: string
): string => {
  // Convert amount to number if it's a string
  const numericAmount =
    typeof amount === 'string' ? parseFloat(amount) : amount;

  if (isNaN(numericAmount)) {
    throw new Error('Invalid amount provided');
  }

  // Format the amount with commas
  const formatAmount = (value: number): string =>
    value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  if (userCountry === 'NG') {
    // For Nigeria, add the Naira symbol
    return `₦${formatAmount(numericAmount)}`;
  } else {
    // For other countries (defaulting to UK), convert to GBP and add the pound symbol
    // Assuming an exchange rate of 1 NGN = 0.00097 GBP (as of 2024-08-09)
    // You should use a real-time exchange rate API in a production environment
    const exchangeRate = 0.00097;
    const convertedAmount = numericAmount * exchangeRate;
    return `£${formatAmount(convertedAmount)}`;
  }
};

export function convertCamelCaseToReadable(text: string) {
  if (!text) return '';

  return text.replace(/([a-z])([A-Z])/g, '$1 $2');
}

// Qualification options
export const qualificationOptions = [
    { label: "Bachelor's Degree", value: 'bachelors' },
    { label: "Master's Degree", value: 'masters' },
    { label: 'PhD', value: 'phd' },
    { label: 'WAEC (West African Examination Council)', value: 'waec' },
    { label: 'NECO (National Examination Council)', value: 'neco' },
    { label: 'IGCSE (International General Certificate of Secondary Education)', value: 'igcse' },
    { label: 'OND (Ordinary National Diploma)', value: 'ond' },
    { label: 'HND (Higher National Diploma)', value: 'hnd' },
    { label: 'Diploma', value: 'diploma' },
    { label: 'PGD (Postgraduate Diploma)', value: 'pgd' },
    { label: 'Professional Certifications (e.g., PMP, ACCA, CISCO)', value: 'professional-certifications' },
    { label: 'TEFL (Teaching English as a Foreign Language)', value: 'tefl' },
    { label: 'TESOL (Teaching English to Speakers of Other Languages)', value: 'tesol' },
    { label: 'SAT', value: 'sat' },
    { label: 'GRE', value: 'gre' },
    { label: 'TOEFL', value: 'toefl' },
    { label: 'IELTS', value: 'ielts' },
    { label: 'Other', value: 'other' },
  ];

  type ErrorType = {
    data?: string | { message?: string };
    message?: string;
  };

 export const getErrorMessage = (error: ErrorType): string => {
    if (typeof error?.data === 'string') {
      return error.data; // Return if `error.data` is a string
    }

    return error?.data?.message || error?.message || 'Something went wrong';
  };
