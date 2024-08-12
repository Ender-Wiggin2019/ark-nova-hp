/*
 * @Author: Ender-Wiggin
 * @Date: 2024-08-10 00:35:54
 * @LastEditors: Ender-Wiggin
 * @LastEditTime: 2024-08-12 01:53:57
 * @Description:
 */
import React, { useEffect } from 'react';

import CardList from '@/components/cards/shared/CardList';

import { ProjectCard } from './ProjectCard';
import { useProjectData } from './useProjectData';

import { CardSource } from '@/types/CardSource';
import { SortOrder } from '@/types/Order';
import { ProjectCard as ProjectCardType } from '@/types/ProjectCard';
import { Tag } from '@/types/Tags';

interface ProjectCardListProps {
  selectedTags?: Tag[];
  selectedRequirements?: Tag[];
  selectedCardSources?: CardSource[];
  textFilter?: string;
  sortOrder?: SortOrder;
  onCardCountChange: (count: number) => void;
}

const filterCards = (
  cards: ProjectCardType[],
  selectedCardSources: CardSource[] = [],
  textFilter = ''
) => {
  const lowercaseFilter = textFilter.toLowerCase();

  return cards.filter(
    (card) =>
      (selectedCardSources.length === 0 ||
        selectedCardSources.some((src) => card.source === src)) &&
      (textFilter === '' ||
        card.id.toLowerCase().includes(lowercaseFilter) ||
        card.name.toLowerCase().includes(lowercaseFilter))
  );
};

export const ProjectCardList: React.FC<ProjectCardListProps> = ({
  selectedCardSources = [],
  textFilter,
  onCardCountChange,
  sortOrder,
}) => {
  const projectsData = useProjectData();

  const filteredConservations = filterCards(
    projectsData,
    selectedCardSources,
    textFilter
  );

  useEffect(() => {
    onCardCountChange(filteredConservations.length);
  }, [projectsData, onCardCountChange, filteredConservations.length]);

  switch (sortOrder) {
    case SortOrder.ID_ASC:
      filteredConservations.sort((a, b) => a.id.localeCompare(b.id));
      break;
    case SortOrder.ID_DESC:
      filteredConservations.sort((a, b) => b.id.localeCompare(a.id));
      break;
  }

  return (
    <CardList>
      {filteredConservations.map((project: ProjectCardType) => (
        <div
          key={project.id}
          className='-mb-12 scale-75 sm:mb-1 sm:scale-90 md:mb-4 md:scale-100'
        >
          <ProjectCard key={project.id} project={project} />
        </div>
      ))}
    </CardList>
  );
};
