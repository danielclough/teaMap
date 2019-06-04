---
layout: harney
title: Sample Intake Form
permalink: /company/harney/sample_zh-CN/
forms:
  - to: mnowzakx
    subject: World Tea Expo Sample Intake Form!
    redirect: /company/harney/sample-redirect_zh-CN/
    form_engine: formspree
    placeholders: false
    fields: 
      - name: sample
        input_type: text
        required: false
      - name: submit
        input_type: submit
        placeholder: 提交表格
        required: true
---


<div id="form-wrapper">
	

  {% if page.forms[0] %}{% include form_zh-CN.html form="1" %}{% endif %}

</div>






