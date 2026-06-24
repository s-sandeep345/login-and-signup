import { useReducer, useRef } from "react";

import {
  formReducer,
  initialState
} from "../reducer/formReducer";

function ContactForm() {

  const [state, dispatch] =
    useReducer(
      formReducer,
      initialState
    );

  const nameInputRef = useRef();

  const validateForm = () => {

    const errors = {};

    if (!state.name.trim()) {
      errors.name =
        "Name is required";
    }

    if (!state.email.trim()) {
      errors.email =
        "Email is required";
    } else if (
      !/\S+@\S+\.\S+/.test(
        state.email
      )
    ) {
      errors.email =
        "Invalid email format";
    }

    if (!state.phone.trim()) {
      errors.phone =
        "Phone number required";
    } else if (
      state.phone.length !== 10
    ) {
      errors.phone =
        "Phone must contain 10 digits";
    }

    if (!state.message.trim()) {
      errors.message =
        "Message is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const errors =
      validateForm();

    if (
      Object.keys(errors).length > 0
    ) {
      dispatch({
        type: "SET_ERRORS",
        payload: errors
      });

      return;
    }

    alert(
      "Form Submitted Successfully"
    );

    dispatch({
      type: "RESET"
    });

    nameInputRef.current.focus();
  };

  return (
    <div className="contact-container">

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          ref={nameInputRef}
          type="text"
          placeholder="Enter Name"
          value={state.name}
          onChange={(e) =>
            dispatch({
              type:
                "UPDATE_FIELD",
              field: "name",
              value:
                e.target.value
            })
          }
        />

        <span>
          {state.errors.name}
        </span>

        <input
          type="email"
          placeholder="Enter Email"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type:
                "UPDATE_FIELD",
              field: "email",
              value:
                e.target.value
            })
          }
        />

        <span>
          {state.errors.email}
        </span>

        <input
          type="text"
          placeholder="Phone Number"
          value={state.phone}
          onChange={(e) =>
            dispatch({
              type:
                "UPDATE_FIELD",
              field: "phone",
              value:
                e.target.value
            })
          }
        />

        <span>
          {state.errors.phone}
        </span>

        <textarea
          rows="5"
          placeholder="Message"
          value={state.message}
          onChange={(e) =>
            dispatch({
              type:
                "UPDATE_FIELD",
              field:
                "message",
              value:
                e.target.value
            })
          }
        />

        <span>
          {state.errors.message}
        </span>

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default ContactForm;