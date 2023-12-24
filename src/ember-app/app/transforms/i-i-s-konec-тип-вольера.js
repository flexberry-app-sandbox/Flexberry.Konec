import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипВольераEnum from '../enums/i-i-s-konec-тип-вольера';

export default FlexberryEnum.extend({
  enum: ТипВольераEnum,
  sourceType: 'IIS.Konec.ТипВольера'
});
