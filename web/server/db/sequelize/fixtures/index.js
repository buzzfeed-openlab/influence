// var sequelize_fixtures = require('sequelize-fixtures'),
// models = {
//     Interests: require('../models/interests'),
// };

// sequelize_fixtures.loadFiles([
//     './interests.js',
//     ], models).then(function(){

//     console.log('loaded fixtures!')
// });

import Models from '../models';
const sequelize = Models.sequelize;

const files = [
    "./interests.js"
];

for (var i = 0; i < files.length; ++i) {
    var instances = require(files[i]);

    for (var j = 0; j < instances.length; ++j) {
        var instance = instances[j];

        Models[instance.model].create(instance.data).then(() => {
          console.log('SUCCESS!', instance.data.name);
        }).catch((err) => {
          console.log('FAIL: ', instance.data.name);
          console.log(err);
        });
    }
}
