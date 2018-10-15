import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  TextField,
  SelectField,
  DatePicker,
} from 'react-md';
import models from 'common/models';


class Component extends React.Component {
  static propTypes = {
    goBack: PropTypes.func.isRequired,
    init: PropTypes.func.isRequired,
    chore: PropTypes.instanceOf(models.Chore).isRequired,
    changeValue: PropTypes.func.isRequired,
    frequencySelect: PropTypes.string,
    showBack: PropTypes.bool,
  };

  static defaultProps = {
    showBack: false,
    frequencySelect: '',
  };

  componentDidMount() {
    const { init } = this.props;
    init();
  }

  render() {
    const {
      showBack,
      goBack,
      chore,
      changeValue,
      frequencySelect,
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
        </div>
        <div>
          <SelectField
            id="chore-frequency-select"
            placeholder="Frequency"
            className="md-cell"
            label="Frequency"
            value={frequencySelect}
            onChange={(frequency) => {
              if (frequency === 'custom') {
                changeValue('frequencyType', 'days');
                changeValue('frequencyAmount', 3);
                return;
              }

              changeValue('frequencyType', frequency);
              changeValue('frequencyAmount', 1);
            }}
            menuItems={[
              {
                label: 'Daily',
                value: 'days',
              },
              {
                label: 'Weekly',
                value: 'weeks',
              },
              {
                label: 'Monthly',
                value: 'months',
              },
              {
                label: 'Yearly',
                value: 'years',
              },
              {
                label: 'Custom',
                value: 'custom',
              },
            ]}
          />
          {frequencySelect === 'custom' ? (
            <span>
              <TextField
                type="number"
                id="frequency-amount-input"
                label="Frequency"
                fullWidth={false}
                value={chore.frequencyAmount}
                onChange={(value) => { changeValue('frequencyAmount', value); }}
              />
              <SelectField
                id="frequency-type-select"
                value={chore.frequencyType}
                onChange={(value) => { changeValue('frequencyType', value); }}
                menuItems={[
                  {
                    label: 'Days',
                    value: 'days',
                  },
                  {
                    label: 'Weeks',
                    value: 'weeks',
                  },
                  {
                    label: 'Months',
                    value: 'months',
                  },
                  {
                    label: 'Years',
                    value: 'years',
                  },
                ]}
              />
            </span>
          ) : null}
        </div>
        <div>
          <DatePicker
            id="start-date-picker"
            value={chore.startDate}
            onChange={(dateString, dateObject) => {
              changeValue('startDate', dateObject);
            }}
          />
        </div>
        <div>
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
