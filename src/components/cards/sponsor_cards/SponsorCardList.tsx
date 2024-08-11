import React, { useEffect } from 'react';

import CardList from '@/components/cards/shared/CardList';
import { RatedSponsorCard } from '@/components/cards/sponsor_cards/RatedSponsorCard';

import { useSponsorData } from './useSponsorData';

import { CardSource } from '@/types/CardSource';
import { SortOrder } from '@/types/Order';
import { SponsorCard as SponsorCardType } from '@/types/SponsorCard';
import {
  isAnimalTag,
  isContinentTag,
  isOtherTag,
  OtherTag,
  Tag,
} from '@/types/Tags';

interface SponsorCardListProps {
  selectedTags?: Tag[];
  selectedRequirements?: Tag[];
  selectedCardSources?: CardSource[];
  textFilter?: string;
  sortOrder?: SortOrder;
  strength?: number[];
  onCardCountChange: (count: number) => void;
  // ... any other filters
}

const hasRockAndWaterRequirements = (sponsor: SponsorCardType, req: Tag) => {
  if (req === OtherTag.Rock) {
    return sponsor.rock && sponsor.rock > 0;
  } else if (req === OtherTag.Water) {
    return sponsor.water && sponsor.water > 0;
  } else {
    return false;
  }
};
const filterSponsors = (
  sponsors: SponsorCardType[],
  selectedTags: Tag[] = [],
  selectedRequirements: Tag[] = [],
  selectedCardSources: CardSource[] = [],
  textFilter = '',
  strength: number[] = [2]
) => {
  const lowercaseFilter = textFilter.toLowerCase();

  return sponsors.filter(
    (sponsor) =>
      (selectedTags.filter(isAnimalTag).length === 0 ||
        selectedTags
          .filter(isAnimalTag)
          .some((tag) => sponsor.tags.includes(tag))) &&
      (selectedTags.filter(isContinentTag).length === 0 ||
        selectedTags
          .filter(isContinentTag)
          .some((tag) => sponsor.tags.includes(tag))) &&
      (selectedTags.filter(isOtherTag).length === 0 ||
        selectedTags
          .filter(isOtherTag)
          .some((tag) => sponsor.tags.includes(tag))) &&
      (selectedRequirements.length === 0 ||
        selectedRequirements.some(
          (req) =>
            (sponsor.requirements && sponsor.requirements.includes(req)) ||
            hasRockAndWaterRequirements(sponsor, req)
        )) &&
      (selectedCardSources.length === 0 ||
        selectedCardSources.some((src) => sponsor.source === src)) &&
      (textFilter === '' ||
        sponsor.id.toLowerCase().includes(lowercaseFilter) ||
        sponsor.name.toLowerCase().includes(lowercaseFilter) ||
        (sponsor.cnName &&
          sponsor.cnName.toLowerCase().includes(lowercaseFilter)) ||
        (sponsor.effects !== undefined &&
          sponsor.effects.some((effect) =>
            effect.effectDesc.toLowerCase().includes(lowercaseFilter)
          ))) &&
      (strength.length === 0 ||
        strength.includes(0) ||
        strength.includes(1) ||
        strength.includes(2) ||
        strength.includes(sponsor.strength))
  );
};

export const SponsorCardList: React.FC<SponsorCardListProps> = ({
  selectedTags,
  selectedRequirements,
  selectedCardSources = [],
  textFilter,
  onCardCountChange,
  sortOrder = SortOrder.ID_ASC,
  strength = [0],
}) => {
  const sponsorsData = useSponsorData();
  const filteredSponsors = filterSponsors(
    sponsorsData,
    selectedTags,
    selectedRequirements,
    selectedCardSources,
    textFilter,
    strength
  );

  useEffect(() => {
    onCardCountChange(filteredSponsors.length);
  }, [filteredSponsors, onCardCountChange]);

  switch (sortOrder) {
    case SortOrder.ID_ASC:
      filteredSponsors.sort((a, b) => a.id.localeCompare(b.id));
      break;
    case SortOrder.ID_DESC:
      filteredSponsors.sort((a, b) => b.id.localeCompare(a.id));
      break;
  }

  return (
    <CardList>
      {filteredSponsors.map((sponsorCard: SponsorCardType) => (
        <div
          key={sponsorCard.id}
          className='-mb-12 scale-75 sm:mb-1 sm:scale-90 md:mb-4 md:scale-100'
        >
          <RatedSponsorCard
            key={sponsorCard.id}
            cardData={sponsorCard}
            showLink={true}
          />
        </div>
      ))}
    </CardList>
  );
};
