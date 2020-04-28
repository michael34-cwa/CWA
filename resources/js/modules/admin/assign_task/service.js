import Http from '../../../utils/Http'
import Transformer from '../../../utils/Transformer'
 import * as TaskActions from '../../admin/tasks/store/actions'
import * as AssignTaskActions from './../../admin/assign_course/store/actions'
import { toast } from "react-toastify";

function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

export function AssignTaskAddRequest(params,id) {  
  return dispatch => (  
    new Promise((resolve, reject) => {
     // dispatch(AssignTaskActions.spinerAdd(transformResponse()));
      Http.post(`groups/task_add/${id}`, transformRequest(params))
        .then(res => {
          toast.success("Assigned Successfully"); 
          if (res.data){ 
         // dispatch(AssignTaskActions.list(transformResponse(res.data))); 
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

export function AssignTaskRemoveRequest(ids) {
  return dispatch => {
  //  dispatch(AssignTaskActions.spinerAdd(transformResponse()));
    Http.delete(`course_assign/task/${ids}`)
      .then(() => {
        toast.success("Deleted Successfully"); 
      // dispatch(AssignTaskActions.remove(id)); 
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

export function AssignTaskListRequest({ id, pageNumber = 1, value = '', url = "/groups/assign_tasks" }) {  
         return dispatch => {
           dispatch(AssignTaskActions.spinerAdd(transformResponse()));
           url = url + '/' + id;
           if (pageNumber > 1 || value.length >= 2) {
             url = url + `?page=${pageNumber}&search=${value}`;
           }
       
           Http.get(url)
             .then(res => { 
               dispatch(AssignTaskActions.list(transformResponse(res.data)));
              })
             .catch(err => {
               // TODO: handle err
               console.error(err.response);
             });
         };
       }

export function CourseTaskListRequest({ cid,url = "/groups/task_by_id" }) {
  return dispatch => {
 
    Http.get(url + '/' + cid)
      .then(res => {
        dispatch(TaskActions.list(transformResponse(res.data)));
      })
      .catch(err => {
    
        console.error(err.response);
      });
  };
}

// export function  AssignTaskEditRequest(id) { 
//   return dispatch => {
//     Http.get(`course_assign/${id}`)
//       .then(res => {
//         dispatch(AssignTaskActions.add(transformResponse(res.data)));
//       })
//       .catch(err => {
//         // TODO: handle err
//         console.error(err.response);
//       });
//   }
// }

 