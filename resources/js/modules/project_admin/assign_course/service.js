import Http from '../../../utils/Http'
import Transformer from '../../../utils/Transformer'
 import * as CourseActions from '../../admin/courses/store/actions'
import * as AssignCourseActions from './../../admin/assign_course/store/actions'
import { toast } from "react-toastify";

function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

export function AssignCourseAddRequest(params,id) {  
  return dispatch => (  
    new Promise((resolve, reject) => {
     // dispatch(AssignCourseActions.spinerAdd(transformResponse()));
      Http.post(`course_assign/student/${id}`, transformRequest(params))
        .then(res => {
          toast.success("Assigned Successfully"); 
          if (res.data){ 
         // dispatch(AssignCourseActions.list(transformResponse(res.data))); 
          }
          return resolve(res); 
        })
        .catch(err => {
          const statusCode = err.response.status;
          const data = {
            error: null,
            statusCode
          };
          if (statusCode === 422) {
            if (err.response.data.status == 0) {
              toast.warn(err.response.data.message);
       
              const resetErrors = {
                errors: [],
                replace: false,
                searchStr: "",
                replaceStr: ""
              };
              data.error = Transformer.resetValidationFields(resetErrors);
            }
          } else if (statusCode === 401) {
            data.error = err.response.data.message;
          }
          return reject(data);
        });
    })
  )
} 

export function AssignCourseRemoveRequest(ids) {
  return dispatch => {
  //  dispatch(AssignCourseActions.spinerAdd(transformResponse()));
    Http.delete(`course_assign/student/${ids}`)
      .then(() => {
        toast.success("Deleted Successfully"); 
      // dispatch(AssignCourseActions.remove(id)); 
      })
      .catch(err => {
        const statusCode = err.response.status;
        if (statusCode === 422) {
          if (err.response.data.status == 0) {
            toast.warn(err.response.data.message);
          }
        }
        console.error(err.response);
      });
  }
}

export function AssignCourseListRequest({ id, pageNumber = 1, value = '', url = "/course_assign/student" }) {  
         return dispatch => {
           dispatch(AssignCourseActions.spinerAdd(transformResponse()));
           url = url + '/' + id;
           if (pageNumber > 1 || value.length >= 2) {
             url = url + `?page=${pageNumber}&search=${value}`;
           }
       
           Http.get(url)
             .then(res => { 
               dispatch(AssignCourseActions.list(transformResponse(res.data)));
              })
             .catch(err => {
               // TODO: handle err
               console.error(err.response);
             });
         };
       }

export function CourseSchooListRequest({ id,url = "/course_assign/school" }) {
  return dispatch => {
 
    Http.get(url + '/' + id)
      .then(res => {
        dispatch(CourseActions.list(transformResponse(res.data)));
      })
      .catch(err => {
    
        console.error(err.response);
      });
  };
}

// export function  AssignCourseEditRequest(id) { 
//   return dispatch => {
//     Http.get(`course_assign/${id}`)
//       .then(res => {
//         dispatch(AssignCourseActions.add(transformResponse(res.data)));
//       })
//       .catch(err => {
//         // TODO: handle err
//         console.error(err.response);
//       });
//   }
// }

 