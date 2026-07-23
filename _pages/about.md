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

  /* --- align homepage sections with body text --- */
  article > h2,
  article > .news,
  article > .publications,
  article .education,
  article .home-projects {
    margin-left: 11rem;
  }

  .education,
  .home-projects {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .education > h2,
  .home-projects > h2 {
    font-weight: 300;
  }

  .education-list {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  .education-item {
    display: grid;
    grid-template-columns: max-content minmax(0, 1fr);
    column-gap: 1rem;
  }

  .education-period {
    color: var(--global-text-color-light, #666);
    font-family: Georgia, Times, serif;
    white-space: nowrap;
  }

  .education-school,
  .education-degree,
  .education-detail {
    margin: 0;
  }

  .education-school {
    font-weight: 600;
  }

  .education-detail {
    color: var(--global-text-color-light, #666);
    font-size: 0.9rem;
  }

  /* --- single-column project list: full covers on the left, title links on the right --- */
  .project-list {
    margin: 0;
    padding: 0;
  }

  .project-list-item {
    display: grid;
    grid-template-columns: minmax(13rem, 16rem) minmax(0, 1fr);
    gap: 1.4rem;
    align-items: center;
    padding: 1.1rem 0;
    border-bottom: 1px solid var(--global-divider-color);
  }

  .project-list-item:first-child {
    padding-top: 0;
  }

  .project-list-media {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 16 / 9;
    padding: 0.35rem;
    overflow: hidden;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.5rem;
    background: var(--global-card-bg-color);
  }

  .project-list-media img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .project-list-title {
    margin: 0;
    font-size: 1.08rem;
    font-weight: 500;
    line-height: 1.4;
  }

  .project-list-title a {
    color: var(--global-text-color);
    text-decoration: none;
  }

  .project-list-title a:hover {
    color: var(--global-theme-color);
    text-decoration: underline;
  }

  .home-projects-link {
    margin: -0.15rem 0 0;
    text-align: right;
  }

  .home-projects-link a {
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
  }

  .home-projects-link a:hover {
    text-decoration: underline;
  }

  /* --- keep news dates close to their corresponding events --- */
  article > .news th[scope="row"] {
    width: 1% !important;
    padding-right: 1rem;
    white-space: nowrap;
  }

  article > .news td {
    padding-left: 0;
  }

  /* --- divider under section headings --- */
  article > h2,
  .education > h2,
  .home-projects > h2 {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 0.35rem;
    margin-bottom: 0.8rem;
  }

  /* --- capitalize "news", remove its link --- */
  article > h2:has(+ .news) {
    text-transform: capitalize;
    font-weight: 300;
  }
  article > h2:has(+ .news) a {
    pointer-events: none;
    text-decoration: none;
    color: inherit;
  }

  /* --- rename "selected publications" → "Publications" --- */
  article > h2:has(+ .publications) {
    font-weight: 300;
  }
  article > h2:has(+ .publications) a {
    font-size: 0;
    pointer-events: none;
  }
  article > h2:has(+ .publications) a::before {
    content: "Publications";
    font-size: 2rem;
    color: var(--global-text-color);
  }

  @media (max-width: 767.98px) {
    article > h2,
    article > .news,
    article > .publications,
    article .education,
    article .home-projects {
      margin-left: 0;
    }
  }

  @media (max-width: 575.98px) {
    .project-list-item {
      grid-template-columns: minmax(7.5rem, 9rem) minmax(0, 1fr);
      gap: 0.9rem;
    }

    .project-list-title {
      font-size: 1rem;
    }

    .education-item {
      grid-template-columns: minmax(0, 1fr);
      row-gap: 0.1rem;
    }
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

<section class="education">
  <h2>Education</h2>
  <div class="education-list">
    <div class="education-item">
      <div class="education-period">2021.09–2024.06</div>
      <div>
        <p class="education-school"><a href="https://www-en.hnu.edu.cn/">Hunan University</a></p>
        <p class="education-degree">M.E. in Mechanical Engineering · GPA: 3.57</p>
        <p class="education-detail">Thesis: The Trajectory Planning Method for Intelligent Vehicles Using Reinforcement Learning and Risk-Reachable Sets</p>
      </div>
    </div>
    <div class="education-item">
      <div class="education-period">2017.09–2021.06</div>
      <div>
        <p class="education-school"><a href="https://en.dlut.edu.cn/">Dalian University of Technology</a></p>
        <p class="education-degree">B.E. in Vehicle Engineering · GPA: 3.45</p>
        <p class="education-detail">Excellent Graduate of Dalian University of Technology</p>
      </div>
    </div>
  </div>
</section>

<section class="home-projects">
  <h2>Projects</h2>
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="project-list">
    {% for project in sorted_projects %}
      <article class="project-list-item">
        <div class="project-list-media">
          <img src="{{ project.img | prepend: '/' | relative_url }}" alt="{{ project.title }} project cover" loading="lazy">
        </div>
        <h3 class="project-list-title"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
      </article>
    {% endfor %}
  </div>
  <p class="home-projects-link"><a href="{{ '/projects/' | relative_url }}">View all projects →</a></p>
</section>
