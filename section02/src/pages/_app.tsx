import "@/styles/globals.css"; // 전역 스타일 파일 import
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

// 모든 페이지에 공통적으로 사용될 데이터(헤더, 푸터)가 필요하다면 App 컴포넌트에 랜더링하면 공통적으로 랜더링이 가능하다
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const onClickButton = () => {
    router.push("/test") // 라우터 객체의 Push 메서드를 활용하여 원하는 페이지로 이동 가능
  }
  return <>
    <header>
      {/* <a></a> // 서버에게 매번 새로운 페이지를 요청하는 방식으로 동작함 */}
      {/* next의 Link 태그를 사용하면 CSR 방식으로 페이지가 이동됨 */}
      <Link href={"/"}>index</Link>
      &nbsp;
      <Link href={"/search"}>search</Link>
      &nbsp;
      <Link href={"/book/1"}>book/1</Link>
      <div>
        <button onClick={onClickButton}>/test 페이지로 이동</button>
      </div>
    </header>
    <Component {...pageProps} />
  </>
}
