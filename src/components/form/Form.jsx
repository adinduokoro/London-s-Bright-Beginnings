import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="section">
      <div className="form">
        <div className="form__content">
          <h2 className="head-text">Inquiries</h2>
          <form className="body-text">
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
                <option value="" disabled selected hidden>
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
                rows={4}
                cols={40}
              />
            </label>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
