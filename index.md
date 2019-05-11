---
layout: harney
title: Sample Intake Form
forms:
  - to: danielclough@gmail.com
    subject: World Tea Expo Sample Intake Form!
    redirect: /
    form_engine: formspree
    placeholders: false
    fields: 
      - name: business
        input_type: text
        required: true
      - name: how-many
        input_type: numbers
        placeholder: How many samples do you have?
        required: true
      - name: sample
        input_type: text
        required: false
      - name: previous
        input_type: checkbox
        placeholder: Already Harney Supplier
        required: false
      - name: submit
        input_type: submit
        placeholder: Submit form
        required: true
---


<div id="form-wrapper">
	

  {% if page.forms[0] %}{% include form.html form="1" %}{% endif %}


</div>




