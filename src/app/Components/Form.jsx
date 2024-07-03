import React, { useRef, useState } from "react";
import GsapMegnetic from "./GsapAnimations/GsapMegnetic";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import LoopIcon from "@mui/icons-material/Loop";

const Form = ({ app }) => {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    Email: "",
    Subject: "",
    Description: "",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const validateForm = () => {
    const { Email, Subject, Description } = formData;
    if (!Email) return alert("Please enter an email address.");
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(Email))
      return alert("Please enter a valid email address.");
    if (!Subject) return alert("Please enter a subject.");
    if (!Description) return alert("Please enter a description.");
    return true;
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    if (!validateForm()) return setSubmitting(false);

    try {
      await firebase
        .database(app)
        .ref("Feedback/" + uuidv4())
        .set(formData);
      formRef.current.reset();
      setFormData({ Email: "", Subject: "", Description: "" });
      alert("Data Submitted successfully");
    } catch (error) {
      alert("Error submitting data:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="formAndDesc">
      <form ref={formRef} onSubmit={formSubmitHandler}>
        {["Email", "Subject"].map((field, index) => (
          <input
            key={field}
            id={field}
            type={field.toLowerCase()}
            placeholder={field}
            onChange={handleInputChange}
          />
        ))}
        <textarea
          id="Description"
          rows={10}
          placeholder="Description"
          onChange={handleInputChange}
        />
      </form>

      <div className="flex gap-10 flex-col z-10">
        <p id="contactFormPara" className="px-10">
          {`Have a question, feedback, or a project in mind? I'd love to hear from
          you. Your input is invaluable. Just drop your message in the form, and
          I'll get back to you as soon as possible.`}
        </p>
        <GsapMegnetic>
          <button
            id="contactFormSendBtn"
            className={`mx-auto ${submitting ? "disabledBtn" : "sendBtn"}`}
            onClick={formSubmitHandler}
            type="submit"
            disabled={submitting}
          >
            Send{" "}
            {submitting ? (
              <LoopIcon />
            ) : (
              <span id="Arrow" className="inline-block">
                →
              </span>
            )}
          </button>
        </GsapMegnetic>
      </div>
    </div>
  );
};

export default Form;
