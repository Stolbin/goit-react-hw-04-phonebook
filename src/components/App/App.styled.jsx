import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background: #fffaf0;
  border-radius: 10px;
  border: 2px solid #556b2f;
  box-shadow: 15px 10px 50px 0px rgba(86, 86, 86, 0.5);
  @media (min-width: 500px) {
    width: 480px;
    padding: 20px;
    margin-top: 50px;
  }
  @media (min-width: 660px) {
    width: 600px;
    padding: 30px;
  }
`;

export const BoxPhonebook = styled.div`
  padding: 10px;
  border-radius: 5px;
  background: #dcdcdc;
  margin-bottom: 12px;
  border: 1px solid black;
  box-shadow: 1px 2px 3px #000000;
  @media (min-width: 500px) {
    padding: 15px;
    margin-bottom: 20px;
  }
  @media (min-width: 660px) {
    margin-bottom: 30px;
  }
`;

export const BoxContacts = styled.div`
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  background: #dcdcdc;
  box-shadow: 1px 2px 3px #000000;
  @media (min-width: 500px) {
    padding: 15px;
  }
`;
