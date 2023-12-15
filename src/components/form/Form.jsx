import React, { useRef } from "react";
import "./form.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  async function sendEmail(e) {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      );
      console.log(result);
    } catch (error) {
      console.log("not working");
    }
  };

  return (
    <div className="section">
      <div className="form">
        <div className="form__content">
          <h2 className="head-text">Inquiries</h2>
          <form className="body-text" ref={form} onSubmit={sendEmail}>
            <>
              <label>
                Parent's Name
                <input type="text" name="pName" />
              </label>
              <label>
                Parent's Phone
                <input type="number" name="phone" />
              </label>
              <label>
                Parent's Email
                <input type="email" name="email" />
              </label>

              <label>
                Child's Name
                <input type="text" name="cName" />
              </label>
              <label>
                Child's Birthdate
                <input type="date" name="birthdate" />
              </label>
              <label>
                Interested In
                <select name="interest" defaultValue="">
                  <option disabled value=""></option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </label>
              <label>
                Anticipated Start Date
                <input type="text" name="startDate" />
              </label>
              <label>
                Comments
                <textarea
                  placeholder="Say something"
                  name="message"
                  rows={8}
                  cols={40}
                />
              </label>
            </>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
