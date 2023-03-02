import styled from '@emotion/styled';

export const LabelFilter = styled.label`
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-shadow: 1px 1px 2px #a9a9a9;
  @media (min-width: 500px) {
    font-size: 20px;
  }
`;
export const InputFilter = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  margin: 5px 0 15px 0;
  box-shadow: 1px 2px 3px #000000;
  border-radius: 3px;
  height: 30px;
  @media (min-width: 660px) {
    width: 53%;
    margin: 20px 0px 20px 20px;
  }
`;
