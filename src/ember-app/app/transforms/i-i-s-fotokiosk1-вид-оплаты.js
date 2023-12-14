import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидОплатыEnum from '../enums/i-i-s-fotokiosk1-вид-оплаты';

export default FlexberryEnum.extend({
  enum: ВидОплатыEnum,
  sourceType: 'IIS.Fotokiosk1.ВидОплаты'
});
