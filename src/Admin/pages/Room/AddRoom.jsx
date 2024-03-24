import React, { useState } from 'react'
import { Input, TextArea } from '../../../components/form/Input'
import { RoundFileButton, FileButton, Button } from '../../../components/form/Buttons'
import styles from '../../../styles/Admin/AddRoom.module.css'
import { Badges } from '../../../components/form/Badges'
import { FaTv, FaWifi } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { IoBed } from "react-icons/io5";
import ImageComponent from '../../components/ImageComponent'
import { amenities } from '../../../utils/data'
import Card from '../../../components/form/Card'

function AddRoom() {

    const [values, setValues] = useState({
        title: '',
        description: '',
        category: '',
        price: Number,
        amenities: [],
        images: [],
        videos: [],
        roomNum: []
    })

    const [roomNumValue, setRoomNumValue] = useState('')

    const inputs = [
        {
            id: 1,
            name: 'title',
            type: 'text',
            label: 'Title',
        },
        {
            id: 2,
            name: 'category',
            type: 'text',
            label: 'Category',
        },
        {
            id: 3,
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

    const handleAddRoomNum = () => {
        if (roomNumValue !== '') {
            values.roomNum.push({ roomNum: roomNumValue, unavailableDates: [] })
            setValues({ ...values })
            setRoomNumValue('')
        }
    }

console.log(values)

    return (
        <div className="p-[30px] pt-10 w-full">
            <Card
                headTitle='Add Room Form'
                styles={{ width: ' 70%', marginLeft: 'auto', marginRight: 'auto' }}
                cardStyle={{ width: ' 100%', marginLeft: 'auto', marginRight: 'auto' }}
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
                        <div className={styles.amenities_container}>
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

                    <div style={{ marginBottom: '25px' }}>
                        <div className='font-bold mb-4'>Add Room Number</div>
                        <div>
                            <input type="text" className='border w-[100px] h-[34px]' value={roomNumValue} onChange={(e) => setRoomNumValue(e.target.value)} />
                            <Button text='Add' styles={{ padding: '8px' }} handleClick={handleAddRoomNum} />
                        </div>
                        {
                            values.roomNum.length > 0 && (
                                <div className='mt-5 flex'>
                                    <div className='font-bold mr-3'>Room Number Added: </div>
                                    <div className=' flex gap-2'>
                                        {
                                            values.roomNum.map((roomNum, i) => (
                                                <div key={i} className='relative'>
                                                    <div className=' bg-gray-300 p-[10px]'>{roomNum.roomNum} </div>
                                                    <span
                                                        onClick={() => setValues({...values, roomNum: values.roomNum.filter((num) => num !== roomNum)})}
                                                        className='absolute top-[-8px] right-0 w-[20px] h-[20px] flex justify-center items-center bg-red-700 rounded-full text-white cursor-pointer'
                                                        > 
                                                        x
                                                    </span>
                                                </div>
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
                        <Button text='Submit Room' />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default AddRoom
