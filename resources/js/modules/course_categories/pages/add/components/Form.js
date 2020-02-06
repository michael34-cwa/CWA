import React from 'react'
import PropTypes from 'prop-types'
 
const displayName = 'CategoryFrom'
const propTypes = {
  category: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const Form = ({ category, errors, onChange, onSubmit }) => {
  
  function handleChange(name, value) {
    if (value !== category[name]) {
      onChange(name, value)
    }
  }
  
  return (
    <form onSubmit={e => onSubmit(e)}>
      <div className="form-group row">
        <label htmlFor="category_name" className="col-md-12 col-form-label">
          Category Name
        </label>
        <div className="col-md-12">
          <input
            type="text"
            id="category_name"
            name="category_name"
            className={`form-control ${errors.has("category_name") && "is-invalid"}`}
            placeholder="Category Name"
            value={category.category_name || ""}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
          {errors.has("category_name") && (
            <div className="invalid-feedback">{errors.first("category_name")}</div>
          )}
        </div>
      </div>

      <div className="form-group row">
        <div className="col-sm-12 ml-auto">
          <button
            disabled={errors.any()}
            type="submit"
            className="btn btn-primary"
          >
            Add Course Category
          </button>
        </div>
      </div>
    </form>
  );
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
