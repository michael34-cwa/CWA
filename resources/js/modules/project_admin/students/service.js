import Http from '../../../utils/Http'
import Transformer from '../../../utils/Transformer'
// import * as categoryActions from './store/actions'
import * as categoryActions from '../../school/students/store/actions'

import { toast } from "react-toastify";

function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}
 
 
 
 
export function categoryListRequest({ pageNumber = 1, value = '', url = "/project_admin/students" }) { 
    return dispatch => {
      dispatch(categoryActions.spinerAdd(transformResponse()));
      if (pageNumber > 1 || value.length >= 2) {
        url = url + `?page=${pageNumber}&search=${value}`;
      }
            Http.get(url)
             .then(res => {
               dispatch(categoryActions.list(transformResponse(res.data)));
             
             })
             .catch(err => {
               // TODO: handle err
               console.error(err.response);
             });
         };
       }
 