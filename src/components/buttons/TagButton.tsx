/*
 * @Author: Ender-Wiggin
 * @Date: 2024-08-10 00:35:54
 * @LastEditors: Ender-Wiggin
 * @LastEditTime: 2024-08-10 23:27:37
 * @Description:
 */
// TagButton.tsx
import * as React from 'react';

import { cn } from '@/lib/utils';

import TagComponent from '@/components/icons/Tag';

import { Tag } from '@/types/Tags';

type TagButtonProps = {
  isLoading?: boolean;
  tag: Tag;
  selected: boolean;
  onTagClick?: (tag: Tag) => void;
} & React.ComponentPropsWithRef<'button'>;

const TagButton = React.forwardRef<HTMLButtonElement, TagButtonProps>(
  ({ className, isLoading, tag, selected, onTagClick, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type='button'
        onClick={() => onTagClick && onTagClick(tag)}
        className={cn(
          'filter-button h-min w-min rounded-full bg-hp-ring p-2 text-sm transition',
          selected && 'hp-golden outer-glow scale-90',
          !selected && 'scale-90 hover:scale-110'
        )}
        {...rest}
      >
        <TagComponent type={tag} />
      </button>
    );
  }
);

export default TagButton;
