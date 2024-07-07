import { Prisma } from '@prisma/client';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export const QuizInfo: React.FC<
  Prisma.SetUpGroupByOutputType & { idx: number }
> = (props) => {
  const { t } = useTranslation('common');

  return (
    <Link href={`/daily-quiz?seed=${props.seed}`}>
      <Card className=' flex h-12 items-center justify-between px-4 py-2'>
        {/* <Badge
          className={cn(
            'flex w-20 justify-center place-self-start text-center',
            {
              'bg-sky-600 hover:bg-sky-500': props.title === 'ALL EXP',
            }
          )}
        >
          {t(props.title)}
        </Badge> */}
        <div className='text-bold'>
          {dayjs(props.createdat).format('DD/MM/YYYY')}
        </div>
        <div className='flex justify-end gap-2'>
          {props.idx !== 0 && (
            <Link href={`/daily-quiz?seed=${props.seed}&result=true`}>
              <Badge>{t('View Result')}</Badge>
            </Link>
          )}
          <div className='font-bold'>
            {t('quiz.total') + ': ' + props.total}
          </div>
        </div>
      </Card>
    </Link>
  );
};
