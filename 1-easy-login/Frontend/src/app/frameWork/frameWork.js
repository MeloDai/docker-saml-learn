import React, {Component} from "react";

import {deepOrange500} from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";


const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    },
    raisedButton: {
        primaryColor: '#09aeef'
    },
    radioButton:{
        borderColor:'#09aeef',
        checkedColor:'#09aeef'
    },
    checkbox:{
        boxColor:'#09aeef',
        checkedColor:'#09aeef'
    },
    textField:{
        focusColor:"#09aeef"
    },
    fontFamily: 'clear sans regular'
});


export default class FrameWork extends Component{
    render() {
        return (
            <MuiThemeProvider muiTheme={this.props.dark ? getMuiTheme(darkBaseTheme) : muiTheme}>
                {this.props.content}
            </MuiThemeProvider>
        );
    }
};