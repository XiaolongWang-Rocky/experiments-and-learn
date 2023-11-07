import React, { useState, useRef } from 'react'
import Carousel from 'react-material-ui-carousel'

const items = [
    {
        id: 1,
        type: 'vid',
        path: 'images/MICHAEL MYERS.mp4'
    },
    {
        id: 2,
        type: 'img',
        path: 'images/91HZ1Ng.jpg'
    },
    {
        id: 3,
        type: 'vid',
        path: 'images/Tacos.mp4'
    },
    {
        id: 4,
        type: 'img',
        path: 'images/lotr-the-battle.jpg'
    },
]

const Item = ({item, index, setCarouselHeight}) => {
    const setWithVideoHeight = (e) => {
        console.log(470 * e.target.videoHeight / e.target.videoWidth)
        setCarouselHeight(`${470 * e.target.videoHeight / e.target.videoWidth}px`)
    }

    return item.type === 'img' ? <img src={item.path} style={{width: '470px'}} /> : <video src={item.path} controls onLoadedMetadata={index === 0 ? setWithVideoHeight : null} style={{width: '470px'}}/>
}

function App() {
    const [carouselHeight, setCarouselHeight] = useState(null)

    const handleCarouselChange = () => {
        if(carouselHeight !== 'auto') {
            setCarouselHeight('auto')
        }
    }

    return <>
        <Carousel
            autoPlay={false}
            fullHeightHover={false}
            indicators={false}
            cycleNavigation={false}
            onChange={handleCarouselChange}
            sx={{width: '470px', height: carouselHeight}}
        >
        {
            items.map((item, index) => <Item key={item.id} item={item} index={index} setCarouselHeight={setCarouselHeight}/>)
        }
        </Carousel>
    </>
}

export default App