import React from 'react';
import styled from 'styled-components';
import ReactSelect from 'react-select'
import {theme} from "../../stores/StyleStore";
import {getCitiesByName, getPostOffices} from "../../api/NovaPoshta";

const reactSelectStyles = {
        container: styles => ({...styles, height: '38px', display: 'block'}),
        control: (styles, state) => (
            {...styles,
                border: state.isFocused?`2px solid ${theme.primary} !important`:'1px solid black',
                height: state.isFocused?'36px':'38px',
                borderRadius: '10px',
                boxShadow: 'none',
                cursor: 'text',
                '&:hover':{
                    border: `1px solid black`,
                }
            }),
        dropdownIndicator: styles => ({...styles, color: 'black',cursor: 'pointer', '&:hover':{color: 'black'}}),
        indicatorSeparator: styles => ({...styles, backgroundColor: 'black', '&:hover':{backgroundColor: 'black'}}),
        input: styles => ({...styles, fontSize: '14pt', color: 'black', cursor: 'text'}),
        singleValue: styles  => ({...styles, color: 'black',fontSize: '12pt'}),
        clearIndicator: styles  => ({...styles, cursor: 'pointer'})
};



export default class Address extends React.Component {

    setCities = (name => {
        if (name.length >= 3)
            getCitiesByName(name).then(data => {return data.map(elem => {
                return {
                    value: elem.DeliveryCity,
                    label: elem.Present
                }
            })}).then(options => this.setState({
                cities: options
            }));
    }).bind(this);
    setPostOffice = (option => {
        if (option !== null)
        getPostOffices(option.value).then(data => {return data.map(elem => {
            return {
                value: elem.SiteKey,
                label: elem.Description
            }
        })}).then(options => this.setState({
            postOffices: options,
            postOffice: {label:'', value:''}
        }))
        else this.setState({
            postOffices: [],
            postOffice: {label:'', value:''}
        })
    }).bind(this);
    setCurrentPostOffice = (e => {
        this.setState({
            postOffice: e
        })
    }).bind(this);

    constructor(props){
        super(props);
        this.state = {
            cities: [],
            postOffices: [],
            postOffice: {label:'', value:''}
        }
    }

render() {
    return(
        <Form>
            <div>
                <Label>
                    <span>Имя</span>
                    <Input type={'text'}/>
                </Label>
                <Label>
                    <span>Фамилия</span>
                    <Input type={'text'}/>
                </Label>
                <Label>
                    <span>Телефон</span>
                    <Input type={'text'}/>
                </Label>
            </div>
            <div>
                <Label>
                    <span>Город</span>
                    <ReactSelect
                        noOptionsMessage={() => 'Загрузка'}
                        placeholder={''}
                        styles={reactSelectStyles}
                        onInputChange={e => {this.setCities(e)}}
                        onChange={this.setPostOffice}
                        options={this.state.cities}
                        isClearable={true}
                    />
                </Label>
                <Label>
                    <span>Отделение</span>
                    <ReactSelect
                        noOptionsMessage={() => 'Загрузка'}
                        placeholder={''}
                        styles={reactSelectStyles}
                        options={this.state.postOffices}
                        isClearable={true}
                        value={this.state.postOffice}
                        onChange={this.setCurrentPostOffice}
                    />
                </Label>
                <Button>Сохранить</Button>
            </div>
        </Form>
    )
    }
}

const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: auto;
    padding: 0 40px;
    grid-gap: 20px;
`;

const Input = styled.input`
    display: block;
    width: 90%;
    background: #fff;
    height: 34px; 
    border: ${props => props.theme.bgCol} 1px solid;
    border-radius: 10px;
    padding-left: 10px;
    font-size: 14pt;
    color: #000;
    &:focus{
      border: ${props => props.theme.primary_light} 2px solid;
      height: 32px;
    }
`;

const Label = styled.label`
    margin-top: 10px;
    display: block;
    span{
      display: block;
      margin-bottom: 5px;
    }  
`;

const Button = styled.button`
    width: 200px;
    background: ${props => props.theme.primary};
    color: white;
    font-size: 1em;
    height: 38px;
    border-radius: 10px;
    border: none;
    margin-top: 34px;
    margin-left: calc(50% - 100px);
    cursor: pointer; 
    &:hover{
      background: ${props => props.theme.primary_light};
    }
`;
