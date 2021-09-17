import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile({ profile, name, role, linkedIn, paragraphs }) {
  return (
    <div className="content">
      <h1 className="page-title">
        {name}, <span id="position"> {role}</span>
      </h1>
      {profile && (
        <div className="profile">
          <Image src={profile} alt="" />
        </div>
      )}
      {paragraphs.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
      <div className="profile-socials center">
        <Link href={linkedIn} passHref>
          <div className="link-button button-style profile-button">
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </div>
        </Link>
      </div>
    </div>
  );
}
