import React from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import ProjectCard from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png'
import TrackVisibility from "react-on-screen";



const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
            {({isVisible})=>
              <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates autem consequuntur suscipit beatae. Nemo totam sed sunt
              autem dicta minima, deserunt perferendis quas officia placeat
              fugiat exercitationem mollitia assumenda voluptatum.
            </p>
            </div>  }
            </TrackVisibility>
          
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id='pills-tab' >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first" >
                    <Row>
                      {
                        projects.map((project , index)=>{
                          return (
                            <ProjectCard key={index} {...project}  />
                          )
                        })
                      }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second" >
                    Lorem ipsun
                </Tab.Pane>
                <Tab.Pane eventKey="third" >
                    Lorem ipsun
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} className="background-image-right" alt="" />
    </section>
  );
};

export default Projects;
