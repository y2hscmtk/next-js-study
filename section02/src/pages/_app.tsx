import "@/styles/globals.css"; // 전역 스타일 파일 import
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

// 모든 페이지에 공통적으로 사용될 데이터(헤더, 푸터)가 필요하다면 App 컴포넌트에 랜더링하면 공통적으로 랜더링이 가능하다
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const onClickButton = () => {
    router.push("/test") // 라우터 객체의 Push 메서드를 활용하여 원하는 페이지로 이동 가능
  }

  // 최초 마운트시, pre-fetching 되지 않는 test 경로(Link태그가 아니기 때문)도 프리패칭시키기 위함
  useEffect(() =>{
    router.prefetch("/test")
  }, [])

  return <>
    <header>
      {/* <a></a> // 서버에게 매번 새로운 페이지를 요청하는 방식으로 동작함 */}
      {/* next의 Link 태그를 사용하면 CSR 방식으로 페이지가 이동됨 */}
      <Link href={"/"}>index</Link>
      &nbsp;
      {/* prefecth 파라미터를 false로 설정할경우, 명시적으로 프리패칭을 해제시킬 수 있다. */}
      <Link href={"/search"} prefetch={false}>search</Link>
      &nbsp;
      <Link href={"/book/1"}>book/1</Link>
      <div>
      {/* Pre-fetching은 Link 태그로 명시된 경로가 아니라면 이루어지지 않는다. => test 경로에 대해서는 이루어지지 않는다.*/}
        <button onClick={onClickButton}>/test 페이지로 이동</button>
      </div>
    </header>
    <Component {...pageProps} />
  </>
}
