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
        'container mx-auto relative box-border flex w-full flex-col gap-6 px-6 sm:px-8',
        grid ? 'md:grid md:grid-cols-2' : '',
        row ? 'flex-row' : '',
        nopadding ? 'py-10 md:py-16' : 'py-12 md:py-20',
        'scroll-mt-8'

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
        'font-semibold max-w-full text-white tracking-tight',
        main ? 'text-3xl sm:text-4xl md:text-5xl leading-tight' : 'text-3xl leading-tight'

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
        'max-w-[65ch] text-base sm:text-lg leading-relaxed text-slate-400'
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
        'h-1 w-10 rounded-full bg-[#78c8c1]',
        divider ? 'my-12' : '',
        colorAlt ? 'opacity-70' : ''
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
