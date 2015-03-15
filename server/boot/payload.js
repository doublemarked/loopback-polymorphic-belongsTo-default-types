module.exports = function(app) {
  var Target = app.models.Target;
  var Other = app.models.Other;

  Target.hasMany(Other, {
    polymorphic: {
      as: 'others',
      foreignKey: 'targetId',
      discriminator: 'targetType'
    }
  });

  console.log('\n===> Other.definition.properties.targetId.type.name:', Other.definition.properties.targetId.type.name);

  Other.belongsTo('target', {
    polymorphic: {
      foreignKey: 'targetId',
      discriminator: 'targetType'
    }
  });

  console.log('===> Other.definition.properties.targetId.type.name: %s\n', Other.definition.properties.targetId.type.name);

};
