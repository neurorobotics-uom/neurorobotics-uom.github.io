---
layout: page
title: Facilities
permalink: /facilities/
description:
nav: true
nav_order: 5
display_categories: 
horizontal: false
---



<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>


<div class="row">
  {% for facility in site.facilities %}
    <div class="col-sm-4 mb-4">
      <div class="card project-card h-100">
        <a href="{{ facility.url | relative_url }}">
          <img src="{{ facility.img | prepend: '/assets/img/' | relative_url }}"
               class="card-img-top img-fluid rounded"
               alt="{{ facility.title }}">
          <div class="card-body">
            <h5 class="card-title">{{ facility.title }}</h5>
            <p class="card-text">{{ facility.description }}</p>
          </div>
        </a>
      </div>
    </div>
  {% endfor %}
</div>