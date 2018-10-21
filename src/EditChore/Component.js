import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  TextField,
  SelectField,
  DatePicker,
  Grid,
  Cell,
} from 'react-md';
import models from 'common/models';


class Component extends React.Component {
  static propTypes = {
    goBack: PropTypes.func.isRequired,
    init: PropTypes.func.isRequired,
    chore: PropTypes.instanceOf(models.Chore).isRequired,
    changeValue: PropTypes.func.isRequired,
    persistChore: PropTypes.func.isRequired,
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
      persistChore,
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
        <Grid>
          <Cell size={12}>
            <TextField
              id="chore-name"
              label="Name"
              value={chore.name}
              onChange={(value) => { changeValue('name', value); }}
            />
          </Cell>
          <Cell size={12}>
            <TextField
              id="chore-details"
              label="Details"
              value={chore.details}
              onChange={(value) => { changeValue('details', value); }}
              maxRows={0}
              rows={3}
            />
          </Cell>
        </Grid>
        <Grid>
          <Cell size={4}>
            <SelectField
              id="chore-frequency-select"
              placeholder="Frequency"
              label="Frequency"
              fullWidth
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
          </Cell>
          {frequencySelect === 'custom' ? (
            <React.Fragment>
              <Cell size={4}>
                <TextField
                  type="number"
                  id="frequency-amount-input"
                  label="Frequency amount"
                  fullWidth
                  value={chore.frequencyAmount}
                  onChange={(value) => { changeValue('frequencyAmount', value); }}
                />
              </Cell>
              <Cell size={4}>
                <SelectField
                  id="frequency-type-select"
                  value={chore.frequencyType}
                  label="Frequency type"
                  fullWidth
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
              </Cell>
            </React.Fragment>
          ) : null}
        </Grid>

        {chore.id === '' ? (
          <Grid>
            <Cell size={4}>
              <DatePicker
                id="start-date-picker"
                value={chore.startDate}
                icon={null}
                label="Start Date"
                onChange={(dateString, dateObject) => {
                  changeValue('startDate', dateObject);
                }}
              />
            </Cell>
          </Grid>
        ) : null}
        <div>
          <Button
            raised
            onClick={persistChore}
          >
              Save
          </Button>
        </div>
      </div>
    );
  }
}

export default Component;
