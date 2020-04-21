import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
class Slider extends Component {
  render() {
    return (
      <>
       <Carousel>
  <Carousel.Item>
  <video style ={{width:"1300px",height:"400px"}} controls>
       <source src="https://youtu.be/r0DYJzN00B4" type="video/mp4"></source>
   </video>
   
  </Carousel.Item>
  <Carousel.Item>
  <video style ={{width:"1300px",height:"400px"}} controls>
       <source src="https://youtu.be/r0DYJzN00B4" type="video/mp4"></source>
   </video>

    
  </Carousel.Item>
  <Carousel.Item>
   <video style ={{width:"1300px",height:"400px"}} controls>
       <source src="https://youtu.be/r0DYJzN00B4" type="video/mp4"></source>
   </video>

    
  </Carousel.Item>
  <Carousel.Item>
   <video style ={{width:"1300px",height:"400px"}} controls>
       <source src="https://youtu.be/r0DYJzN00B4" type="video/mp4"></source>
   </video>

    
  </Carousel.Item>
  <Carousel.Item>
   <video style ={{width:"1300px",height:"400px"}} controls>
       <source src="https://youtu.be/r0DYJzN00B4" type="video/mp4"></source>
   </video>

    
  </Carousel.Item>
</Carousel>
      </>
    );
  }
}

export default Slider;
