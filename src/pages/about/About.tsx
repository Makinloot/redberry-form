import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import errorIcon from '../../assets/error-vector.png';
import successIcon from '../../assets/correct-vector.png';

import "./About.scss";

const About = () => {
  return (
    <div className="About">
      <div className="container">
        <div className="About-wrapper">
          <form 
            className="About-primary container-small" 
            onSubmit={(e) => e.preventDefault()}
          >
            <Header title="პირადი ინფო" position="1/3" />
            <div className="About-input-field-wrapper">
              <div className="name-lastname">
                <Input
                  label="სახელი"
                  placeholder="ანზორ"
                  validation="მინიმუმ 2 ასო, ქართული ასოები"
                  id="name"
                  type="text"
                  required={true}
                  pattern="[\u10A0-\u10FF]+"
                  minLength={2}
                  errorIcon={errorIcon}
                  successIcon={successIcon}
                />
                <Input
                  label="გვარი"
                  placeholder="მუმლაძე"
                  validation="მინიმუმ 2 ასო, ქართული ასოები"
                  id="lastname"
                  type="text"
                  required={true}
                  pattern="[\u10A0-\u10FF]+"
                  minLength={2}
                  errorIcon={errorIcon}
                  successIcon={successIcon}
                />
              </div>
            </div>
            <Input 
              label="პირადი ფოტოს ატვირთვა"
              type="file"
              required={true}
              id="file-input"
              errorIcon={errorIcon}
              successIcon={successIcon}
            />
            <Input 
              label="ჩემ შესახებ (არასავალდებულო)"
              placeholder="ზოგადი ინფო შენ შესახებ"
              required={false}
              type='textarea'
              id="about-me-textarea"
            />
            <Input 
              label="ელ.ფოსტა"
              placeholder="anzorr666@redberry.ge შესახებ"
              required={true}
              type='email'
              id="email"
              validation="უნდა მთავრდებოდეს @redberry.ge-ით"
              pattern=".+@redberry.ge$"
              errorIcon={errorIcon}
              successIcon={successIcon}
            />
            <Input 
              label="მობილურის ნომერი"
              placeholder="+995 551 12 34 56"
              required={true}
              type="text"
              id="mobile-number"
              validation="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
              minLength={9}
              pattern="5[0-9]{8}"
              errorIcon={errorIcon}
              successIcon={successIcon}
            />
            <Link to="sadme" className="next-page">
              <Button text="შემდეგი" btntype="btn-purple" />
            </Link>
          </form>
          <div className="About-result"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
