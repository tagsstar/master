import React, { Component } from "react";
import { ImageBackground, View, StatusBar,Dimensions } from "react-native";
import { Container, Button, H3, Text,Header,
  Title,
  Content,
  Icon,
  Left,
  Right,
  Body,Form,Item,Label,Input, Picker } from "native-base";

import styles from "./styles";
// const Item = Picker.Item;

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");
const { width, height } = Dimensions.get("window");

class Homet extends Component {
	
	
	
constructor(props) {
	super(props)
	this.state = { 
      dropdownlist: {'1':'tapan','2':'rawal','3':'rawal1'}, 
      defaultDate : '1',
	  date:new Date(),
      progressVisible:false,
      visible: false,
	  video_play_url:'',
	  clientLocation:'',
	  contactPerson:'',
	  designation:'',
	  mobile:'',
	  email:'',
      progressVisible:false,
      visible: false,
	  transparent: false,
	  visible2:false,
	}
	this.handleChange = this.handleChange.bind(this);
  }
 
	handleChange(event) {
		console.log(event)
    this.setState({clientLocation: event.target.clientLocation});
  }
	
	
  render() {
    return (
      <Container>
		<Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Enquiry</Title>
          </Body>
          <Right>
            <Button
              hasText
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
	   
		<Content>
          <Form>
			<Picker 
              mode="dropdown" iosHeader="Select client"
              style={{ width: width}}
            >
			{ 
				Object.keys(this.state.dropdownlist).map((key, index) => {
					const myItem = this.state.dropdownlist[key]
					return <Picker.Item color="#666666" label={myItem} value={key} />
				})
			}
			</Picker>
			
			<Picker 
              mode="dropdown" iosHeader="Select client"
              style={{ width: width}}
            >
			{ 
				Object.keys(this.state.dropdownlist).map((key, index) => {
					const myItem = this.state.dropdownlist[key]
					return <Picker.Item color="#666666" label={myItem} value={key} />
				})
			}
			</Picker>
			
			<Picker 
              mode="dropdown" iosHeader="Select client"
              style={{ width: width}}
            >
			{ 
				Object.keys(this.state.dropdownlist).map((key, index) => {
					const myItem = this.state.dropdownlist[key]
					return <Picker.Item color="#666666" label={myItem} value={key} />
				})
			}
			</Picker>
		  
            <Item floatingLabel>
              <Label>Client Location</Label>
              <Input value={this.state.clientLocation}  onChange={this.handleChange} />
            </Item>
            <Item floatingLabel last>
              <Label>Contact person</Label>
              <Input value={this.state.contactPerson} onChange={(contactPerson) => this.setState({contactPerson: contactPerson})} />
            </Item>
			<Item floatingLabel last>
              <Label>Designation</Label>
              <Input value={this.state.designation} onChange={(designation) => this.setState({designation: designation})} />
            </Item>
			<Item floatingLabel last>
              <Label>Mobile</Label>
              <Input keyboardType="numeric" value={this.state.mobile} onChange={(mobile) => this.setState({mobile: mobile})}/>
            </Item>
			<Item floatingLabel last>
              <Label>Email</Label>
              <Input value={this.state.email} onChange={(email) => this.setState({email: email})}/>
            </Item>
          </Form>
          <Button block style={{ marginTop: width/5.6 }} onPress={this.CheckTextInputIsEmptyOrNot.bind(this)}>
            <Text>Next</Text>
          </Button>
        </Content>
	   
          
          
		
      </Container>
    );
  }
  
  CheckTextInputIsEmptyOrNot = () =>{
		const { clientLocation }  = this.state ;
		const { contactPerson }  = this.state ;
		const { designation }  = this.state ;
		const {mobile}  = this.state.mobile;
		const { email }  = this.state ;
		
	}
	
  
}

export default Homet;
