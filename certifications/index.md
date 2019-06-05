---
layout: default
---

<div id="archives">
{% for certification in site.certifications %}
  <div class="archive-group">
    {% capture certification_id %}{{ certification | first }}{% endcapture %}
    <div id="#{{ certification_id | slugize }}"></div>
    <p></p>
    <h3 class="certification-head">{{ certification_id }}</h3>
    <a name="{{ post.link }}"></a>
    {% for post in site.certifications[certification_id] %}
    <article class="archive-item"> 
      <h4><a href="{{ post.link }}">{{post.company-name}}</a></h4>
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>
