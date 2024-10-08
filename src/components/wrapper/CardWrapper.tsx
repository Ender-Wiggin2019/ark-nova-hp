/*
 * @Author: Ender-Wiggin
 * @Date: 2024-08-10 00:35:54
 * @LastEditors: Ender-Wiggin
 * @LastEditTime: 2024-08-12 01:58:38
 * @Description:
 */
import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import { BaseAnimalCard } from '@/components/cards/animal_cards/BaseAnimalCard';
import { BaseEndGameCard } from '@/components/cards/endgame_cards/BaseEndGameCard';
import { ProjectCard } from '@/components/cards/project_cards/ProjectCard';
import { BaseSponsorCard } from '@/components/cards/sponsor_cards/BaseSponsorCard';

import { getCardById } from '@/utils/GetCardById';

import {
  isAnimalCard,
  isEndGameCard,
  isProjectCard,
  isSponsorCard,
} from '@/types/Card';

interface CardWrapperProps {
  id: string;
  canSelect: boolean;
  disable: boolean;
  index?: number;
  onSelect?: (id: string, add: boolean) => void;
  initSelect?: boolean;
  preview?: boolean;
  // children: React.ReactNode;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  id,
  canSelect,
  disable,
  index,
  initSelect,
  preview,
  // children,
  onSelect,
}) => {
  const [selected, setSelected] = useState(initSelect || false);

  useEffect(() => {
    setSelected(initSelect || false);
  }, [initSelect]);

  const handleSelect = () => {
    if ((!canSelect || disable) && !selected) return;
    setSelected(!selected);
    if (onSelect) {
      onSelect(id, !selected);
    }
  };
  const cardData = getCardById(id);
  if (!cardData) {
    return null;
  }

  const Card = isAnimalCard(cardData) ? (
    <BaseAnimalCard animal={cardData} />
  ) : isSponsorCard(cardData) ? (
    <BaseSponsorCard sponsor={cardData} />
  ) : isProjectCard(cardData) ? (
    <ProjectCard project={cardData} />
  ) : isEndGameCard(cardData) ? (
    <BaseEndGameCard card={cardData} />
  ) : null;
  return (
    <div
      className={cn('player-board-hand w-min cursor-pointer', {
        'rounded-sm ring-4 ring-amber-500 ring-offset-2': selected,
        preview: preview,

        'cursor-auto': !canSelect,
        'cursor-not-allowed grayscale': disable && !selected,
      })}
      onClick={handleSelect}
    >
      {Card}
    </div>
  );
};

export default CardWrapper;
