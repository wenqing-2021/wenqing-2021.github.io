const { test, expect } = require("@playwright/test");
const { preparePage, stabilizeVisuals } = require("./helpers");

test("publications Abs toggle opens and closes", async ({ page }) => {
  await preparePage(page, "light");
  await page.goto("/al-folio/publications/", { waitUntil: "networkidle" });
  await stabilizeVisuals(page);

  const absButton = page.getByRole("button", { name: "Abs" }).first();
  await expect(absButton).toBeVisible();

  const panel = page.locator(".abstract.hidden").first();
  await absButton.click();
  await expect(panel).toHaveClass(/open/);
  await absButton.click();
  await expect(panel).not.toHaveClass(/open/);
});

test("publication popover works without bootstrap compat runtime", async ({ page }) => {
  await preparePage(page, "light");
  await page.goto("/al-folio/publications/", { waitUntil: "networkidle" });
  await stabilizeVisuals(page);

  const popoverTrigger = page.locator('[data-toggle="popover"]').first();
  test.skip((await popoverTrigger.count()) === 0, "no popover trigger found in publication data");

  await popoverTrigger.hover();
  await expect(page.locator(".af-popover")).toBeVisible();
});

test("mobile navbar can expand and collapse", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "mobile-only navigation behavior");

  await preparePage(page, "light");
  await page.goto("/al-folio/", { waitUntil: "networkidle" });

  const toggle = page.locator(".navbar-toggler").first();
  const nav = page.locator(".navbar-collapse").first();
  await expect(toggle).toBeVisible();
  await toggle.click();
  await expect(nav).toHaveClass(/show/);
  await toggle.click();
  await expect(nav).not.toHaveClass(/show/);
});

test("repositories page renders deterministic stat cards", async ({ page }) => {
  await preparePage(page, "light");
  await page.goto("/al-folio/repositories/", { waitUntil: "networkidle" });
  await stabilizeVisuals(page);

  const repoImages = page.locator('img[src*="github-readme-stats"], img[src*="github-profile-trophy"]');
  await expect(repoImages.first()).toBeVisible();
  const renderedCount = await repoImages.evaluateAll((images) => images.filter((img) => img.complete && img.naturalWidth > 0).length);
  expect(renderedCount).toBeGreaterThan(0);
});

test("navbar menu stays right-aligned on desktop", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "mobile", "desktop-only alignment contract");

  await preparePage(page, "light");
  await page.goto("/al-folio/", { waitUntil: "networkidle" });
  await stabilizeVisuals(page);

  const alignment = await page.evaluate(() => {
    const container = document.querySelector("#navbar .container");
    const menu = document.querySelector("#navbarNav .navbar-menu-list");
    if (!container || !menu) return null;
    return {
      containerRight: container.getBoundingClientRect().right,
      menuRight: menu.getBoundingClientRect().right,
    };
  });

  expect(alignment).not.toBeNull();
  expect(Math.abs(alignment.menuRight - alignment.containerRight)).toBeLessThanOrEqual(24);
});

test("navbar controls are interactive on desktop", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "mobile", "controls are collapsed under the mobile menu");

  await preparePage(page, "light");
  await page.goto("/al-folio/", { waitUntil: "networkidle" });
  await stabilizeVisuals(page);

  await page.evaluate(() => {
    const ninjaKeys = document.querySelector("ninja-keys");
    if (!ninjaKeys || typeof ninjaKeys.open !== "function") return;
    ninjaKeys.__openCalled = false;
    const originalOpen = ninjaKeys.open.bind(ninjaKeys);
    ninjaKeys.open = () => {
      ninjaKeys.__openCalled = true;
      return originalOpen();
    };
  });

  await page.click("#search-toggle");
  await expect.poll(() => page.evaluate(() => Boolean(document.querySelector("ninja-keys")?.__openCalled))).toBeTruthy();
  await expect(page.locator("#search-toggle")).toHaveCSS("cursor", "pointer");
  await expect(page.locator("#light-toggle")).toHaveCSS("cursor", "pointer");
});

test("homepage sections and projects use the expected order", async ({ page }) => {
  await preparePage(page, "light");
  await page.goto("/al-folio/", { waitUntil: "networkidle" });
  await stabilizeVisuals(page);

  const orderIsValid = await page.evaluate(() => {
    const selectors = [".education", ".home-projects", ".news", ".publications"];
    const elements = selectors.map((selector) => document.querySelector(`article ${selector}`));
    if (elements.some((element) => !element)) return false;
    return elements
      .slice(0, -1)
      .every((element, index) => Boolean(element.compareDocumentPosition(elements[index + 1]) & Node.DOCUMENT_POSITION_FOLLOWING));
  });
  expect(orderIsValid).toBeTruthy();

  const projectItems = page.locator(".home-projects .project-list-item");
  await expect(projectItems).toHaveCount(4);
  await expect(projectItems.locator(".project-list-title")).toHaveText([
    "The Trajectory Planning Method for Intelligent Vehicles Using Reinforcement Learning and Risk-Reachable Sets",
    "Automated Valet Parking",
    "Safe RL for On-Ramp Merging",
    "EasyRLlib",
  ]);
  await expect(page.getByRole("link", { name: "View all projects →" })).toHaveAttribute("href", "/al-folio/projects/");
});

test("homepage project list remains single-column with complete left-aligned covers", async ({ page }) => {
  await preparePage(page, "light");
  await page.goto("/al-folio/", { waitUntil: "networkidle" });
  await stabilizeVisuals(page);

  const projectItems = page.locator(".home-projects .project-list-item");
  const itemBoxes = await projectItems.evaluateAll((nodes) =>
    nodes.map((node) => node.getBoundingClientRect()).map(({ x, y, width }) => ({ x, y, width }))
  );
  expect(itemBoxes).toHaveLength(4);
  for (let index = 1; index < itemBoxes.length; index += 1) {
    expect(Math.abs(itemBoxes[index].x - itemBoxes[0].x)).toBeLessThanOrEqual(1);
    expect(Math.abs(itemBoxes[index].width - itemBoxes[0].width)).toBeLessThanOrEqual(1);
    expect(itemBoxes[index].y).toBeGreaterThan(itemBoxes[index - 1].y);
  }

  const firstItem = projectItems.first();
  const imageBox = await firstItem.locator(".project-list-media").boundingBox();
  const textBox = await firstItem.locator(".project-list-title").boundingBox();
  expect(imageBox).not.toBeNull();
  expect(textBox).not.toBeNull();
  expect(textBox.x).toBeGreaterThanOrEqual(imageBox.x + imageBox.width - 1);
  await expect(firstItem.locator("a")).toHaveAttribute("href", "/al-folio/projects/risk-reachable-motion-planning/");
  await expect(firstItem.locator("img")).toHaveAttribute(
    "src",
    "/al-folio/assets/img/projects/risk-reachable-motion-planning/risk-aware-traj-planning-PIC.png"
  );
});

test("risk-reachable project uses the research case-study structure", async ({ page }) => {
  await preparePage(page, "light");
  await page.goto("/al-folio/projects/risk-reachable-motion-planning/", { waitUntil: "networkidle" });
  await stabilizeVisuals(page);

  const project = page.locator(".post", { has: page.locator(".research-project") });
  await expect(project.locator(".post-title")).toHaveText(
    "The Trajectory Planning Method for Intelligent Vehicles Using Reinforcement Learning and Risk-Reachable Sets"
  );
  await expect(project.locator(".post-description")).toBeHidden();
  await expect(project.locator(".research-project > h2")).toHaveText(["Abstract", "Keywords", "Methods", "Experiments", "Results"]);
  await expect(project.locator(".project-figure img")).toHaveCount(2);
  await expect(project.loc('img[src$="safe_risk_traj_planning.png"]')).toBeVisible();
  await expect(project.locator('img[src$="cppo_us101_26.gif"]')).toBeVisible();
  await expect(project.locator('img[src$="risk-reachable-results.svg"]')).toHaveCount(0);
  await expect(project.locator(".project-links--header")).toContainText("Source Code");
  await expect(project.locator(".project-links--header")).toContainText("Master Thesis");
  await expect(project.locator(".metric-table")).toBeVisible();
});

test("projects page uses title-only links beside complete covers", async ({ page }) => {
  await preparePage(page, "light");
  await page.goto("/al-folio/projects/", { waitUntil: "networkidle" });
  await stabilizeVisuals(page);

  const projectItems = page.locator(".project-list-item");
  await expect(projectItems).toHaveCount(4);
  await expect(projectItems.first().locator("a")).toHaveText(
    "The Trajectory Planning Method for Intelligent Vehicles Using Reinforcement Learning and Risk-Reachable Sets"
  );
  await expect(projectItems.first().locator("a")).toHaveAttribute("href", "/al-folio/projects/risk-reachable-motion-planning/");
  await expect(projectItems.first().locator(".project-list-media a")).toHaveCount(0);
});

test("published pages load without jQuery-style runtime errors", async ({ page }) => {
  const failures = [];
  page.on("pageerror", (error) => failures.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") failures.push(message.text());
  });

  await preparePage(page, "light");
  const pages = [
    "/al-folio/",
    "/al-folio/projects/",
    "/al-folio/publications/",
    "/al-folio/repositories/",
    "/al-folio/projects/risk-reachable-motion-planning/",
    "/al-folio/projects/automated-valet-parking/",
    "/al-folio/projects/safe-on-ramp-merging/",
    "/al-folio/projects/easy-rllib/",
  ];

  for (const target of pages) {
    const response = await page.goto(target, { waitUntil: "networkidle" });
    expect(response?.status()).toBeLessThan(400);
    await stabilizeVisuals(page);
  }

  expect(failures.filter((message) => /\$\s*is not defined|lightbox/i.test(message))).toEqual([]);
});
