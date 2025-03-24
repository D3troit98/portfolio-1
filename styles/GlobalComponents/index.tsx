import { cn } from '@/lib/utils';
import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from 'react';

export const Section = ({
  children,
  grid,
  row,
  nopadding,
  id,
}: {
  children: ReactNode;
  grid?: boolean;
  row?: boolean;
  nopadding?: boolean;
  id?: string;
}) => {
  return (
    <section
      id={id}
      className={cn(
        'container mx-auto relative overflow-hidden box-border gap-6 ',
        grid ? 'md:grid grid-cols-2 flex' : 'flex',
        row ? 'flex-row' : 'flex-col',
        nopadding ? 'p-4' : 'md:p-8 sm:p-6  p-4',
        'sm:flex-col md:w-[calc(100vw-32px)] md:flex-col w-full'
      )}
    >
      {children}
    </section>
  );
};

export const SectionTitle = ({
  children,
  main,
}: {
  children: ReactNode;
  main: boolean;
}) => {
  return (
    <h2
      className={cn(
        'font-extrabold w-max max-w-full bg-clip-text text-transparent',
        'bg-gradient-to-r from-white via-white/66 to-white/0',
        main
          ? 'md:text-[65px] md:leading-[72px]  md:p-[58px_0_16px] sm:text-[56px] sm:leading-[56px] sm:p-[40px_0_12px] text-[28px] leading-[32px] p-[16px_0_8px]'
          : 'text-[56px] leading-[56px] p-0'
      )}
    >
      {children}
    </h2>
  );
};

export const SectionText = ({ children }: { children: ReactNode }) => {
  return (
    <p
      className={cn(
        'md:max-w-[800px] md:text-[24px] md:leading-[40px] text-[16px] leading-[24px] sm:text-[20px] sm:leading-[32px] font-light md:pb-[3.6rem] text-white/50 pb-[16px] max-w-[670px]  sm:pb-[24px]'
      )}
    >
      {children}
    </p>
  );
};

export const SectionDivider = ({
  colorAlt,
  divider,
}: {
  colorAlt?: boolean;
  divider?: boolean;
}) => {
  return (
    <div
      className={cn(
        'flex rounded-[10px]',
        'bg-gradient-to-r',
        colorAlt
          ? 'from-[#F46737] to-[#945DD6]'
          : 'from-[#13ADC7] to-[#945DD6]',
        divider ? 'my-[4rem]' : '',
        'w-[64px] h-[6px] md:w-[48px] md:h-[4px] sm:w-[32px] sm:h-[2px]'
      )}
    />
  );
};

export const SectionSubText = ({ children }: { children: ReactNode }) => {
  return (
    <p
      className={cn(
        'max-w-[800px] font-light text-[18px] leading-[32px] text-white/75',
        'md:max-w-[672px] md:text-[16px] md:leading-[25px]',
        'sm:text-[14px] sm:leading-[22px]'
      )}
    >
      {children}
    </p>
  );
};

export const SecondaryBtn = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'text-white bg-none border border-white/33 rounded-full',
        'px-[24px] py-[16px] font-semibold text-[18px] leading-[16px]',
        'mt-[32px] mb-[80px] cursor-pointer transition duration-400',
        'hover:text-[#0f1624] hover:bg-white hover:border-white',
        'active:bg-[#e0e4eb] active:border-[#304169] active:shadow-inset',
        'md:mt-[24px] md:mb-[64px] md:text-[20px] md:leading-[20px]',
        'sm:mt-[16px] sm:mb-[40px] sm:px-[16px] sm:py-[8px] sm:w-full sm:text-[14px] sm:leading-[16px]'
      )}
    >
      {children}
    </button>
  );
};

interface ButtonBackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  alt?: boolean;
  form?: boolean;
  disabled?: boolean;
}

export const ButtonBack = ({
  children,
  alt,
  form,
  disabled,
  ...props
}: ButtonBackProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center font-semibold cursor-pointer relative overflow-hidden transition-opacity ease-in-out rounded-full',
        alt
          ? 'w-[150px] h-[52px] text-[20px]'
          : 'w-[262px] h-[64px] text-[24px]',
        form || alt ? 'm-0' : 'mb-[80px]',
        disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100',
        alt
          ? 'bg-gradient-to-l from-[#ff622e] to-[#B133FF]'
          : 'bg-gradient-to-l from-[#00DBD8] to-[#B133FF]'
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface ButtonFrontProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  alt?: boolean;
  disabled?: boolean;
}

export const ButtonFront = ({
  children,
  alt,
  disabled,
  ...props
}: ButtonFrontProps) => {
  return (
    <button
      className={cn(
        'absolute top-0 left-0 w-full h-full border-none rounded-full flex items-center justify-center font-semibold cursor-pointer transition-opacity duration-400 ease-in-out',
        alt ? 'text-[20px]' : 'text-[24px]',
        disabled ? 'opacity-50 cursor-not-allowed shadow-inset' : 'opacity-100',
        alt
          ? 'bg-gradient-to-l from-[#F46737] to-[#945DD6]'
          : 'bg-gradient-to-l from-[#13ADC7] to-[#945DD6]',
        'hover:opacity-0 focus:outline-none active:opacity-100 active:shadow-inset'
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

interface LinkContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  large?: boolean;
}

export const LinkContainer = ({
  children,
  large,
  ...props
}: LinkContainerProps) => {
  return (
    <div
      className={cn(
        'flex justify-center rounded-full p-2 transition-transform ease-in-out',
        large ? 'ml-[24px]' : 'ml-[16px]',
        'hover:bg-[#212d45] hover:scale-110 cursor-pointer'
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface LinkIconImgProps extends HTMLAttributes<HTMLDivElement> {
  large?: boolean;
  nav?: boolean;
}

export const LinkIconImg = ({ large, nav, ...props }: LinkIconImgProps) => {
  return (
    <div
      className={cn(
        'flex',
        large ? 'h-[32px]' : 'h-[24px]',
        nav ? 'md:h-[16px]' : 'md:h-[24px]',
        large ? 'sm:h-[32px]' : 'sm:h-[16px]'
      )}
      {...props}
    />
  );
};
