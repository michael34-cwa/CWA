import Http from '../../../../utils/Http'
import Transformer from '../../../../utils/Transformer'
// import * as categoryActions from './store/actions'
import * as studentActions from '../../../school/students/store/actions'

import { toast } from "react-toastify";

function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}
 
 
 
 
export function studentListRequest({ pageNumber = 1, value = '', url = "/teachers/students" }) { 
    return dispatch => {
      dispatch(studentActions.spinerAdd(transformResponse()));
      if (pageNumber > 1 || value.length >= 2) {
        url = url + `?page=${pageNumber}&search=${value}`;
      }
            Http.get(url)
             .then(res => {
               dispatch(studentActions.list(transformResponse(res.data)));
             
             })
             .catch(err => {
               // TODO: handle err
               console.error(err.response);
             });
         };
       }
 



export function courseListRequest({id, pageNumber = 1, value = '', url = "/courses/get_student_courses" }) {
  return dispatch => {
    dispatch(studentActions.spinerAdd(transformResponse()));
    url  = url+'/'+id;
    if (pageNumber > 1 || value.length >= 2) {
      url = url+'/'+id+ `?page=${pageNumber}&search=${value}`;
    }

    Http.get(url)
      .then(res => {
        dispatch(studentActions.list(transformResponse(res.data)));
      })
      .catch(err => {
        // TODO: handle err
        console.error(err.response);
      });
  };
}



