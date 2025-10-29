---
layout: single
title: "Learning Notes"
permalink: /learning/
author_profile: true
---

{% assign notes = site.notes | sort: 'path' %}
{% if notes == empty %}
<p>No learning notes are available yet. Add Markdown files under <code>_notes/</code> and they will appear here automatically.</p>
{% else %}
<p>Learning notes of interest are listed below.</p>

<div class="note-directory">
  {% assign category_groups = notes | group_by_exp: 'note', 'note.path | remove_first: "_notes/" | split: "/" | first' | sort: 'name' %}
  {% for category in category_groups %}
    {% assign category_slug = category.name %}
    {% assign category_words = category_slug | replace: '-', ' ' | replace: '_', ' ' | split: ' ' %}
    {% capture category_label %}
      {% for word in category_words %}
        {% assign clean_word = word | strip %}
        {% if clean_word != '' %}
          {% if forloop.first %}
            {{ clean_word | capitalize }}
          {% else %}
            {{ ' ' }}{{ clean_word | capitalize }}
          {% endif %}
        {% endif %}
      {% endfor %}
    {% endcapture %}
    {% assign category_label = category_label | strip %}
    <details class="note-directory__category">
      <summary>{{ category_label }}</summary>

      {% assign direct_notes = "" | split: "" %}
      {% assign subcategory_slugs = "" | split: "" %}
      {% for note in category.items %}
        {% assign clean_path = note.path | remove_first: '_notes/' %}
        {% assign parts = clean_path | split: '/' %}
        {% if parts.size > 2 %}
          {% assign sub_slug = parts[1] %}
          {% unless subcategory_slugs contains sub_slug %}
            {% assign subcategory_slugs = subcategory_slugs | push: sub_slug %}
          {% endunless %}
        {% else %}
          {% assign direct_notes = direct_notes | push: note %}
        {% endif %}
      {% endfor %}

      {% if direct_notes.size > 0 %}
      <ul class="note-directory__list">
        {% assign sorted_direct_notes = direct_notes | sort: 'title' %}
        {% for note in sorted_direct_notes %}
          <li><a href="{{ note.url }}">{{ note.title }}</a></li>
        {% endfor %}
      </ul>
      {% endif %}

      {% assign sorted_subcategories = subcategory_slugs | sort %}
      {% for sub_slug in sorted_subcategories %}
        {% assign sub_words = sub_slug | replace: '-', ' ' | replace: '_', ' ' | split: ' ' %}
        {% capture sub_label %}
          {% for word in sub_words %}
            {% assign clean_word = word | strip %}
            {% if clean_word != '' %}
              {% if forloop.first %}
                {{ clean_word | capitalize }}
              {% else %}
                {{ ' ' }}{{ clean_word | capitalize }}
              {% endif %}
            {% endif %}
          {% endfor %}
        {% endcapture %}
        {% assign sub_label = sub_label | strip %}
        {% assign sub_fragment = '_notes/' | append: category_slug | append: '/' | append: sub_slug | append: '/' %}
        {% assign notes_in_subcategory = category.items | where_exp: 'item', 'item.path contains sub_fragment' | sort: 'title' %}
        <details class="note-directory__subcategory">
          <summary>{{ sub_label }}</summary>
          <ul class="note-directory__list note-directory__list--nested">
            {% for note in notes_in_subcategory %}
              <li><a href="{{ note.url }}">{{ note.title }}</a></li>
            {% endfor %}
          </ul>
        </details>
      {% endfor %}
    </details>
  {% endfor %}
</div>
{% endif %}
