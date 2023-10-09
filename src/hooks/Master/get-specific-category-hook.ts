import react, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { getSpecificCategory, get_specific_category } from '../../store/slices/Master/get-specific-category-slice';

const UseGetSpecificCategory = () => {
  const dispatch = useDispatch();
  const AccessToken: any = useSelector(get_access_token);
  const { id } = useParams();
  const categoryName: any = useSelector(get_specific_category);
  console.log("clientGroupDataFromStore",categoryName)

  const [category,setCategory] = useState<any>("")
  useEffect(() => {
    const params = {
      name: id,
      token: AccessToken?.token,
    };
    dispatch(getSpecificCategory(params));
  }, []);

  useEffect(()=>{
if(categoryName?.length > 0 && categoryName !== null ){
    setCategory([...categoryName?.data[0]?.client_group])
}
  },)

  return{ category};
};

export default UseGetSpecificCategory;
