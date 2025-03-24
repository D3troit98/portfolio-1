'use server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import {  deleteCookie } from 'cookies-next/client';

// export async function serverAction() {
//   await setCookie('test', 'value', { cookies });
//   await deleteCookie('test', { cookies });
//   await getCookie('test', { cookies });
//   await getCookies({ cookies });
//   await hasCookie('test', { cookies });
// }

// export const setCookie = async (key: string, value: string): Promise<void> => {
//   const cookieStore = await cookies();
//   cookieStore.set(key, value);
// };


//client
// getCookies();
// getCookie('key');
// setCookie('key', 'value');
// deleteCookie('key');
// hasCookie('key')
;
export const setCookie = async (key: string, value: string): Promise<void> => {
    const cookieStore = await cookies();
    cookieStore.set(key, value);
  };

export const getToken = async (key: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get(key);
  return token;
};

export async function removeToken(): Promise<void> {
  // Create a custom storage key for tracking logout state
  const LOGOUT_INDICATOR_KEY = 'sp-logout-indicator';
  console.log('removing token')
  deleteCookie('sp-token');
//   await deleteCookie('sp-token', { cookies });
//   const cookieStore = await cookies();
//   cookieStore.delete('sp-token');

  // Set a temporary indicator in localStorage to communicate with middleware
   if (typeof window !== 'undefined') {
    localStorage.setItem(LOGOUT_INDICATOR_KEY, 'true');
   }
}
export const detectCountry = async () => {
  const cookieStore = await cookies();
  const userCountry = cookieStore.get('userCountry');
  return userCountry ? userCountry.value : 'NG'; // Default to NG if no cookie is set
};

export const parseHeaders = async (headers: Headers) => {
  const result: Record<string, string> = {};
  const headersIterator = headers.entries();

  for (const header of headersIterator) {
    const [headerName, headerValue] = header;
    if (headerName.toLowerCase() === 'cookie') {
      const cookies = headerValue.split('; ');
      cookies.forEach((cookie) => {
        const [cookieName, cookieValue] = cookie.split('=');
        result[cookieName] = cookieValue;
      });
    } else if (headerName.toLowerCase() === 'x-forwarded-for') {
      result['x-forwarded-for'] = headerValue;
    }
  }

  return result;
};
//  // Function to hash the email using md5
//  export const  getGravatarUrl = (email: any) => {
//   if (!email)
//     return `https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50`;
//   const hashedEmail = md5(email.toLowerCase().trim()); // Hash the email
//   const gravatarUrl = `https://gravatar.com/avatar/${hashedEmail}?d=identicon`; // Gravatar URL with default 'identicon' image
//   return gravatarUrl;
// };

export const revalidatePathsArray = async (
  pathsArray: string[] | undefined | null
) => {
  // console.log("revalidating path");
  if (Array.isArray(pathsArray)) {
    pathsArray.forEach((path) => {
      if (typeof path === 'string') {
        // console.log(`Revalidating path: ${path}`);
        revalidatePath(path, 'page');
      } else {
        // console.log(`Skipping non-string path: ${path}`);
      }
    });
  } else {
    // console.log("Paths are not an array or are undefined/null.");
  }
};

export const addCommasToNumber = async (number: number) => {
  // Convert the number to a string
  let numberString = number.toString();

  // Use a regular expression to add commas at the right places
  numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return numberString;
};
