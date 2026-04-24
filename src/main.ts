import "./main.css";
import WebGL from "./webgl";

import aboutContent from "./pages/about.html?raw";
import projectsContent from "./pages/projects.html?raw";
import news from "./pages/news.html?raw";

const contentRoot = document.getElementById("content-root");
if (contentRoot) {
  contentRoot.innerHTML = aboutContent + projectsContent + news;
}

WebGL();

const root = document.documentElement;

function onScroll() {
  if (window.scrollY > 10) root.dataset.scroll = "true";
  else root.dataset.scroll = "false";
}

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });