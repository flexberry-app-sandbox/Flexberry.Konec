import { Serializer as СоставВольераSerializer } from
  '../mixins/regenerated/serializers/i-i-s-konec-состав-вольера';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СоставВольераSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
