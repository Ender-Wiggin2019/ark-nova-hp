/*
 * @Author: Ender-Wiggin
 * @Date: 2024-08-10 00:35:54
 * @LastEditors: Ender-Wiggin
 * @LastEditTime: 2024-08-13 02:12:55
 * @Description:
 */
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import { getMdById } from '@/lib/getMdById';

// make sure to import your TextFilter
import Layout from '@/components/layout/Layout';
import { MarkdownContainer } from '@/components/markdown-container/MarkdownContainer';
import Seo from '@/components/Seo';
import { Container } from '@/components/ui/Container';
type Props = {
  // Add custom props here
};

export default function About(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Seo templateTitle='About' />

      <Container>
        <div className='mt-4'>
          <MarkdownContainer md={(props as any)?.content} />
        </div>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  // const md = getMdById(id);

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'zh-CN', ['common'])),
      ...(await getMdById('about')), // FIXME: 同步文件名
    },
  };
};
