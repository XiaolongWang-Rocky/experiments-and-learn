import React from 'react'

const dataList = [
    {
        id: '1',
        text: 'aaa',
        date: '2023-08-13'
    },
    {
        id: '2',
        text: 'bbb',
        date: '2023-08-13'
    },
    {
        id: '3',
        text: 'ccc',
        date: '2023-09-11'
    },
    {
        id: '4',
        text: 'ddd',
        date: '2023-09-25'
    },
    {
        id: '5',
        text: 'eee',
        date: '2023-09-28'
    },
    {
        id: '6',
        text: 'fff',
        date: '2023-09-28'
    },
    {
        id: '7',
        text: 'ggg',
        date: '2023-10-03'
    },
    {
        id: '8',
        text: 'hhh',
        date: '2023-11-22'
    },
    {
        id: '9',
        text: 'iii',
        date: '2023-11-22'
    },
    {
        id: '10',
        text: 'jjj',
        date: '2023-11-22'
    }
]

function App() {
    const component = []
    component.push(<p>{dataList[0].date}</p>)
    for (let i=0;i<dataList.length;i++) {
        component.push(<p>{dataList[i].text}</p>)
        if(dataList[i-1] && dataList[i].date !== dataList[i-1].date) {
            component.push(<p>{dataList[i].date}</p>)
        }
    }

    return <>
        {component}
    </>
}

export default App