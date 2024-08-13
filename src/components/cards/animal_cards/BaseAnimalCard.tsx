/*
 * @Author: Ender-Wiggin
 * @Date: 2024-08-10 00:35:54
 * @LastEditors: Ender-Wiggin
 * @LastEditTime: 2024-08-14 01:56:13
 * @Description:
 */
// AnimalCard.tsx
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import React from 'react';

import AnimalCardWrapper from '@/components/wrapper/AnimalWrapper';

import { AnimalCard as AnimalCardType } from '@/types/AnimalCard';

interface AnimalCardProps {
  animal: AnimalCardType;
  // showLink: boolean;
}

export const BaseAnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  const { t } = useTranslation('common');

  return (
    <>
      <AnimalCardWrapper id={animal.id}>
        <Image
          src={animal.image || '/img/placeholder.png'}
          alt='animal Image'
          width={373}
          height={497}
          placeholder='empty'
          className='absolute rounded-md object-cover'
        />
        <div className='ark-card-top'></div>

        {/* <div className='ark-card-middle'>
          <div className='ark-card-number'>{animal.id}</div>
          {animal.source === CardSource.PROMO && (
            <div className='ark-card-exp'>
              <GiSevenPointedStar className='opacity-30' />
            </div>
          )}
          <div className='ark-card-title-wrapper'>
            <div
              className={cn('ark-card-title pt-1', {
                'scale-90 text-xs': t(animal.name).length > 28,
              })}
            >
              {t(animal.cnName || animal.name)}
            </div>
            <div className='ark-card-subtitle sf-hidden -mt-2'>
              {animal.latinName}
            </div>
          </div>
        </div> */}
      </AnimalCardWrapper>
    </>
  );
};
