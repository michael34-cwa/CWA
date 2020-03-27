import Http from '../../../utils/Http'
import Transformer from '../../../utils/Transformer'
 import * as dashActions from '../../admin/web/store/actions'

import { toast } from "react-toastify";
function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

 

export function dashListRequest({ url = "/dashboard/student" }) {

         return dispatch => { 
           dispatch(dashActions.spinerAdd(transformResponse())); 
           Http.get(url)
             .then(res => { 
               dispatch(dashActions.list(transformResponse(res.data)));
             })
             .catch(err => {
               // TODO: handle err
               console.error(err.response);
             });
         };
       }

 
 