import { cva } from 'class-variance-authority'

export const title = cva(
  'tracking-tighter inline font-bold bg-clip-text py-4 text-center leading-relaxed md:tracking-tight',
  {
    variants: {
      color: {
        violet: 'from-[#FF1CF7] to-[#b249f8]',
        yellow: 'from-[#FF705B] to-[#FFB457]',
        blue: 'from-[#5EA2EF] to-[#0072F5]',
        cyan: 'from-[#00b7fa] to-[#01cfea]',
        green: 'from-[#6ee7b7] to-[#059669]',
        pink: 'from-[#FF72E1] to-[#F54C7A]',
        foreground: 'dark:from-[#d4d4d8] dark:to-[#ffffff]',
      },
      size: {
        sm: 'text-xl lg:text-2xl',
        md: 'text-3xl lg:text-5xl leading-9',
        lg: 'text-4xl lg:text-6xl',
      },
      fullWidth: {
        true: 'w-full block',
      },
    },
    defaultVariants: {
      color: 'foreground',
      size: 'md',
    },
    compoundVariants: [
      {
        color: [
          'violet',
          'yellow',
          'blue',
          'cyan',
          'green',
          'pink',
          'foreground',
        ],
        class: 'bg-clip-text text-transparent bg-gradient-to-b',
      },
    ],
  },
)

export const subtitle = cva(
  'max-w-[600px] md:w-1/2 my-2 text-lg font-semibold md:text-xl text-zinc-400',
  {
    variants: {
      fullWidth: {
        true: '!w-full',
      },
    },
    defaultVariants: {
      fullWidth: true,
    },
  },
)
