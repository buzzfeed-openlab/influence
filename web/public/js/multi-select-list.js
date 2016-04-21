import React from 'react';
import FilteredMultiSelect from 'react-filtered-multiselect';

export default class MultiSelectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: []
        }
    }

    handleDeselect(index) {
        var selected = this.state.selected.slice();
        selected.splice(index, 1);
        this.setState({selected});

        if (this.props.onSelectionChange) {
            this.props.onSelectionChange(selected);
        }
    }

    handleSelectionChange(selected) {
        this.setState({selected});

        if (this.props.onSelectionChange) {
            this.props.onSelectionChange(selected);
        }
    }

    render() {
        var {selected} = this.state;

        var selectedList = <p>(select industries to build a team)</p>;
        if (selected.length !== 0) {
            selectedList = (
                <ul>
                    {selected.map((item, i) => {
                        return <li key={item.name}>
                            {`${item.name}  `}
                            <span style={{cursor: 'pointer', fontWeight: 'bold'}} onClick={this.handleDeselect.bind(this, i)}>
                                &times;
                            </span>
                        </li>
                    })}
                </ul>
            );
        }

        return (
            <div>
                <div class="row">
                    <div class="col-lg-6">
                        <FilteredMultiSelect
                            onChange={(selected) => this.handleSelectionChange(selected)}
                            options={this.props.items}
                            selectedOptions={selected}
                            textProp="name"
                            valueProp="name"
                            classNames={MultiSelectListClasses}
                        />
                    </div>
                    <div class="col-lg-6">
                        {selectedList}
                    </div>
                </div>
            </div>
        );
      }
}

const MultiSelectListClasses = {
  filter: 'form-control',
  select: 'form-control',
  button: 'btn btn btn-block btn-default',
  buttonActive: 'btn btn btn-block btn-primary'
}
