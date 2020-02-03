import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import * as articleActions from './store/actions'

function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

export function articleAddRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post("/technologies", transformRequest(params))
        .then(res => {
          dispatch(articleActions.add(transformResponse(res.data)));
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

export function articleUpdateRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.patch(`technologies/${params.id}`, transformRequest(params))
        .then(res => {
          dispatch(articleActions.add(transformResponse(res.data)));
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

export function articleRemoveRequest(id) {
  return dispatch => {
    Http.delete(`technologies/${id}`)
      .then(() => {
        dispatch(articleActions.remove(id));
      })
      .catch(err => {
        // TODO: handle err
        console.error(err.response);
      });
  }
}

export function articleListRequest({ pageNumber = 1, url = "/technologies" }) {
         return dispatch => {
           if (pageNumber > 1) {
             url = url + `?page=${pageNumber}`;
           }
           console.log(url);
           Http.get(url)
             .then(res => {
               dispatch(articleActions.list(transformResponse(res.data)));
             })
             .catch(err => {
               // TODO: handle err
               console.error(err.response);
             });
         };
       }

export function articleEditRequest(id) { 
  return dispatch => {
    Http.get(`technologies/${id}`)
      .then(res => {
        dispatch(articleActions.add(transformResponse(res.data)));
      })
      .catch(err => {
        // TODO: handle err
        console.error(err.response);
      });
  }
}

export function articleFetchRequest(slug) {
  return dispatch => {
    Http.get(`technologies/published/${slug}`)
      .then(res => {
        dispatch(articleActions.add(transformResponse(res.data)));
      })
      .catch(err => {
        // TODO: handle err
        console.error(err.response);
      });
  }
}