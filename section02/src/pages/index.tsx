// 같은 클래스 이름을 사용하는 다른 css 파일간의 충돌을 방지하기 위해 global css 파일을 Import 할 수 없다.
// import "./index.css"; 

// CSS Module
// 같은 클래스 이름을 사용하더라도 페이지마다 별도의 이름으로 데이터를 변환해준다. -> 충돌 방지
import SearchableLayout from "@/components/searchable-layout"
import style from "./index.module.css"
import { ReactNode } from "react"
import books from '@/mock/books.json' // @ : 프로젝트 src폴더를 가리키는 경로(타입스크립트 문법)
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";

// SSR(서버사이드 랜더링) 방식으로 동작하게 됨 (약속된 함수명 사용후 export)
// 해당 페이지의 랜더링보다 먼저 호출되어 백엔드 서버 등에 요청이 수행됨
export const getServerSideProps = () => {
  // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터를 불러오는 함수
  // 해당 함수는 서버에서만 호출되기 때문에 콘솔로그 등은 동작하지 않음
  // window.location // 서버에서 실행되기 때문에 브라우저를 읽을 수 없어 오류 발생
  console.log("서버사이드~~")

  const data = "hello"

  // 해당 함수의 반환값은 반드시 props라는 프로퍼티를 포함하는 객체 타입이어야 함 => 프레임워크 문법
  return {
    props: {
      data,
    }
  }
};

// InferGetServerSidePropsType : SSR단계에서 불러온 파일의 타입을 추론함
export default function Home({data} : InferGetServerSidePropsType<typeof getServerSideProps>) {
  // 하이드레이션 이전 과정에서 프론트엔드 서버에서 호출이 먼저 되므로, window와 같은 브라우저 측에서만 사용되는 코드 사용시 오류 발생됨
  // window.location
  // => 위 문제를 해결하기 위해선 useEffect 등과 같이, 마운트 이후에 호출되는 훅을 사용해야함
  console.log(data)
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book)=>(
            <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book)=>(
            <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

// 페이지 역할을 수행할 별도의 컴포넌트를 불러와 레이아웃이 적용된 페이지를 리턴하는 함수
// getLayout 메소드를 호출하고 인수로 특정 페이지 컴포넌트를 전달하면, 
// 해당 컴포넌트에 SearchableLayout~ 을 적용하여 반환한다.
// Home은 함수지만, JS에서 함수는 모두 객체이므로, 아래와 같이 메소드를 추가할수 있다.
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}