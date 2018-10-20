import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import {
  List,
  Grid,
  Cell,
  DialogContainer,
  Button,
} from 'react-md';
import models from 'common/models';
import ChoreItemComponent from 'Chores/ChoreItemComponent';


class Component extends React.Component {
  static propTypes = {
    chores: PropTypes.instanceOf(Immutable.List).isRequired,
    init: PropTypes.func.isRequired,
    onModalHide: PropTypes.func.isRequired,
    onModalOk: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    choreToDelete: PropTypes.instanceOf(models.Chore),
  }

  static defaultProps = {
    choreToDelete: null,
  }

  componentDidMount() {
    const { init } = this.props;
    init();
  }

  render() {
    const {
      chores,
      choreToDelete,
      onModalHide,
      onModalOk,
      onDeleteClick,
    } = this.props;

    if (chores.size === 0) {
      return (
        <div>No Chores</div>
      );
    }

    const choreList = chores.map(chore => (
      <ChoreItemComponent
        key={chore.id}
        chore={chore}
        onDeleteClick={onDeleteClick}
      />
    ));

    return (
      <Grid>
        <Cell size={12}>
          <List>
            {choreList}
          </List>
        </Cell>
        {choreToDelete ? (
          <DialogContainer
            id="confirm-delete-chore"
            visible
            title="Are you sure you want to delete this chore?"
            onHide={onModalHide}
            actions={[
              (
                <Button
                  primary
                  raised
                  onClick={() => { onModalOk(choreToDelete.id); }}
                >
                Yes
                </Button>
              ),
              {
                secondary: true,
                children: 'Cancel',
                onClick: onModalHide,
              },
            ]}
            focusOnMount={false}
          />
        ) : null}
      </Grid>
    );
  }
}

export default Component;
