import styles from "./page.module.css";
import Image from "next/image";
import sliced from '../public/sliced.png';
import food from '../public/food.png';
import fan from '../public/fan.png';
import smiley from '../public/smiley.png';
import gps from '../public/gps.png';

const Reasons = [
  {
    icon: food,
    header: "All Kinds of Foods",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    id: 1,
  },
  {
    icon: fan,
    header: "All Kinds of Foods",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    id: 2,
  },
  {
    icon: smiley,
    header: "All Kinds of Foods",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    id: 3,
  },
  {
    icon: gps,
    header: "All Kinds of Foods",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: sliced,
    id: 4,
  },
];

function StrengthDiv(props){
    const{icon, text, header,img} = props;
    return (
      <div className={`${styles.reason}`}>
        <div>
          <div className={`${styles.icons}`}>
            <Image src={icon} />
          </div>
          <h5>{header}</h5>
        </div>
        <div>{text}</div>
      </div>
    );
}

function Strength(){
    return (
      <div className={`${styles.reasons}`}>
        {Reasons.map((items) => {
          return (
            <div key={items.id}>
              <StrengthDiv {...items} />
            </div>
          );
        })}
      </div>
    );
}

export default Strength;