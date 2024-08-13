/*
 * @Author: Ender-Wiggin
 * @Date: 2024-08-10 00:35:54
 * @LastEditors: Ender-Wiggin
 * @LastEditTime: 2024-08-14 01:57:11
 * @Description:
 */
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import React from 'react';

import SponsorCardWrapper from '@/components/wrapper/SponsorWrapper';

import { SponsorCard as SponsorCardType } from '@/types/SponsorCard';

interface AnimalCardProps {
  sponsor: SponsorCardType;
}

export const BaseSponsorCard: React.FC<AnimalCardProps> = ({ sponsor }) => {
  const { t } = useTranslation('common');

  return (
    <SponsorCardWrapper id={sponsor.id}>
      <Image
        src={sponsor.image || '/img/placeholder.png'}
        alt='animal Image'
        width={373}
        height={497}
        className='absolute rounded-md object-cover'
      />
      {/* <div className='ark-card-top'>
        <div className='ark-card-top-left sf-hidden'></div>
        <div className='ark-card-top-right'></div>
      </div>
      <div className='ark-card-middle'>
        <div className='ark-card-number sf-hidden'>{sponsor.id}</div>
        <div className='ark-card-title-wrapper'>
          <div
            className={cn('ark-card-title', {
              'scale-75 text-sm': t(sponsor.name).length > 27,
            })}
          >
            {t(sponsor.cnName || '')}
          </div>
        </div>
      </div> */}
    </SponsorCardWrapper>
  );
};
