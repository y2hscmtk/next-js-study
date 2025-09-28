// 같은 클래스 이름을 사용하는 다른 css 파일간의 충돌을 방지하기 위해 global css 파일을 Import 할 수 없다.
// import "./index.css"; 

// CSS Module
// 같은 클래스 이름을 사용하더라도 페이지마다 별도의 이름으로 데이터를 변환해준다. -> 충돌 방지
import style from "./index.module.css"

export default function Home() {
  // 다른 페이지의 h1 css와 겹쳐지지 않는 이름으로 className이 설정된다.
  return <>
    <h1 className={style.h1}>인덱스</h1>
    <h2 className={style.h2}>인덱스</h2>
  </>
}
