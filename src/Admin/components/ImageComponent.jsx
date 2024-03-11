import React from 'react'
import { Button, FileButton } from '../../components/form/Buttons'

function ImageComponent({ data }) {

    const displayImage = (file) => {
        return URL.createObjectURL(file)
    }

    console.log(data.images)

    return (
        <>
            {
                data.images.length > 0 && (
                    data.images.map((image, i) => (
                        < div key={i} className=' min-w-[250px!important]'>
                            <img
                                className='w-[100%] h-[150px] bg-slate-400'
                                src={displayImage(image)}
                                alt=""
                            />
                            <div className='flex justify-between'>
                                <FileButton text='Change' />
                                <Button text='Delete' />
                            </div>
                        </div >

                    ))
                )
            }
        </>
    )
}

export default ImageComponent
