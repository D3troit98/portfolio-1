/* eslint-disable @typescript-eslint/no-empty-object-type */
import { cn } from '@/lib/utils';
import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';

// Section Component Props
interface SectionProps extends HTMLAttributes<HTMLElement> {
  grid?: boolean;
  row?: boolean;
  nopadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  grid,
  row,
  nopadding,
  id,
  className,
  ...props
}) => {
  return (
    <section
      id={id}
      className={cn(
        'container mx-auto relative overflow-hidden box-border gap-6 ',
        'bg-white dark:bg-gray-900',
        grid ? 'md:grid grid-cols-2 flex' : 'flex',
        row ? 'flex-row' : 'flex-col',
        nopadding ? 'p-4' : 'md:p-8 sm:p-6  p-4',
        'sm:flex-col md:w-[calc(100vw-32px)] md:flex-col w-full',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

// Section Title Component Props
interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  main?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  main,
  className,
  ...props
}) => {
  return (
    <h2
      className={cn(
        'font-extrabold w-max max-w-full bg-clip-text text-transparent',
        'dark:bg-gradient-to-r dark:from-white dark:via-white/66 dark:to-white/0',
        'bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500',
        'text-gray-900 dark:text-white',
        main
          ? 'md:text-[65px] md:leading-[72px] md:p-[58px_0_16px] sm:text-[56px] sm:leading-[56px] sm:p-[40px_0_12px] text-[28px] leading-[32px] p-[16px_0_8px]'
          : 'text-[56px] leading-[56px] p-0',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

// Section Text Component Props
interface SectionTextProps extends HTMLAttributes<HTMLParagraphElement> {}

export const SectionText: React.FC<SectionTextProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        'md:max-w-[800px] md:text-[24px] md:leading-[40px] text-[16px] leading-[24px] sm:text-[20px] sm:leading-[32px] font-light',
        'md:pb-[3.6rem] pb-[16px] max-w-[670px] sm:pb-[24px]',
        'dark:text-white/50',
        'text-gray-700',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

// Section Divider Component Props
interface SectionDividerProps extends HTMLAttributes<HTMLDivElement> {
  colorAlt?: boolean;
  divider?: boolean;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  colorAlt,
  divider,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex rounded-[10px]',
        'bg-gradient-to-r',
        colorAlt
          ? 'dark:from-[#F46737] dark:to-[#945DD6] from-orange-500 to-purple-600'
          : 'dark:from-[#13ADC7] dark:to-[#945DD6] from-teal-500 to-purple-600',
        divider ? 'my-[4rem]' : '',
        'w-[64px] h-[6px] md:w-[48px] md:h-[4px] sm:w-[32px] sm:h-[2px]',
        className
      )}
      {...props}
    />
  );
};

// Section Sub Text Component Props
interface SectionSubTextProps extends HTMLAttributes<HTMLParagraphElement> {}

export const SectionSubText: React.FC<SectionSubTextProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        'max-w-[800px] font-light text-[18px] leading-[32px]',
        'dark:text-white/75 text-gray-600',
        'md:max-w-[672px] md:text-[16px] md:leading-[25px]',
        'sm:text-[14px] sm:leading-[22px]',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

// Secondary Button Component Props
interface SecondaryBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SecondaryBtn: React.FC<SecondaryBtnProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'text-white bg-none border rounded-full',
        'px-[24px] py-[16px] font-semibold text-[18px] leading-[16px]',
        'mt-[32px] mb-[80px] cursor-pointer transition duration-400',
        'dark:border-white/33 dark:hover:text-[#0f1624] dark:hover:bg-white dark:hover:border-white',
        'border-gray-700 text-gray-700 hover:text-white hover:bg-gray-700',
        'active:bg-[#e0e4eb] active:border-[#304169] active:shadow-inset',
        'md:mt-[24px] md:mb-[64px] md:text-[20px] md:leading-[20px]',
        'sm:mt-[16px] sm:mb-[40px] sm:px-[16px] sm:py-[8px] sm:w-full sm:text-[14px] sm:leading-[16px]',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// Button Back Component Props
interface ButtonBackProps extends HTMLAttributes<HTMLDivElement> {
  alt?: boolean;
  form?: boolean;
  disabled?: boolean;
}

export const ButtonBack: React.FC<ButtonBackProps> = ({
  children,
  alt,
  form,
  disabled,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center font-semibold cursor-pointer relative overflow-hidden transition-opacity ease-in-out rounded-full',
        alt
          ? 'dark:from-[#ff622e] dark:to-[#B133FF] from-orange-500 to-purple-600'
          : 'dark:from-[#00DBD8] dark:to-[#B133FF] from-teal-500 to-purple-600',
        alt
          ? 'w-[150px] h-[52px] text-[20px]'
          : 'w-[262px] h-[64px] text-[24px]',
        form || alt ? 'm-0' : 'mb-[80px]',
        disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100',
        'bg-gradient-to-l',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Button Front Component Props
interface ButtonFrontProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  alt?: boolean;
}

export const ButtonFront: React.FC<ButtonFrontProps> = ({
  children,
  alt,
  disabled,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'absolute top-0 left-0 w-full h-full border-none rounded-full flex items-center justify-center font-semibold cursor-pointer transition-opacity duration-400 ease-in-out',
        alt
          ? 'dark:from-[#F46737] dark:to-[#945DD6] from-orange-500 to-purple-600'
          : 'dark:from-[#13ADC7] dark:to-[#945DD6] from-teal-500 to-purple-600',
        alt ? 'text-[20px]' : 'text-[24px]',
        disabled ? 'opacity-50 cursor-not-allowed shadow-inset' : 'opacity-100',
        'bg-gradient-to-l',
        'hover:opacity-0 focus:outline-none active:opacity-100 active:shadow-inset',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Link Container Component Props
interface LinkContainerProps extends HTMLAttributes<HTMLDivElement> {
  large?: boolean;
}

export const LinkContainer: React.FC<LinkContainerProps> = ({
  children,
  large,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex justify-center rounded-full p-2 transition-transform ease-in-out',
        large ? 'ml-[24px]' : 'ml-[16px]',
        'dark:hover:bg-[#212d45] hover:bg-gray-200 hover:scale-110 cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Link Icon Image Component Props
interface LinkIconImgProps extends HTMLAttributes<HTMLDivElement> {
  large?: boolean;
  nav?: boolean;
}

export const LinkIconImg: React.FC<LinkIconImgProps> = ({
  large,
  nav,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex',
        large ? 'h-[32px]' : 'h-[24px]',
        nav ? 'md:h-[16px]' : 'md:h-[24px]',
        large ? 'sm:h-[32px]' : 'sm:h-[16px]',
        className
      )}
      {...props}
    />
  );
};
