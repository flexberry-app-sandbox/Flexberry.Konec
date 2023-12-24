import { Serializer as УборкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-konec-уборка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(УборкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
