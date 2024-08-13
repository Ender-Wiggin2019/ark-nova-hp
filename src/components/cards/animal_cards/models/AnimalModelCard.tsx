/*
 * @Author: Ender-Wiggin
 * @Date: 2024-08-10 00:35:54
 * @LastEditors: Ender-Wiggin
 * @LastEditTime: 2024-08-14 02:03:34
 * @Description:
 */
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';

import { Separator } from '@/components/ui/separator';

interface ModelCardProps {
  id: string;
  showLink: boolean;
  readonly?: boolean;
}

export const AnimalModelCard: React.FC<ModelCardProps> = ({ id, showLink }) => {
  // const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <div className='flex flex-col text-xs'>
      {showLink && (
        <div className='flex flex-col items-center'>
          <Separator className='my-2 bg-zinc-300' />
          <Link
            href={'/card/' + id}
            rel='card-detail'
            target='_blank'
            className='w-15 hp-button group flex items-center justify-center space-x-2 rounded-full px-4 py-2 text-xs font-medium text-amber-600 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md hover:text-hp-gold focus:outline-none focus-visible:ring-2 dark:from-zinc-900/30 dark:to-zinc-800/80 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20 dark:focus-visible:ring-yellow-500/80'
          >
            {t('View More')}{' '}
          </Link>
        </div>
      )}
    </div>
  );
};
