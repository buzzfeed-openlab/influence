import React, { Component } from 'react';
import ReactBootstrap, { Row, Col } from 'react-bootstrap';
import FilteredMultiSelect from 'react-filtered-multiselect';

export default class MultiSelectList extends Component {
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
                <Row>
                    <Col sm={12} md={6}>
                        <FilteredMultiSelect
                            onChange={(selected) => this.handleSelectionChange(selected)}
                            options={this.props.items}
                            selectedOptions={selected}
                            textProp="name"
                            valueProp="name"
                            classNames={MultiSelectListClasses}
                        />
                    </Col>
                    <Col sm={12} md={6}>
                        {selectedList}
                    </Col>
                </Row>
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
