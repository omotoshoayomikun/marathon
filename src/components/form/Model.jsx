import React from 'react'
import Card from './Card'
import { Button } from './Buttons'

export const QuestionModel = ({ text, handleYes, handleToggle }) => {
    return (
        <div className='model_container'>
            <div className="absolute w-full h-full top-0 left-0" onClick={() => handleToggle('delete')}></div>
            <Card styles={{ width: '500px', height: '80vh' }} cardStyle={{ borderRadius: '40px' }}>
                <div className="flex justify-center ml-auto mr-auto w-[300px] h-[250px]">
                    <img src="/images/question_markx.jpg" alt="" width='100%' style={{ objectFit: 'contain' }} height='100%' />
                </div>
                <div className='text-[30px] font-bold text-center'>
                    {text}
                </div>
                <div className='flex justify-center gap-6 mt-2'>
                    <Button text='Yes' styles={{ backgroundColor: 'green' }} handleClick={handleYes} />
                    <Button text='No' handleClick={() => handleToggle('delete')} />
                </div>
            </Card>
        </div>
    )
}
