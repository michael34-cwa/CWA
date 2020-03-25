import Http from '../../../utils/Http'
import Transformer from '../../../utils/Transformer'
import * as userActions from './store/actions'
import { toast } from "react-toastify";

export function userUpdateRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.patch(`/users/${params.id}`, Transformer.send(params))
        .then(res => {
          toast.success("Updated Successfully");
          dispatch(userActions.userUpdate(Transformer.fetch(res.data.user)))
          return resolve()
        })
        .catch((err) => {
          const statusCode = err.response.status;
          const data = {
            error: null,
            statusCode,
          };
          console.log(err.response);
          if (statusCode === 422) {
       //     toast.success(err.response.message);
            if (err.response.data.status == 1){
              toast.success(err.response.data.message);
            }else{
            const resetErrors = {
              errors: err.response.data.errors,
              replace: false,
              searchStr: '',
              replaceStr: '',
            }; 
            data.error = Transformer.resetValidationFields(resetErrors);
            }
          } else if (statusCode === 401) {
            data.error = err.response.data.message;
          }
          return reject(data);
        })
    })
  )
}
