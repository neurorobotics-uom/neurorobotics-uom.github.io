---
layout: page
permalink: /people/
title: people
description: members of the lab or group
nav: true
nav_order: 1
display_categories: [Principal Investigator, PhD Students]
# display_categories: [Principal Investigator, Postdocs, PhD Students, Master's Students, Undergraduates, Visiting Students, Alumni]
---

<!-- pages/people.md -->
<div class="people">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized people -->
  {%- for category in page.display_categories %}
  <h3 class="category">{{ category }}</h3>
  {%- assign categorized_people = site.people | where: "category", category -%}
  {%- assign sorted_people = categorized_people | sort: "year" %}
  <!-- Generate cards for each people -->
  <div class="row">
    {%- for people in sorted_people -%}
      {% include people.liquid %}
    {%- endfor %}
  </div>
  {% endfor %}

{%- else -%}
<!-- Display people without categories -->
  {%- assign sorted_people = site.people | sort: "title" -%}
  <!-- Generate cards for each people -->
  <div class="row">
    {%- for people in sorted_people -%}
      {% include people.liquid %}
    {%- endfor %}
  </div>
{%- endif -%}
</div>
