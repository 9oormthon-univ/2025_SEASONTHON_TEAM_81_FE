import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import AuthSessionProvider from '@/components/provider/session-provider';

export const metadata: Metadata = {
  title: '마음 산책',
  description:
    '감정 시각화와 산책 행동으로 감정을 다루는 AI 기반 멘탈 헬스 서비스',
};

const pretendard = localFont({
  src: './fonts/PretendardVariable.ttf',
  display: 'swap',
  weight: '45 920',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased w-full h-screen">
        <AuthSessionProvider>{children}</AuthSessionProvider>
      </body>
    </html>
  );
}
