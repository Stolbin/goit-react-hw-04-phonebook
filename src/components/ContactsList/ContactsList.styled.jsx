import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 10px;
`;
export const ListItem = styled.li`
  padding: 10px;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: #fff;
  box-shadow: 3px 3px 5px #696969;
  @media (min-width: 660px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
export const BoxContactsList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 660px) {
    justify-content: flex-end;
    gap: 15px;
  }
`;
export const Name = styled.p`
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 600;
  @media (min-width: 500px) {
    font-size: 20px;
  }
`;
export const Number = styled.a`
  font-family: 'Poppins', sans-serif;
  color: black;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  text-shadow: 1px 1px 2px #a5988c;
  @media (min-width: 500px) {
    font-size: 20px;
  }
`;
export const BtnDelete = styled.button`
  padding: 5px;
  width: 80px;
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  text-align: center;
  border: none;
  border-radius: 3px;
  background: #daa520;
  box-shadow: 3px 3px 5px #696969;
  transition: scale 650ms ease, background 650ms ease, color 650ms ease,
    box-shadow 650ms ease;
  @media (min-width: 500px) {
    width: 100px;
    height: 30px;
    font-size: 16px;
  }
  &:hover {
    scale: 1.02;
    background: #daa82c;
    box-shadow: 3px 3px 5px #6d6b6b;
    transition: scale 650ms ease, background 650ms ease, color 650ms ease,
      box-shadow 650ms ease;
  }
`;
