import Http from '../../../utils/Http'
import Transformer from '../../../utils/Transformer'
import * as taskActions from './store/actions'
import { toast } from "react-toastify";
function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

export function taskAddRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post("/tasks", transformRequest(params))
        .then(res => {
          toast.success("Added Successfully");
        //  dispatch(taskActions.add(transformResponse(res.data)));
          return resolve();
        })
        .catch(err => {
          const statusCode = err.response.status;
          const data = {
            error: null,
            statusCode
          };

          if (statusCode === 422) {
            const resetErrors = {
              errors: err.response.data,
              replace: false,
              searchStr: "",
              replaceStr: ""
            };
            data.error = Transformer.resetValidationFields(resetErrors);
          } else if (statusCode === 401) {
            data.error = err.response.data.message;
          }
          return reject(data);
        });
    })
  )
}

export function taskUpdateRequest(params,status) {    
  return dispatch => (
    new Promise((resolve, reject) => {
      if (status == 1) {
        // dispatch(taskActions.spinerAdd(transformResponse()));
      }
      Http.patch(`tasks/${params.id}`, transformRequest(params))
        .then(res => {
          toast.success("Updated Successfully");
          dispatch(taskActions.add(transformResponse(res.data)));
          return resolve();
        })
        .catch(err => {
          const statusCode = err.response.status;
          const data = {
            error: null,
            statusCode
          };

          if (statusCode === 422) {
            const resetErrors = {
              errors: err.response.data,
              replace: false,
              searchStr: "",
              replaceStr: ""
            };
            data.error = Transformer.resetValidationFields(resetErrors);
          } else if (statusCode === 401) {
            data.error = err.response.data.message;
          }
          return reject(data);
        });
    })
  )
}

export function taskRemoveRequest(id) {
  return dispatch => {
    // dispatch(taskActions.spinerAdd(transformResponse()));
    Http.delete(`tasks/${id}`)
      .then(() => {
        toast.success("Deteted Successfully");
        dispatch(taskActions.remove(id));
      })
      .catch(err => {
        // TODO: handle err
        console.error(err.response);
      });
  }
}

export function taskListRequest({ pageNumber = 1, value = '', url = "/tasks" }) {
         return dispatch => {
          
           if (pageNumber > 1 || value.length >= 2) {
             url = url + `?page=${pageNumber}&search=${value}`;
           }
    
           Http.get(url)
             .then(res => { 
               dispatch(taskActions.list(transformResponse(res.data)));
             })
             .catch(err => {
               // TODO: handle err
               console.error(err.response);
             });
         };
       }


       
export function taskEditRequest(id) {
  return dispatch => {
    Http.get(`tasks/${id}`)
      .then(res => {
        dispatch(taskActions.add(transformResponse(res.data)));
      })
      .catch(err => {
        // TODO: handle err
        console.error(err.response);
      });
  }
}

export function courseListRequest({ url = "/tasks/task_list" }) {
  return dispatch => {

    Http.get(url)
      .then(res => {

        dispatch(taskActions.courseList(transformResponse(res)));
      })
      .catch(err => {
        // TODO: handle err
        console.error(err.response);
      });
  };
}
 