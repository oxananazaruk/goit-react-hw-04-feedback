import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  max-width: 500px;
  padding: 16px 32px;
  margin: 0 auto;
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  min-width: 100px;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.background};
  border: none;
  border-radius: ${p => p.theme.radii.lg};
  padding: 16px 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
`;
