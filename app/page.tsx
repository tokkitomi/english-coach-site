'use client';

import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [isKorean, setIsKorean] = useState(true);

  useEffect(() => {
    const lang = navigator.language || '';
    setIsKorean(lang.toLowerCase().startsWith('ko'));
  }, []);

  const imageSrc = isKorean ? '/one-pager.jpg' : '/one-pager-en.jpg';

  const kakaoLink =
    'https://open.kakao.com/o/sGb30Lri?text=' +
    encodeURIComponent(
      isKorean
        ? '안녕하세요! QR코드를 통해 연락드립니다. 수업 문의드립니다 :)'
        : 'Hello! I found you via QR code and would like to ask about lessons.'
    );

  const emailLink =
    'mailto:tmchoi78@gmail.com?subject=' +
    encodeURIComponent(
      isKorean
        ? '영어/한국어 회화 수업 문의'
        : 'English/Korean Conversation Lesson Inquiry'
    ) +
    '&body=' +
    encodeURIComponent(
      isKorean
        ? '이름:\n레벨:\n목표:\n희망 시간:'
        : 'Name:\nLevel:\nGoal:\nPreferred time:'
    );

  return (
    <main className="min-h-screen bg-[#f5f1f7] flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl">
        <img
          src={imageSrc}
          alt="Landing"
          className="w-full rounded-2xl shadow-xl"
        />

        <a
          href={kakaoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute"
          style={{
            left: '7.8%',
            top: '84.9%',
            width: '41.1%',
            height: '8.8%',
          }}
        />

        <a
          href={emailLink}
          className="absolute"
          style={{
            left: '50.2%',
            top: '84.9%',
            width: '41.2%',
            height: '8.8%',
          }}
        />
      </div>
    </main>
  );
}
// deploy
