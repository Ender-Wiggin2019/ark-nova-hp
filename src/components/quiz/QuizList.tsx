import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useMemo, useState } from 'react';

import CardList from '@/components/cards/shared/CardList';

import { fetchAllQuizs, fetchCardRatings } from '@/utils/fetch';

import { CardSource } from '@/types/CardSource';
import { IRating } from '@/types/IRating';
import { ISponsorCard } from '@/types/ISponsorCard';
import { SortOrder } from '@/types/Order';
import { SponsorCard as SponsorCardType } from '@/types/SponsorCard';
import { SponsorCard } from '@/types/SponsorCard';
import {
  isAnimalTag,
  isContinentTag,
  isOtherTag,
  OtherTag,
  Tag,
} from '@/types/Tags';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import {
  NUMBER_CONSERVATION,
  NUMBER_FINAL_SCORING,
  NUMBER_HAND,
  NUMBER_MAP,
} from '@/utils/GenerateRandomCards';
import CardWrapper from '@/components/wrapper/CardWrapper';
import { MapBoard } from '@/components/map_boards/MapBoard';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from 'next-i18next';
import { Prisma } from '@prisma/client';
import { QuizInfo } from '@/components/quiz/QuizInfo';
import { Quiz } from '@/components/quiz/Quiz';

export const QuizList: React.FC = () => {
  const { t } = useTranslation('common');
  const shouldFetchRatings = true;
  const { data: allQuizs } = useQuery(['allQuizs'], fetchAllQuizs, {
    enabled: shouldFetchRatings,
    // staleTime: 60 * 1000,
  });
  const todayQuiz = allQuizs ? allQuizs[0] : null;
  const [handList, setHandList] = useState<string[]>([]);
  const [disableHand, setDisableHand] = useState(false);

  // const [endGameList, setEndGameList] = useState<string[]>([]);
  // const [disableEndGame, setDisableEndGame] = useState(false);
  console.log('5555', allQuizs);

  function numArray(n: number) {
    return Array.from({ length: n }, (_, index) => index + 1);
  }
  // const handList = Array.from({ length: NUMBER_HAND }, (_, index) => index + 1);
  // const mapList = Array.from({ length: NUMBER_MAP }, (_, index) => index + 1);

  const handleHandSelect = (id: string, add: boolean) => {
    if (handList.length < 4 && add) setHandList([...handList, id]);
    if (!add) setHandList(handList.filter((i) => i !== id));
    if (add && handList.length >= 3) setDisableHand(true);
    else if (!add && handList.length >= 4) setDisableHand(false);
    console.log('5555', handList, disableHand);
  };

  return (
    <div className=''>
      {!allQuizs && 'loading'}
      {todayQuiz && <Quiz {...todayQuiz} />}
      <Separator orientation='horizontal' className='my-2' />
      <Card className='grid grid-cols-1 gap-2 bg-white/50 p-2'>
        <CardHeader>
          <CardTitle>{t('quiz.prev')}</CardTitle>
        </CardHeader>
        {allQuizs &&
          allQuizs.map((quiz: Prisma.SetUpGroupByOutputType) => {
            return <QuizInfo key={quiz.id} {...quiz} />;
          })}
        {/* <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination> */}
      </Card>
    </div>
  );
};
