
import { Container, Content, Header } from 'native-base';
import React  from 'react'
import {DrawerItems} from 'react-navigation';

  export default class Bar extends React.Component {
    
    render(){

        return(
          <Container style={{}}>
         <Header style={{height: 250,backgroundColor: '#2B3B4B'}}>
        
         </Header>
         <Content>
         <DrawerItems {...this.props} />
                  </Content>
         </Container>

        )
        
    }

  }
