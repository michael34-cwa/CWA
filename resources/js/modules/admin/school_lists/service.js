import Http from '../../../utils/Http'
import Transformer from '../../../utils/Transformer'
import * as SchoolListActions from './store/actions'
import { toast } from "react-toastify";

function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

export function SchoolListAddRequest(params) { 
  

  return dispatch => (  
    new Promise((resolve, reject) => {
      
      Http.post("/school_lists", transformRequest(params))
        .then(res => {
          toast.success("Added Successfully");
         
          dispatch(SchoolListActions.add(transformResponse(res.data)));
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
            } else {
              const resetErrors = {
                errors: err.response.data,
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

export function  SchoolListUpdateRequest(params,status) { 

  return dispatch => ( 
    new Promise((resolve, reject) => {
      if (status == 1) {
        dispatch(SchoolListActions.spinerAdd(transformResponse()));
      }
      Http.patch(`school_lists/${params.id}/${status}`, transformRequest(params))
        .then(res => {
          toast.success("Updated Successfully"); 
           if (status == 1) {
            dispatch(SchoolListActions.add(transformResponse(res.data)));
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

export function  SchoolListRemoveRequest(id) {
  return dispatch => {
    dispatch(SchoolListActions.spinerAdd(transformResponse()));
    Http.delete(`school_lists/${id}`)
      .then(() => {
        toast.success("Deleted Successfully"); 
        dispatch(SchoolListActions.remove(id)); 
      })
      .catch(err => {
        // TODO: handle err
        console.error(err.response);
      });
  }
}

export function SchoolListListRequest({ pageNumber = 1, value = '', url = "/school_lists" }) {  
         return dispatch => {
           dispatch(SchoolListActions.spinerAdd(transformResponse()));
           if (pageNumber > 1 || value.length >= 2) {
             url = url + `?page=${pageNumber}&search=${value}`;
           }
       
           Http.get(url)
             .then(res => { 
                dispatch(SchoolListActions.list(transformResponse(res.data)));
              })
             .catch(err => {
               // TODO: handle err
               console.error(err.response);
             });
         };
       }

export function  SchoolListEditRequest(id) { 
  return dispatch => {
    Http.get(`school_lists/${id}`)
      .then(res => {
        dispatch(SchoolListActions.add(transformResponse(res.data)));
      })
      .catch(err => {
        // TODO: handle err
        console.error(err.response);
      });
  }
}

 