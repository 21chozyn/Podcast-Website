import React, { useEffect, useState } from "react";
import "./index.scss";
import Member from "./Member";
import Loading from "../Loading";
import AnimatedLetters from "../AnimatedLetters";
// import defaultImg from "../../images/avatar3.png";
import Tip from "../Tip";

const Index = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    useEffect(() => {
        setTimeout(() => {
          setLetterClass("text-animate-hover");
        }, 3000);
      }, []);
  const initialMembers = [
    {
      name: "Chozyn",
      aboutText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
      picture: "/static/images/avatar1.jpg",
      pictureThumb: "http://127.0.0.1:8000/media/default.png",
    },
  ];
  const [teamMembers, setTeamMembers] = useState(initialMembers);
  const [, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://54.89.27.89:8000/api/team`)
      .then((response) => response.json())
      .then((usefulData) => {
        setLoading(false);
        setTeamMembers(usefulData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);

  return (
    <div className="team-container">
      <h1>
        <AnimatedLetters
          idx={15}
          strArray={"Our Team".split("")}
          letterClass={letterClass}
        />
      </h1>
      {teamMembers.map((member, index) => (
        <Member
          key={index}
          name={member.name}
          job={member.aboutText}
          picture={member.pictureThumb}
        />
      ))}
      
      <Loading />
      <Tip tip="Hover on or click the avatar for more infomation" />
    </div>
  );
};

export default Index;
