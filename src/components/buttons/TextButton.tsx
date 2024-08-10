/*
 * @Author: Ender-Wiggin
 * @Date: 2024-08-10 00:35:54
 * @LastEditors: Ender-Wiggin
 * @LastEditTime: 2024-08-10 23:51:26
 * @Description:
 */
import * as React from 'react';
const TextButtonVariant = ['primary', 'basic'] as const;
import { cn } from '@/lib/utils';
type TextButtonProps = {
  selected: boolean;
  selectClassName?: string;
  variant?: (typeof TextButtonVariant)[number];
} & React.ComponentPropsWithRef<'button'>;

const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    {
      children,
      className,
      selected,
      selectClassName,
      variant = 'basic',
      disabled: buttonDisabled,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type='button'
        disabled={buttonDisabled}
        className={cn(
          'hp-button group mt-1 flex w-48 items-center justify-center space-x-2 rounded-full px-4 py-2 text-sm font-medium shadow-lg focus:outline-none focus-visible:ring-2 dark:from-zinc-900/30 dark:to-zinc-800/80 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20 dark:focus-visible:ring-yellow-500/80',
          //#region  //*=========== Variant ===========
          variant === 'primary' && [
            'text-primary-500 hover:text-primary-600 active:text-primary-700',
            'disabled:text-primary-200',
          ],
          variant === 'basic' && ['text-white'],

          //#endregion  //*======== Variant ===========
          'disabled:cursor-not-allowed disabled:brightness-105 disabled:hover:underline',
          className,
          selected &&
            selectClassName === undefined &&
            'ring-2 ring-amber-700/90',
          selected && selectClassName !== undefined && selectClassName
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default TextButton;
