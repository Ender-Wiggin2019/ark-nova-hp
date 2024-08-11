/*
 * @Author: Ender-Wiggin
 * @Date: 2024-08-10 00:35:54
 * @LastEditors: Ender-Wiggin
 * @LastEditTime: 2024-08-12 01:45:28
 * @Description:
 */
import { CardSource } from '@/types/CardSource';

export enum ProjectCategory {
  BASE = 'Base',
  NORMAL = 'Normal',
  RELEASE = 'Release',
  BREED = 'Breed',
  MARINE = 'Marine',
}

export interface ProjectCard {
  id: string;
  name: string;
  cnName?: string;
  type: ProjectCategory;
  image?: string;
  // meta data
  source: CardSource;
}
