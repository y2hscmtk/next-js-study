import { BookData } from "@/types"

// 전체 도서 목록 불러오기
export default async function fetchBooks() : Promise<BookData[]> {
    const url = `http://localhost:12345/book`
    // 비동기적으로 동작
    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error()
        }
        return await response.json() // 응답 반환
    } catch (err) {
        console.error(err)
        return []; // 실패시 빈 배열 반환
    }
}