import React from 'react'

const InputFieldComponent = ({ value, id, onChange, type }: any) => {
    console.log("type", type)

    return (
        <div>
            <input
                type="number"
                className="form-control custom-input-field-t"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                id={id}
                name={id}
                value={value} onChange={onChange}
            //   defaultValue={
            //     row.net_weight >= 0 ? row.net_weight : ''
            //   }
            //   value={row.net_weight > 0 ? row.net_weight : ''}
            //   onChange={(e) => HandleNetWeightValue(e, row.id)}
            //   readOnly={readOnly === true ? true : false}
            />
        </div>
    )
}

export default InputFieldComponent