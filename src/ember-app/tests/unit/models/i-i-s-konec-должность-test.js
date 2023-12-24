import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-konec-должность', 'Unit | Model | i-i-s-konec-должность', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-konec-виды',
    'model:i-i-s-konec-вольер',
    'model:i-i-s-konec-должность',
    'model:i-i-s-konec-животные',
    'model:i-i-s-konec-состав-вольера',
    'model:i-i-s-konec-сотрудники',
    'model:i-i-s-konec-уборка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
