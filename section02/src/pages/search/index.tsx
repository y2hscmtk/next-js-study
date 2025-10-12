import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router"; // 쿼리 파라미터를 통해 데이터를 들고올때 사용
import { ReactNode } from "react";
import books from '@/mock/books.json'
import BookItem from "@/components/book-item";

export default function Page() {
  return <div>
    {books.map((book)=> (
      <BookItem key={book.id} {...book}/>
    ))}
  </div>
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}