import {ImageList, ImageListItem} from '@mui/material'
import React from 'react'

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

function App() {
    return <ImageList sx={{ width: 500}} cols={3} >
        {items.map((item) => (
            <ImageListItem key={item.id} sx={{aspectRatio: '1/1'}}>
                {
                    item.type === 'img' ? <img
                        src={item.path}
                        alt='image'
                        loading="lazy"
                        style={{width: '100%', aspectRatio: '1/1'}}
                    /> : <video
                        src={item.path}
                        style={{width: '100%', aspectRatio: '1/1', objectFit: 'cover'}}
                    />
                }
            </ImageListItem>
        ))}
    </ImageList>
}

export default App