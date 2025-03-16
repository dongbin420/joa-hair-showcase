import * as S from './Header.styles';
import Button from '@/components/common/Button/Button';
import ImgWrapper from '@/components/common/ImgWrapper/ImgWrapper';
import Overlay from '@/components/Overlay/Overlay';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import Icon from './Icon/Icon';
import { useOverlayToggle } from '@/hooks/useOverlayToggle';
import { getFilteredRoutes } from '@/utils/navigationUtils';
import { INSTAGRAM_URL, FACEBOOK_URL, RESERVATION_URL } from '@/constants/url';
import { ROUTES, INDEX_FOR_MENU } from '@/constants/routes';
import instagram from '@/assets/imgs/png/instagram.png';
import facebook from '@/assets/imgs/png/facebook.png';
import hamburgerIcon from '@/assets/imgs/svg/hamburger.svg';

function Header() {
  const { isOverlayOpen, toggleOverlay } = useOverlayToggle();

  return (
    <>
      <S.HeaderContainer>
        <S.HeaderFirst>
          <Logo />
          <Navigation routes={getFilteredRoutes(ROUTES, INDEX_FOR_MENU)} />
        </S.HeaderFirst>
        <S.HeaderSecond>
          <Icon link={INSTAGRAM_URL} img={instagram} />
          <Icon link={FACEBOOK_URL} img={facebook} />
          <S.ButtonLink href={RESERVATION_URL} target="_blank">
            <Button size={'large'} customCss={S.ButtonCustomCss}>
              BOOK NOW
            </Button>
          </S.ButtonLink>
        </S.HeaderSecond>
        <ImgWrapper
          onClick={toggleOverlay}
          img={hamburgerIcon}
          width={'45px'}
          customCss={S.HamburgerCustomCss}
          description={'hamburger icon'}
        />
      </S.HeaderContainer>
      {isOverlayOpen ? <Overlay toggleOverlay={toggleOverlay} /> : null}
    </>
  );
}

export default Header;
