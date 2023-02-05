import vectorLeft from '../../assets/vector-left.png'

import './Header.scss';

const Header: React.FC<{
  title: string;
  position: string;
}> = ({title, position}) => {
  return (
    <div className="Header flex-row">
      <a href="/" className='flex-col'>
        <img src={vectorLeft} />  
      </a>
      <h3>{title}</h3>
      <span>{position}</span>
    </div>
  )
}

export default Header