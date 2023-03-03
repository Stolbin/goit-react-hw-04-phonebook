import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 8px;
  @media (min-width: 660px) {
    gap: 15px;
  } ;
`;
export const Label = styled.label`
  display: flex;
  font-size: 16px;
  font-weight: 600;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  font-family: 'Poppins', sans-serif;
  text-shadow: 1px 1px 2px #a9a9a9;
  @media (min-width: 660px) {
    font-size: 20px;
  }
`;
export const InputName = styled.input`
  width: 65%;
  height: 24px;
  border: none;
  border-radius: 3px;
  box-shadow: 1px 2px 3px #000000;
  @media (min-width: 660px) {
    width: 75%;
    height: 30px;
    margin-top: 10px;
    margin-left: 50px;
  }
`;
export const Input = styled.input`
  width: 65%;
  height: 24px;
  border: none;
  margin-top: 5px;
  border-radius: 3px;
  box-shadow: 1px 2px 3px #000000;
  @media (min-width: 660px) {
    width: 75%;
    height: 30px;
    margin-top: 10px;
    margin-left: 30px;
  }
`;
export const Button = styled.button`
  padding: 5px;
  margin-top: 10px;
  width: 100px;
  height: 28px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #fff;
  text-align: center;
  border: none;
  border-radius: 3px;
  background: #daa520;
  box-shadow: 3px 3px 5px #696969;
  transition: scale 650ms ease, background 650ms ease, color 650ms ease,
    box-shadow 650ms ease;
  @media (min-width: 500px) {
    padding: 5px;
    width: 120px;
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
