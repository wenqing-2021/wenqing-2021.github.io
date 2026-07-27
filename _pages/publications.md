---
layout: page
permalink: /publications/
title: publications
description: Peer-reviewed research on autonomous driving, motion planning, and safe reinforcement learning.
nav: true
nav_order: 1
---

<style>
  article > .publications {
    display: grid;
    grid-template-columns: 3.5rem minmax(0, 1fr);
    column-gap: 1.15rem;
    row-gap: 1.8rem;
  }

  article > .publications h2.bibliography {
    grid-column: 1;
    align-self: start;
    margin: 0;
    padding: 0;
    border-top: 0;
    color: var(--global-text-color);
    font-size: 1.5rem;
    line-height: 1.2;
    text-align: left;
  }

  article > .publications ol.bibliography {
    grid-column: 2;
    min-width: 0;
    margin: 0;
  }

  @media (max-width: 575.98px) {
    article > .publications {
      grid-template-columns: 3.1rem minmax(0, 1fr);
      column-gap: 0.75rem;
    }
  }
</style>

For the latest citation metrics, please visit my [Google Scholar profile](https://scholar.google.com/citations?user=iLVzwyUAAAAJ&hl=en).

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
