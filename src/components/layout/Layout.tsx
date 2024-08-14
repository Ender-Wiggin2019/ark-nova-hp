/*
 * @Author: Ender-Wiggin
 * @Date: 2024-08-10 00:35:54
 * @LastEditors: Ender-Wiggin
 * @LastEditTime: 2024-08-14 01:33:41
 * @Description:
 */
import React, { Suspense } from 'react';

import { Header } from '@/components/layout/Header';
import { QueryProvider } from '@/components/layout/QueryProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 select-none bg-gradient-to-b from-[#19131e] to-[#3b3569] bg-top bg-repeat dark:bg-[url('/grid.svg')]" />
      <div className='bg-stars'></div>
      <div className='fixed bottom-0'>
        <img
          src='/bg/Hogwarts Horizons Mobile.png'
          alt='bottom image'
          className='w-full object-cover'
        />
      </div>

      <Header />
      <QueryProvider>
        <div className='relative text-zinc-800 dark:text-zinc-800'>
          <main className='flex flex-col items-center'>
            {/* <-- Add styles here */}
            <div className='relative w-full sm:px-8 sm:md:max-w-3xl md:max-w-4xl lg:max-w-4xl xl:max-w-6xl'>
              {/* <-- Add this div */}
              {children}
            </div>
          </main>
          <Suspense>{/*<Footer />*/}</Suspense>
        </div>
      </QueryProvider>
      {/*<Analytics />*/}
    </>
  );
}
