import { useState } from "react";
import { lineOptions } from "../data/lineOptions";
import PropTypes from "prop-types";

const AddData = ({ data, onSubmit }) => {
  const [formState, setFormState] = useState({
    no: data.length + 1,
    source: "",
    destination: "",
    status: "done",
  });

  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (
      formState.source &&
      formState.destination &&
      formState.source !== formState.destination
    ) {
      setErrors("");
      return true;
    } else {
      const errorFields = [];

      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    setFormState({
      no: data.length + 1,
      source: "",
      destination: "",
      status: "done",
    });
  };

  return (
    <div>
      <form>
        <div className="flex flex-row gap-5 mb-5 items-center">
          <div className="flex flex-col mb-3 ">
            <label className="font-bold" htmlFor="source">
              Choose the line origin
            </label>
            <select
              value={formState.source}
              className="p-1 border-solid rounded-sm"
              name="source"
              onChange={handleChange}
            >
              {lineOptions.map((opt, i) => (
                <option key={i} value={opt.value}>
                  {opt.label.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col mb-3">
            <label className="font-bold" htmlFor="destination">
              Choose the line destination
            </label>
            <select
              value={formState.destination}
              className="p-1 border-solid rounded-sm"
              name="destination"
              onChange={handleChange}
            >
              {lineOptions.map((opt, i) => (
                <option key={i} value={opt.value}>
                  {opt.label.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          <button
            className="px-4 py-2 cursor-pointer text-white bg-blue-600 rounded-md"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        {errors && (
          <div className="mb-4 bg-red-200 text-red-500 p-2 rounded-sm">{`Please fill the ${errors} fields and both fields must be different`}</div>
        )}
      </form>
    </div>
  );
};

AddData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      no: PropTypes.number,
      source: PropTypes.string,
      destination: PropTypes.string,
      status: PropTypes.string,
    })
  ),
  onSubmit: PropTypes.func,
};

export default AddData;
