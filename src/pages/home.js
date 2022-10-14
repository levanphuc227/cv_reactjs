
import '../../src/assets/css/reset.css';
import '../../src/assets/css/common.css';
import '../../src/assets/css/index.css';
import Infor from '../../src/components/Infor.js';
import InformationAdditional from '../../src/components/InformationAdditional.js'
import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div id="main">
                <Infor />
                <InformationAdditional />
            </div>
        );
    }
}

