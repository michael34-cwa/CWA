import Http from '../../../utils/Http'
import Transformer from '../../../utils/Transformer'
import * as courseActions from './store/actions'
import * as taskActions from '../../school/students/store/actions'
import * as logActions from '../../admin/school_lists/store/actions'
import * as catActions from '../../admin/course_categories/store/actions'
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
          if (status == 1) {
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


export function taskStatusRequest(params) {  
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post(`/tasks/student/${params}`, transformRequest(params))
        .then(res => {
          toast.success("Updated Successfully");
           dispatch(courseActions.add(transformResponse(res.data)));
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

export function courseListRequest({ pageNumber = 1, value = '', url = "/courses/get_student_courses" }) {
  return dispatch => {
    dispatch(courseActions.spinerAdd(transformResponse()));
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



export function courseCategotyRequest() {
 
  return dispatch => {
    Http.get(`tasks/category`)
      .then(res => {
   
          dispatch(catActions.list(transformResponse(res.data))); 
          return resolve(res);

      })
      .catch(err => {
        // TODO: handle err
        console.error(err.response);
      });
  };
}

export function logsListRequest(taskid) {
 
  return dispatch => {
    Http.get(`tasks/task_logs/${taskid}`)
      .then(res => {
   
          dispatch(logActions.list(transformResponse(res.data))); 
          return resolve(res);

      })
      .catch(err => {
        // TODO: handle err
        console.error(err.response);
      });
  };
}

export function chatListRequest(taskid,schoolId,uid) {
 
  return dispatch => {
    Http.get(`tasks/chat/${taskid}/${schoolId}`)
      .then(res => {
          dispatch(taskActions.list(transformResponse(res.data)));
 
        let last = res.data.data[res.data.data.length - 1];
    
        if(window.atob(schoolId) == last.school_id && window.atob(taskid) == last.task_id && 0 == last.read && uid != last.sender_id){
    //   toast.success("Updated Successfully");
        window.scrollTo(0, document.body.scrollHeight);

       Http.post(`tasks/chat/${taskid}/${schoolId}/${last.id}/1`, transformRequest());  
        }

      })
      .catch(err => {
        // TODO: handle err
        console.error(err.response);
      });
  };
}


export function chatAddRequest(params, taskid,schoolId) { 
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post(`tasks/chat/${taskid}/${schoolId}`, transformRequest(params))
        .then(res => {
       //   toast.success("Added Successfully");
          dispatch(taskActions.add(transformResponse(res.data)));
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


export function courseEditRequest(id,sid) {
  return dispatch => {
    dispatch(courseActions.spinerAdd(transformResponse()));
    Http.get(`courses/course_tasks/${id}/${sid}`)
      .then(res => {
        dispatch(courseActions.add(transformResponse(res.data)));
      })
      .catch(err => {
        // TODO: handle err
        console.error(err.response);
      });
  }
}

export function taskDetailsRequest(id) {
  return dispatch => {
    Http.get(`tasks/student/${id}`)
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



export function courseStatusRequest(params) {  
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post(`/courses/course_status/${params}`, transformRequest(params))
        .then(res => {
          toast.success("Updated Successfully");
           dispatch(courseActions.add(transformResponse(res.data)));
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


export function taskDisRequest(params,id) {    

  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post(`/tasks/task_dis/${id}`, transformRequest(params))
        .then(res => {
          toast.success("Updated Successfully");
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


export function taskTimeRequest(params,id) {    

  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post(`/tasks/task_logs/${id}`, transformRequest(params))
        .then(res => {
          toast.success("Updated Successfully");
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


export function taskTimeUpdate(params,id) {    

  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post(`/tasks/logs_update/${id}`, transformRequest(params))
        .then(res => {
          toast.success("Updated Successfully");
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