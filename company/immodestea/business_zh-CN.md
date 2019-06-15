---
layout: immodestea
title: 商务摄入表格
permalink: /company/immodestea/business_zh-CN/
forms:
  - to: mepndyox
    subject: Business Intake Form!
    redirect: /company/immodestea/sample_zh-CN
    form_engine: formspree
    placeholders: false
    fields: 
      - name: business
        input_type: text
        required: true
      - name: submit
        input_type: submit
        placeholder: 提交表格
        required: true
---


<div id="form-wrapper">
	

  {% if page.forms[0] %}{% include form_zh-CN.html form="1" %}{% endif %}





