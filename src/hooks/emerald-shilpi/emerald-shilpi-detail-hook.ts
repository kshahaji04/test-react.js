import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import {
  getEmeraldShilpiDetails,
  get_Emerald_shilpi_details,
} from '../../store/slices/emerald-shilpi/get-emerald-shilpi-details-slice';
import { useParams } from 'react-router-dom';

const UseEmeraldShilpiDetails: any = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const AccessToken: any = useSelector(get_access_token);

  const [emeraldShilpiDetails, setemeraldShilpiDetails] = useState<any>([]);

  const emeraldShilpiDetailsDataFromStore: any = useSelector(
    get_Emerald_shilpi_details
  );
  console.log('emeraldShilpiDetailsData', emeraldShilpiDetailsDataFromStore);

  useEffect(() => {
    const params: any = {
      token: AccessToken?.token,
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

export default UseEmeraldShilpiDetails;
