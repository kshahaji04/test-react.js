
const TotalAmountRowForChitti = ({ amountValue }: any) => {
    return (
        <tr>
            <td></td>
            <td className="py-1 px-2">
                <div className="custom-select-container">
                    <input
                        type="text"
                        className="form-control custom-input-field-t text-center p-0 "
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Total"
                        readOnly
                    />
                </div>
            </td>
            <td className="py-1 px-2">
                <input
                    type="number"
                    className="form-control custom-input-field-t p-0 text-end"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={amountValue?.gross_weight?.toFixed(3)}
                    readOnly
                />
            </td>
            <td className="py-1 px-2">
                <input
                    type="number"
                    className="form-control custom-input-field-t p-0 text-end"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={amountValue?.less_wt?.toFixed(3)}
                    readOnly
                />
            </td>
            <td className="py-1 px-2">
                <input
                    type="number"
                    className="form-control custom-input-field-t p-0 text-end"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={amountValue?.net_weight?.toFixed(3)}
                    readOnly
                />
            </td>
            <td className="py-1 px-2">
                <input
                    type="number"
                    className="form-control custom-input-field-t  p-0 text-end"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={amountValue?.amount?.toFixed(2)}
                    readOnly
                />
            </td>
            <td></td>
        </tr>
    )
}

export default TotalAmountRowForChitti