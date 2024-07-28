import styled from "styled-components";

export const Spacer = styled.div<{$height?: number | string; $width?: number | string}>`
    height: ${props => typeof props.$height === 'string' ? parseInt(props.$height) : props.$height}px;
    width: ${props => typeof props.$width === 'string' ? parseInt(props.$width) : props.$width}px;
`