import React from 'react'
import * as PropTypes from 'prop-types';
import { InputGroup, Button, InputGroupAddon, Input  } from 'reactstrap';


function Searching() {

    return ( <div>
        <InputGroup>
          <Input />
          <InputGroupAddon addonType="append">
             <Button color="secondary" >найти</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
}

export default Searching;


