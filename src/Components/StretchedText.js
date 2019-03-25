import styled from "styled-components";
import React from "react";

const StyledDiv = styled.div`
  width: 100%;
  
  svg {
  fill: ${props => props.color};
  }
 
`

const StretchedText = ({color, children,className, ...props}) => {
    return <StyledDiv className={"text-monospace " . className} {...props} color={color}>
        <svg viewBox="0 0 70 16">
            <text x="35" y="15">
                <tspan textAnchor="middle">{children}</tspan>
            </text>
        </svg>
    </StyledDiv>
}
export default StretchedText