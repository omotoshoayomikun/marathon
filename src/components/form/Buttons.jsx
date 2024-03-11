import React from 'react'

export const RoundFileButton = ({ handleAddImagesFile }) => {
    return (
        <>
            <button className="btn_add">
                <input type="file" className='file_in' accept='.jpeg, .png, .jpg' multiple onChange={(e) => handleAddImagesFile(e)} />
                +
            </button>
            {/*  */}
            <span>Add Images</span>
        </>
    )
}

export const FileButton = ({ text }) => {
    return (
        <>
            <button className="btn_file">
                <input type="file" className='file_in' accept='.jpeg, .png, .jpg' />
                {text}
            </button>
        </>
    )
}

export const Button = ({ text,styles, handleClick }) => {
    return (
        <>
            <button className="btn_btn" style={styles} onClick={handleClick}>
                {text}
            </button>
        </>
    )
}

