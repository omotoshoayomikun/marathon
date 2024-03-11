import styles from '../../styles/Input.module.css';

export const Input = (props) => {
    const { label, onChange, id, ...inputProps } = props;
    return (
        <>
            <div className="user-input-wrp">
                <input type="text" className="inputText" {...inputProps} onChange={onChange} placeholder=" " />
                <span className="floating-label">{label}</span>
            </div>
        </>
    )
}

export const TextArea = () => {
    return (
        <>
            <div className='user-textarea-wrp'>
                <textarea className='text-area' placeholder=' '>

                </textarea>
                <span className="floating-label">Description</span>
            </div>
        </>
    )
}