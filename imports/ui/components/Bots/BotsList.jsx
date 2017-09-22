import React from 'react';
import PropTypes from 'prop-types';

import BotListItem from '/imports/ui/components/Bots/BotListItem';

import '/imports/ui/components/Bots/style';

const BotsList = ({ bots, editBot, manageBot, deleteBot }) => (
  <div className="bots-list__parent">
    {bots.map(({ _id, name, world, server, createdAt }) => (
      <div className="row" key={_id}>
        <BotListItem
          _id={_id}
          name={name}
          world={world}
          server={server}
          editBot={editBot}
          createdAt={createdAt}
          manageBot={manageBot}
          deleteBot={deleteBot}
        />
      </div>
    ))}
  </div>
);

BotsList.defaultProps = {
  bots: [],
};

BotsList.propTypes = {
  bots: PropTypes.array,
  editBot: PropTypes.func.isRequired,
  manageBot: PropTypes.func.isRequired,
  deleteBot: PropTypes.func.isRequired,
};

export default BotsList;
