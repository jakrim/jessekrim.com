import React, { Component } from 'react';
import PropTypes from 'prop-types';

const noop = () => false;

const { Provider, Consumer } = React.createContext({
  sections: [],
  addSection: noop,
});

export class SectionProvider extends Component {
  state = {
    sections: [],
  };

  addSection = section =>
    this.setState(state => ({ sections: [...state.sections, section] }));

  render() {
    const { sections } = this.state;
    const { children } = this.props;
    const value = {
      sections,
      addSection: this.addSection,
    };

    return <Provider value={value}>{children}</Provider>;
  }
}

SectionProvider.propTypes = {
  children: PropTypes.node,
};

export const SectionConsumer = Consumer;
