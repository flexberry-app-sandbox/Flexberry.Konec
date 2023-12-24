import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-konec-вольер-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-konec-состав-вольера+животные':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'кличка',
            required: true,
            relationName: 'животные',
            projection: 'ЖивотныеL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
