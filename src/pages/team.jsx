import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

import React, { useEffect, useState } from "react";
import axios from "axios";

const TeamData = [
  {
    image: "/img/faces/1.jpg",
    name: "Anna Oldman",
    role: "Art Director",
    social: [
      {
        link: "https://behance.net/",
        icon: "fab fa-behance",
        title: "Behance",
      },
      {
        link: "https://dribbble.com/",
        icon: "fab fa-dribbble",
        title: "Dribbble",
      },
      {
        link: "https://twitter.com/",
        icon: "fab fa-twitter",
        title: "Twitter",
      },
      {
        link: "https://github.com/",
        icon: "fab fa-github",
        title: "Github",
      },
    ],
  },
  {
    image: "/img/faces/3.jpg",
    name: "Oscar Freeman",
    role: "Frontend Dev",
    social: [
      {
        link: "https://behance.net/",
        icon: "fab fa-behance",
        title: "Behance",
      },
      {
        link: "https://dribbble.com/",
        icon: "fab fa-dribbble",
        title: "Dribbble",
      },
      {
        link: "https://twitter.com/",
        icon: "fab fa-twitter",
        title: "Twitter",
      },
      {
        link: "https://github.com/",
        icon: "fab fa-github",
        title: "Github",
      },
    ],
  },
  {
    image: "/img/faces/2.jpg",
    name: "Emma Newman",
    role: "Founder",
    social: [
      {
        link: "https://behance.net/",
        icon: "fab fa-behance",
        title: "Behance",
      },
      {
        link: "https://dribbble.com/",
        icon: "fab fa-dribbble",
        title: "Dribbble",
      },
      {
        link: "https://twitter.com/",
        icon: "fab fa-twitter",
        title: "Twitter",
      },
      {
        link: "https://github.com/",
        icon: "fab fa-github",
        title: "Github",
      },
    ],
  },
  {
    image: "/img/faces/4.jpg",
    name: "Lisa Trueman",
    role: "UI/UX Designer",
    social: [
      {
        link: "https://behance.net/",
        icon: "fab fa-behance",
        title: "Behance",
      },
      {
        link: "https://dribbble.com/",
        icon: "fab fa-dribbble",
        title: "Dribbble",
      },
      {
        link: "https://twitter.com/",
        icon: "fab fa-twitter",
        title: "Twitter",
      },
      {
        link: "https://github.com/",
        icon: "fab fa-github",
        title: "Github",
      },
    ],
  },
  {
    image: "/img/faces/5.jpg",
    name: "Tom Oldman",
    role: "Art Director",
    social: [
      {
        link: "https://behance.net/",
        icon: "fab fa-behance",
        title: "Behance",
      },
      {
        link: "https://dribbble.com/",
        icon: "fab fa-dribbble",
        title: "Dribbble",
      },
      {
        link: "https://twitter.com/",
        icon: "fab fa-twitter",
        title: "Twitter",
      },
      {
        link: "https://github.com/",
        icon: "fab fa-github",
        title: "Github",
      },
    ],
  },
  {
    image: "/img/faces/6.jpg",
    name: "Corey Trueman",
    role: "Technical Director",
    social: [
      {
        link: "https://behance.net/",
        icon: "fab fa-behance",
        title: "Behance",
      },
      {
        link: "https://dribbble.com/",
        icon: "fab fa-dribbble",
        title: "Dribbble",
      },
      {
        link: "https://twitter.com/",
        icon: "fab fa-twitter",
        title: "Twitter",
      },
      {
        link: "https://github.com/",
        icon: "fab fa-github",
        title: "Github",
      },
    ],
  },
  {
    image: "/img/faces/7.jpg",
    name: "Justin Newman",
    role: "Copywriter",
    social: [
      {
        link: "https://behance.net/",
        icon: "fab fa-behance",
        title: "Behance",
      },
      {
        link: "https://dribbble.com/",
        icon: "fab fa-dribbble",
        title: "Dribbble",
      },
      {
        link: "https://twitter.com/",
        icon: "fab fa-twitter",
        title: "Twitter",
      },
      {
        link: "https://github.com/",
        icon: "fab fa-github",
        title: "Github",
      },
    ],
  },
  {
    image: "/img/faces/8.jpg",
    name: "Spunkie",
    role: "Paw giver",
    social: [
      {
        link: "https://behance.net/",
        icon: "fab fa-behance",
        title: "Behance",
      },
      {
        link: "https://dribbble.com/",
        icon: "fab fa-dribbble",
        title: "Dribbble",
      },
      {
        link: "https://twitter.com/",
        icon: "fab fa-twitter",
        title: "Twitter",
      },
      {
        link: "https://github.com/",
        icon: "fab fa-github",
        title: "Github",
      },
    ],
  },
];

const Team = () => {
  const [teamData, setTeamData] = useState({ teamMember: [] });

  const shuffleArray = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(
          "https://navgurukul.github.io/tarabai-shinde/data/meraki_team.json"
        );
        const team = response.data;
        const teamMember = [];
  
        Object.values(team).forEach((item) => {
          if (
            item.SamyarthTeam !== null &&
            item.Association !== null &&
            item.Photo !== null &&
            item.Name !== null &&
            item.Designation !== null
          ) {
            teamMember.push(item);
          }
        });
  
        const shuffledTeamMember = shuffleArray(teamMember);
  
        setTeamData({ teamMember: shuffledTeamMember });
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };
  
    fetchTeamData();
  }, []);


  return (
    <Layouts>
      <PageBanner
        pageTitle={
          'Meet <span className="mil-thin">Our</span><br> Creative <span className="mil-thin">Team</span>'
        }
        breadTitle={"Team"}
        anchorLabel={"Our team"}
        // anchorLink={"#team"}
      />

      {/* team */}
      <section id="team">
        <div className="container mil-p-120-90">
          <div className="row">
            {teamData.teamMember.map((item, key) => (
              <div
                className="col-sm-6 col-md-4 col-lg-3"
                key={`team-item-${key}`}
              >
                <div className="mil-team-card mil-up mil-mb-30">
                  <img src={item.Photo} alt={item.Name} />
                  <div className="mil-description">
                    <div className="mil-secrc-text">
                      <h5 className="mil-muted mil-mb-5">{item.Name}</h5>
                      <p className="mil-link mil-light-soft mil-mb-10">
                        {item.Designation}
                      </p>
                      {/* <ul className="mil-social-icons mil-center">
                  {item.social.map((social_item, social_key) => (
                    <li key={`team-item-${key}-${social_key}`}>
                      <a
                        href={social_item.link}
                        target="_blank"
                        className="social-icon"
                      >
                        <i className={social_item.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* team end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default Team;
