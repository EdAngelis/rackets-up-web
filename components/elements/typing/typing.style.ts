import styled from "styled-components";
import theme from "../../assets/theme/theme";

export const TypingContainer = styled.div`

    .char{
        display: flex;
        flex-wrap: wrap;
        height: 10px
    }

    .char p{
        min-width: 0px;
        margin: 0;
        padding: 0;
        background-color: ${(props) => theme[props.theme].primary};


    }
`;