export type ButtonType = 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'help' | 'danger';

export type ButtonSize = 'sm' | 'md' | 'lg';

export const BUTTON_SIZE: Record<ButtonSize, string> = {
  sm: 'px-3 py-1 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-7 py-4 text-base',
};

export const BUTTON_STYLE: Record<
  ButtonType,
  {
    base: string;
    baseHover: string;
    outline: string;
    outlineHover: string;
    textOnly: string;
    disabled: string;
  }
> = {
  primary: {
    base: 'bg-neutral-900 text-white text-white',
    baseHover: 'hover:bg-neutral-800 active:bg-neutral-700',
    outline: 'border border-neutral-700 text-neutral-900',
    outlineHover: 'hover:bg-neutral-100 active:bg-neutral-200',
    textOnly: 'text-neutral-900',
    disabled: 'opacity-60 cursor-not-allowed',
  },
  secondary: {
    base: 'bg-gray-200 text-white text-gray-700',
    baseHover: 'hover:bg-gray-200 active:bg-gray-300',
    outline: 'border border-gray-300 text-gray-600',
    outlineHover: 'hover:bg-gray-100 active:bg-gray-200',
    textOnly: 'text-gray-500',
    disabled: 'opacity-60 cursor-not-allowed',
  },
  success: {
    base: 'bg-green-500 text-white',
    baseHover: 'hover:bg-green-600 active:bg-green-700',
    outline: 'border border-green-400 text-green-600',
    outlineHover: 'hover:bg-green-50 active:bg-green-100',
    textOnly: 'text-green-600',
    disabled: 'opacity-60 cursor-not-allowed',
  },
  info: {
    base: 'bg-sky-500 text-white',
    baseHover: 'hover:bg-sky-600 active:bg-sky-700',
    outline: 'border border-sky-400 text-sky-600',
    outlineHover: 'hover:bg-sky-50 active:bg-sky-100',
    textOnly: 'text-sky-600',
    disabled: 'opacity-60 cursor-not-allowed',
  },
  warn: {
    base: 'bg-orange-500 text-white',
    baseHover: 'hover:bg-orange-600 active:bg-orange-700',
    outline: 'border border-orange-400 text-orange-600',
    outlineHover: 'hover:bg-orange-50 active:bg-orange-100',
    textOnly: 'text-orange-600',
    disabled: 'opacity-60 cursor-not-allowed',
  },
  help: {
    base: 'bg-purple-500 text-white',
    baseHover: 'hover:bg-purple-600 active:bg-purple-700',
    outline: 'border border-purple-400 text-purple-600',
    outlineHover: 'hover:bg-purple-50 active:bg-purple-100',
    textOnly: 'text-purple-600',
    disabled: 'opacity-60 cursor-not-allowed',
  },
  danger: {
    base: 'bg-red-500 text-white',
    baseHover: 'hover:bg-red-600 active:bg-red-700',
    outline: 'border border-red-400 text-red-600',
    outlineHover: 'hover:bg-red-50 active:bg-red-100',
    textOnly: 'text-red-600',
    disabled: 'opacity-60 cursor-not-allowed',
  },
};
