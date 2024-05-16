import * as Styles from './Button.styles';
import type { CSSProp } from 'styled-components';

export interface ButtonProps {
  children: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  css?: CSSProp;
}

function Button({ size, onClick, css, children }: ButtonProps) {
  return (
    <Styles.Button size={size} onClick={onClick} css={css}>
      {children}
    </Styles.Button>
  );
}

export default Button;
