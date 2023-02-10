import './Home.scss';

import logo from '../../assets/redberry-logo.png';
import mark from '../../assets/logo-mark.png';
import Button from '../../components/button/Button';

const Home = () => {
  return (
    <div className='Home'>
      <div className="container">
        <div className="Home-wrapper flex-col">
          <div className="Home-header">
            <div className="logo">
              <img src={logo} alt="redberry logo" />
            </div>
          </div>
          <div style={{position: 'relative'}}>
            <a href="/about">
              <Button btntype='btn-black' text='რეზიუმეს დამატება' />
            </a>
            <img className='mark' src={mark} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home