import { Serializer as ВидыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-konec-виды';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВидыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
