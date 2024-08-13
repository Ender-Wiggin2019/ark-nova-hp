/*
 * @Author: Ender-Wiggin
 * @Date: 2024-08-10 00:35:54
 * @LastEditors: Ender-Wiggin
 * @LastEditTime: 2024-08-14 01:58:00
 * @Description:
 */
// ProjectCard.tsx
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import React from 'react';

import ProjectCardWrapper from '@/components/wrapper/ProjectWrapper';

import { ProjectCard as ProjectCardType } from '@/types/ProjectCard';

interface ProjectCardProps {
  project: ProjectCardType;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation('common');
  return (
    <ProjectCardWrapper project={project}>
      <Image
        src={project.image || '/img/placeholder.png'}
        alt='animal Image'
        width={373}
        height={497}
        className='absolute rounded-md object-cover'
      />
      <div className='ark-card-top'>
        <div className='ark-card-top-right'></div>
      </div>
      {/* <div className='ark-card-middle'>
        <div className='ark-card-number sf-hidden'>{project.id}</div>
        <div className='ark-card-title-wrapper'>
          <div className='ark-card-title'>{t(project.cnName || '')}</div>
        </div>
      </div> */}
    </ProjectCardWrapper>
  );
};
