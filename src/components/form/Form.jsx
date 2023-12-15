import React, { useRef, useState } from "react";
import "./form.css";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

const Form = () => {
  const form = useRef();
  const [pName, setPName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cName, setCName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [interest, setInterest] = useState("");

  const [startDate, setStartDate] = useState("");
  const [message, setMessage] = useState("");

  const initialState = () => {
    setPName("");
    setPhone("");
    setEmail("");
    setCName("");
    setBirthDate("");
    setInterest("");
    setStartDate("");
    setMessage("");
  };

  async function sendEmail(e) {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      );
      initialState();
      toast.success("Message Sent")
      console.log(form.current);
    } catch (error) {
      initialState();
      console.log("not working");
      toast.error(error)
    }
  }

  return (
    <div className="section">
      <div className="form">
        <div className="form__content">
          <h2 className="head-text">Inquiries</h2>
          <form className="body-text" ref={form} onSubmit={sendEmail}>
            <>
              <label>
                Parent's Name
                <input
                  type="text"
                  name="pName"
                  maxLength={21}
                  required
                  value={pName}
                  onChange={(e) => setPName(e.target.value)}
                />
              </label>
              <label>
                Parent's Phone
                <input
                  type="number"
                  name="phone"
                  maxLength={21}
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <label>
                Parent's Email
                <input
                  type="email"
                  name="email"
                  maxLength={21}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Child's Name
                <input
                  type="text"
                  name="cName"
                  maxLength={21}
                  value={cName}
                  onChange={(e) => setCName(e.target.value)}
                />
              </label>
              <label>
                Child's Birthdate
                <input
                  type="date"
                  name="birthDate"
                  required
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </label>
              <label>
                Interested In
                <select
                  name="interest"
                  value={interest}
                  required
                  onChange={(e) => setInterest(e.target.value)}
                >
                  <option disabled value=""></option>
                  <option value="Option 1">Infant</option>
                  <option value="Option 2">Toddler</option>
                  <option value="Option 3">Preschool</option>
                  <option value="Option 3">School Age</option>
                </select>
              </label>
              <label>
                Anticipated Start Date
                <input
                  type="text"
                  name="startDate"
                  maxLength={21}
                  required
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </label>
              <label>
                Comments
                <textarea
                  placeholder="Say something"
                  name="message"
                  rows={8}
                  cols={40}
                  maxLength={200}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
