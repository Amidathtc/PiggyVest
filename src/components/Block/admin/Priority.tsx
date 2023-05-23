import React from "react-router-dom"
import {FaGreaterThan} from "react-icons/fa"
import  img from "../../../assets/security.png"
import styled from 'styled-components'
const Priority = () =>  {
  return (
    <div>
        <Container>
            <Wrapper>
                <Logo  src = {img}/>
                <Second>
                  <TextHolder>
                  <BigText>Your security is our priority</BigText>
                <SmallText>
                PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud.
                </SmallText>
                  </TextHolder>
          <Learn>
            <a href='/'> Learn More</a>
          <Icon>
            <FaGreaterThan/>
          </Icon>
          </Learn>
                </Second>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Priority
const TextHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const BigText = styled.div`
font-size: 80px;
font-weight: 700;
/* line-height: 1.2; */
`

const SmallText = styled.div`
width: 70%;
margin: 20px 0px;
`
const Icon = styled.div`
margin-top: 6px;
font-size: 10px;
`

const Learn = styled.div`
color: #0d60df;
display: flex;
align-items: center;
margin-top: 30px;
font-weight: bold;
`
const Container = styled.div`
display: flex;
justify-content:center;
align-items: center;
width: 100%;
margin-top: 110px;
margin-bottom: 30px;
`
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
const Second = styled.div``

const Logo = styled.img`
width: 150px;
margin-right: 30px;
cursor: pointer;
`