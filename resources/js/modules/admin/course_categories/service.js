import Http from '../../../utils/Http'
import Transformer from '../../../utils/Transformer'
import * as categoryActions from './store/actions'
import { toast } from "react-toastify";

function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

export function categoryAddRequest(params) { 
  

  return dispatch => (  
    new Promise((resolve, reject) => {
      
      Http.post("/course_categories", transformRequest(params))
        .then(res => {
          toast.success("Added Successfully");
         
          dispatch(categoryActions.add(transformResponse(res.data)));
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

export function  categoryUpdateRequest(params) { 

  return dispatch => ( 
    new Promise((resolve, reject) => {
      dispatch(categoryActions.spinerAdd())
      Http.patch(`course_categories/${params.id}`, transformRequest(params))
        .then(res => {
          toast.success("Updated Successfully");
          dispatch(categoryActions.spinerRemove())
          //dispatch(categoryActions.add(transformResponse(res.data)));
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

export function  categoryRemoveRequest(id) {
  return dispatch => {
    Http.delete(`course_categories/${id}`)
      .then(() => {
        toast.success("Deleted Successfully");
        dispatch(categoryActions.remove(id));
      })
      .catch(err => {
        // TODO: handle err
        console.error(err.response);
      });
  }
}

export function  categoryListRequest({ pageNumber = 1, url = "/course_categories" }) {
         return dispatch => {
           if (pageNumber > 1) {
             url = url + `?page=${pageNumber}`;
           }
           console.log(url);
           Http.get(url)
             .then(res => {
               dispatch(categoryActions.list(transformResponse(res.data)));
              // console.log(res.data);
             })
             .catch(err => {
               // TODO: handle err
               console.error(err.response);
             });
         };
       }

export function  categoryEditRequest(id) { 
  return dispatch => {
    Http.get(`course_categories/${id}`)
      .then(res => {
        dispatch(categoryActions.add(transformResponse(res.data)));
      })
      .catch(err => {
        // TODO: handle err
        console.error(err.response);
      });
  }
}

export function  categoryFetchRequest(slug) {
  return dispatch => {
    Http.get(`course_categories/published/${slug}`)
      .then(res => {
        dispatch(categoryActions.add(transformResponse(res.data)));
      })
      .catch(err => {
        // TODO: handle err
        console.error(err.response);
      });
  }
}