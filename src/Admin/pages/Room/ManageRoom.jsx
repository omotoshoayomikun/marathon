import React, { useState } from 'react'
import Card from '../../../components/form/Card'
import { FaEllipsisVertical } from 'react-icons/fa6'
import { Button } from '../../../components/form/Buttons'
import UpdateRoom from './UpdateRoom'
import { QuestionModel } from '../../../components/form/Model'

function ManageRoom() {

    const [toggle, setToggle] = useState({
        update: false,
        delete: false
    })

    const handleToggle = (dis) => {

        switch (dis) {
            case 'update':
                setToggle({...toggle, update: !toggle.update})
                break;
            case 'delete':
                setToggle({...toggle, delete: !toggle.delete})
                break;
        
            default:
                break;
        }
    }

    return (
        <div className='relative pt-10'>
            <Card headTitle='Manage Rooms'>
                <div className="table-responsive mt-8">
                    <table className="table items-center">
                        <thead className='thead-light'>
                            <tr>
                                <th>S/N</th>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Images</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td title='55757jdjdksks'>55757...</td>
                                <td>King Size Bed</td>
                                <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, at!...</td>
                                <td>King Size</td>
                                <td>#500,000</td>
                                <td>Images</td>
                                <td>
                                    <div className='flex gap-2 justify-between items-center ellipsis-v'>
                                        <Button text='Update' 
                                        handleClick={() =>handleToggle('update')}
                                        styles={{ padding: '5px 8px', backgroundColor: 'green' }}  
                                        />
                                        <Button 
                                        handleClick={() =>handleToggle('delete')}
                                        text='Delete' styles={{ padding: '5px 8px', }} 
                                        />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
            {
                toggle.update && (
                    <UpdateRoom handleToggle={handleToggle} />
                )
            }
            {
                toggle.delete && (
                    <QuestionModel text='Are you sure you want to delete this room?'  handleToggle={handleToggle} />
                )
            }
        </div>
    )
}

export default ManageRoom
