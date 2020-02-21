import React from 'react'
import PropTypes from 'prop-types'
import LoadingComponent from '../../../../../../common/loader'

const displayName = 'CategoryFrom'
const propTypes = {
  category: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const Form = ({ loading, category, errors, onChange, onSubmit }) => {

  function handleChange(name, value) {
    if (value !== category[name]) {
      onChange(name, value)
    }
  }

  return (

    <form onSubmit={e => onSubmit(e)}>
      <div className="form-group row">
        <label htmlFor="title" className="col-md-12 col-form-label">
          Title
        </label>
        <div className="col-md-12">
          <input
            type="text"
            id="category_name"
            name="category_name"
            className={`form-control ${errors.has("category_name") &&
              "is-invalid"}`}
            placeholder="Title"
            value={category.category_name || ""}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
          {errors.has("category_name") && (
            <div className="invalid-feedback">{errors.first("category_name").replace("_", " ")}</div>
          )}
          {<LoadingComponent isLoading={loading} error={''} />}
        </div>
      </div>

      <div className="form-group row">
        <div className="col-md-12 ml-auto">
          <button
            disabled={errors.any()}
            type="submit"
            className="btn btn-primary"
          >
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Update
          </button>
        </div>
      </div>
    </form>
  );
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
