import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render() {
        const { location } = this.props;
        const { collapsed } = this.state;
        const teamClass = location.pathname.match(/^\/team/) ? "active" : "";
        const feedClass = location.pathname.match(/^\/feed/) ? "active" : "";
        const upcomingClass = location.pathname.match(/^\/upcoming/) ? "active" : "";
        const navClass = collapsed ? "collapse" : "";

        return (
            <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li class={teamClass}>
                                <IndexLink to="team" onClick={this.toggleCollapse.bind(this)}>Team</IndexLink>
                            </li>
                            <li class={feedClass}>
                                <Link to="feed" onClick={this.toggleCollapse.bind(this)}>Feed</Link>
                            </li>
                            <li class={upcomingClass}>
                                <Link to="upcoming" onClick={this.toggleCollapse.bind(this)}>Upcoming</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
