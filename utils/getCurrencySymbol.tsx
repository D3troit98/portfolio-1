// utils/getCurrencySymbol.tsx
import React, { JSX } from 'react';

export const getCurrencySymbol = (countryCode?: string) => {
  if (!countryCode) return <span>$</span>;

  const currencyMap: Record<string, JSX.Element> = {
    NG: <span>₦</span>,
    GB: <span>£</span>,
    CA: <span>CAD</span>,
    UK: <span>£</span>,
  };

  return currencyMap[countryCode.toUpperCase()] || <span>$</span>;
};

// Usage example:
// import { getCurrencySymbol } from '@/utils/getCurrencySymbol';
// {getCurrencySymbol(studentData?.location?.country)}
