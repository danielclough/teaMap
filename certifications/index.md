---
layout: default
---

<div id="archives">
{% for certifications in site.certifications %}
  <div class="archive-group">
    {% capture certifications_id %}{{ certifications | first }}{% endcapture %}
    <div id="#{{ certification_id | slugize }}"></div>
    <p></p>
    <h3 class="certifications-head">{{ certifications_id }}</h3>
    <a name="{{ post.link }}"></a>
    {% for post in site.certifications[certifications_id] %}
    <article class="archive-item"> 
      <h4><a href="{{ post.link }}">{{post.company-name}}</a></h4>
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>
