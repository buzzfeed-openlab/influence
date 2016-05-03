import _ from 'lodash';
import Models from '../models';
const Interest = Models.Interest;
const sequelize = Models.sequelize;

/**
 * List
 */
export function all(req, res) {
  Interest.findAll().then((interests) => {
    res.json(interests);
  }).catch((err) => {
    console.log(err);
    res.status(500).send('Error in first query');
  });
}

/**
 * Add an interest
 */
export function add(req, res) {
  Interest.create(req.body).then(() => {
    res.status(200).send('OK');
  }).catch((err) => {
    console.log(err);
    res.status(400).send(err);
  });
}

/**
 * Remove an interest
 */
export function remove(req, res) {
  Interest.destroy({ where: { id: req.params.id } }).then(() => {
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
