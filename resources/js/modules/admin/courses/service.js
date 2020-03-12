import Http from '../../../utils/Http'
import Transformer from '../../../utils/Transformer'
import * as courseActions from './store/actions'
import { toast } from "react-toastify";
function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}


export function courseAddRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post("/courses", transformRequest(params))
        .then(res => {
          toast.success("Added Successfully"); 
        //  dispatch(courseActions.add(transformResponse(res.data)));
          return resolve(res);
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
 

export function courseUpdateRequest(params, status) { 
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.patch(`courses/${params.id}/${status}`, transformRequest(params))
        .then(res => {
          toast.success("Updated Successfully");
          if (status == 1){
           dispatch(courseActions.add(transformResponse(res.data)));
          }
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

export function courseRemoveRequest(id) {
  return dispatch => {
    Http.delete(`courses/${id}`)
      .then(() => {
        toast.success("Deteted Successfully");
        dispatch(courseActions.remove(id));
      })
      .catch(err => {
        // TODO: handle err
        console.error(err.response);
      });
  }
}

export function courseListRequest({ pageNumber = 1, value = '', url = "/courses" }) {
         return dispatch => {
           if (pageNumber > 1 || value.length >= 2) {
             url = url + `?page=${pageNumber}&search=${value}`;
           }
    
           Http.get(url)
             .then(res => { 
               dispatch(courseActions.list(transformResponse(res.data)));
             })
             .catch(err => {
               // TODO: handle err
               console.error(err.response);
             });
         };
       }


       
export function courseEditRequest(id) {
  return dispatch => {
    Http.get(`courses/${id}`)
      .then(res => {
        dispatch(courseActions.add(transformResponse(res.data)));
      })
      .catch(err => {
        // TODO: handle err
        console.error(err.response);
      });
  }
}

export function categoryListRequest({ url = "/courses/courses_category_list" }) {
  return dispatch => {

    Http.get(url)
      .then(res => { 
        dispatch(courseActions.catList(transformResponse(res)));
      })
      .catch(err => {
        // TODO: handle err
        console.error(err.response);
      });
  };
}
 