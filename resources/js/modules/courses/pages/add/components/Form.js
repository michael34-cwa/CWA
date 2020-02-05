import React from 'react'
import PropTypes from 'prop-types'
import MyEditor from '../../../../../common/wysiwyg-editor/index'

const displayName = 'ArticleFrom'
const propTypes = {
  article: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const Form = ({ article, errors, onChange, onSubmit }) => {
  
  function handleChange(name, value) {
    if (value !== article[name]) {
      onChange(name, value)
    }
  }
  
  return <form onSubmit={e => onSubmit(e)}>
    <div className="form-group row">
      <label htmlFor="title" className="col-sm-2 col-form-label">Course Name</label>
      <div className="col-sm-10">
        <input type="text"
               id="course_name"
               name="course_name"
               className={`form-control ${errors.has('course_name') && 'is-invalid'}`}
               placeholder="Course Name"
               value={article.course_name || ''}
               onChange={e => handleChange(e.target.name, e.target.value)} />
        {errors.has('course_name') && <div className="invalid-feedback">{errors.first('course_name')}</div>}
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="description" className="col-sm-2 col-form-label">Course Description</label>
      <div className="col-sm-10">
        <textarea id="course_description"
                  name="course_description"
                  className={`form-control ${errors.has('course_description') && 'is-invalid'}`}
                  rows="3"
                  placeholder="Description"
                  value={article.course_description  || ''}
                  onChange={e => handleChange(e.target.name, e.target.value)} />
        {errors.has('course_description') && <div className="invalid-feedback">{errors.first('course_description')}</div>}
      </div>
    </div>

        <div className="form-group row">
      <label htmlFor="description" className="col-sm-2 col-form-label">Course Status</label>
      <div className="col-sm-10">
        <select id="is_active"
                  name="is_active"
                  className={`form-control ${errors.has('is_active') && 'is-invalid'}`} 
                  placeholder="Course Status" 
                  onChange={e => handleChange(e.target.name, e.target.value)} >
                  <option value="0">In Active</option>
                    <option value="1">Active</option>
                    </select>
        {errors.has('is_active') && <div className="invalid-feedback">{errors.first('is_active')}</div>}
      </div>
    </div>
    {/* <div className="form-group row">
      <label htmlFor="content" className="col-sm-2 col-form-label">Content</label>
      <div className="col-sm-10">
        <MyEditor id="content" value={article.content} onChange={e => handleChange('content', e)} />
        {errors.has('content') && <div className="invalid-feedback">{errors.first('content')}</div>}
      </div>
    </div> */}
    <div className="form-group row">
      <div className="col-sm-10 ml-auto">
        <button disabled={errors.any()} type="submit" className="btn btn-primary">Update</button>
      </div>
    </div>
  </form>
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
