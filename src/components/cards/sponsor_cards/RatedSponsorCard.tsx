/*
 * @Author: Ender-Wiggin
 * @Date: 2024-08-10 00:35:54
 * @LastEditors: Ender-Wiggin
 * @LastEditTime: 2024-08-11 20:41:21
 * @Description:
 */
import React from 'react';

import { SponsorHoverCard } from '@/components/cards/sponsor_cards/SponsorHoverCard';
import {
  PopHover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/PopHover';

import { BaseSponsorCard } from './BaseSponsorCard';

import { SponsorCard } from '@/types/SponsorCard';

interface RatedSponsorCardProps {
  cardData: SponsorCard;
  showLink: boolean;
}

export const RatedSponsorCard: React.FC<RatedSponsorCardProps> = ({
  cardData,
  showLink,
}) => {
  const sponsorCard = cardData;

  return (
    <>
      <PopHover>
        <PopoverTrigger>
          <BaseSponsorCard sponsor={sponsorCard} />
        </PopoverTrigger>
        <PopoverContent className='z-20 -mt-56 w-48 bg-zinc-50/95 p-2 md:-mt-64 md:w-52'>
          <SponsorHoverCard id={sponsorCard.id} showLink={showLink} />
        </PopoverContent>
      </PopHover>
    </>
  );
};
