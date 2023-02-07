import emailIcon from "../../assets/email.png";
import mobileIcon from "../../assets/mobile.png";

interface HeroProps {
  name: string;
  lastName: string;
  email: string;
  mobile: string;
  aboutText: string;
  userImg: any;
}

const Hero: React.FC<HeroProps> = ({
  name,
  lastName,
  email,
  mobile,
  aboutText,
  userImg
}) => {
  return (
    <div className="Resume-hero">
      <div>
        <div
          className={name || lastName ? "Resume-name" : "Resume-name hidden"}
        >
          <h2>
            {name} {lastName}
          </h2>
        </div>
        <div className="Resume-contact flex-col">
          <span className={email ? "flex-row" : "hidden"}>
            <img src={emailIcon} />
            {email}
          </span>
          <span className={mobile ? "flex-row" : "hidden"}>
            <img src={mobileIcon} />
            <span>
              +995
              <span style={{ marginLeft: 6 }}>
                {mobile.split("")[0]}
                {mobile.split("")[1]}
                {mobile.split("")[2]}
              </span>
              <span style={{ marginLeft: 6 }}>
                {mobile.split("")[3]}
                {mobile.split("")[4]}
                {mobile.split("")[5]}
              </span>
              <span style={{ marginLeft: 6 }}>
                {mobile.split("")[6]}
                {mobile.split("")[7]}
                {mobile.split("")[8]}
              </span>
            </span>
          </span>
        </div>
        <div className={aboutText ? "Resume-about" : "Resume-about hidden"}>
          <h3>ჩემ შესახებ</h3>
          <p>{aboutText}</p>
          <img
            className={userImg ? "user-img" : "user-img hidden"}
            src={userImg}
          />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Hero;
