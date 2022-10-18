import styled, { css } from 'styled-components';

export const Container = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    padding: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
  `}
`;
