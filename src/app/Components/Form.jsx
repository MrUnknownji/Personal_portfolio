import React, { useRef, useState } from "react";
import GsapMegnetic from "./GsapAnimations/GsapMegnetic";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import LoopIcon from "@mui/icons-material/Loop";

const Form = ({app}) => {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Description, setDescription] = useState("");

  const setEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const setSubjectHandler = (event) => {
    setSubject(event.target.value);
  };
  const setDescHandler = (event) => {
    setDescription(event.target.value);
  };
  const validateForm = () => {
    if (Email === "") {
      alert("Please enter an email address.");
      return;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(Email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (Subject === "") {
      alert("Please enter a subject.");
      return;
    }

    if (Description === "") {
      alert("Please enter a description.");
      return;
    }

    return true;
  };
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    if (!validateForm()) {
      setSubmitting(false);
      return;
    }
    const database = firebase.database(app);

    try {
      database.ref("Feedback/" + uuidv4()).set({
        email: Email,
        subject: Subject,
        description: Description,
      });

      formRef.current.reset();
      alert("Data Submitted successfully");
      setEmail("");
      setSubject("");
      setDescription("");
      setSubmitting(false);
    } catch (error) {
      alert("Error submitting data:", error);
      setSubmitting(false);
    }
  };
  return (
    <div className="formAndDesc">
      <form ref={formRef} onSubmit={formSubmitHandler}>
        <input
          id="input1"
          type="email"
          placeholder="Email"
          onChange={setEmailHandler}
        />
        <input
          id="input2"
          type="text"
          placeholder="Subject"
          onChange={setSubjectHandler}
        />
        <textarea
          id="textArea"
          rows={10}
          placeholder="Description"
          onChange={setDescHandler}
        />
      </form>

      <div className="flex gap-10 flex-col z-10">
        <p id="contactFormPara" className="px-10">
          {`Have a question, feedback, or a project in mind? I'd love to hear from
        you. Your input is invaluable. Just drop your message in the form, and
        I'll get back to you as soon as possible`}
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
              <font id="Arrow" className="inline-block">
                →
              </font>
            )}
          </button>
        </GsapMegnetic>
      </div>
    </div>
  );
};

export default Form;
