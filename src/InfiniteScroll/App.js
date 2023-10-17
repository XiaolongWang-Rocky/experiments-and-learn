import useInfiniteScroll from 'react-infinite-scroll-hook';
import { useState, useRef, useEffect } from 'react';

const dataList = [
    {
        id: 1,
        content: "aaa"
    },
    {
        id: 2,
        content: "bbb"
    },
    {
        id: 3,
        content: "ccc"
    },
    {
        id: 4,
        content: "ddd"
    },
    {
        id: 5,
        content: "eee"
    },
    {
        id: 6,
        content: "fff"
    },
    {
        id: 7,
        content: "ggg"
    },
    {
        id: 8,
        content: "hhh"
    },
    {
        id: 9,
        content: "iii"
    },
    {
        id: 10,
        content: "jjj"
    },
    {
        id: 11,
        content: "kkk"
    }
]

export default function App() {
    const [displayedData, setDisplayedData] = useState([])
    const [loading, setLoading] = useState(false)
    const [hasNextPage, setHasNextPage] = useState(true);
    const currentPage = useRef(1)

    // useEffect(()=>{
    //     const newDataList = dataList.slice(0, 4)
    //     if(newDataList.length < 4) {
    //         setHasNextPage(false)
    //     }
    //     setDisplayedData(newDataList)
    //     currentPage.current ++
    // }, [])

    useEffect(()=>{
        console.log(displayedData)
        if(loading) {
            const newDataList = dataList.slice((currentPage.current - 1)*4, currentPage.current*4)
            if(newDataList.length < 4) {
                setHasNextPage(false)
            }
            setDisplayedData(prevState => [...prevState, ...newDataList])
            currentPage.current ++
            setLoading(false)
        }
    }, [loading])

    const setLoadingTrue = () => setLoading(true)

    const [infiniteRef, {rootRef}] = useInfiniteScroll({
        loading,
        hasNextPage,
        onLoadMore: setLoadingTrue,
        rootMargin: '0px 0px 0px 0px'
    });

    return <div>
        <h1>Infinite Scroll Demo</h1>
        {
            displayedData.map(item => <DataItem message={item} key={item.id}/>)
        }
        {hasNextPage && <p ref={infiniteRef}>Loading...</p>}
    </div>
}

function DataItem({message}) {
    return <div style={{height: "300px", border: "1px solid black", margin: "3px", backgroundColor: "grey"}}>
        <h2>{message ? message.id : ""}</h2>
        <p>{message ? message.content : ""}</p>
    </div>
}