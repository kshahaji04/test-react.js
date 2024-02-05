import { useSelector } from 'react-redux';
import { get_access_token } from '../../../store/slices/auth/token-login-slice';
import InternalLoginApi from '../../../services/api/auth/supplier-frappe-intenal-login-api';
import { BASE_URL } from '../../../services/config/api-config';

const DataUpload = () => {
  const AccessToken: any = useSelector(get_access_token);
  const requestID = new Date().getTime();
  console.log('request id', requestID);
  const HandleCreateNewSupplier: any = async () => {
    let internalLoginApi: any = await InternalLoginApi(AccessToken?.token);
    console.log('internal login api res', internalLoginApi);
    if (Object?.keys(internalLoginApi?.data)?.length > 0) {
      window.open(`${BASE_URL}/app/emerald-supplier/new-emerald-supplier-1`);
    }
  };
  return (
    <div className="container mt-5">
      <button
        type="button"
        className="btn btn-outline-primary text-uppercase btn-sm"
        onClick={HandleCreateNewSupplier}
      >
        <span className="">Create Emerald Supplier</span>
      </button>
    </div>
  );
};

export default DataUpload;
