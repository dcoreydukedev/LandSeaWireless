import React from 'react';
import { useField } from 'formik';

export const RadioButtonInput = ({ children = '', ...props }) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you
    const [field, meta] = useField({ ...props, type: 'radio' });
    return (
      <div>
        <label className="radio">
          <input type="radio" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  export default RadioButtonInput