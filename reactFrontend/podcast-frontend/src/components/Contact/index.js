import React, { useState, useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Contact = () => {
  const location = [-17.784, 31.053];
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  const nameTxtBox = useRef();
  const emailAddressTxtBox = useRef();
  const subjectTxtBox = useRef();
  const messageTxtBox = useRef();

  const handleSend = () => {
    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "panashemhondeh@gmail.com",
      Password: "4C6F004B4FB3675A0BBA9BEB5BEC6597884C",
      To: "21chozynyadigg@gmail.com",
      From: "panashemhondeh@gmail.com",
      Subject: subjectTxtBox.current.value,
      Body: `Name: ${nameTxtBox.current.value} \nE-mail-Addrress: ${emailAddressTxtBox.current.value} \n\n${messageTxtBox.current.value}`,
    }).then((message) => alert("Message sent successfully"));
    //   .then();
    // nameTxtBox.current.value = "";
    // emailAddressTxtBox.current.value = "";
    // messageTxtBox.current.value = "";
    // subjectTxtBox.current.value = "";
  };
  return (
    <>
      <div className="contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              idx={15}
              strArray={"Contact us".split("")}
              letterClass={letterClass}
            />
          </h1>
          <p className="contact-text">
            Whether its for featuring in our Podcasts, advertising opportunities
            or you have a hot story you want to talk about, we can always chat
            about it over a cup of coffee! 
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    ref={nameTxtBox}
                  ></input>
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    ref={emailAddressTxtBox}
                  ></input>
                </li>
                <li className="half">
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    ref={subjectTxtBox}
                  />
                </li>
                <li className="half">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    ref={messageTxtBox}
                  ></textarea>
                </li>
                <li className="btn">
                  <input
                    type="submit"
                    className="flat-button"
                    value="SEND"
                    onSubmit={handleSend}
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="map-wrap">
          <div className="info-map">
            Panashe Mhonde,
            <br />
            Zimbabwe,
            <br />
            6th Str, 320
            <br />
            Sisk, Masvingo <br />
            <span>panashemhondeh@gmail.com</span>
          </div>
          <div id="map">
            <MapContainer
              center={location}
              zoom={13}
              style={{ height: "500px" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={location}>
                <Popup>
                  This is our campus <br /> Meet us here for a cup of coffee!
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
