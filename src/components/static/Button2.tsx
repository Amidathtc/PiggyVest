import React from 'react'
import styled from 'styled-components'

interface IProps{
  title:string;
  height:string;
  width: string;
}

const Button2:React.FC<IProps> = 
({title,height,width}) => {
  return (<div>
    <Button height ={height}
    width={width}>
      {title}
    </Button>
  </div>
  );
}

export default Button2;

const  Button = styled.button<{height: string, width: string}>`
width: ${(props)=> props.width};
height: ${(props)=> props.height};
border: none;
border-radius: 12px;
font-size: 16px;
font-weight: bold;
color: white;
margin-right: 20px;
background-color: black;

:hover{
  scale: 0.97;
  cursor: pointer;
  transition: all 350ms;
  background-color: blue;
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