
const InputFieldComponent = ({ value, readOnly, id, onChange, type }: any) => {
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
            />
        </div>
    )
}

export default InputFieldComponent