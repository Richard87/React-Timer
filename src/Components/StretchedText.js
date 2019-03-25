import styled from "styled-components";
import React from "react";

const StyledDiv = styled.div`
  width: 100%;
  font-family: 'Fira Mono', SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  
  svg {
  fill: ${props => props.color};
  }
 
`

const StretchedText = ({color, children, ...props}) => {
    return <StyledDiv {...props} color={color}>
        <svg viewBox="0 0 90 16">
            <text x="45" y="15">
                <tspan textAnchor="middle">{children}</tspan>
            </text>
        </svg>
    </StyledDiv>
}
export default StretchedText