import About from '../about/About';
import '../navbar/Nav.css';
const { Component } = require("react");



class Nav extends Component{
  render(){
    const dishes = [
      {
          image2:"../../img/image1.avif",
          dishName:"Bikanervala",
          ratings:4.2,
          dishlocation:"North Indian, South Indian",
          price:100,
          estimatedTime:"33 mins"
      },
      {
          image2:"../../img/image12.avif",
          dishName:"Madurai Mess",
          ratings:4.0,
          dishlocation:"South Indian, Biryani, Seafood",
          price:150,
          estimatedTime:"26 mins"
      },
      
      {
          image2:"../../img/image3.avif",
          dishName:"Dosa",
          ratings:4.0,
          dishlocation:"South Indian",
          price:80,
          estimatedTime:"13 mins"
      },
      {
          image2:"../../img/image4.jpg",
          dishName:"Anjappar",
          ratings:3.8,
          dishlocation:"South Indian, Beverages",
          price:200,
          estimatedTime:"38 mins"
      },
      {
          image2:"../../img/image5.avif",
          dishName:"The BVK Biryani - Bai Veetu Ka...",
          ratings:3.9,
          dishlocation:"Biryani, South Indian...",
          price:200,
          estimatedTime:"23 mins"
      },
      {
          image2:"../../img/image9.avif",
          dishName:"Dindigul Thalappakatti",
          ratings:4.0,
          dishlocation:"Biryani, South Indian, North",
          price:200,
          estimatedTime:"32 mins"
      },
      
      {
          image2:"../../img/image7.avif",
          dishName:"Hotel Ramalinga Vilas",
          ratings:4.1,
          dishlocation:"North Indian, South Indian...",
          price:200,
          estimatedTime:"23 mins"
      },
      {
          image2:"../../img/image8.avif",
          dishName:"KFC",
          ratings:3.8,
          dishlocation:"Burger, Fast Food",
          price:200,
          estimatedTime:"23 mins"
      },
      {
          image2:"../../img/image6.avif",
          dishName:"Night Out Corner",
          ratings:4.1,
          dishlocation:"North Indian, South Indian",
          price:200,
          estimatedTime:"33 mins"
      },
      {
          image2:"../../img/image10.avif",
          dishName:"Babal Da Punjabi Dabha",
          ratings:3.8,
          dishlocation:"North Indian, Mughlai, Biryan...",
          price:200,
          estimatedTime:"34 mins"
      },
      {
          image2:"../../img/image11.avif",
          dishName:"The Thickshake Factory",
          ratings:4.1,
          dishlocation:"Shake, Beverages, Desserts",
          price:200,
          estimatedTime:"35 mins"
      }, 
      {
          image2:"../../img/image2.avif",
          dishName:"Masala Dosa",
          ratings:4.5,
          dishlocation:"South Indian",
          price:150,
          estimatedTime:"23 mins"
      }
    ]
    console.log(dishes)
    return(
      <div>
        <h1 className='head-name'>Array of objects</h1>

        <About tdata={dishes}/>
      </div>
    )
}
}


export default Nav;