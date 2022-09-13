import React, { Component } from 'react'
import axios from 'axios';

export default class AxiosServices extends Component {

    async post(url, parameter) {
        return await axios.post(url, parameter);
    }
}