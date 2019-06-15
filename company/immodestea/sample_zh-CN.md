---
layout: immodestea
title: 样品摄入表格
permalink: /company/immodestea/sample_zh-CN/
forms:
  - to: xgpdqjam
    subject: Sample Intake Form!
    redirect: /company/immodestea/sample-redirect_zh-CN/
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






