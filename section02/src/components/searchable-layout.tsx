import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from "./searchable-layout.module.css"

export default function SearchableLayout({
    children,
}: {
    children: ReactNode;
}) {
    const router = useRouter();
    // 현재 입력한 검색어를 search에 저장
    const [search, setSearch] = useState("")

    // 새로고침시, useEffect 호출하여 쿼리 파라미터를 통해 전달된 검색어 값을 검색창에 반영
    // 쿼리 파라미터는 여러개의 값을 한번에 전달받을수도 있어 문자열 형식으로 타입강제
    const q = router.query.q as string;
    useEffect(()=>{
        setSearch(q || "");
    }, [q])

    const onChangeSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const onSubmit = () => {
        if(!search || q === search) return; // 이전 검색값과 동일할 때에는 페이지 이동 x
        router.push(`/search?q=${search}`)
    };

    const onKeyDown = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            onSubmit()
        }
    };

    return (
        <div>
            <div className={style.searchbar_container}>
                <input 
                    value={search}
                    onKeyDown={onKeyDown}
                    onChange={onChangeSearch}
                    placeholder="검색어를 입력하세요 ..." />
                <button onClick={onSubmit}>검색</button>        
            </div>  
            {children}
        </div>
    )
}