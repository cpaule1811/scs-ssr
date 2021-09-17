import Link from "next/link";
import Image from "next/image";

export default function Card({ title, list, link, img }) {
  return (
    <div className="card-container">
      <Image src={img} width={300} height={225} alt="" />
      <h2>{title}</h2>
      <ul>
        {list.map((point, i) => {
          return <li key={i}>{point}</li>;
        })}
      </ul>
      <div className="cta-container button-style center">
        <Link href={link}>Learn More</Link>
      </div>
    </div>
  );
}
