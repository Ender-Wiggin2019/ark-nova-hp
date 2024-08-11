import React, { useEffect } from 'react';

import { RatedAnimalCard } from '@/components/cards/animal_cards/RatedAnimalCard';
import CardList from '@/components/cards/shared/CardList';

import { useAnimalData } from './useAnimalData';

import { AnimalCard } from '@/types/AnimalCard';
import { CardSource } from '@/types/CardSource';
import { SortOrder } from '@/types/Order';
import {
  isAnimalTag,
  isContinentTag,
  isOtherTag,
  OtherTag,
  Tag,
} from '@/types/Tags';

interface AnimalCardListProps {
  selectedTags?: Tag[];
  selectedRequirements?: Tag[];
  selectedCardSources?: CardSource[];
  textFilter?: string;
  sortOrder?: SortOrder;
  size?: number[];
  onCardCountChange: (count: number) => void;
  // ... any other filters
}

const filterAnimals = (
  animals: AnimalCard[],
  selectedTags: Tag[] = [],
  selectedRequirements: Tag[] = [],
  selectedCardSources: CardSource[] = [],
  textFilter = '',
  size: number[] = [0]
) => {
  const lowercaseFilter = textFilter.toLowerCase();

  return animals.filter(
    (animal) =>
      (selectedTags.filter(isAnimalTag).length === 0 ||
        selectedTags
          .filter(isAnimalTag)
          .some((tag) => animal.tags.includes(tag))) &&
      (selectedTags.filter(isContinentTag).length === 0 ||
        selectedTags
          .filter(isContinentTag)
          .some((tag) => animal.tags.includes(tag))) &&
      (selectedTags.filter(isOtherTag).length === 0 ||
        selectedTags
          .filter(isOtherTag)
          .some((tag) => animal.tags.includes(tag))) &&
      (selectedRequirements.length === 0 ||
        selectedRequirements.some(
          (req) =>
            (animal.requirements && animal.requirements.includes(req)) ||
            hasRockAndWaterRequirements(animal, req)
        )) &&
      (selectedCardSources.length === 0 ||
        selectedCardSources.some((src) => animal.source === src)) &&
      (textFilter === '' ||
        animal.id.toLowerCase().includes(lowercaseFilter) ||
        animal.name.toLowerCase().includes(lowercaseFilter) ||
        (animal.latinName !== undefined &&
          animal.latinName.toLowerCase().includes(lowercaseFilter)) ||
        (animal.cnName !== undefined &&
          animal.cnName.toLowerCase().includes(lowercaseFilter)) ||
        (animal.abilities !== undefined &&
          animal.abilities.some((ability) =>
            ability.toLowerCase().includes(lowercaseFilter)
          ))) &&
      (size.length === 0 || size.includes(0) || size.includes(animal.size))
  );
};

export const AnimalCardList: React.FC<AnimalCardListProps> = ({
  selectedTags,
  selectedRequirements,
  selectedCardSources = [],
  textFilter,
  onCardCountChange,
  sortOrder = SortOrder.ID_ASC,
  size = [0],
}) => {
  const animalsData = useAnimalData();
  const filteredAnimals = filterAnimals(
    animalsData,
    selectedTags,
    selectedRequirements,
    selectedCardSources,
    textFilter,
    size
  );

  useEffect(() => {
    onCardCountChange(filteredAnimals.length);
  }, [filteredAnimals, onCardCountChange]);

  switch (sortOrder) {
    case SortOrder.ID_ASC:
      filteredAnimals.sort((a, b) => a.id.localeCompare(b.id));
      break;
    case SortOrder.ID_DESC:
      filteredAnimals.sort((a, b) => b.id.localeCompare(a.id));
      break;
  }

  return (
    <CardList>
      {filteredAnimals.map((ratedAnimalCard: AnimalCard) => (
        <div
          key={ratedAnimalCard.id}
          className='-mb-12 scale-75 sm:mb-1 sm:scale-90 md:mb-4 md:scale-100'
        >
          <RatedAnimalCard
            key={ratedAnimalCard.id}
            cardData={ratedAnimalCard}
            showLink={true}
          />
        </div>
      ))}
    </CardList>
  );
};

const hasRockAndWaterRequirements = (animal: AnimalCard, req: Tag) => {
  if (req === OtherTag.Rock) {
    return animal.rock && animal.rock > 0;
  } else if (req === OtherTag.Water) {
    return animal.water && animal.water > 0;
  } else {
    return false;
  }
};
