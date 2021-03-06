import React from 'react';
import styled from "styled-components";
import Content from "./Content";


export default class ContentContainer extends React.Component {

    render() {

        return(
            <Container>
                <Content/>
            </Container>
        )
    }

}

const Container = styled.div`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 25px 2%;

  /*@media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 900px) and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr ;
  }*/
  
  grid-column-gap: 5px;
  grid-row-gap: 20px;
  grid-auto-rows: 380px;
  justify-items: center;
  
  grid-column-start: 2;
  grid-row-start: 2;
`;



