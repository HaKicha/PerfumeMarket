import React from 'react';
import styled from 'styled-components';
import gql from "graphql-tag";
import {Query} from "react-apollo";
import Header from "../public/Header";
import Footer from "../public/Footer";
import ReactMarkdown from 'react-markdown';
import RecomendedBlock from "./RecomendedBlock";
import {UrlStore} from "../../stores/UrlStore";

export default class BlogPage extends React.Component {

render() {
    return(
        <React.Fragment>
            <Header/>
            <Query query={
                gql`query ($id: ID!){
                          blog(id: $id){
                            id
                            title
                            publishing
                            newsBody
                            link
                            short_desc
                            header_photo {
                                  url
                                }
                            }
                        }`
            }
                   variables={{"id":this.props.match.params.id}}>
                {({loading, error, data}) => {
                    if (loading) return <p></p>;
                    if (error) {
                        return <p>Error :(</p>;
                    }
                    return(
                        <Content>
                            <h1>{data.blog.title}</h1>
                            <p>{data.blog.short_desc}</p>
                            <img src={UrlStore.MAIN_URL + data.blog.header_photo.url}/>
                            <ReactMarkdown source={data.blog.newsBody}/>
                            <span>Ссылка на товар: <a href={data.blog.link}>{data.blog.link}</a></span>
                        </Content>
                    );
                }}
            </Query>
            <RecomendedBlock CurrentId={this.props.match.params.id}/>
            <Footer/>
        </React.Fragment>
    )
    }
}

const Content = styled.div`
    max-width: 900px;
    width: 100%;
    margin: 20px auto;
    padding: 10px;
    *{
        display: block;
    }
    
    a {
        display: inline-block;
    }
    
    img {
        max-width: 100%;
        object-fit: contain;
        margin: auto;
        margin-bottom: 20px;
    }
    
    p {
        font-size: 12pt;
        text-align: justify;
        letter-spacing: 0px;
        line-height: 140%;
    }
    
    em{
        margin-bottom: 10px;
    }
    
    h1,h2,h3,h4,h5,h6 {
        text-align: center;
    }
    
    li {
        display: list-item; 
        line-height: 140%;
    }
`;