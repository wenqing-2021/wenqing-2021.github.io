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

  const cards = page.locator(".home-projects .card");
  await expect(cards).toHaveCount(4);
  await expect(cards.locator(".card-title")).toHaveText([
    "Risk-Reachable Motion Planning",
    "Automated Valet Parking",
    "Safe RL for On-Ramp Merging",
    "EasyRLlib",
  ]);
  await expect(page.getByRole("link", { name: "View all projects →" })).toHaveAttribute("href", "/al-folio/projects/");
});

test("homepage project cards remain single-column and responsive", async ({ page }, testInfo) => {
  await preparePage(page, "light");
  await page.goto("/al-folio/", { waitUntil: "networkidle" });
  await stabilizeVisuals(page);

  const cards = page.locator(".home-projects .card");
  const cardBoxes = await cards.evaluateAll((nodes) => nodes.map((node) => node.getBoundingClientRect()).map(({ x, y, width }) => ({ x, y, width })));
  expect(cardBoxes).toHaveLength(4);
  for (let index = 1; index < cardBoxes.length; index += 1) {
    expect(Math.abs(cardBoxes[index].x - cardBoxes[0].x)).toBeLessThanOrEqual(1);
    expect(Math.abs(cardBoxes[index].width - cardBoxes[0].width)).toBeLessThanOrEqual(1);
    expect(cardBoxes[index].y).toBeGreaterThan(cardBoxes[index - 1].y);
  }

  const firstCard = cards.first();
  const imageBox = await firstCard.locator(".col-md-6").first().boundingBox();
  const textBox = await firstCard.locator(".col-md-6").nth(1).boundingBox();
  expect(imageBox).not.toBeNull();
  expect(textBox).not.toBeNull();
  if (testInfo.project.name === "mobile") {
    expect(textBox.y).toBeGreaterThanOrEqual(imageBox.y + imageBox.height - 1);
  } else {
    expect(textBox.x).toBeGreaterThanOrEqual(imageBox.x + imageBox.width - 1);
    expect(Math.abs(textBox.y - imageBox.y)).toBeLessThanOrEqual(1);
  }
});

test("project cards hover with upward lift animation", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "mobile", "hover-specific assertion is desktop-only");

  await preparePage(page, "light");
  await page.goto("/al-folio/projects/", { waitUntil: "networkidle" });
  await stabilizeVisuals(page);

  const card = page.locator(".projects .hoverable").first();
  await expect(card).toBeVisible();
  const before = await card.boundingBox();
  await card.hover();
  await page.waitForTimeout(150);
  const after = await card.boundingBox();
  expect(before).not.toBeNull();
  expect(after).not.toBeNull();
  expect(after.y).toBeLessThan(before.y);
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
