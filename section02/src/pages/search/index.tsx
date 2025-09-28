import { useRouter } from "next/router"; // 쿼리 파라미터를 통해 데이터를 들고올때 사용

export default function Page() {
  const router = useRouter();

  console.log(router);

  // const q = router.query.q;
  const { q } = router.query; // 구조 분해 할당

  return <h1>Search {q}</h1>;
}