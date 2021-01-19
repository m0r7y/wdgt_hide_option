odoo.define('my_module.custom_selection', function(require) {
    "use strict";

    var registry = require('web.field_registry');
    var relational_fields = require('web.relational_fields');

    var MySelection = relational_fields.FieldRadio.extend({
        init: function() {
            this._super.apply(this, arguments);
            // use to decrement in splice, bc position change when element is removed
            let decrement = 0;
            // this.values can be undefined or [[], [], []]
            // copying the content of original array or []
            let value_copies = this.values? [...this.values]: [];
            
            for (let index = 0; index < value_copies.length; index++) {
                // 'other' is the value to be removed
                if (value_copies[index].includes('other')) {
                    this.values.splice(index - decrement, 1);
                    decrement++;
                }
            }
        },
    });
    
    registry.add('custom_selection', MySelection);

    return MySelection;
});