import styled from "styled-components";
import React from "react";

const StyledDiv = styled.div`
  width: 100%;
  
  svg {
  fill: ${props => props.color};
  }
 
`

const StretchedText = ({color, children}) => {
    return <StyledDiv color={color}>
        <svg viewBox="0 0 85 18">
            <text x="0" y="15">
                {children}
            </text>
        </svg>
    </StyledDiv>
}
export default StretchedText