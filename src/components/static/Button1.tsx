import React from 'react'
import styled from 'styled-components'

interface IProps{
  title:string;
  bg:string;
  cc: string;
}

const Button1:React.FC<IProps> = 
({title,bg,cc}) => {
  return (<div>
    <Button bg={bg} cc={cc}> {title}  </Button>
  </div>
  );
}

export default Button1;

const  Button = styled.button<{bg: string, cc: string}>`
padding: 20px 30px;
border: 1px solid gray;
border-radius: 12px;
font-size: 16px;
font-weight: bold;
color: ${({cc})=>cc};
background-color: ${({bg})=>bg};
margin-right: 20px;
/* background-color: white; */


:hover{
  scale: 0.97;
  cursor: pointer;
  transition: all 350ms;
  background-color: #063971;
  border: 1px solid white;
  color: #fff
}
@media screen and(max-width:500px) {
  width:280px;
  display: flex;
  align-items: center;
}
@media screen and (max-width:768px) {
  width:200px;
  display: flex;
  align-items:center;
  justify-content: center;

}
`