// AnimalCard.tsx
import { useTranslation } from 'next-i18next';
import React from 'react';
import { GiSevenPointedStar } from 'react-icons/gi';

import { cn } from '@/lib/utils';

import AnimalCardWrapper from '@/components/wrapper/AnimalWrapper';

import { AnimalCard as AnimalCardType } from '@/types/AnimalCard';
import { CardSource } from '@/types/CardSource';

interface AnimalCardProps {
  animal: AnimalCardType;
  // showLink: boolean;
}

export const BaseAnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  const { t } = useTranslation('common');

  let dataSize = 1;
  if (animal.reputation !== undefined) dataSize += 1;
  if (animal.conservationPoint !== undefined) dataSize += 1;

  return (
    <>
      <AnimalCardWrapper id={animal.id}>
        <div className='ark-card-top'>
          {/* {animal.image && (
            <Image
              src={animal.image}
              alt='animal Image'
              width={373}
              height={497}
              className='absolute h-3/5 rounded-md object-cover'
            />
          )} */}
          {/*<div className='absolute bg-blue-500 w-full h-1/2 z-0'></div>*/}
          {/* <div className='ark-card-top-left'>
            <Enclosures
              size={animal.size}
              rock={animal.rock}
              water={animal.water}
              specialEnclosures={animal.specialEnclosures}
              canBeInStandardEnclosure={animal.canBeInStandardEnclosure}
            />
            <div className='animal-card-cost'>
              <Money value={animal.price} />
            </div>

            <div className='zoo-card-prerequisites'>
              {animal.requirements &&
                animal.requirements.map((tag, index) => (
                  <div key={index} className='zoo-card-badge'>
                    <Tag type={tag} />
                  </div>
                ))}
            </div>
          </div> */}
          {/* <div className='ark-card-top-right'>
            {animal.tags.map((tag, index) => (
              <div key={index} className='zoo-card-badge'>
                <Tag type={tag} />
              </div>
            ))}
          </div> */}
        </div>

        <div className='ark-card-middle'>
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
        </div>
        {/* <div className='ark-card-bottom'>
          {animal.wave !== undefined && animal.wave && <WaveIcon />}
          <div className='zoo-card-bonuses' data-size={dataSize.toString()}>
            {animal.reputation !== undefined && animal.reputation > 0 && (
              <div className='zoo-card-bonus reputation'>
                {animal.reputation}
              </div>
            )}
            {animal.conservationPoint !== undefined &&
              animal.conservationPoint > 0 && (
                <div className='zoo-card-bonus conservation'>
                  {animal.conservationPoint}
                </div>
              )}
            <div className='zoo-card-bonus appeal'>{animal.appeal}</div>
          </div>
        </div> */}
      </AnimalCardWrapper>
    </>
  );
};
