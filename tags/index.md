---
layout: default
---

<div id="archives">
{% for tag in site.tags %}
  <div class="archive-group">
    {% capture tag_id %}{{ tag | first }}{% endcapture %}
    <div id="#{{ tag_id | slugize }}"></div>
    <p></p>
    <h3 class="tag-head">{{ tag_id }}</h3>
    <a name="{{ post.link }}"></a>
    {% for post in site.tags[tag_id] %}
    <article class="archive-item"> 
      <h4><a href="{{ post.link }}">{{post.company-name}}</a></h4>
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>
