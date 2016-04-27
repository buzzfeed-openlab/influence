import React, { Component } from 'react';
import MultiSelectList from '../components/MultiSelectList';

export default class TeamPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            interests: [{ name: "Health Services/HMOs" },{ name: "Forestry & Forest Products" },{ name: "TV/Movies/Music" },{ name: "Air Transport" },{ name: "Insurance" },{ name: "Electric Utilities" },{ name: "Misc Manufacturing & Distributing" },{ name: "Republican/Conservative" },{ name: "Pharmaceuticals/Health Products" },{ name: "Computers/Internet" },{ name: "Education" },{ name: "Savings & Loans" },{ name: "Lodging/Tourism" },{ name: "Misc Services" },{ name: "Foreign & Defense Policy" },{ name: "Joint Candidate Cmte" },{ name: "Human Rights" },{ name: "Health Professionals" },{ name: "Hospitals/Nursing Homes" },{ name: "Mining" },{ name: "Sea Transport" },{ name: "Securities & Investment" },{ name: "Candidate Committees" },{ name: "Business Services" },{ name: "Misc Business" },{ name: "Accountants" },{ name: "Misc Defense" },{ name: "Building Materials & Equipment" },{ name: "Non-contribution" },{ name: "Employer Listed/Category Unknown" },{ name: "Party Committees" },{ name: "Environment" },{ name: "Misc Issues" },{ name: "Public Sector Unions" },{ name: "Food & Beverage" },{ name: "Misc Finance" },{ name: "Non-Profit Institutions" },{ name: "Special Trade Contractors" },{ name: "Industrial Unions" },{ name: "Misc Unions" },{ name: "Automotive" },{ name: "Agricultural Services/Products" },{ name: "Construction Services" },{ name: "Business Associations" },{ name: "Waste Management" },{ name: "Printing & Publishing" },{ name: "Beer, Wine & Liquor" },{ name: "Leadership PACs" },{ name: "Civil Servants/Public Officials" },{ name: "Pro-Israel" },{ name: "Crop Production & Basic Processing" },{ name: "Real Estate" },{ name: "Retail Sales" },{ name: "Misc Health" },{ name: "Telecom Services & Equipment" },{ name: "Railroads" },{ name: "Other" },{ name: "Defense Aerospace" },{ name: "No Employer Listed or Found" },{ name: "Intl Orgs" },{ name: "Misc Energy" },{ name: "General Contractors" },{ name: "Democratic/Liberal" },{ name: "Abortion Policy/Pro-Life" },{ name: "Livestock" },{ name: "Chemical & Related Manufacturing" },{ name: "Lobbyists" },{ name: "Home Builders" },{ name: "Generic Occupation/Category Unknown" },{ name: "Finance/Credit Companies" },{ name: "Defense Electronics" },{ name: "Trucking" },{ name: "Homemakers/Non-income earners" },{ name: "Commercial Banks" },{ name: "Women's Issues" },{ name: "Transportation Unions" },{ name: "Oil & Gas" },{ name: "Environmental Svcs/Equipment" },{ name: "Food Processing & Sales" },{ name: "Misc Transport" },{ name: "Gun Rights" },{ name: "Lawyers/Law Firms" },{ name: "Fisheries & Wildlife" },{ name: "Retired" },{ name: "Abortion Policy/Pro-Choice" },{ name: "Telephone Utilities" },{ name: "Electronics Mfg & Services" },{ name: "Misc Agriculture" },{ name: "Recreation/Live Entertainment" },{ name: "Steel Production" },{ name: "Building Trade Unions" },{ name: "Tobacco" },{ name: "Clergy & Religious Organizations" },{ name: "Textiles" },{ name: "Gun Control" },{ name: "Unknown" },{ name: "Credit Unions" },{ name: "Casinos/Gambling" },{ name: "Dairy" },{ name: "Poultry & Eggs" },{ name: "Party Committee Transfer" },{ name: "Candidate Self-finance" },{ name: "Misc Communications/Electronics" }],
            team: null
        };
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div>Beep Boop</div>
                <MultiSelectList options={this.state.interests}/>
            </div>
        );
    }
}
