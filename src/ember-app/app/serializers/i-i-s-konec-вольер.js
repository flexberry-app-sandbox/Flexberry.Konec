import { Serializer as ВольерSerializer } from
  '../mixins/regenerated/serializers/i-i-s-konec-вольер';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВольерSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
