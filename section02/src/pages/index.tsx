// 같은 클래스 이름을 사용하는 다른 css 파일간의 충돌을 방지하기 위해 global css 파일을 Import 할 수 없다.
// import "./index.css"; 

// CSS Module
// 같은 클래스 이름을 사용하더라도 페이지마다 별도의 이름으로 데이터를 변환해준다. -> 충돌 방지
import SearchableLayout from "@/components/searchable-layout"
import style from "./index.module.css"
import { ReactNode } from "react"
import books from '@/mock/books.json' // @ : 프로젝트 src폴더를 가리키는 경로(타입스크립트 문법)
import BookItem from "@/components/book-item";

export default function Home() {
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