import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label,InputGroup, InputGroupAddon, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import styles from "./Header.module.css";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <Navbar dark expand="xl" className={styles.navbar}>
                    <Container className={`${styles.navbar_container}`}>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className={`mr-20 ${styles.navbar_brand}`}><img src='../img/S-icon.png' height="40" width="40" alt='Animesaver' /> AnimeSaver</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem className={`${styles.nav_item}`}>
                                    <NavLink className={`nav-link ${styles.nav_link} ${styles.oswald}`} to='/home'><span className={`fa fa-desktop fa-lg ${styles.nav_link}`}></span> Главная</NavLink>
                                </NavItem>
                                <NavItem className={`${styles.nav_item}`}>
                                    <NavLink className={`nav-link ${styles.nav_link} ${styles.oswald}`} to='/aboutus'><span className={`fa fa-folder-open fa-lg ${styles.nav_link}`}></span> Каталог</NavLink>
                                </NavItem>
                                <NavItem className={`${styles.nav_item}`}>
                                    <NavLink className={`nav-link ${styles.nav_link} ${styles.oswald}`}  to='/menu'><span className={`fa fa-circle-o-notch fa-lg fa-spin ${styles.nav_link}`}></span> Случайное</NavLink>
                                </NavItem>
                                <NavItem className={`${styles.nav_item}`}>
                                    <NavLink className={`nav-link ${styles.nav_link} ${styles.oswald}`} to='/contactus'><span className={`fa fa-book fa-lg ${styles.nav_link}`}></span> Журнал</NavLink>
                                </NavItem>
                            </Nav>
                            <InputGroup className="col-xl-4 ml-auto mr-auto">
                                <InputGroupAddon addonType="prepend">
                                    <Button color="primary"><span className="fa fa-search"></span></Button>
                                </InputGroupAddon>
                                <Input placeholder="Поиск аниме" />
                            </InputGroup>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline color="success" onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Войти</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                
            </div>
        );
    }
}

export default Header;