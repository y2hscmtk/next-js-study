// URL 파라미터를 통한 동적 경로도, 쿼리 파라미터와 동일하게 라우터객체를 통해 접근 가능하다.
import { useRouter } from "next/router";

// 1. [id].tsx
//  대괄호가 포함된 파일명은 URL 파라미터를 통한 동적 파라미터를 사용한다고 인식된다.

// 2. [...id].tsx 
// 모든 동적 아이디 커버 가능 => Catch All Segment (경로상에 /로 구분되는 모든 구간에 대응한다.)
// ~/book/123/234/52.. => 배열 형태로 여러개의 아이디가 저장됨

// 3. [[...id]].tsx 
// => ~/book 과 같이, 아이디를 전달하지 않는 경우에도 대응된다 => Optional Catch All Segment
export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  return <h1>Book {id}</h1>;
}