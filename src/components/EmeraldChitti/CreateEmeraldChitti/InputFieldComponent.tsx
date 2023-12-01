const InputFieldComponent = ({
  value,
  readOnly,
  id,
  onChange,
  type,
  HandleAddRow
}: any) => {


  const handleKeyDown: any = (e: any, id: any) => {
    HandleAddRow();
  }
  return (
    <div>
      <input
        type={type}
        className="form-control custom-input-field-t text-end"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        id={id}
        name={id}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => handleKeyDown(e, "custom_hm_pcs")}

      />
    </div>
  );
};

export default InputFieldComponent;
