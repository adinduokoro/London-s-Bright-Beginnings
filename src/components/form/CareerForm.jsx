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
  const [phoneType, setPhoneType] = useState("");
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

  const initialState = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setPhoneType("");
    setAltPhone("");
    setAddressOne("");
    setAddressTwo("");
    setCity("");
    setState("");
    setZipcode("");
    setCurrentAvailability("");
    setCurrentlyWorking("");
    setTenure("");
    setOccupation("");
    setEducation("");
    setMessage("");
  };

  async function sendResume(e) {
    e.preventDefault();

    try {
      await emailjs.sendForm(
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
          <form className="body-text" encType="multipart/form-data" method="POST" ref={form} onSubmit={sendResume}>
            <div className="columnOne">
              <label>
                First Name: *
                <input
                  type="text"
                  name="firstName"
                  maxLength={50}
                  // required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label>
                Last Name: *
                <input
                  type="text"
                  name="lastName"
                  maxLength={50}
                  // required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <label>
                E-mail: *
                <input
                  type="email"
                  name="email"
                  maxLength={50}
                  // required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Phone:
                <input
                  type="phone"
                  name="phoneNumber"
                  maxLength={20}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </label>
              <label>
                Phone Type:
                <select
                  name="phoneType"
                  value={phoneType}
                  onChange={(e) => setPhoneType(e.target.value)}
                  style={{ maxWidth: "31.5rem" }}
                >
                  <option disabled value="" selected></option>
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
                  maxLength={20}
                  value={altPhone}
                  onChange={(e) => setAltPhone(e.target.value)}
                />
              </label>
              <label>
                Address Line 1:
                <input
                  type="text"
                  name="addressOne"
                  maxLength={20}
                  value={addressOne}
                  onChange={(e) => setAddressOne(e.target.value)}
                />
              </label>
              <label>
                Address Line 2:
                <input
                  type="text"
                  name="addressTwo"
                  maxLength={20}
                  value={addressTwo}
                  onChange={(e) => setAddressTwo(e.target.value)}
                />
              </label>
              <label>
                City:
                <input
                  type="text"
                  name="city"
                  maxLength={20}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>
              <label>
                State:
                <input
                  type="text"
                  name="state"
                  maxLength={20}
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </label>
              <label>
                Zip:
                <input
                  type="text"
                  name="zipcode"
                  maxLength={20}
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
                      name="currentAvailability"
                      value="Full Time"
                      checked={currentAvailability === "Full Time"}
                      onChange={(e) => setCurrentAvailability(e.target.value)}
                    />
                    <label for="fullTimeOption">Full Time</label>
                  </div>
                  <div className="radioButton">
                    <input
                      type="radio"
                      name="currentAvailability"
                      value="School Year Only"
                      checked={currentAvailability === "School Year Only"}
                      onChange={(e) => setCurrentAvailability(e.target.value)}
                    />
                    <label for="schoolYearOnlyOption">School Year Only</label>
                  </div>
                  <div className="radioButton">
                    <input
                      type="radio"
                      name="currentAvailability"
                      value="Substitute"
                      checked={currentAvailability === "Substitute"}
                      onChange={(e) => setCurrentAvailability(e.target.value)}
                    />
                    <label for="substituteOption">Substitute</label>
                  </div>
                  <div className="radioButton">
                    <input
                      type="radio"
                      name="currentAvailability"
                      value="Part Time"
                      checked={currentAvailability === "Part Time"}
                      onChange={(e) => setCurrentAvailability(e.target.value)}
                    />
                    <label for="partTimeOption">Part Time</label>
                  </div>
                  <div className="radioButton">
                    <input
                      type="radio"
                      name="currentAvailability"
                      value="Summer Only"
                      checked={currentAvailability === "Summer Only"}
                      onChange={(e) => setCurrentAvailability(e.target.value)}
                    />
                    <label for="summerOnlyOption">Summer Only</label>
                  </div>
                </div>
              </label>
              <label>
                Are you currently working in child care?
                <div className="radioOption setOne">
                  <div className="radioButton">
                    <input
                      type="radio"
                      name="currentlyWorking"
                      value="NO"
                      checked={currentlyWorking === "NO"}
                      onChange={(e) => setCurrentlyWorking(e.target.value)}
                    />
                    <label for="noOption">No</label>
                  </div>
                  <div className="radioButton">
                    <input
                      type="radio"
                      name="currentlyWorking"
                      value="YES"
                      checked={currentlyWorking === "YES"}
                      onChange={(e) => setCurrentlyWorking(e.target.value)}
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
                  maxLength={20}
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                />
              </label>
              <label>
                Current Occupation:
                <input
                  type="text"
                  name="occupation"
                  maxLength={20}
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </label>
              <label>
                Highest Level of Education:
                <input
                  type="text"
                  name="education"
                  maxLength={20}
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                />
              </label>
              <label>
                Tell Us More About Yourself(Examples: Any other certificates or
                qualifications? Industry related skills?)
                <textarea
                  name="reply"
                  rows={6}
                  maxLength={500}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
              <label>
                Please attach your resume / cover letter file in .pdf,.doc,.docx
                format
                <input
                  type="file"
                  name="my_file"
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
