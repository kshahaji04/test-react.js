import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import {
  getEmeraldShilpiDetails,
  get_Emerald_shilpi_details,
} from '../../store/slices/emerald-shilpi/get-emerald-shilpi-details-slice';
import { useParams } from 'react-router-dom';

const useEmeraldShilpiDetails: any = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const accessToken: any = useSelector(get_access_token);

  const [emeraldShilpiDetails, setemeraldShilpiDetails] = useState<any>([]);

  const emeraldShilpiDetailsDataFromStore: any = useSelector(
    get_Emerald_shilpi_details
  );

  useEffect(() => {
    const params: any = {
      token: accessToken?.token,
      id: id,
    };
    dispatch(getEmeraldShilpiDetails(params));
  }, []);

  useEffect(() => {
    if (
      emeraldShilpiDetailsDataFromStore?.data?.length > 0 &&
      emeraldShilpiDetailsDataFromStore?.data !== null
    ) {
      setemeraldShilpiDetails([...emeraldShilpiDetailsDataFromStore?.data]);
    } else {
      setemeraldShilpiDetails([]);
    }
  }, [emeraldShilpiDetailsDataFromStore]);
  return { emeraldShilpiDetails };
};

export default useEmeraldShilpiDetails;
