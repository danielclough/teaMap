---
layout: harney
title: Sample Intake Form
permalink: /company/harney/sample/
forms:
  - to: mnowzakx
    subject: World Tea Expo Sample Intake Form!
    redirect: /harney/sample-redirect/
    form_engine: formspree
    placeholders: false
    fields: 
      - name: sample
        input_type: text
        required: false
      - name: submit
        input_type: submit
        placeholder: Submit Form
        required: true
---


<div id="form-wrapper">
	

  {% if page.forms[0] %}{% include form.html form="1" %}{% endif %}

</div>






