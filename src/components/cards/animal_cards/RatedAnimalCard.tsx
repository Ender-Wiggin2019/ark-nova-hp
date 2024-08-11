/*
 * @Author: Ender-Wiggin
 * @Date: 2024-08-10 00:35:54
 * @LastEditors: Ender-Wiggin
 * @LastEditTime: 2024-08-11 02:36:36
 * @Description:
 */
import React from 'react';

import { AnimalModelCard } from '@/components/cards/animal_cards/models/AnimalModelCard';
import {
  PopHover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/PopHover';

import { BaseAnimalCard } from './BaseAnimalCard';

import { AnimalCard } from '@/types/AnimalCard';

interface RatedAnimalCardProps {
  cardData: AnimalCard;
  showLink: boolean;
}

export const RatedAnimalCard: React.FC<RatedAnimalCardProps> = ({
  cardData,
  showLink,
}) => {
  const animalCard = cardData;

  return (
    <>
      <PopHover>
        <PopoverTrigger>
          <BaseAnimalCard animal={animalCard} />
        </PopoverTrigger>
        <PopoverContent className='z-20 -mt-56 w-48 bg-zinc-50/95 p-2 md:-mt-64 md:w-52'>
          <AnimalModelCard id={animalCard.id} showLink={showLink} />
        </PopoverContent>
      </PopHover>
    </>
  );
};
