---
layout: immodestea
---

<div id="archives">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_id %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_id | slugize }}"></div>
    <p></p>
    <h3 class="category-head">{{ category_id }}</h3>
    <a name="{{ post.link }}"></a>
    {% for post in site.categories[category_id] %}
    <article class="archive-item"> 
      <h4><a href="{{ post.link }}">{{post.company-name}}</a></h4>
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>