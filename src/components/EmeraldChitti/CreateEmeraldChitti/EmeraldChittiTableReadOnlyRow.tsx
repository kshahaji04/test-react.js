import InputFieldComponent from './InputFieldComponent';

const EmeraldChittiTablereadOnlyRow = ({ calculationRow }: any) => {
  return (
    <>
      <tr className="emerald-chitti-table-row">
        <td className="emerald_chitti_table_td"></td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent
            value={calculationRow?.gross_weight?.toFixed(3)}
            readOnly={'true'}
          />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent
            value={calculationRow?.stn_wt?.toFixed(3)}
            readOnly={'true'}
          />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={calculationRow?.h} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent
            value={calculationRow?.i?.toFixed(2)}
            readOnly={'true'}
          />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent
            value={calculationRow?.j?.toFixed(3)}
            readOnly={'true'}
          />
        </td>

        <td className="emerald_chitti_table_td">
          <InputFieldComponent
            value={calculationRow?.k?.toFixed(2)}
            readOnly={'true'}
          />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent
            value={calculationRow.net_weight?.toFixed(3)}
            readOnly={'true'}
          />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>

        <td className="emerald_chitti_table_td">
          <InputFieldComponent
            value={calculationRow?.amount?.toFixed(2)}
            readOnly={'true'}
          />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent
            value={calculationRow?.custom_hm_pcs}
            readOnly={'true'}
          />
        </td>

        <td></td>
      </tr>
    </>
  );
};

export default EmeraldChittiTablereadOnlyRow;
