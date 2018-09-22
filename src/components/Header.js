import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import { fixedMenuStyle, menuStyle } from "../helpers/styleHelper";
import { Container, Visibility, Menu, Image } from 'semantic-ui-react';

class Header extends Component {
    state = {
        menuFixed: null,
        overlayFixed: false,
    };

    stickTopMenu = () => this.setState({ menuFixed: true });
    unStickTopMenu = () => this.setState({ menuFixed: null });

    render() {
        const { menuFixed } = this.state;

        return (
            <div>
                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu
                        borderless
                        fixed={menuFixed && 'top'}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                    >
                        <Container text>
                            <Menu.Item header as={NavLink} to="/" exact>
                            {/* <Image size='mini' src='https://react.semantic-ui.com/logo.png' /> */}
                            <Image size="mini" src={require('../images/meteicon1.png')} />
                                Mete Çağan
							</Menu.Item>
                            <Menu.Item as={Link} to="/photos" exact="true">                                
                                <Menu.Item>Fotoğraflar</Menu.Item>
                            </Menu.Item>
                            <Menu.Item as={NavLink} to="/login">
                                Giriş Yap
							</Menu.Item>
                        </Container>
                    </Menu>
                </Visibility>
            </div>
        );
    }
}

export default Header;
