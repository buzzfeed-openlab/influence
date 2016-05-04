import _ from 'lodash';
import Models from '../models';
const Team = Models.Team;
const sequelize = Models.sequelize;

/**
 * List
 */
export function all(req, res) {
  Team.findAll().then((teams) => {
    res.json(teams);
  }).catch((err) => {
    console.log(err);
    res.status(500).send('Error in first query');
  });
}

/**
 * Add a Team
 */
export function add(req, res) {
  Team.create(req.body).then(() => {
    res.status(200).send('OK');
  }).catch((err) => {
    console.log(err);
    res.status(400).send(err);
  });
}

/**
 * Remove a team
 */
export function remove(req, res) {
  Team.destroy({ where: { id: req.params.id } }).then(() => {
    res.status(200).send('Removed Successfully');
  }).catch((err) => {
    console.log(err);
    res.status(500).send('We failed to delete for some reason');
  });
}

export default {
  all,
  add,
  remove
};
