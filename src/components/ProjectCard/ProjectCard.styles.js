import styled from "styled-components"

export const Card = styled.div`
  width: 70%;
  padding: 10px;
  background-color: #fafbfc;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  text-align: center;
  @media screen and (max-width: 992px) {
    width: 90%;
  }
`
export const ChipContent = styled.p`
  padding: 4px 8px;
  border-radius: 12px;
  background-color: #4640b3;
  color: #f0efff;
  display: inline-block;
  text-align: center;
  font-size: 12px;
`
export const ChipContainer = styled.div`
  width: 90%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 992px) {
    width: 90%;
    gap: 1.5px;
  }
`
export const CardTitle = styled.h2`
  width: 50%;
  margin: 20px auto;
  text-align: center;

  @media screen and (max-width: 992px) {
    width: 100%;
    font-size: 25px;
  }
`
export const Image = styled.div`
  width: 300px;
  height: 300px;
  background-color: aqua;
  margin: auto;
`
