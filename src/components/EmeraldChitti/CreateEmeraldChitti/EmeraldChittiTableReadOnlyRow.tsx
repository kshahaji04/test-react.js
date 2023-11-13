
import InputFieldComponent from './InputFieldComponent'

const EmeraldChittiTablereadOnlyRow = ({ calculationRow }: any) => {
    return (
        <>
            <tr>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={""}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={""}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={""}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={""}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={""}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={calculationRow?.gross_weight.toFixed(3)}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={calculationRow?.stn_wt.toFixed(3)}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={""}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={""}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={""}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={calculationRow.net_weight.toFixed(3)}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={""}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={""}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={""}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={""}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={""}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={""}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={""}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={""}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={calculationRow?.cz_amt?.toFixed(3)}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={calculationRow?.cs_amt?.toFixed(3)}
                        readOnly={"true"}
                    />
                </td>
                <td className="emerald_chitti_table_td">
                    <InputFieldComponent value={calculationRow?.amount?.toFixed(3)}
                        readOnly={"true"}
                    />
                </td>
            </tr>
        </>
    )
}

export default EmeraldChittiTablereadOnlyRow