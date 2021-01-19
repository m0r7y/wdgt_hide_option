# wdgt_hide_option
Hiding field selection's option in FormView


Usages :  
change attributes if existing field
```
<xpath expr="//field[@name='existing_fields']" position="attributes">
  <attribute name="widget">custom_selection</attribute>
</xpath>
```

Or add it as widget if new field  
```
<field name="new_field" widget="custom_selection"/>
```

Do not forget to add the file in web.assets_backend  
```
<template id="assets_backend" inherit_id="web.assets_backend">
  <xpath expr="//script[last()]" position="after">
    <script type="text/javascript" src="/your_module/static/src/js/widget.js"/>
  </xpath>
</template>
```
**Tested on Odoo 13**
