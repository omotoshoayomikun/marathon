import React from 'react'
import { FaTv, FaXmark } from "react-icons/fa6";

export const Badges = (props) => {

    return (
        <div className='badge-content'>
            <div
                onClick={() => props.addAmenities(props.data)}
                className='flex gap-2 py-[5px] px-[10px] cursor-pointer'
            >
                {props.data.iconName}
                {props.data.name}
            </div>
            {
                props.select && (
                    <div className="badge-icon mr-[5px] cursor-pointer" onClick={() => props.removeAmenities(props.data)}>
                        <FaXmark size={16} style={{ margin: '0px', padding: 0 }} />
                    </div>
                )
            }
        </div>
    )
}
