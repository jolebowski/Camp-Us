import React  from 'react'
import { Container, Content, Header, Body, Icon,Footer,Fab, Text,List,ListItem } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Menu from '../components/Menu';

export default class Cours extends React.Component{

    static navigationOptions = ({ navigation }) => ({

        title: "Cours",

        drawerIcon: () => <Ionicons name="md-book" size={24} />

      });

    render(){

        return (
        <Container >
            <Header style={{backgroundColor : '#2B3B4B'}} transparent = {true}>
                <Menu navigation={this.props.navigation}/>
                <Body>
                    <Text style={{color:'#8CC7B1'}}>
                    Mes Cours
                    </Text>
                </Body>
            </Header>
            <Content>

                <List>
                    <ListItem>
                        <Text>React-Native</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Symfony</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Anglais</Text>
                    </ListItem>
                </List>

            </Content>
            <Footer style={{backgroundColor:'#2B3B4B'}}>
                <Fab
                position="bottomRight"
                style={{ backgroundColor: '#8CC7B1' }}
                >
                <Icon name="add" />
                </Fab>
            </Footer>
        </Container>


        )
        
    }

}