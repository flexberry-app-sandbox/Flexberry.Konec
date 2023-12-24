import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-konec-уборка', 'Unit | Serializer | i-i-s-konec-уборка', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-konec-уборка',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-konec-пол',
    'transform:i-i-s-konec-тип-вольера',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
