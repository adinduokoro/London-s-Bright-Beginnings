import React, { useRef, useState } from "react";
import "../form/careerForm.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const CareerForm = () => {
  const form = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneType, setPhoneType] = useState();
  const [altPhone, setAltPhone] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [currentAvailability, setCurrentAvailability] = useState("");
  const [currentlyWorking, setCurrentlyWorking] = useState("");
  const [tenure, setTenure] = useState("");
  const [occupation, setOccupation] = useState("");
  const [education, setEducation] = useState("");
  const [message, setMessage] = useState("");

  const initialState = () => {};

  async function sendResume(e) {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      );
      initialState();
      toast.success("Message Sent");
    } catch (error) {
      initialState();
      toast.error(error);
    }
  }

  return (
    <div className="section">
      <div className="careerForm">
        <div className="careerForm__content">
          <form className="body-text" onSubmit={sendResume}>
            <div className="columnOne">
              <label>
                First Name: *
                <input
                  type="text"
                  name="firstName"
                  maxLength={100}
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label>
                Last Name: *
                <input
                  type="text"
                  name="lastName"
                  maxLength={100}
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <label>
                E-mail: *
                <input
                  type="email"
                  name="email"
                  maxLength={100}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Phone:
                <input
                  type="phone"
                  name="phoneNumber"
                  maxLength={100}
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </label>
              <label>
                Phone Type:
                <select
                  name="phoneType"
                  value={phoneType}
                  required
                  onChange={(e) => setPhoneType(e.target.value)}
                >
                  <option disabled value selected></option>
                  <option value="Home">Home</option>
                  <option value="Office">Office</option>
                  <option value="Mobile">Mobile</option>
                </select>
              </label>
              <label>
                Alt. Phone:
                <input
                  type="phone"
                  name="altPhone"
                  maxLength={100}
                  required
                  value={altPhone}
                  onChange={(e) => setAltPhone(e.target.value)}
                />
              </label>
              <label>
                Address Line 1:
                <input
                  type="text"
                  name="addressOne"
                  maxLength={100}
                  required
                  value={addressOne}
                  onChange={(e) => setAddressOne(e.target.value)}
                />
              </label>
              <label>
                Address Line 2:
                <input
                  type="text"
                  name="addressTwo"
                  maxLength={100}
                  required
                  value={addressTwo}
                  onChange={(e) => setAddressTwo(e.target.value)}
                />
              </label>
              <label>
                City:
                <input
                  type="text"
                  name="city"
                  maxLength={100}
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>
              <label>
                State:
                <input
                  type="text"
                  name="state"
                  maxLength={100}
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </label>
              <label>
                Zip:
                <input
                  type="text"
                  name="zipcode"
                  maxLength={100}
                  required
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                />
              </label>
            </div>

            <div className="columnTwo">
              <label>
                Current Availability:
                <div className="radioOption">
                  <div className="radioButton">
                    <input
                      type="radio"
                      id="fullTimeOption"
                      name="currentAvailability"
                      value={currentAvailability}
                      onChange={(e) => setCurrentAvailability("Full Time")}
                    />
                    <label for="fullTimeOption">Full Time</label>
                  </div>
                  <div className="radioButton">
                    <input
                      type="radio"
                      id="schoolYearOnlyOption"
                      name="currentAvailability"
                      value={currentAvailability}
                      onChange={(e) =>
                        setCurrentAvailability("School Year Only")
                      }
                    />
                    <label for="schoolYearOnlyOption">School Year Only</label>
                  </div>
                  <div className="radioButton">
                    <input
                      type="radio"
                      id="substituteOption"
                      name="currentAvailability"
                      value={currentAvailability}
                      onChange={(e) => setCurrentAvailability("Substitute")}
                    />
                    <label for="substituteOption">Substitute</label>
                  </div>
                  <div className="radioButton">
                    <input
                      type="radio"
                      id="partTimeOption"
                      name="currentAvailability"
                      value={currentAvailability}
                      onChange={(e) => setCurrentAvailability("Part Time")}
                    />
                    <label for="partTimeOption">Part Time</label>
                  </div>
                  <div className="radioButton">
                    <div className="radioOption">
                      <input
                        type="radio"
                        id="summerOnlyOption"
                        name="currentAvailability"
                        value={currentAvailability}
                        onChange={(e) => setCurrentAvailability("Summer Only")}
                      />
                      <label for="summerOnlyOption">Summer Only</label>
                    </div>
                  </div>
                </div>
              </label>
              <label>
                Are you currently working in child care?
                <div className="radioButton setOne">
                  <div className="radioOption">
                    <input
                      type="radio"
                      id="noOption"
                      name="currentlyWorking"
                      value={currentlyWorking}
                      onChange={(e) => setCurrentlyWorking("NO")}
                    />
                    <label for="noOption">No</label>
                  </div>
                  <div className="radioOption">
                    <input
                      type="radio"
                      id="yesOption"
                      name="currentlyWorking"
                      value={currentlyWorking}
                      onChange={(e) => setCurrentlyWorking("YES")}
                    />
                    <label for="yesOption">Yes</label>
                  </div>
                </div>
              </label>
              <label>
                If so, for how long?
                <input
                  type="text"
                  name="tenure"
                  maxLength={21}
                  required
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                />
              </label>
              <label>
                Current Occupation:
                <input
                  type="text"
                  name="occupation"
                  maxLength={21}
                  required
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </label>
              <label>
                Highest Level of Education:
                <input
                  type="text"
                  name="education"
                  maxLength={21}
                  required
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                />
              </label>
              <label>
                Tell Us More About Yourself(Examples: Any other certificates or
                qualifications? Industry related skills?)
                <textarea
                  placeholder="Say something"
                  name="message"
                  rows={7}
                  maxLength={500}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
              <label>
              Please attach your resume / cover letter file in .pdf,.doc,.docx format
                <input
                  type="text"
                  name="tenure"
                  maxLength={21}
                  required
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                />
              </label>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;

{
  /* <div className="column2">
    

    
    {/* File Upload */
}
{
  /* Button */
}
{
  /* </div> */
}
