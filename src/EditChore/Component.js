import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  TextField,
  // SelectField,
} from 'react-md';
import models from 'common/models';


class Component extends React.Component {
  static propTypes = {
    goBack: PropTypes.func.isRequired,
    init: PropTypes.func.isRequired,
    chore: PropTypes.instanceOf(models.Chore).isRequired,
    changeValue: PropTypes.func.isRequired,
    showBack: PropTypes.bool,
  };

  static defaultProps = {
    showBack: false,
  };

  componentDidMount() {
    const { init } = this.props;
    init();
  }

  render() {
    const {
      showBack, goBack, chore, changeValue,
    } = this.props;
    const backButton = showBack ? (
      <Button
        className="back-button"
        flat
        onClick={goBack}
        iconChildren="arrow_back"
      >
        Back
      </Button>
    ) : null;

    return (
      <div className="edit-chore">
        {backButton}
        <div>
          <TextField
            id="chore-name"
            label="Name"
            value={chore.name}
            onChange={(value) => { changeValue('name', value); }}
          />
          <TextField
            id="chore-details"
            label="Details"
            value={chore.details}
            onChange={(value) => { changeValue('details', value); }}
            maxRows={0}
            rows={3}
          />
          {/* <SelectField
            id="chore-frequency-select"
            placeholder="Frequency"
            className="md-cell"
            menuItems={[
              'Daily',
              'Weekly',
              'Monthly',
              'Yearly',
              'Custom',
            ]}
          /> */}
          <Button
            raised
          >
            Save
          </Button>
        </div>
      </div>
    );
  }
}

export default Component;
