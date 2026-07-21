---
layout: about
title: about
permalink: /
subtitle:

profile:
  align: left
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p class="profile-name">Shijie Yuan</p>
    <p class="profile-location">Shanghai, China</p>
    <div class="profile-social-links">
      <a href="mailto:yuansj@hnu.edu.cn" title="Email"><i class="fa-solid fa-envelope"></i> yuansj@hnu.edu.cn</a>
      <a href="https://github.com/wenqing-2021" title="GitHub"><i class="fa-brands fa-github"></i> GitHub</a>
      <a href="https://scholar.google.com/citations?user=iLVzwyUAAAAJ&amp;hl=en" title="Google Scholar"><i class="ai ai-google-scholar"></i> Google Scholar</a>
    </div>

selected_papers: true
social: false

announcements:
  enabled: true
  scrollable: false
  limit: 5

latest_posts:
  enabled: false
---

<style>
  /* === Fonts === */
  body {
    font-family: "Trebuchet MS", Helvetica, sans-serif;
  }

  h1, h2, h3, h4, h5, h6,
  .post-title, .title, .navbar-brand,
  .profile .name {
    font-family: "Trebuchet MS", Helvetica, sans-serif;
  }

  figcaption, .caption, .pub-meta, .news-date,
  .profile-location, .more-info {
    font-family: Georgia, Times, serif;
  }

  code, pre, kbd, samp,
  .highlight, .code {
    font-family: Monaco, Consolas, "Lucida Console", monospace;
  }

  /* === Fix bold text (overridden by theme) === */
  strong, b {
    font-weight: 600;
  }

  /* === Hide theme's top-level name & subtitle === */
  .post-title,
  .desc {
    display: none;
  }

  .post-header {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .profile {
    width: 36%;
    max-width: 130px;
    margin-right: 3rem !important;
  }

  .profile .more-info {
    text-align: left;
    font-size: 0.78rem;
    width: 100%;
  }

  .profile-name {
    margin: 0.45rem 0 0.1rem;
    font-size: 1.05rem;
    font-weight: 600;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    color: var(--global-text-color);
  }

  @media (min-width: 576px) {
    .profile {
      width: 18%;
    }
  }

  /* --- profile column gap to content --- */
  .post-header + .row,
  .about .row,
  div:has(> .profile) {
    gap: 3rem;
  }

  .profile-location {
    margin: 0.15rem 0 1.2rem !important;
    font-size: 0.8rem;
    color: var(--global-text-color-light, #666);
  }

  .profile-social-links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin: 0;
  }

  .profile-social-links a {
    color: var(--global-text-color);
    font-size: 0.82rem;
    line-height: 1.6;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .profile-social-links a i,
  .profile-social-links a .ai {
    font-size: 1rem;
    width: 1.2rem;
    text-align: center;
  }

  .profile-social-links a:hover {
    color: var(--global-theme-color);
    text-decoration: none;
  }

  /* --- align news & publications with body text --- */
  article > h2,
  article > .news,
  article > .publications {
    margin-left: 11rem;
  }

  /* --- divider under section headings --- */
  article > h2 {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 0.35rem;
    margin-bottom: 0.8rem;
  }

  /* --- capitalize "news", remove its link --- */
  article > h2:first-of-type {
    text-transform: capitalize;
    font-weight: 300;
  }
  article > h2:first-of-type a {
    pointer-events: none;
    text-decoration: none;
    color: inherit;
  }

  /* --- rename "selected publications" → "Publications" --- */
  article > h2:nth-of-type(2) {
    font-weight: 300;
  }
  article > h2:nth-of-type(2) a {
    font-size: 0;
    pointer-events: none;
  }
  article > h2:nth-of-type(2) a::before {
    content: "Publications";
    font-size: 2rem;
    color: var(--global-text-color);
  }
</style>

<script>
  /* --- reformat news dates to YYYY.MM.DD --- */
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('article .news th[scope="row"]').forEach(function (th) {
      var txt = th.textContent.trim();
      var d = new Date(txt);
      if (!isNaN(d.getTime())) {
        var y = d.getFullYear();
        var m = String(d.getMonth() + 1).padStart(2, '0');
        th.textContent = y + '.' + m;
      }
    });
  });
</script>

I am an autonomous driving algorithm engineer currently **seeking Ph.D. opportunities**. I received my M.E. in Mechanical Engineering from [Hunan University](https://www-en.hnu.edu.cn/) in 2024 and my B.E. in Vehicle Engineering from [Dalian University of Technology](https://en.dlut.edu.cn/) in 2021.

At [Li Auto](https://www.liauto.com/) (2024–2026), I developed learning-based trajectory planning modules that have been deployed in millions of production vehicles. My research interests include **safe reinforcement learning**, **risk-aware motion planning**, and **constrained optimization** for complex driving scenarios. My long-term goal is to develop safe, intelligent, and trustworthy robotic systems that assist human beings, augment human capabilities, and improve quality of life.