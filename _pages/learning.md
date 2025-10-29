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
<p>Notes are grouped automatically by folder name. Place Markdown files anywhere inside <code>_notes/</code>; new folders become expandable sections, and files without subfolders show up directly.</p>

<div class="note-directory">
  {% include learning-notes-tree.html notes=notes level=0 %}
</div>
{% endif %}
