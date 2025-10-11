import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css"; // 전역 스타일 파일 import
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

// 타입 선언
type NextPageWithLayout = NextPage & {
  getLayout : (page: ReactNode) => ReactNode;
}

// 모든 페이지에 공통적으로 사용될 데이터(헤더, 푸터)가 필요하다면 App 컴포넌트에 랜더링하면 공통적으로 랜더링이 가능하다.
export default function App({ Component, pageProps }: AppProps & {
  Component : NextPageWithLayout // App 컴포넌트가 전달받는 Component의 타입을 NextPageWithLayout으로 확장
}) {
  // getLayout 함수가 선언되지 않은 컴포넌트의 경우 페이지 자체를 반환하는 함수로서 동작
  // ?? : 만약 undefined라면~
  const getLayout = 
    Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <GlobalLayout>
      {getLayout(<Component {...pageProps}/>)}
    </GlobalLayout>
  );
}
