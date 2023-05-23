import React from "react";
import styled from "styled-components";
import Button1 from "../../static/Button1";
import logo1 from "../../../assets/apple-icon (1).svg"
import logo2 from "../../../assets/google-icon.svg"
import image1 from "../../../assets/headerImg.png"
import image2 from "../../../assets/rect.png"
import image3 from "../../../assets/card1.png"
import image4 from "../../../assets/card2.png"



const Home = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Right>
                        <BigText>
                            The Better Way to Save & Invest.
                        </BigText>
                        <SmallText>
                            PiggyVest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.
                        </SmallText>
                        <Button1 title="Create Free Account" cc="white" bg="rgb(12,24,37)" />
                        <DownloadHolder>
                            <Item>
              <SmallLogo src={logo1} width={23}/>
              <Smtext>Get on iphone</Smtext>
                            </Item>
                            <Item>
              <SmallLogo src = {logo2} width = {23}/>
              <Smtext>Get on Android</Smtext>
                            </Item>
                            
                        </DownloadHolder>
                    </Right>
                    <Left>
                        <BgImage src={image1}  />
                        <MainImage src= {image2} />
                        <CardImage1 src= {image3}/>
                        <CardImage2 src= {image4}/>
                    </Left>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Home;
const BgImage = styled.img`
position: relative;
z-index: 1;
top: 0;
`
const MainImage = styled.img`
position: absolute;

top: -40px;
right: 70px;
`
const CardImage1 = styled.img`
height: 130px;
position: absolute ;
left: -1px;
top: 100px;
z-index: 5

`
const CardImage2 = styled.img`
height: 130px;
position: absolute;
top: 350px;
right: -1px;
z-index: 5;
`

const SmallLogo = styled.img``
const Smtext = styled.div`
display:flex;
justify-content: center;
align-items: center;
`
const DownloadHolder = styled.div`
display: flex;
margin: 30px 0;
height: 80px;
display: flex;
align-items: flex-end;

`
const Item =   styled.div`
height: 55px;
width: 180px;
border-radius: 10px;
border: 1px solid gray;
display: flex;
margin-right: 20px;
justify-content: space-evenly;
transition: all 500ms;
:hover{
    margin-bottom: 10px;
    cursor: pointer;

}


`
const BigText = styled.div`
font-size: 80px;
font-weight: 700;
line-height: 1.2;
`
const SmallText = styled.div`
width: 70%;
margin: 20px 0px;
`
const Container = styled.div`
height: 100vh;
width:100%;
display: flex;
justify-content: center;
/* align-items: center; */

`
const Left = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 45%;
`
const Wrapper = styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
width: 85% ;
`
const Right = styled.div`
    width: 50%;
    padding: 20px;
    
    color: rgb(12,24,37)
    /* background-color: red; */

    h3{
 margin: 0;
    }
    @media screen and (max-width: 770px) {
        width: 90%;
    }
`;

