import React, { useState } from 'react'
import Card from '../../../components/form/Card'
import { Input, TextArea } from '../../../components/form/Input'
import { amenities } from '../../../utils/data'
import { Button, RoundFileButton } from '../../../components/form/Buttons'
import ImageComponent from '../../components/ImageComponent'
import { Badges } from '../../../components/form/Badges'

function UpdateRoom({handleToggle}) {

    const [values, setValues] = useState({
        title: '',
        description: '',
        category: '',
        price: Number,
        amenities: [],
        images: [],
        videos: [],
    })

    const inputs = [
        {
            id: 1,
            name: 'title',
            type: 'text',
            label: 'Title',
        },
        {
            id: 3,
            name: 'category',
            type: 'text',
            label: 'Category',
        },
        {
            id: 4,
            name: 'price',
            type: 'number',
            label: 'Price',
        },
    ]

    const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const addAmenities = (data) => {
        if (values.amenities.find((amenity) => amenity.id === data.id)) {
            const index = values.amenities.findIndex((amentity) => amentity.id === data.id)
            values.amenities.splice(index, 1);
            setValues({ ...values })
        } else {
            values.amenities.push(data)
            setValues({ ...values })
        }
    }

    const removeAmenities = (data) => {
        if (values.amenities.find((amenity) => amenity.id === data.id)) {
            const index = values.amenities.findIndex((amentity) => amentity.id === data.id)
            values.amenities.splice(index, 1);
            setValues({ ...values })
        }
    }

    const handleAddImagesFile = async (e) => {
        const selectedImages = e.target.files
        const selectedFileArray = Array.from(selectedImages)
        selectedFileArray.map((file) => {
            values.images.push(file)
            setValues({ ...values })
        })
    }




    return (
        <div className='model_container'>
            <div className="absolute w-full h-full top-0 left-0" onClick={() => handleToggle('update')}></div>
            <Card
                headTitle='Update Room'
                styles={{ width: ' 60%', marginLeft: 'auto', marginRight: 'auto', height: '89vh', overflowY: 'scroll', overflowX: 'hidden' }}
            >
                <div>
                    {
                        inputs.map((input) => (
                            <Input key={input.id} {...input} value={values[input.name]} onChange={handleInput} />

                        )).splice(0, 1)
                    }
                    <TextArea />
                    {
                        inputs.map((input) => (
                            <Input key={input.id} {...input} value={values[input.name]} onChange={handleInput} />

                        )).splice(1)
                    }

                    <div style={{ marginBottom: '25px' }}>
                        <div className='font-bold mb-4'>Select Room Amenities</div>
                        <div className='flex gap-4 flex-wrap'>
                            {
                                amenities.map((data, i) => (
                                    <Badges select={values.amenities.find((res) => res.id === data.id) ? true : false} data={data} key={i} addAmenities={addAmenities} removeAmenities={removeAmenities} />
                                ))
                            }
                        </div>
                        {
                            values.amenities.length > 0 && (
                                <div className='mt-5 flex'>
                                    <div className='font-bold mr-3'>Amenities Selected: </div>
                                    <div>
                                        {
                                            values.amenities.map(amenity => (
                                                <span key={amenity.id}>{amenity.name}, </span>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>


                    <RoundFileButton handleAddImagesFile={handleAddImagesFile} />

                    <div className='flex gap-4 overflow-x-scroll mt-8 overflow-y-hidden'>
                        <ImageComponent data={values} />
                    </div>

                    <div className='mt-8 mr-auto ml-auto w-max'>
                        <Button text='Update Room' />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default UpdateRoom
