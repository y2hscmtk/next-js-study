import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css"; // 전역 스타일 파일 import
import type { AppProps } from "next/app";

// 모든 페이지에 공통적으로 사용될 데이터(헤더, 푸터)가 필요하다면 App 컴포넌트에 랜더링하면 공통적으로 랜더링이 가능하다.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps}/>
    </GlobalLayout>
  );
}
