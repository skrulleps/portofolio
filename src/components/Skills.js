import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaJava  } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiMsqlServer, DiNetbeans, DiVisualstudio   } from "react-icons/di";
import { FaFlutter } from "react-icons/fa6";
import { SiFirebase } from "react-icons/si";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>
                          My Skills as a programmer include <strong>Mobile Development,</strong> 
                          <strong> Web Development,</strong> dan
                          <strong> Desktop Development</strong>.
                        </p>

                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Web Development Skill Meter" />
                                <h5>Web Development</h5>
                                <FaHtml5 size={30} color="orange"/>
                                <FaCss3Alt size={30} color="blue"/>
                                <IoLogoJavascript size={30} color="yellow"/>
                                <SiPhp  size={40} color="purple"/><br></br>
                                <FaLaravel size={30} color="red"/>
                                <FaReact size={30} color="#87CEEB"/><br></br>
                                <FaNodeJs size={30} color="green"/>
                                <br></br>
                                <SiMysql size={40} color="red"/>
                                <DiMsqlServer size={40} color="white"/>

                            </div>
                            <div className="item">
                                <img src={meter2} alt="Mobile Development Skill Meter" />
                                <h5>Mobile Development</h5>
                                <FaFlutter size={35} color="#87CEEB"/>
                                <SiFirebase size={35} color="red"/>

                            </div>
                            <div className="item">
                                <img src={meter3} alt="Desktop Development Skill Meter" />
                                <h5>Desktop Development</h5>
                                <FaJava size={35} color="red"/>
                                <DiNetbeans size={35} color="skyblue"/>
                                <DiVisualstudio size={35} color="purple"/>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background design" />
    </section>
  )
}
