import React, { useRef } from "react";
import "./form.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "",
        "",
        form.current,
        " "
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
                <input type="number" name="Phone" />
              </label>
              <label>
                Parent's Email
                <input type="email" name="Email" />
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
                <select>
                  <option  disabled hidden>
                    {" "}
                    Please Choose...
                  </option>
                  <option value="Ford">Ford</option>
                  <option value="Volvo">Volvo</option>
                  <option value="Fiat">Fiat</option>
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
                  name="comment"
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
