import React, {Component} from 'react';
import OutsideLinkButton from './OutsideLinkButton';

export class TechnologyList extends Component {
    state = {
        visibility: 'visible'
    }

    getStyle= () => {
        return {
            backgroundColor : 'purple',
            color: 'white',
            marginTop: '2.8%',
            width: '10%',
            height: '100vh',
            visibility: this.state.visibility
        }
    }

    toggleVisibility = () => {
        this.setState({
            visibility: this.state.visibility === 'visible' ? 'hidden' : 'visible'
        });
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <OutsideLinkButton text="Visual Studio Code"
                link="https://code.visualstudio.com"/>
                <OutsideLinkButton text="GitHub"
                link="https://www.github.com"/>
                <OutsideLinkButton text="ReactJS"
                link="https://reactjs.org"/>
                <OutsideLinkButton text="Heroku"
                link="https://www.heroku.com"/>
            </div>
        )
    }
}

export default TechnologyList