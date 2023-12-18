import React, { useRef, useState } from 'react'
import "../form/careerForm.css"
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify'

const CareerForm = () => {
  const form = useRef()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [phoneType, setPhoneType] = useState()
  const [altPhone, setAltPhone] = useState("")
  const [addressOne, setAddressOne] = useState("")
  const [addressTwo, setAddressTwo] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipcode, setZipcode] = useState("")

  const initialState = () => {

  }

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
      toast.success("Message Sent")
    } catch (error) {
      initialState();
      toast.error(error)
    }
  }

  return (
    <div className='section'>
      <div className='careerForm'>
        <div className='careerForm__content'>
          <form className='body-text' onSubmit={sendResume}>
            <div className='column1'>
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
                  <option disabled value=""></option>
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
            <div className='column2'>
              {/* Current Availability */}
              {/* Are you working child care? */}
              {/* How long */}
              {/* Current Occupation */}
              {/* Highest Level of Education */}
              {/* Tell us about yourself */}
              {/* File Upload */}
              {/* Button */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CareerForm