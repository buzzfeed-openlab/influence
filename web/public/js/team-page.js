import React from "react";
import { VirtualScroll } from 'react-virtualized';

const industries = ["Health Services/HMOs","Forestry & Forest Products","TV/Movies/Music","Air Transport","Insurance","Electric Utilities","Misc Manufacturing & Distributing","Republican/Conservative","Pharmaceuticals/Health Products","Computers/Internet","Education","Savings & Loans","Lodging/Tourism","Misc Services","Foreign & Defense Policy","Joint Candidate Cmte","Human Rights","Health Professionals","Hospitals/Nursing Homes","Mining","Sea Transport","Securities & Investment","Candidate Committees","Business Services","Misc Business","Accountants","Misc Defense","Building Materials & Equipment","Non-contribution","Employer Listed/Category Unknown","Party Committees","Environment","Misc Issues","Public Sector Unions","Food & Beverage","Misc Finance","Non-Profit Institutions","Special Trade Contractors","Industrial Unions","Misc Unions","Automotive","Agricultural Services/Products","Construction Services","Business Associations","Waste Management","Printing & Publishing","Beer, Wine & Liquor","Leadership PACs","Civil Servants/Public Officials","Pro-Israel","Crop Production & Basic Processing","Real Estate","Retail Sales","Misc Health","Telecom Services & Equipment","Railroads","Other","Defense Aerospace","No Employer Listed or Found","Intl Orgs","Misc Energy","General Contractors","Democratic/Liberal","Abortion Policy/Pro-Life","Livestock","Chemical & Related Manufacturing","Lobbyists","Home Builders","Generic Occupation/Category Unknown","Finance/Credit Companies","Defense Electronics","Trucking","Homemakers/Non-income earners","Commercial Banks","Women's Issues","Transportation Unions","Oil & Gas","Environmental Svcs/Equipment","Food Processing & Sales","Misc Transport","Gun Rights","Lawyers/Law Firms","Fisheries & Wildlife","Retired","Abortion Policy/Pro-Choice","Telephone Utilities","Electronics Mfg & Services","Misc Agriculture","Recreation/Live Entertainment","Steel Production","Building Trade Unions","Tobacco","Clergy & Religious Organizations","Textiles","Gun Control","Unknown","Credit Unions","Casinos/Gambling","Dairy","Poultry & Eggs","Party Committee Transfer","Candidate Self-finance","Misc Communications/Electronics"];

export default class TeamPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        console.log('team page!');

        return this.state.team ? <TeamViewer/> : <TeamBuilder/>;
    }
}

class TeamRow extends React.Component {
    render() {
        return (
            <div>
                {this.props.industry}
            </div>
        );
    }
}

class TeamBuilder extends React.Component {

    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-lg-8">
                        <VirtualScroll
                            width={300}
                            height={300}
                            rowsCount={industries.length}
                            rowHeight={20}
                            rowRenderer={
                              index => <TeamRow key={index} industry={industries[index]} />
                            }
                        />
                    </div>
                    <div class="col-lg-4">
                        Hi
                    </div>
                </div>
            </div>
        );
    }
}

class TeamViewer extends React.Component {
    render() {
        return (
            <div>
            </div>
        );
    }
}
