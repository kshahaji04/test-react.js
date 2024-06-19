import { Button, Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import useMasterUpdateHook from '../../hooks/Master/master-update-hook';
import AutoCompleteInput from '../InputDropdown/AutoCompleteInput';

const MasterUpdateModal = ({
  isModalOpen,
  setIsModalOpen,
  data,
  dropdownData,
}: any) => {
  console.log('data', data);
  let location = useLocation();
  let path: any = location.pathname;
  const {
    handleInputChange,
    formData,
    setFormData,
    handleSaveBtn,
    handleClose,
  }: any = useMasterUpdateHook({ data, setIsModalOpen });

  const dropdownDataList: any = {
    fieldname: '',
    fieldtype: 'Link',
    link_data: path.includes('projectsubcategorymapping')
      ? dropdownData?.length > 0 && dropdownData.map((data: any) => data.name)
      : dropdownData,
  };
  return (
    <Modal
      show={isModalOpen}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Update</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          {typeof data === 'object' && !Array.isArray(data) ? (
            Object.keys(data).map((key: any) => (
              <div className="col-6" key={key}>
                <label htmlFor={key}>
                  {key.charAt(0).toUpperCase() +
                    key.slice(1)?.split('_')?.join(' ')}
                  :
                </label>
                {key === 'client_group' ||
                key === 'category' ||
                key === 'supplier_group' ||
                key === 'stone' ||
                key === 'plain' ? (
                  <AutoCompleteInput
                    data={dropdownDataList}
                    handleSearchInput={(value: any) =>
                      handleInputChange(value, key)
                    }
                    value={formData[key]}
                  />
                ) : (
                  <input
                    type="text"
                    className="form-control ps-1"
                    aria-describedby="basic-addon3"
                    id={key}
                    name={key}
                    defaultValue={data[key] || ''}
                    value={formData[key]}
                    onChange={(e) => handleInputChange(e.target.value, key)}
                  />
                )}
              </div>
            ))
          ) : (
            <input
              type="text"
              className="form-control p-1"
              aria-describedby="basic-addon3"
              id={data}
              name={data}
              defaultValue={data || ''}
              value={formData || ''}
              onChange={(e) => setFormData(e.target.value)}
            />
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSaveBtn}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MasterUpdateModal;
