import React,  { useState }  from 'react'
import * as PropTypes from 'prop-types';
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


 const Filters = (props) => {
        // const [dropdownOpen, setDropdownOpen] = useState(false);
      
        // const toggle = () => setDropdownOpen(prevState => !prevState);

    return ( 
        <Row>
            <Col xs="3">
                {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}> */}
                <Dropdown isOpen={false}  size="sm">
                <DropdownToggle caret outline color="primary">
                    год
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                    
                </DropdownMenu>
                </Dropdown>
            </Col>
            <Col xs="3">
                <Dropdown isOpen={false}  size="sm">
                <DropdownToggle caret outline color="primary" >
                    жанр
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>комедия</DropdownItem>
                    <DropdownItem>триллер</DropdownItem>
                    <DropdownItem>детектив</DropdownItem>
                </DropdownMenu>
                </Dropdown>
                </Col>
            <Col xs="3">
            <Dropdown isOpen={true}  size="sm">
                <DropdownToggle caret color="primary">
                    страна
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem>Россия</DropdownItem>
                    <DropdownItem>США</DropdownItem>
                    <DropdownItem>Италия</DropdownItem>
                </DropdownMenu>
                </Dropdown>
            </Col>
        </Row>
    );
}

export default Filters;


