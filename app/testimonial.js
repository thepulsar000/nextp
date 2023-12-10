import styles from "./page.module.css";
import Image from "next/image";
import client1 from '../public/client-2.jpg';
import client2 from "../public/client-3.jpg";
import client3 from "../public/client-4.jpg";
import client4 from "../public/client-2.jpg";

const Feedback = [
  {
    img: client1,
    names: "Takar Bowa",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit atque debitis repudiandae. This is a dummy text.",
    id: 1,
  },
  {
    img: client2,
    names: "Takar Bowa",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit atque debitis repudiandae.This is a dummy text.",
    id: 2,
  },
  {
    img: client3,
    names: "Takar Bowa",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit atque debitis repudiandae. This is a dummy text.",
    id: 3,
  },
  {
    img: client4,
    names: "Takar Bowa",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit atque debitis repudiandae. This is a dummy text.",
    id: 4,
  },
];

function TestimonialDiv(props){
    const { img, names, desc } = props;
    return (
      <div className={`${styles.testimony}`}>
        <div className={`${styles.client}`}>
          <Image src={img} />
        </div>
        <div>
          <h4> {names}</h4>
        </div>
        <div>
          <p> {desc}</p>
        </div>
      </div>
    );
}

function Testimonials(){
    return(
        <div className={`${styles.testimonies}`}>
            {Feedback.map((items)=>{
                return (
                  <div key={items.id}>
                    <TestimonialDiv {...items}/>
                  </div>
                );
            })}
        </div>
    )
}

export default Testimonials;
