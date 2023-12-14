import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-fotokiosk1-клиент', 'Unit | Serializer | i-i-s-fotokiosk1-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-fotokiosk1-клиент',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-fotokiosk1-вид-оплаты',
    'transform:i-i-s-fotokiosk1-категория',

    'model:i-i-s-fotokiosk1-доп-настройки',
    'model:i-i-s-fotokiosk1-инфо-фото',
    'model:i-i-s-fotokiosk1-клиент',
    'model:i-i-s-fotokiosk1-оплата',
    'model:i-i-s-fotokiosk1-отправ-на-почту',
    'model:i-i-s-fotokiosk1-печать-фото',
    'model:i-i-s-fotokiosk1-сделать-фото',
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
