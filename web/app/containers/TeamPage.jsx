import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MultiSelectList from '../components/MultiSelectList';
import { fetchInterests } from 'actions/interests';

export default class TeamPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: null
        };

        this.onSelectionChange = this.onSelectionChange.bind(this);
        this.onSubmitTeam = this.onSubmitTeam.bind(this);

        this.fetchInterests();
    }

    fetchInterests() {
        console.log('fetching interests!');
        this.props.dispatch(fetchInterests());
    }

    render() {
        console.log('team page!');
        console.log(this.props);
        console.log('--------');

        if (this.state.team) {
            return (<TeamViewer
                team={this.state.team}
            />);

        } else {
            return (<TeamBuilder
                interests={this.props.interests}
                onSubmitTeam={ this.onSubmitTeam }
                onSelectionChange={ this.onSelectionChange }
            />);
        }
    }

    onSelectionChange(selected) {
        this.setState({selected});
    }

    onSubmitTeam() {
        this.setState({
            team: {
                name: this.state.name,
                interests: this.state.selected,
            }
        });
    }
}

TeamPage.propTypes = {
  interests: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    interests: state.interest.interests
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(TeamPage);

// -------

class InterestRowDetailed extends React.Component {
    render() {
        return (
            <div>
                {this.props.interest}
            </div>
        );
    }
}

class TeamBuilder extends React.Component {

    render() {
        return (
            <div>
                <MultiSelectList items={this.props.interests} onSelectionChange={ (s) => this.props.onSelectionChange(s) } />
                <button className='btn btn-success' onClick={ () => this.props.onSubmitTeam() }>
                    Submit Team
                </button>
            </div>
        );
    }

}

class TeamViewer extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.team.interests.map((interest, i) => {
                        return <li key={interest.name}>
                            {`${interest.name}  `}
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}
