import { createElement } from "react";
import styled from "@emotion/styled";

export type spinnerProps = {
    color: string;
    size: string;
};

const MendixSpinner = (props: spinnerProps): JSX.Element => {
    console.log("spinner props", props);
    const Spinner = styled.div`
        width: ${props.size};
        height: ${props.size};
        margin: auto;
        &:after {
            content: " ";
            display: block;
            width: ${props.size};
            height: ${props.size};
            margin: 8px;
            border-radius: 50%;
            border: 6px solid ${props.color};
            border-color: ${props.color} transparent ${props.color} transparent;
            animation: lds-dual-ring 1.2s linear infinite;
        }
        @keyframes lds-dual-ring {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    `;
    return <Spinner />;
};

export default MendixSpinner;
