import * as S from './Icon.styles';

interface IconProps {
  link: string;
  img: string;
}

function Icon({ link, img }: IconProps) {
  return (
    <S.IconLink href={link} target="_blank">
      <S.Icon src={img} alt="instagram icon"></S.Icon>
    </S.IconLink>
  );
}

export default Icon;
