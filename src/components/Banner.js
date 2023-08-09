import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg'
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import { isVisible } from '@testing-library/user-event/dist/utils';


const Banner = () => {
  const [loopNum , setLoopNum]=useState(0) ;
  const [isDeleting , setIsDeleting]=useState(false)
  const toRotate=["Web Development" , "Graphic Designs" , "Mobile Apps"]
  const [text,  setText]=useState('');
  const period=2000;
  const [delta , setDelta]=useState(900 - Math.random() * 100)

  useEffect(() => {
    let ticker=setInterval(() => {
      tick()
    }, delta);
    return ()=> {clearInterval(ticker)}
  }, [text]);

  const tick=()=>{
    let i =loopNum % toRotate.length;
    let fullText=toRotate[i]
    let updatedText=isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0 , text.length + 1)
    setText(updatedText);
    if(isDeleting){
      setDelta(prevDelta => prevDelta / 2)
    }
    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true)
      setDelta(period)
    }else if(isDeleting && updatedText === ''){
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
    }
    setDelta(500)
  }
  return (
    <section className='banner' id="home">
      <Container>
        <Row className='align-items-center '>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({isVisible})=>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className='tagline'>Welcome To Our Marketing Agency</span>
                  <h1>{`We Are Specialized In  `} <span className='wrap'>{text}</span></h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsum placeat repudiandae harum quasi assumenda veniam labore pariatur laboriosam minima! Quod enim fugit pariatur illum ut similique ratione doloremque fuga.

                  </p>
                  <button onClick={()=> console.log("connect")}>Let's Connect <ArrowRightCircle size={25}/></button>
              </div>
              }
            </TrackVisibility>        
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Banner;
