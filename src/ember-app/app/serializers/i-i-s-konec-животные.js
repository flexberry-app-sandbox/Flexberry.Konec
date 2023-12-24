import { Serializer as ЖивотныеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-konec-животные';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЖивотныеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
