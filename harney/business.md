---
layout: harney
title: Business Intake Form
permalink: /harney/addbusiness/
forms:
  - to: danielclough@gmail.com
    subject: World Tea Expo Sample Intake Form!
    redirect: /harney/addsample
    form_engine: formspree
    placeholders: false
    fields: 
      - name: business
        input_type: text
        required: true
      - name: previous
        input_type: checkbox
        placeholder: Already Harney Supplier
        required: false
      - name: submit
        input_type: submit
        placeholder: Submit Form
        required: true
---


<div id="form-wrapper">
	

  {% if page.forms[0] %}{% include form.html form="1" %}{% endif %}





