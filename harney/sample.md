---
layout: harney
title: Sample Intake Form
permalink: /harney/addsample/
forms:
  - to: mnowzakx
    subject: World Tea Expo Sample Intake Form!
    redirect: /harney/addsample
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
  <div>
  <p> *After reCAPTCHA you can alter the form to Submit your next sample. </p>
</div>

</div>




