import "./contactCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faLaptop } from "@fortawesome/free-solid-svg-icons";

const ContactCard = () => {
  return (
    <section className="ContactCard-wrp">
      <div className="ContactCard">
        <h2 className="ContactCard-info ContactCard-info--name">Jenn Rabin</h2>
        <h3 className="ContactCard-info ContactCard-info--subheader">
          Artist ~ Frontend Dev ~ UX Enthusiast
        </h3>
        <p className="ContactCard-info ContactCard-info--phone">
          <span className="ContactCard-iconWrap">
            <FontAwesomeIcon icon={faMobile} />
          </span>
          (215)208-5672
        </p>
        <p className="ContactCard-info ContactCard-info--email">
          <span className="ContactCard-iconWrap">
            <FontAwesomeIcon icon={faLaptop} />
          </span>
          me@jennrabincom
        </p>
      </div>
    </section>
  );
};

export default ContactCard;
