import styled, { css } from 'styled-components';

export const Container = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 600px;
    max-width: 100%;
    padding: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
  `}
`;
