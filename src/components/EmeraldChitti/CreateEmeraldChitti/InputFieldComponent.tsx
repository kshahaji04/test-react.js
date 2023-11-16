
const InputFieldComponent = ({ value, readOnly, id, onChange, type, handleKeyDown, handleOnFocus }: any) => {
    console.log("type", readOnly)

    return (
        <div>
            <input
                type={type}
                className="form-control custom-input-field-t"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                id={id}
                name={id}
                readOnly={readOnly}
                value={value} onChange={onChange}
                onKeyDown={(e) => handleKeyDown(e, id)}
                onFocus={(e) => handleOnFocus(e, id)}
            />
        </div>
    )
}

export default InputFieldComponent