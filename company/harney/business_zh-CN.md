---
layout: harney
title: 商务摄入表格
permalink: /company/harney/business_zh-CN/
forms:
  - to: danielclough@gmail.com
    subject: World Tea Expo Sample Intake Form!
    redirect: /company/harney/sample_zh-CN
    form_engine: formspree
    placeholders: false
    fields: 
      - name: business
        input_type: text
        required: true
      - name: previous
        input_type: checkbox
        placeholder: 已经是哈尼供应商
        required: false
      - name: submit
        input_type: submit
        placeholder: 提交表格
        required: true
---


<div id="form-wrapper">
	

  {% if page.forms[0] %}{% include form_zh-CN.html form="1" %}{% endif %}





