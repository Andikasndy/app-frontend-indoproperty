import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";
import Blog1 from "../assets/blog1.jpg";
import Blog2 from "../assets/blog2.jpg";
import Blog3 from "../assets/blog3.jpg";
import Blog4 from "../assets/blog4.jpg";


import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa6";


export const PROPERTIES = [
    {
      title: "Tranquil Terrace Tranquility Haven",
      description: "Adorned with two helipads for convenient aerial access,",
      price: 3240,
      address: "Street 1",
      city: "Chicago",
      country: "US",
      image: Img1,
      userEmail: "userOne@gmail.com",
      facilities: {
        bedrooms: 2,
        bathrooms: 2,
        parkings: 1
      }
    },
    {
      title: "Oceanview Oasis Serenity Escape",
      description: " Every detail of this villa exudes opulence and grandeur.",
      price: 4240,
      address: "Street 2",
      city: "Multan",
      country: "Pakistan",
      image: Img2,
      userEmail: "userOne@gmail.com",
      facilities: {
        bedrooms: 2,
        bathrooms: 2,
        parkings: 1
      }
    },
    {
      title: "Sunrise Sanctuary Solace Retreat",
      description: "This villa is a stunning masterpiece of luxury and art. ",
      price: 3240,
      address: "Street 3",
      city: "California",
      country: "US",
      image: Img3,
      userEmail: "userOne@gmail.com",
      facilities: {
        bedrooms: 4,
        bathrooms: 3,
        parkings: 2
      }
    },
    {
      title: "Urban Elegance Sophistication Haven",
      description: " Every detail of this villa exudes opulence and grandeur, making it a truly exceptional and unique residence ",
      price: 6240,
      address: "Street 4",
      city: "Karachi",
      country: "Pakistan",
      image: Img4,
      userEmail: "userOne@gmail.com",
      facilities: {
        bedrooms: 3,
        bathrooms: 2,
        parkings: 1
      }
    },
    {
      title: "Rustic Retreat Charm Cottage",
      description: " bold artworks that add a touch of sophistication and elegance to the entire property.",
      price: 7050,
      address: "Street 5",
      city: "San Diego",
      country: "US",
      image: Img5,
      userEmail: "userOne@gmail.com",
      facilities: {
        bedrooms: 2,
        bathrooms: 1,
        parkings: 1
      }
    },
  ]

export const BLOGS =[
  {
    title: "Mountain View Majestic Manor",
    description: "This villa is a stunning masterpiece of luxury and art. Adorned with two helipads for convenient aerial access, the expansive interiors provide ample space for relaxation and entertainment. The villa offers panoramic sea views that can be enjoyed from multiple vantage points, while the walls are graced with astonishing, bold artworks that add a touch of sophistication and elegance to the entire property. Every detail of this villa exudes opulence and grandeur, making it a truly exceptional and unique residence",
    price: 2500,
    address: "Street 7",
    category: "Lahore",
    country: "Pakistan",
    image: Blog1
  },
  {
    title: "Seaside Serenity Coastal",
    description: "This villa is a stunning masterpiece of luxury and art. Adorned with two helipads for convenient aerial access, the expansive interiors provide ample space for relaxation and entertainment. The villa offers panoramic sea views that can be enjoyed from multiple vantage points, while the walls are graced with astonishing, bold artworks that add a touch of sophistication and elegance to the entire property. Every detail of this villa exudes opulence and grandeur, making it a truly exceptional and unique residence",
    price: 2950,
    address: "Street 8",
    category: "Lahore",
    country: "Pakistan",
    image: Blog2
  },
  {
    title: "Riverside Retreat Tranquil ",
    description: "This villa is a stunning masterpiece of luxury and art. Adorned with two helipads for convenient aerial access, the expansive interiors provide ample space for relaxation and entertainment. The villa offers panoramic sea views that can be enjoyed from multiple vantage points, while the walls are graced with astonishing, bold artworks that add a touch of sophistication and elegance to the entire property. Every detail of this villa exudes opulence and grandeur, making it a truly exceptional and unique residence",
    price: 3250,
    address: "Street 9",
    category: "Chicago",
    country: "US",
    image: Blog3
  },
  {
    title: "Luxury Villa Paradise",
    description: "This villa is a stunning masterpiece of luxury and art. Adorned with two helipads for convenient aerial access, the expansive interiors provide ample space for relaxation and entertainment. The villa offers panoramic sea views that can be enjoyed from multiple vantage points, while the walls are graced with astonishing, bold artworks that add a touch of sophistication and elegance to the entire property. Every detail of this villa exudes opulence and grandeur, making it a truly exceptional and unique residence",
    price: 2500,
    address: "Street 10",
    category: "San Diego",
    country: "US",
    image: Blog4
  },
]
export const FOOTER_LINKS =[
  {
    title : "Pelajari Lagi",
    links : [
      "Tentang Kami",
      "Item terbaru",
      "Penawaran menarik",
      "Deskripsi populer",
      "FAQ",
      "Kebijakan pribadi",
    ],
  },
  {
    title : "Komunitas Kami",
    links : [
      "Syarat dan Kondisi",
      "Tawaran Special",
      "Customer Service",
    ]

  }
]

export const FOOTER_CONTACT_INFO ={
    title : "Kontak Kami",
    links : [
      {label : "Contact", value : "123-456-678"},
      {label : "Email", value : "propertyindo@gmail.com"}
    ]
  }

export const socialmedia = {
  title : "Social Media Kami",
  links : [
    {id : "facebook", icon : <FaFacebook/>},
    {id : "instagram", icon : <FaInstagram/>},
    {id : "twitter", icon : <FaTwitter/>},
    {id : "linkedin", icon : <FaLinkedin/>},
    {id : "youtube", icon : <FaYoutube/>},
  ]
}
