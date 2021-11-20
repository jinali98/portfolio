import styled from "styled-components"

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  & .imageOutterClass {
    border-radius: 50%;
    border: 10px solid whitesmoke;
    outline: none;
  }
`

export const Title = styled.h1`
  font-size: 45px;
  letter-spacing: 2px;
  font-weight: 700;
  color: #5f3dc4;
  text-align: center;

  @media screen and (max-width: 992px) {
    font-size: 35px;
    letter-spacing: 1px;
    margin: 1rem 0;
  }
`

export const Introduction = styled.p`
  @media screen and (max-width: 992px) {
    width: 80%;
    margin: 1rem auto;
    text-align: center;
  }
`

export const Avatar = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 10px solid whitesmoke;
  outline: none;
`
