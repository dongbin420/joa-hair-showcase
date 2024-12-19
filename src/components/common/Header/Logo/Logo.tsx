import { Link } from 'react-router-dom';
import * as S from './Logo.styles';

function Logo() {
  return (
    <Link to="/">
      <S.LogoWrapper>
        <S.LogoTop>JOA</S.LogoTop>
        <S.LogoBottom>HAIR</S.LogoBottom>
      </S.LogoWrapper>
    </Link>
  );
}

export default Logo;
