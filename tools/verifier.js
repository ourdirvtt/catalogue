#!/usr/bin/env node
// Ourdir catalogue verifier 0.1.0. (c) Ourdir. Usage limited to the Ourdir catalogue: see LICENSE next to this file.
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// apps/desktop/renderer/builder-theme.js
var require_builder_theme = __commonJS({
  "apps/desktop/renderer/builder-theme.js"(exports2, module2) {
    "use strict";
    (function(root, factory) {
      if (typeof module2 === "object" && module2.exports) module2.exports = factory();
      else root.TTBuilderTheme = factory();
    })(typeof self !== "undefined" ? self : exports2, function() {
      "use strict";
      var HEX = /^#[0-9a-fA-F]{6}$/;
      var SKIN_ID_RE = /^[a-z0-9_]{1,24}$/;
      var FONTS = {
        system: { label: "Moderne (syst\xE8me)", css: '"Segoe UI", system-ui, -apple-system, sans-serif' },
        rounded: { label: "Arrondie", css: '"Trebuchet MS", "Segoe UI", sans-serif' },
        geometric: { label: "G\xE9om\xE9trique", css: '"Century Gothic", "Franklin Gothic Medium", Tahoma, sans-serif' },
        impact: { label: "Affiche (gras condens\xE9)", css: 'Impact, "Arial Narrow Bold", "Franklin Gothic Heavy", sans-serif' },
        serif: { label: "Serif classique", css: 'Georgia, "Times New Roman", serif' },
        book: { label: "Livre ancien", css: '"Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif' },
        typewriter: { label: "Machine \xE0 \xE9crire", css: '"Courier New", Courier, monospace' },
        mono: { label: "Terminal", css: 'Consolas, "Lucida Console", "Courier New", monospace' },
        hand: { label: "Manuscrite", css: '"Segoe Print", "Bradley Hand", "Comic Sans MS", cursive' },
        // the library shipped with Ourdir (loom-themes.css in the game, the launcher's stylesheets in the editor): open licences, fetched only when used
        alegreya: { label: "Alegreya (livre)", family: "Alegreya", css: '"Alegreya", Georgia, serif' },
        barlow: { label: "Barlow Condensed (affiche)", family: "Barlow Condensed", css: '"Barlow Condensed", "Arial Narrow", sans-serif' },
        inter: { label: "Inter (net)", family: "Inter", css: '"Inter", "Segoe UI", sans-serif' },
        jetbrains: { label: "JetBrains Mono (code)", family: "JetBrains Mono", css: '"JetBrains Mono", Consolas, monospace' },
        exo2: { label: "Exo 2 (science-fiction)", family: "Exo 2", css: '"Exo 2", "Segoe UI", sans-serif' },
        michroma: { label: "Michroma (large, techno)", family: "Michroma", css: '"Michroma", "Segoe UI", sans-serif' },
        fell: { label: "IM Fell English (grimoire)", family: "IM Fell English", css: '"IM Fell English", Georgia, serif' },
        crimson: { label: "Crimson Pro (roman)", family: "Crimson Pro", css: '"Crimson Pro", Georgia, serif' },
        playfair: { label: "Playfair Display (\xE9l\xE9gant)", family: "Playfair Display", css: '"Playfair Display", Georgia, serif' },
        courierprime: { label: "Courier Prime (machine \xE0 \xE9crire)", family: "Courier Prime", css: '"Courier Prime", "Courier New", monospace' },
        specialelite: { label: "Special Elite (machine us\xE9e)", family: "Special Elite", css: '"Special Elite", "Courier New", monospace' },
        chakra: { label: "Chakra Petch (HUD)", family: "Chakra Petch", css: '"Chakra Petch", "Segoe UI", sans-serif' },
        sharetech: { label: "Share Tech Mono (terminal)", family: "Share Tech Mono", css: '"Share Tech Mono", Consolas, monospace' },
        stencil: { label: "Saira Stencil One (pochoir)", family: "Saira Stencil One", css: '"Saira Stencil One", Impact, sans-serif' },
        caveat: { label: "Caveat (manuscrite)", family: "Caveat", css: '"Caveat", "Segoe Print", cursive' }
      };
      var COLOR_KEYS = [
        { k: "bg", label: "Fond de la fiche" },
        { k: "surface", label: "Panneaux" },
        { k: "surface2", label: "Panneaux en creux" },
        { k: "text", label: "Texte" },
        { k: "muted", label: "Texte discret" },
        { k: "accent", label: "Accent principal" },
        { k: "accent2", label: "Accent secondaire" },
        { k: "border", label: "Bordures" },
        { k: "headerBg", label: "Bandeau (fond)" },
        { k: "headerText", label: "Bandeau (texte)" },
        { k: "inputBg", label: "Champs (fond)" },
        { k: "inputText", label: "Champs (texte)" },
        { k: "computed", label: "Valeurs calcul\xE9es" }
      ];
      var ENUMS = {
        background: { kind: ["solid", "gradient", "grid", "dots", "lines", "scanlines", "vignette", "image"], imageMode: ["cover", "tile", "center"] },
        shape: { borderStyle: ["solid", "double", "dashed", "none"], shadow: ["none", "soft", "hard", "glow"], frame: ["none", "brackets", "tape", "ascii"], spacing: ["none", "airy"] },
        stat: { style: ["plain", "boxed", "stripe", "terminal"] },
        gauge: { style: ["bar", "segments", "blocks"], color: ["accent", "accent2"] },
        tag: { style: ["paper", "hud", "terminal", "sticker"] },
        header: { style: ["flat", "gradient", "line", "glow"], align: ["left", "center"] },
        fields: { style: ["filled", "outlined", "underline"] },
        fonts: { headingCase: ["none", "upper"] },
        titleRule: ["none", "line", "double", "dashed", "glow"]
      };
      var ENUM_LABELS = {
        kind: { solid: "Uni", gradient: "D\xE9grad\xE9", grid: "Quadrillage", dots: "Points", lines: "Lignes", scanlines: "Balayage \xE9cran", vignette: "Vignette", image: "Image" },
        imageMode: { cover: "Remplit la fiche", tile: "R\xE9p\xE9t\xE9e en mosa\xEFque", center: "Centr\xE9e, enti\xE8re" },
        borderStyle: { solid: "Trait plein", double: "Double trait", dashed: "Pointill\xE9", none: "Aucune" },
        shadow: { none: "Aucune", soft: "Douce", hard: "D\xE9cal\xE9e", glow: "Halo lumineux" },
        style: { flat: "Plat", gradient: "D\xE9grad\xE9", line: "Filet", glow: "Halo", filled: "Rempli", outlined: "Contour", underline: "Soulignement" },
        align: { left: "\xC0 gauche", center: "Centr\xE9" },
        headingCase: { none: "Normale", upper: "Majuscules" },
        titleRule: { none: "Aucun", line: "Filet", double: "Double filet", dashed: "Pointill\xE9", glow: "Lueur" },
        frame: { none: "Aucun", brackets: "Crochets de vis\xE9e", tape: "Adh\xE9sif", ascii: "Terminal (ASCII)" },
        spacing: { none: "Serr\xE9 (les cartes se touchent)", airy: "A\xE9r\xE9 (un \xE9cart entre les cartes)" },
        statStyle: { plain: "Simple", boxed: "Encadr\xE9", stripe: "Filet en haut", terminal: "Terminal" },
        gaugeStyle: { bar: "Barre pleine", segments: "Segments", blocks: "Blocs (\u2588\u2591)" },
        gaugeColor: { accent: "Accent principal", accent2: "Accent secondaire" },
        tagStyle: { paper: "Papier", hud: "HUD", terminal: "Terminal", sticker: "Sticker" }
      };
      var RANGES = {
        fontSize: [11, 18],
        headingSpacing: [0, 6],
        angle: [0, 360],
        patternSize: [6, 80],
        patternOpacity: [0, 60],
        radius: [0, 24],
        borderWidth: [0, 4],
        chamfer: [0, 24]
      };
      var ASSET_TYPES = {
        "font/woff2": { kind: "font", fmt: "woff2", magic: [119, 79, 70, 50] },
        "font/woff": { kind: "font", fmt: "woff", magic: [119, 79, 70, 70] },
        "font/ttf": { kind: "font", fmt: "truetype", magic: [0, 1, 0, 0] },
        "font/otf": { kind: "font", fmt: "opentype", magic: [79, 84, 84, 79] },
        "image/png": { kind: "image", magic: [137, 80, 78, 71, 13, 10, 26, 10] },
        "image/jpeg": { kind: "image", magic: [255, 216, 255] },
        "image/webp": { kind: "image", magic: [82, 73, 70, 70, null, null, null, null, 87, 69, 66, 80] }
      };
      var ASSET_LIMITS = { count: 8, font: 400 * 1024, image: 800 * 1024, total: 3 * 1024 * 1024, name: 60 };
      var ASSET_ID_RE = /^[a-z0-9_]{1,24}$/;
      var B64_RE = /^[A-Za-z0-9+\/]+={0,2}$/;
      var B64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      function firstBytes(b64) {
        var out = [];
        var head = b64.slice(0, 16);
        for (var i = 0; i + 3 < head.length + 0 && i < 16; i += 4) {
          var n = 0;
          for (var j = 0; j < 4; j++) {
            var ch = head.charAt(i + j);
            n = n << 6 | (ch === "=" ? 0 : B64_CHARS.indexOf(ch));
          }
          out.push(n >> 16 & 255, n >> 8 & 255, n & 255);
        }
        return out;
      }
      function decodedSize(b64) {
        return Math.floor(b64.length * 3 / 4) - (b64.slice(-2) === "==" ? 2 : b64.slice(-1) === "=" ? 1 : 0);
      }
      function validateAssets(assets) {
        var errors = [];
        if (assets === void 0 || assets === null) return errors;
        if (!Array.isArray(assets)) return ["Fichiers embarqu\xE9s illisibles."];
        if (assets.length > ASSET_LIMITS.count) errors.push("Trop de fichiers embarqu\xE9s (" + ASSET_LIMITS.count + " max).");
        var seen = {}, total = 0;
        assets.forEach(function(a) {
          var label = a && typeof a.id === "string" ? "\xAB " + a.id + " \xBB" : "";
          if (!isObj4(a) || typeof a.id !== "string" || !ASSET_ID_RE.test(a.id)) return errors.push("Identifiant de fichier embarqu\xE9 invalide.");
          if (seen[a.id]) return errors.push("Fichier embarqu\xE9 " + label + " en double.");
          seen[a.id] = true;
          var type = ASSET_TYPES[a.mime];
          if (!type) return errors.push("Fichier " + label + " : type non accept\xE9 (polices woff2, woff, ttf, otf ; images png, jpeg, webp).");
          if (a.kind !== type.kind) return errors.push("Fichier " + label + " : type incoh\xE9rent.");
          if (typeof a.name !== "string" || a.name.length > ASSET_LIMITS.name) return errors.push("Fichier " + label + " : nom invalide.");
          if (typeof a.data !== "string" || a.data.length % 4 !== 0 || !B64_RE.test(a.data)) return errors.push("Fichier " + label + " : contenu illisible.");
          var size = decodedSize(a.data);
          total += size;
          if (size > ASSET_LIMITS[type.kind]) return errors.push("Fichier " + label + " trop lourd (" + Math.round(ASSET_LIMITS[type.kind] / 1024) + " Ko max pour " + (type.kind === "font" ? "une police" : "une image") + ").");
          var bytes = firstBytes(a.data);
          var ok = type.magic.every(function(b, i) {
            return b === null || bytes[i] === b;
          });
          if (!ok) errors.push("Fichier " + label + " : le contenu ne correspond pas au type annonc\xE9.");
        });
        if (total > ASSET_LIMITS.total) errors.push("Les fichiers embarqu\xE9s d\xE9passent " + Math.round(ASSET_LIMITS.total / 1048576) + " Mo au total.");
        return errors;
      }
      var assetOf = function(assets, id) {
        return (Array.isArray(assets) ? assets : []).filter(function(a) {
          return isObj4(a) && a.id === id;
        })[0] || null;
      };
      var assetFontId = function(v) {
        return typeof v === "string" && v.indexOf("asset:") === 0 ? v.slice(6) : null;
      };
      var dataUrl = function(a) {
        return 'url("data:' + a.mime + ";base64," + a.data + '")';
      };
      var isObj4 = function(v) {
        return v !== null && typeof v === "object" && !Array.isArray(v);
      };
      var isInt = function(v, r) {
        return typeof v === "number" && Number.isInteger(v) && v >= r[0] && v <= r[1];
      };
      function makeTheme(o) {
        return {
          name: o.name,
          colors: o.colors,
          fonts: { body: o.body, heading: o.heading, size: o.size || 13, headingCase: o.headingCase || "none", headingSpacing: o.headingSpacing || 0 },
          background: Object.assign({ kind: "solid", color2: o.colors.surface2, angle: 160, patternColor: o.colors.accent, patternSize: 28, patternOpacity: 12, image: "", imageMode: "cover" }, o.background || {}),
          shape: Object.assign({ radius: 6, borderWidth: 1, borderStyle: "solid", shadow: "none", chamfer: 0, frame: "none", spacing: "none" }, o.shape || {}),
          header: Object.assign({ style: "flat", align: "left" }, o.header || {}),
          fields: Object.assign({ style: "filled" }, o.fields || {}),
          titleRule: o.titleRule || "line",
          stat: Object.assign({ style: "plain" }, o.stat || {}),
          gauge: Object.assign({ style: "bar", color: "accent" }, o.gauge || {}),
          tag: Object.assign({ style: "paper" }, o.tag || {})
        };
      }
      var DEFAULTS = { frame: "none", spacing: "none", stat: { style: "plain" }, gauge: { style: "bar", color: "accent" }, tag: { style: "paper" } };
      function withDefaults(t) {
        if (!isObj4(t)) return t;
        var out = JSON.parse(JSON.stringify(t));
        if (isObj4(out.shape) && out.shape.frame === void 0) out.shape.frame = DEFAULTS.frame;
        if (isObj4(out.shape) && out.shape.spacing === void 0) out.shape.spacing = DEFAULTS.spacing;
        ["stat", "gauge", "tag"].forEach(function(k) {
          if (out[k] === void 0) out[k] = JSON.parse(JSON.stringify(DEFAULTS[k]));
        });
        return out;
      }
      var PRESETS = {
        // the look of Ourdir itself: a paper in a dark room (see the game's Métier theme); the one a new system starts with
        metier: makeTheme({
          name: "M\xE9tier (papier)",
          colors: { bg: "#ece4d0", surface: "#e1d7bd", surface2: "#d6cbae", text: "#2b2118", muted: "#7a6a55", accent: "#8a6a1c", accent2: "#303873", border: "#c9bc9d", headerBg: "#2b2118", headerText: "#ece4d0", inputBg: "#e1d7bd", inputText: "#2b2118", computed: "#2c5e50" },
          body: "system",
          heading: "book",
          size: 13,
          headingCase: "none",
          headingSpacing: 0,
          background: { kind: "solid" },
          shape: { radius: 6, borderWidth: 1, borderStyle: "solid", shadow: "soft" },
          header: { style: "flat", align: "left" },
          fields: { style: "underline" },
          titleRule: "line"
        }),
        classic: makeTheme({
          name: "Classique sombre",
          colors: { bg: "#262626", surface: "#313131", surface2: "#1f1f1f", text: "#ffffff", muted: "#a8a8a8", accent: "#e8a33d", accent2: "#5fb0e0", border: "#4a4a4a", headerBg: "#1a1a1a", headerText: "#ffffff", inputBg: "#3d3d3d", inputText: "#ffffff", computed: "#90ee90" },
          body: "system",
          heading: "system",
          shape: { radius: 4 }
        }),
        grimoire: makeTheme({
          name: "Grimoire (m\xE9di\xE9val fantasy)",
          colors: { bg: "#2b2118", surface: "#3a2d20", surface2: "#241b13", text: "#efe3c8", muted: "#b39d78", accent: "#d4a93a", accent2: "#8c5a2b", border: "#7a5c34", headerBg: "#4a2f1a", headerText: "#f6e7c1", inputBg: "#231a12", inputText: "#f6e7c1", computed: "#c9e08a" },
          body: "book",
          heading: "book",
          size: 14,
          headingCase: "upper",
          headingSpacing: 2,
          background: { kind: "vignette" },
          shape: { radius: 3, borderWidth: 3, borderStyle: "double", shadow: "soft" },
          header: { style: "gradient", align: "center" },
          fields: { style: "outlined" },
          titleRule: "double"
        }),
        neon: makeTheme({
          name: "N\xE9on (cyberpunk)",
          colors: { bg: "#0d0b14", surface: "#17132a", surface2: "#100d1d", text: "#e9e6ff", muted: "#8f89b8", accent: "#ff2a8a", accent2: "#00e5ff", border: "#3a2a6b", headerBg: "#1d1236", headerText: "#00e5ff", inputBg: "#0a0812", inputText: "#00e5ff", computed: "#f9f871" },
          body: "geometric",
          heading: "mono",
          size: 13,
          headingCase: "upper",
          headingSpacing: 3,
          background: { kind: "scanlines", patternColor: "#00e5ff", patternOpacity: 6 },
          shape: { radius: 0, borderWidth: 1, borderStyle: "solid", shadow: "glow", chamfer: 12 },
          header: { style: "glow", align: "left" },
          fields: { style: "underline" },
          titleRule: "glow"
        }),
        station: makeTheme({
          name: "Station (space opera)",
          colors: { bg: "#08131c", surface: "#0e2233", surface2: "#0a1a28", text: "#dff6ff", muted: "#7fa6bb", accent: "#4dd0e1", accent2: "#ffb74d", border: "#1f4a66", headerBg: "#0b2a40", headerText: "#dff6ff", inputBg: "#07101a", inputText: "#dff6ff", computed: "#80f0c0" },
          body: "geometric",
          heading: "geometric",
          size: 13,
          headingCase: "upper",
          headingSpacing: 2,
          background: { kind: "grid", patternColor: "#4dd0e1", patternSize: 32, patternOpacity: 8 },
          shape: { radius: 2, borderWidth: 1, borderStyle: "solid", shadow: "soft", chamfer: 8 },
          header: { style: "line", align: "left" },
          fields: { style: "outlined" },
          titleRule: "line"
        }),
        crypte: makeTheme({
          name: "Crypte (horreur)",
          colors: { bg: "#120b0b", surface: "#221414", surface2: "#180e0e", text: "#e8dcd0", muted: "#9c8478", accent: "#b3202a", accent2: "#6d6a3a", border: "#4a2222", headerBg: "#2a0e10", headerText: "#e8dcd0", inputBg: "#0e0808", inputText: "#e8dcd0", computed: "#d9b36c" },
          body: "serif",
          heading: "impact",
          size: 14,
          headingCase: "upper",
          headingSpacing: 1,
          background: { kind: "vignette" },
          shape: { radius: 0, borderWidth: 2, borderStyle: "solid", shadow: "hard" },
          header: { style: "flat", align: "center" },
          fields: { style: "underline" },
          titleRule: "dashed"
        }),
        enquete: makeTheme({
          name: "Enqu\xEAte (noir, papier)",
          colors: { bg: "#e6dcc6", surface: "#efe7d4", surface2: "#dbcfb3", text: "#2b2620", muted: "#6e6452", accent: "#8b1e1e", accent2: "#2f4f6f", border: "#a89a78", headerBg: "#2b2620", headerText: "#efe7d4", inputBg: "#f7f1e3", inputText: "#2b2620", computed: "#2f4f6f" },
          body: "typewriter",
          heading: "typewriter",
          size: 13,
          headingCase: "upper",
          headingSpacing: 1,
          background: { kind: "lines", patternColor: "#8b6b3a", patternSize: 24, patternOpacity: 14 },
          shape: { radius: 1, borderWidth: 1, borderStyle: "solid", shadow: "hard" },
          header: { style: "flat", align: "left" },
          fields: { style: "underline" },
          titleRule: "line"
        }),
        // three looks for science fiction (spec 2026-09-24 « Vocabulaire des skins » §5): made of settings only, no colour or type of any publisher
        hud: makeTheme({
          name: "HUD n\xE9on",
          colors: { bg: "#0a0d16", surface: "#0f1826", surface2: "#0b1220", text: "#d8f7ff", muted: "#7ea9c2", accent: "#3ff0d2", accent2: "#ff4fd8", border: "#1f3b52", headerBg: "#0d1624", headerText: "#3ff0d2", inputBg: "#070b14", inputText: "#d8f7ff", computed: "#3ff0d2" },
          body: "chakra",
          heading: "chakra",
          size: 13,
          headingCase: "upper",
          headingSpacing: 2,
          background: { kind: "grid", patternColor: "#3ff0d2", patternSize: 32, patternOpacity: 5 },
          shape: { radius: 0, borderWidth: 1, borderStyle: "solid", shadow: "glow", chamfer: 10, frame: "brackets", spacing: "airy" },
          header: { style: "line", align: "left" },
          fields: { style: "underline" },
          titleRule: "glow",
          stat: { style: "boxed" },
          gauge: { style: "bar", color: "accent" },
          tag: { style: "hud" }
        }),
        terminal: makeTheme({
          name: "Terminal",
          colors: { bg: "#0c0a06", surface: "#14110a", surface2: "#0f0c07", text: "#ffb347", muted: "#8a6a3a", accent: "#ffb347", accent2: "#ffd27a", border: "#6b5020", headerBg: "#14110a", headerText: "#ffb347", inputBg: "#0c0a06", inputText: "#ffcf80", computed: "#ffd27a" },
          body: "sharetech",
          heading: "sharetech",
          size: 14,
          headingCase: "upper",
          headingSpacing: 1,
          background: { kind: "scanlines", patternColor: "#ffb347", patternOpacity: 7 },
          shape: { radius: 0, borderWidth: 1, borderStyle: "dashed", shadow: "none", chamfer: 0, frame: "ascii", spacing: "airy" },
          header: { style: "line", align: "left" },
          fields: { style: "underline" },
          titleRule: "dashed",
          stat: { style: "terminal" },
          gauge: { style: "blocks", color: "accent" },
          tag: { style: "terminal" }
        }),
        pochoir: makeTheme({
          name: "Street pochoir",
          colors: { bg: "#26282a", surface: "#1b1c1e", surface2: "#202224", text: "#ecebe6", muted: "#a3a29c", accent: "#d7ff3a", accent2: "#ff9f43", border: "#3a3c3f", headerBg: "#1b1c1e", headerText: "#d7ff3a", inputBg: "#1b1c1e", inputText: "#ecebe6", computed: "#d7ff3a" },
          body: "barlow",
          heading: "stencil",
          size: 14,
          headingCase: "upper",
          headingSpacing: 1,
          background: { kind: "solid" },
          shape: { radius: 0, borderWidth: 1, borderStyle: "solid", shadow: "hard", chamfer: 0, frame: "tape", spacing: "airy" },
          header: { style: "flat", align: "left" },
          fields: { style: "filled" },
          titleRule: "line",
          stat: { style: "stripe" },
          gauge: { style: "segments", color: "accent" },
          tag: { style: "sticker" }
        })
      };
      function clone(v) {
        return JSON.parse(JSON.stringify(v));
      }
      function presetTheme(id) {
        return clone(PRESETS[id] || PRESETS.classic);
      }
      function validateTheme(t, assets) {
        var errors = [];
        if (t === null || t === void 0) return errors;
        if (!isObj4(t)) return ["Th\xE8me illisible."];
        t = withDefaults(t);
        var e = function(m) {
          errors.push(m);
        };
        if (t.name !== void 0 && (typeof t.name !== "string" || t.name.length > 60)) e("Nom de th\xE8me invalide.");
        if (!isObj4(t.colors)) e("Couleurs manquantes.");
        else COLOR_KEYS.forEach(function(c) {
          if (typeof t.colors[c.k] !== "string" || !HEX.test(t.colors[c.k])) e("Couleur \xAB " + c.label + " \xBB invalide (format #rrggbb).");
        });
        if (!isObj4(t.fonts)) e("Polices manquantes.");
        else {
          var fontOk = function(v) {
            if (FONTS[v]) return true;
            var id = assetFontId(v), a = id && assetOf(assets, id);
            return !!(a && a.kind === "font");
          };
          if (!fontOk(t.fonts.body)) e("Police du texte inconnue.");
          if (!fontOk(t.fonts.heading)) e("Police des titres inconnue.");
          if (!isInt(t.fonts.size, RANGES.fontSize)) e("Taille de texte : " + RANGES.fontSize.join(" \xE0 ") + " px.");
          if (ENUMS.fonts.headingCase.indexOf(t.fonts.headingCase) < 0) e("Casse des titres invalide.");
          if (!isInt(t.fonts.headingSpacing, RANGES.headingSpacing)) e("Espacement des lettres : " + RANGES.headingSpacing.join(" \xE0 ") + ".");
        }
        if (!isObj4(t.background)) e("Fond manquant.");
        else {
          if (ENUMS.background.kind.indexOf(t.background.kind) < 0) e("Type de fond inconnu.");
          if (typeof t.background.color2 !== "string" || !HEX.test(t.background.color2)) e("Seconde couleur du fond invalide.");
          if (typeof t.background.patternColor !== "string" || !HEX.test(t.background.patternColor)) e("Couleur du motif invalide.");
          if (!isInt(t.background.angle, RANGES.angle)) e("Angle du d\xE9grad\xE9 : 0 \xE0 360.");
          if (!isInt(t.background.patternSize, RANGES.patternSize)) e("Taille du motif : " + RANGES.patternSize.join(" \xE0 ") + " px.");
          if (!isInt(t.background.patternOpacity, RANGES.patternOpacity)) e("Opacit\xE9 du motif : " + RANGES.patternOpacity.join(" \xE0 ") + " %.");
          if (t.background.imageMode !== void 0 && ENUMS.background.imageMode.indexOf(t.background.imageMode) < 0) e("Mode de l\u2019image de fond inconnu.");
          if (t.background.kind === "image") {
            var img = assetOf(assets, t.background.image);
            if (!img || img.kind !== "image") e("Choisis une image de fond parmi les fichiers embarqu\xE9s.");
          }
        }
        if (!isObj4(t.shape)) e("Formes manquantes.");
        else {
          if (!isInt(t.shape.radius, RANGES.radius)) e("Arrondi : " + RANGES.radius.join(" \xE0 ") + " px.");
          if (!isInt(t.shape.borderWidth, RANGES.borderWidth)) e("\xC9paisseur de bordure : " + RANGES.borderWidth.join(" \xE0 ") + " px.");
          if (!isInt(t.shape.chamfer, RANGES.chamfer)) e("Coins coup\xE9s : " + RANGES.chamfer.join(" \xE0 ") + " px.");
          if (ENUMS.shape.borderStyle.indexOf(t.shape.borderStyle) < 0) e("Style de bordure inconnu.");
          if (ENUMS.shape.shadow.indexOf(t.shape.shadow) < 0) e("Ombre inconnue.");
          if (ENUMS.shape.frame.indexOf(t.shape.frame) < 0) e("Cadre inconnu.");
          if (ENUMS.shape.spacing.indexOf(t.shape.spacing) < 0) e("Espacement inconnu.");
        }
        if (!isObj4(t.header)) e("Bandeau manquant.");
        else {
          if (ENUMS.header.style.indexOf(t.header.style) < 0) e("Style de bandeau inconnu.");
          if (ENUMS.header.align.indexOf(t.header.align) < 0) e("Alignement du bandeau invalide.");
        }
        if (!isObj4(t.fields) || ENUMS.fields.style.indexOf(t.fields.style) < 0) e("Style des champs inconnu.");
        if (ENUMS.titleRule.indexOf(t.titleRule) < 0) e("Ornement des titres inconnu.");
        if (!isObj4(t.stat) || ENUMS.stat.style.indexOf(t.stat.style) < 0) e("Style des blocs de stat inconnu.");
        if (!isObj4(t.gauge) || ENUMS.gauge.style.indexOf(t.gauge.style) < 0 || ENUMS.gauge.color.indexOf(t.gauge.color) < 0) e("Style de jauge inconnu.");
        if (!isObj4(t.tag) || ENUMS.tag.style.indexOf(t.tag.style) < 0) e("Style d\u2019\xE9tiquette de jet inconnu.");
        return errors;
      }
      function rgba(hex, alpha) {
        var n = parseInt(hex.slice(1), 16);
        return "rgba(" + (n >> 16 & 255) + "," + (n >> 8 & 255) + "," + (n & 255) + "," + Math.round(alpha * 1e3) / 1e3 + ")";
      }
      function rgbTriple(hex) {
        var n = parseInt(hex.slice(1), 16);
        return (n >> 16 & 255) + " " + (n >> 8 & 255) + " " + (n & 255);
      }
      function skinTokens(theme, bodyFont, headFont) {
        var c = theme.colors, sh = theme.shape;
        var n = parseInt(c.bg.slice(1), 16);
        var light = 0.2126 * (n >> 16 & 255) + 0.7152 * (n >> 8 & 255) + 0.0722 * (n & 255) > 140;
        return [
          "--loom-bg:" + c.bg,
          "--loom-void:" + c.bg,
          "--loom-void-rgb:" + rgbTriple(c.bg),
          "--loom-deep-rgb:" + rgbTriple(c.bg),
          "--loom-panel:" + c.surface,
          "--loom-panel-solid:" + c.surface,
          "--loom-panel-rgb:" + rgbTriple(c.surface),
          "--loom-panel-2:" + c.surface2,
          "--loom-panel2-rgb:" + rgbTriple(c.surface2),
          "--loom-line:" + c.border,
          "--loom-line-rgb:" + rgbTriple(c.border),
          "--loom-line-soft:" + c.border,
          "--loom-line-strong:" + c.accent2,
          "--loom-text:" + c.text,
          "--loom-muted:" + c.muted,
          "--loom-dim:" + c.muted,
          "--loom-over-map:" + c.text,
          "--loom-accent:" + c.accent,
          "--loom-accent-rgb:" + rgbTriple(c.accent),
          "--loom-accent-dim:" + c.accent,
          "--loom-accent-hi:" + c.accent,
          "--loom-on-accent:" + c.bg,
          "--loom-accent2:" + c.accent2,
          "--loom-accent2-rgb:" + rgbTriple(c.accent2),
          "--loom-display:" + headFont,
          "--loom-body:" + bodyFont,
          "--loom-radius:" + sh.radius + "px",
          "--loom-radius-sm:" + Math.min(sh.radius, 4) + "px",
          "--loom-cut:" + sh.chamfer + "px",
          "--loom-paper:" + c.surface,
          "--loom-paper-2:" + c.surface2,
          "--loom-paper-ink:" + c.text,
          "--loom-paper-muted:" + c.muted,
          "--loom-paper-line:" + c.border,
          "--loom-paper-texture:none",
          "--loom-edge:1px solid " + c.border,
          "--loom-edge-strong:1px solid " + c.accent2,
          "--loom-thread:2px solid " + c.accent,
          "--loom-glow:" + (sh.shadow === "glow" ? "0 0 12px " + rgba(c.accent, 0.55) : "none"),
          "color-scheme:" + (light ? "light" : "dark")
        ];
      }
      var TARGETS = {
        game: {
          root: ".sheet.sheet",
          bang: true,
          header: ["header"],
          label: [".widget.label"],
          number: [".widget.number"],
          text: [".widget.text-input"],
          area: [".widget.textarea"],
          choice: [".widget.choice"],
          clickable: [".widget.clickable"],
          computed: [".computed"],
          column: ['.widget[class*="widget col"]'],
          row: [".widget.row"],
          button: [".btn-secondary", ".btn-repeater-add"],
          tabs: [".nav-link"],
          tabActive: [".nav-link.active"],
          repeater: [".repeater-element"],
          gauge: [".tt-gauge"]
        },
        preview: {
          root: ".b-sheet",
          bang: false,
          header: [".b-head"],
          label: [".b-label"],
          number: ["input[type=number]", ".b-computed"],
          text: ["input[type=text]"],
          area: ["textarea"],
          choice: ["select"],
          clickable: [".b-label.clickable"],
          computed: [".b-computed"],
          column: [".b-column"],
          row: [".b-row"],
          button: [".b-icon"],
          tabs: [".b-tab"],
          tabActive: [".b-tab.active"],
          repeater: [".b-repeater-element"],
          gauge: [".b-gauge"]
        }
      };
      var VARIANTS = {
        Label: ["title", "subtitle", "muted", "badge", "banner", "button"],
        NumberInput: ["stat"],
        Column: ["card", "inset"],
        Container: ["inline"]
      };
      var TEXT_SIZES = { tiny: 0.65, small: 0.8, medium: 1.2, large: 1.5, giant: 2.4 };
      function backgroundImage(a, mode, imp) {
        var d = ["background-image:" + dataUrl(a)];
        if (mode === "tile") d.push("background-repeat:repeat", "background-size:auto");
        else if (mode === "center") d.push("background-repeat:no-repeat", "background-position:center", "background-size:contain");
        else d.push("background-repeat:no-repeat", "background-position:center", "background-size:cover");
        return d.map(function(x) {
          return x + imp;
        }).join(";");
      }
      function themeCss(theme, targetName, assets, skinId) {
        if (!theme) return "";
        var errs = validateTheme(theme, assets);
        if (errs.length) throw new Error("Th\xE8me invalide : " + errs[0]);
        theme = withDefaults(theme);
        var T = TARGETS[targetName];
        if (!T) throw new Error("Cible de th\xE8me inconnue.");
        var skin = skinId === void 0 ? "defaut" : skinId;
        if (targetName === "game" && (typeof skin !== "string" || !SKIN_ID_RE.test(skin))) throw new Error("Identifiant de skin invalide.");
        var ROOT = targetName === "game" ? '.sheet.sheet[data-tt-skin="' + skin + '"]' : T.root;
        var TAG_ROOTS = targetName === "game" ? ['.loom-tag-knot[data-tt-skin="' + skin + '"] .loom-chat-roll', '.dice-result[data-tt-skin="' + skin + '"]', '.dice-log[data-tt-skin="' + skin + '"]'] : [".b-rolltag .loom-chat-roll"];
        var c = theme.colors, f = theme.fonts, bg = theme.background, sh = theme.shape, hd = theme.header;
        var imp = T.bang ? " !important" : "";
        var out = [];
        var fallback = FONTS.system.css;
        var faces = {};
        var fontCss = function(key) {
          if (FONTS[key]) return FONTS[key].css;
          var a = assetOf(assets, assetFontId(key));
          if (!faces[a.id]) {
            faces[a.id] = true;
            out.push('@font-face{font-family:"tt_' + a.id + '";src:' + dataUrl(a) + ' format("' + ASSET_TYPES[a.mime].fmt + '");font-display:swap}');
          }
          return '"tt_' + a.id + '",' + fallback;
        };
        var bodyFont = fontCss(f.body), headFont = fontCss(f.heading);
        if (targetName === "game") out.push('[data-tt-skin="' + skin + '"]{' + skinTokens(theme, bodyFont, headFont).join(";") + "}");
        function rule(subs, decls) {
          if (!decls.length) return;
          var sel = subs.map(function(s2) {
            return s2 === "" ? ROOT : ROOT + " " + s2;
          }).join(",");
          out.push(sel + "{" + decls.join(";") + "}");
        }
        function tagRule(subs, decls) {
          if (!decls.length) return;
          out.push(TAG_ROOTS.reduce(function(a, r) {
            return a.concat(subs.map(function(s2) {
              return s2 === "" ? r : s2.charAt(0) === ":" ? r + s2 : r + " " + s2;
            }));
          }, []).join(",") + "{" + decls.join(";") + "}");
        }
        function each(keys) {
          return keys.reduce(function(a, k2) {
            return a.concat(T[k2]);
          }, []);
        }
        var bd = sh.borderStyle === "none" || sh.borderWidth === 0 ? "border:0 none" : "border:" + (sh.borderStyle === "double" ? Math.max(3, sh.borderWidth) : sh.borderWidth) + "px " + sh.borderStyle + " " + c.border;
        var radius = "border-radius:" + sh.radius + "px";
        var shadow = { none: "", soft: "box-shadow:0 2px 10px rgba(0,0,0,.35)", hard: "box-shadow:4px 4px 0 rgba(0,0,0,.55)", glow: "box-shadow:0 0 12px " + rgba(c.accent, 0.55) }[sh.shadow];
        var cut = sh.chamfer ? "clip-path:polygon(" + sh.chamfer + "px 0,100% 0,100% calc(100% - " + sh.chamfer + "px),calc(100% - " + sh.chamfer + "px) 100%,0 100%,0 " + sh.chamfer + "px)" : "";
        var panel = [bd, radius, shadow, cut].filter(Boolean);
        var pat = rgba(bg.patternColor, bg.patternOpacity / 100), s = bg.patternSize;
        var layers = {
          solid: "",
          gradient: "background-image:linear-gradient(" + bg.angle + "deg," + c.bg + "," + bg.color2 + ")",
          grid: "background-image:linear-gradient(" + pat + " 1px,transparent 1px),linear-gradient(90deg," + pat + " 1px,transparent 1px);background-size:" + s + "px " + s + "px",
          dots: "background-image:radial-gradient(circle," + pat + " 1.5px,transparent 1.6px);background-size:" + s + "px " + s + "px",
          lines: "background-image:repeating-linear-gradient(0deg," + pat + " 0 1px,transparent 1px " + s + "px)",
          scanlines: "background-image:repeating-linear-gradient(0deg," + pat + " 0 1px,transparent 1px 3px)",
          vignette: "background-image:radial-gradient(ellipse at center,transparent 55%,rgba(0,0,0," + (bg.patternOpacity / 100 * 3 + 0.15) + ") 100%)",
          image: bg.kind === "image" ? backgroundImage(assetOf(assets, bg.image), bg.imageMode || "cover", imp) : ""
        }[bg.kind];
        rule([""], ["background-color:" + c.bg + imp, layers ? bg.kind === "image" ? layers : layers + imp : "", "color:" + c.text + imp, "font-family:" + bodyFont + imp, "font-size:" + f.size + "px" + imp].filter(Boolean));
        rule(each(["label", "number", "text", "area", "choice"]), ["font-family:" + bodyFont, "color:" + c.text]);
        var headBg = { flat: "background:" + c.headerBg, gradient: "background:linear-gradient(90deg," + c.headerBg + "," + c.surface2 + ")", line: "background:transparent;border-bottom:2px solid " + c.accent, glow: "background:" + c.headerBg + ";box-shadow:0 0 14px " + rgba(c.accent, 0.5) }[hd.style];
        rule(T.header, [headBg + imp, "color:" + c.headerText + imp, "font-family:" + headFont + imp, "text-align:" + hd.align, f.headingCase === "upper" ? "text-transform:uppercase" : "", "letter-spacing:" + f.headingSpacing + "px"].filter(Boolean));
        var field = { filled: ["background:" + c.inputBg, "border:0 none", "border-radius:" + Math.min(sh.radius, 8) + "px"], outlined: ["background:" + c.inputBg, "border:1px solid " + c.border, "border-radius:" + Math.min(sh.radius, 8) + "px"], underline: ["background:transparent", "border:0 none", "border-bottom:2px solid " + c.border, "border-radius:0"] }[theme.fields.style];
        rule(each(["number", "text", "area", "choice"]), field.concat(["color:" + c.inputText + imp, "padding:2px 6px"]).map(function(d) {
          return d + imp;
        }));
        rule(each(["number", "text", "area", "choice"]).map(function(x) {
          return x + ":focus";
        }), ["outline:none", "border-color:" + c.accent + imp, "box-shadow:0 0 0 1px " + c.accent]);
        rule(T.clickable, ["color:" + c.accent + imp, "cursor:pointer"]);
        rule(T.computed, ["color:" + c.computed + imp]);
        rule(T.button, ["background:" + c.surface2 + imp, "color:" + c.text + imp, "border:1px solid " + c.border + imp]);
        rule(T.tabs, ["color:" + c.muted + imp]);
        rule(T.tabActive, ["color:" + c.accent + imp, "background:" + c.surface + imp, "border-color:" + c.border + imp]);
        rule(T.repeater, ["background:" + c.surface, bd, radius, "padding:6px", "margin-bottom:6px"]);
        var V = function(name) {
          return ".tt-" + name + ".tt-" + name + ".tt-" + name;
        };
        var rulePart = { none: "", line: "border-bottom:1px solid " + c.accent, double: "border-bottom:3px double " + c.accent, dashed: "border-bottom:2px dashed " + c.accent, glow: "text-shadow:0 0 8px " + c.accent }[theme.titleRule];
        var head = ["font-family:" + headFont, f.headingCase === "upper" ? "text-transform:uppercase" : "", "letter-spacing:" + f.headingSpacing + "px"].filter(Boolean);
        rule([V("title")], head.concat(["color:" + c.accent, "font-size:1.25em", "font-weight:700", "padding-bottom:.2em", "margin-bottom:.4em", rulePart].filter(Boolean)));
        rule([V("subtitle")], head.concat(["color:" + c.muted, "font-size:1em", "font-style:italic"]));
        rule([V("muted")], ["color:" + c.muted, "font-size:.85em"]);
        rule([V("badge")], ["display:inline-block", "background:" + c.accent, "color:" + c.bg, "padding:1px 10px", "border-radius:999px", "font-size:.8em", "font-weight:700", "text-transform:uppercase", "letter-spacing:1px"]);
        rule([V("banner")], head.concat(["display:block", "background:" + c.headerBg, "color:" + c.headerText, "text-align:center", "padding:4px 8px", "border-top:2px solid " + c.accent, "border-bottom:2px solid " + c.accent, "font-weight:700"]));
        rule([V("stat")], ["font-family:" + headFont + imp, "font-size:1.9em" + imp, "font-weight:700" + imp, "text-align:center" + imp, "color:" + c.accent + imp, "height:auto" + imp]);
        rule([V("card")], ["background:" + c.surface, "padding:8px"].concat(panel));
        rule([V("inset")], ["background:" + c.surface2, "padding:8px", radius, "border:1px solid " + c.border]);
        Object.keys(TEXT_SIZES).forEach(function(k2) {
          rule([V("s-" + k2)], ["font-size:" + TEXT_SIZES[k2] + "em" + imp, "line-height:1.15"]);
        });
        if (targetName === "game") {
          rule([".tt-track .custom-control"], ["display:inline-block", "margin:0 4px 0 0", "min-height:0"]);
          rule([".tt-track .custom-control-label::before"], ["border-radius:50%", "background:" + c.inputBg, "border:2px solid " + c.accent]);
          rule([".tt-track .custom-control-input:checked + .custom-control-label::before"], ["background:" + c.accent, "border-color:" + c.accent]);
        } else {
          rule([".tt-track"], ["display:flex", "align-items:center", "gap:6px"]);
          rule([".tt-track input[type=checkbox]"], ["accent-color:" + c.accent]);
        }
        rule([".tt-track-total"], ["margin-left:8px", "font-weight:700", "color:" + c.accent]);
        if (sh.spacing === "airy") {
          rule([T.row[0] + ":has(" + V("card") + ")"], ["gap:8px" + imp, "flex-wrap:nowrap" + imp]);
          rule([T.row[0] + ":has(" + V("card") + ") " + T.column[0]], ["flex-shrink:1" + imp, "min-width:0" + imp]);
          rule([V("card")], ["margin-bottom:8px", "padding:10px 12px" + imp]);
          rule([T.row[0] + ":has(" + V("inset") + "):not(:has(" + V("card") + "))"], ["gap:6px" + imp, "flex-wrap:nowrap" + imp, "margin-bottom:8px"]);
          rule([T.row[0] + ":has(" + V("inset") + "):not(:has(" + V("card") + ")) " + T.column[0] + V("inset")], ["flex:1 1 0" + imp, "max-width:none" + imp, "min-width:0" + imp]);
        }
        var framed = [V("card")].concat(T.repeater);
        if (sh.frame === "brackets") {
          var bar = "12px 2px", barV = "2px 12px", ink = "linear-gradient(" + c.accent + "," + c.accent + ")";
          rule(framed, [
            "background-image:" + [ink, ink, ink, ink, ink, ink, ink, ink].join(","),
            "background-size:" + [bar, barV, bar, barV, bar, barV, bar, barV].join(","),
            "background-position:left top,left top,right top,right top,left bottom,left bottom,right bottom,right bottom",
            "background-repeat:no-repeat"
          ]);
        } else if (sh.frame === "tape") {
          rule(framed, ["position:relative", "overflow:visible"]);
          rule(framed.map(function(x) {
            return x + "::before";
          }), ['content:""', "position:absolute", "top:-7px", "left:calc(50% - 32px)", "width:64px", "height:14px", "background:" + rgba(c.accent2, 0.55), "transform:rotate(-2deg)"]);
        } else if (sh.frame === "ascii") {
          rule(framed, ["border:1px dashed " + c.muted + imp, "border-radius:0" + imp, "position:relative", "clip-path:none"]);
          rule(framed.map(function(x) {
            return x + "::before";
          }), ['content:"+"', "position:absolute", "top:-0.7em", "left:-0.35em", "color:" + c.muted, "font-family:" + FONTS.mono.css]);
          rule(framed.map(function(x) {
            return x + "::after";
          }), ['content:"+"', "position:absolute", "bottom:-0.6em", "right:-0.35em", "color:" + c.muted, "font-family:" + FONTS.mono.css]);
        }
        var st = theme.stat.style;
        if (st === "boxed") rule([V("stat")], ["background:" + c.surface2 + imp, "border:1px solid " + c.border + imp, "padding:4px 6px" + imp, cut].filter(Boolean));
        else if (st === "stripe") rule([V("stat")], ["background:" + c.surface2 + imp, "border:0 none" + imp, "border-top:3px solid " + c.accent + imp, "border-radius:0" + imp]);
        else if (st === "terminal") rule([V("stat")], ["font-family:" + FONTS.mono.css + imp, "border:1px dashed " + c.muted + imp, "border-radius:0" + imp, "font-variant-numeric:tabular-nums"]);
        if (st !== "plain") rule([V("inset") + " " + V("stat")], ["border:0 none" + imp, "background:transparent" + imp, "clip-path:none" + imp, "padding:0" + imp]);
        var gColor = theme.gauge.color === "accent2" ? c.accent2 : c.accent;
        var gStyle = theme.gauge.style;
        var G = T.gauge[0];
        if (targetName === "preview") rule([G + " .tt-gauge-cell.on"], ["background:" + gColor]);
        if (gStyle === "blocks") {
          rule([G + " .tt-gauge-cells"], ["gap:2px", "height:14px", "background:transparent"]);
          rule([G + " .tt-gauge-cell"], ["flex:0 0 9px", "background:repeating-linear-gradient(45deg," + c.muted + " 0 1px,transparent 1px 3px)"]);
          rule([G + " .tt-gauge-cell.on"], ["background:" + gColor]);
        } else if (gStyle === "segments") {
          rule([G + " .tt-gauge-cells"], ["gap:2px", "background:transparent"]);
          rule([G + " .tt-gauge-cell"], ["background:" + c.surface2]);
          rule([G + " .tt-gauge-cell.on"], ["background:" + gColor]);
        } else if (theme.gauge.color !== "accent") {
          rule([G + " .tt-gauge-cell.on"], ["background:" + gColor]);
        }
        var tg = theme.tag.style;
        if (tg === "hud") {
          var k = Math.max(sh.chamfer, 8);
          tagRule([""], ["background:" + c.surface + imp, "color:" + c.text + imp, "border:1px solid " + c.accent + imp, "border-radius:0" + imp, "clip-path:polygon(" + k + "px 0,100% 0,100% calc(100% - " + k + "px),calc(100% - " + k + "px) 100%,0 100%,0 " + k + "px)" + imp, "box-shadow:inset 0 0 14px " + rgba(c.accent, 0.3) + imp]);
          tagRule([".total"], ["color:" + c.accent + imp, "font-family:" + headFont + imp, "text-shadow:0 0 8px " + rgba(c.accent, 0.6)]);
          tagRule([".for"], ["font-family:" + headFont + imp, "text-transform:uppercase" + imp, "letter-spacing:1px" + imp]);
        } else if (tg === "terminal") {
          tagRule([""], ["background:" + c.bg + imp, "color:" + c.text + imp, "border:1px dashed " + c.muted + imp, "border-radius:0" + imp, "clip-path:none" + imp, "box-shadow:none" + imp, "font-family:" + FONTS.mono.css + imp]);
          tagRule([".total", ".for", ".rolls span", "small"], ["font-family:" + FONTS.mono.css + imp, "color:" + c.text + imp]);
          tagRule([".total::before"], ['content:"# "', "color:" + c.muted]);
        } else if (tg === "sticker") {
          tagRule([""], ["background:" + c.surface + imp, "color:" + c.text + imp, "border:0 none" + imp, "border-left:6px solid " + c.accent + imp, "border-radius:0" + imp, "clip-path:none" + imp, "transform:rotate(-1.5deg)" + imp, "overflow:visible" + imp, "box-shadow:3px 3px 0 rgba(0,0,0,.35)" + imp]);
          tagRule(["::before"], ['content:""' + imp, "position:absolute" + imp, "top:-8px" + imp, "left:40%" + imp, "right:auto" + imp, "width:56px" + imp, "height:16px" + imp, "background:" + rgba(c.accent2, 0.55) + imp, "transform:rotate(-4deg)" + imp]);
          tagRule([".total"], ["font-family:" + headFont + imp, "color:" + c.text + imp]);
        }
        rule([V("bold")], ["font-weight:700" + imp]);
        rule([V("upper")], ["text-transform:uppercase"]);
        return out.join("\n");
      }
      var SAFE_CSS = /^[\w\s#%.,:;(){}\[\]=!"'*+-]*$/;
      var DATA_URL = /url\("data:(?:font\/woff2|font\/woff|font\/ttf|font\/otf|image\/png|image\/jpeg|image\/webp);base64,[A-Za-z0-9+\/]+={0,2}"\)/g;
      var MAX_CSS = 6e4;
      var MAX_CSS_WITH_ASSETS = 6e6;
      function isSafeCss(css) {
        if (typeof css !== "string" || css.length === 0 || css.length > MAX_CSS_WITH_ASSETS) return false;
        var rest = css.replace(DATA_URL, "url()").replace(/@font-face/g, "");
        return rest.length <= MAX_CSS && SAFE_CSS.test(rest) && !/url\s*\((?!\))|expression|javascript|binding/i.test(rest);
      }
      function classesFor(node) {
        var out = [];
        var allowed = VARIANTS[node.className] || [];
        if (node.variant && allowed.indexOf(node.variant) >= 0) out.push("tt-" + node.variant);
        if (node.className === "Label") {
          if (node.textSize && TEXT_SIZES[node.textSize]) out.push("tt-s-" + node.textSize);
          if (node.bold) out.push("tt-bold");
          if (node.upper) out.push("tt-upper");
        }
        return out.join(" ");
      }
      return {
        FONTS,
        COLOR_KEYS,
        ENUMS,
        ENUM_LABELS,
        RANGES,
        PRESETS,
        VARIANTS,
        TEXT_SIZES,
        HEX,
        SKIN_ID_RE,
        withDefaults,
        DEFAULTS,
        presetTheme,
        validateTheme,
        validateAssets,
        ASSET_TYPES,
        ASSET_LIMITS,
        ASSET_ID_RE,
        assetFontId,
        themeCss,
        classesFor,
        isSafeCss
      };
    });
  }
});

// apps/desktop/renderer/builder-core.js
var require_builder_core = __commonJS({
  "apps/desktop/renderer/builder-core.js"(exports2, module2) {
    "use strict";
    (function(root, factory) {
      if (typeof module2 === "object" && module2.exports) module2.exports = factory();
      else root.TTBuilder = factory();
    })(typeof self !== "undefined" ? self : exports2, function() {
      "use strict";
      var Theme = typeof module2 === "object" && module2.exports ? require_builder_theme() : self.TTBuilderTheme;
      var LIMITS2 = { nodes: 2e3, depth: 12, text: 500, name: 80, formula: 1e3, roll: 1e3, options: 60, optionLabel: 60, views: 1, tabs: 12, tabTitle: 60, skins: 6 };
      var RESERVED_IDS = { loom: true, loom_skin: true, loom_vision: true };
      var ID_RE3 = /^\w{1,40}$/;
      var SYSTEM_ID_RE = /^[a-z0-9][a-z0-9-]{1,39}$/;
      var VERSION_RE3 = /^\d+\.\d+\.\d+$/;
      var ALIGN = ["Left", "Center", "Right"];
      var VARIANT_LABELS = { "": "Aucune", title: "Titre", subtitle: "Sous-titre", muted: "Discret", badge: "Pastille", banner: "Bandeau", stat: "Chiffre cl\xE9", card: "Carte", inset: "En creux", button: "Bouton", inline: "En ligne (compact)" };
      var SIZE_LABELS = { "": "Normale", tiny: "Minuscule", small: "Petite", medium: "Moyenne", large: "Grande", giant: "G\xE9ante" };
      var gmOnlyProp = { k: "gmOnly", t: "bool", label: "R\xE9serv\xE9 au MJ : les joueurs ne peuvent pas le modifier" };
      var variantProp = function(name) {
        return { k: "variant", t: "enum", options: [""].concat(Theme.VARIANTS[name]), labels: VARIANT_LABELS, def: "", label: "Style" };
      };
      var COMPONENTS = {
        Row: { label: "Ligne", container: true, children: ["Column"], props: [] },
        Column: { label: "Colonne", container: true, props: [{ k: "size", t: "int", min: 1, max: 12, def: 12, label: "Largeur (sur 12)" }, variantProp("Column")] },
        Label: {
          label: "Texte",
          icon: "T",
          props: [
            { k: "text", t: "text", def: "Texte", label: "Texte (ou formule si calcul\xE9)" },
            { k: "align", t: "enum", options: ALIGN, def: "Left", label: "Alignement" },
            { k: "computed", t: "bool", def: false, label: "Valeur calcul\xE9e" },
            { k: "clickable", t: "bool", def: false, label: "Cliquable (lance un jet)" },
            { k: "roll", t: "roll", def: "", label: "Jet lanc\xE9 au clic (ex. 1d20+@force)" },
            { k: "spendField", t: "field", label: "D\xE9pense une ressource \xE0 chaque clic (un champ nombre)" },
            { k: "spendN", t: "int", min: 1, max: 99, label: "Quantit\xE9 d\xE9pens\xE9e (1 si vide)" },
            { k: "againstField", t: "field", pool: "number", label: "Duel : comparer le jet \xE0 ce champ de la cible (une d\xE9fense)" },
            { k: "againstMode", t: "enum", options: ["", "atMost"], labels: { "": "Le jet doit atteindre la d\xE9fense (d20 : CA, esquive, parade\u2026)", atMost: "Le jet doit rester sous la valeur (pourcentage)" }, label: "Comment le jet gagne" },
            variantProp("Label"),
            { k: "textSize", t: "enum", options: ["", "tiny", "small", "medium", "large", "giant"], labels: SIZE_LABELS, def: "", label: "Taille" },
            { k: "bold", t: "bool", def: false, label: "Gras" },
            { k: "upper", t: "bool", def: false, label: "Majuscules" },
            { k: "markdown", t: "bool", def: false, label: "Mise en forme Markdown (**gras**, *italique*, :ic\xF4ne:)" },
            { k: "tooltipLabel", t: "text", def: "", label: "Infobulle au survol (optionnel)" },
            { k: "quickBar", t: "bool", def: false, label: "Peut \xEAtre gliss\xE9 dans la barre rapide" },
            { k: "quickBarLabel", t: "text", def: "", label: "Nom dans la barre rapide" }
          ]
        },
        TextInput: {
          label: "Champ texte",
          value: true,
          icon: "Aa",
          props: [
            { k: "name", t: "text", def: "Champ", label: "Nom" },
            { k: "placeholder", t: "text", def: "", label: "Indication" },
            { k: "defaultValue", t: "text", def: "", label: "Valeur par d\xE9faut" },
            gmOnlyProp
          ]
        },
        NumberInput: {
          label: "Nombre",
          value: true,
          numeric: true,
          icon: "1",
          props: [
            { k: "name", t: "text", def: "Nombre", label: "Nom" },
            { k: "defaultValue", t: "text", def: "0", label: "Valeur par d\xE9faut (ou formule si calcul\xE9)" },
            { k: "min", t: "number", def: null, label: "Minimum" },
            { k: "max", t: "number", def: null, label: "Maximum" },
            { k: "computed", t: "bool", def: false, label: "Valeur calcul\xE9e" },
            variantProp("NumberInput"),
            { k: "align", t: "enum", options: ["", "Left", "Center", "Right"], labels: { "": "Par d\xE9faut", Left: "\xC0 gauche", Center: "Centr\xE9", Right: "\xC0 droite" }, def: "", label: "Alignement du nombre" },
            { k: "tooltipLabel", t: "text", def: "", label: "Infobulle au survol (optionnel)" },
            gmOnlyProp
          ]
        },
        Textarea: {
          label: "Zone de texte",
          value: true,
          icon: "\xB6",
          props: [
            { k: "name", t: "text", def: "Notes", label: "Nom" },
            { k: "placeholder", t: "text", def: "", label: "Indication" },
            { k: "defaultValue", t: "text", def: "", label: "Valeur par d\xE9faut" },
            gmOnlyProp
          ]
        },
        Checkbox: {
          label: "Case \xE0 cocher",
          value: true,
          numeric: true,
          icon: "\u2611",
          props: [
            { k: "name", t: "text", def: "Case", label: "Nom" },
            { k: "label", t: "text", def: "Case", label: "Texte \xE0 c\xF4t\xE9" },
            { k: "effectTarget", t: "field", pool: "computed", label: "Effet : quand la case est coch\xE9e, ajoute \xE0 ce champ calcul\xE9" },
            { k: "effectValue", t: "text", label: "Valeur ajout\xE9e (un nombre, ou une formule comme @niveau)" },
            gmOnlyProp
          ]
        },
        Choice: {
          label: "Liste de choix",
          value: true,
          icon: "\u25BE",
          props: [
            { k: "name", t: "text", def: "Choix", label: "Nom" },
            { k: "options", t: "options", def: null, label: "Options" },
            { k: "optional", t: "bool", def: false, label: "Peut rester vide" },
            { k: "multiple", t: "bool", def: false, label: "Plusieurs choix" },
            { k: "expanded", t: "bool", def: false, label: "Toutes les options visibles" },
            gmOnlyProp
          ]
        },
        Icon: {
          label: "Ic\xF4ne de jet",
          icon: "\u{1F3B2}",
          props: [
            { k: "iconName", t: "text", def: "fas fa-dice-d20", label: "Ic\xF4ne (classe Font Awesome)" },
            { k: "roll", t: "roll", def: "1d20", label: "Jet lanc\xE9 au clic" },
            { k: "rollTitle", t: "text", def: "", label: "Titre du jet" }
          ]
        },
        Avatar: { label: "Portrait", icon: "\u25C9", props: [{ k: "name", t: "text", def: "Portrait", label: "Nom" }] },
        Track: {
          label: "Pastilles",
          value: true,
          numeric: true,
          icon: "\u25CF",
          props: [
            { k: "name", t: "text", def: "Pastilles", label: "Nom" },
            { k: "count", t: "int", min: 1, max: 20, def: 5, label: "Nombre de pastilles" },
            { k: "showTotal", t: "bool", def: false, label: "Afficher le total \xE0 c\xF4t\xE9" }
          ]
        },
        Gauge: {
          label: "Jauge",
          icon: "\u25AD",
          props: [
            { k: "name", t: "text", def: "Jauge", label: "Libell\xE9" },
            { k: "valueField", t: "field", pool: "number", label: "Valeur (un champ nombre)" },
            { k: "maxField", t: "field", pool: "number", label: "Maximum (un champ nombre)" },
            { k: "max", t: "int", min: 1, max: 9999, label: "\u2026ou un maximum fixe" },
            { k: "segments", t: "int", min: 0, max: 40, def: 10, label: "Cellules (0 : automatique)" },
            { k: "showValue", t: "bool", def: true, label: "Afficher \xAB valeur / max \xBB" }
          ]
        },
        Container: {
          label: "Conteneur",
          container: true,
          icon: "\u25A6",
          props: [{ k: "layout", t: "enum", options: ["horizontal", "vertical"], labels: { horizontal: "En ligne (c\xF4te \xE0 c\xF4te)", vertical: "En pile (l\u2019un sous l\u2019autre)" }, def: "horizontal", label: "Disposition" }, variantProp("Container")]
        },
        Tab: {
          label: "Onglets",
          container: true,
          icon: "\u229F",
          props: [
            { k: "tabs", t: "tabs", def: null, label: "Onglets" },
            { k: "vertical", t: "bool", def: false, label: "Onglets \xE0 gauche (verticaux)" },
            { k: "verticalWidth", t: "int", min: 1, max: 11, def: 3, label: "Largeur des onglets verticaux (sur 12)" }
          ]
        },
        Repeater: {
          label: "Liste r\xE9p\xE9table",
          container: true,
          icon: "\u2630",
          props: [
            { k: "layout", t: "enum", options: ["vertical", "horizontal"], labels: { vertical: "Entr\xE9es l\u2019une sous l\u2019autre", horizontal: "Entr\xE9es c\xF4te \xE0 c\xF4te" }, def: "vertical", label: "Disposition des entr\xE9es" },
            { k: "noAdd", t: "bool", def: false, label: "Masquer le bouton \xAB Ajouter \xBB" }
          ]
        }
      };
      function slots(n) {
        if (!n) return [];
        if (n.className === "Tab") return (Array.isArray(n.tabs) ? n.tabs : []).filter(isObj4).map(function(t) {
          return { list: Array.isArray(t.children) ? t.children : [], key: "tab:" + t.id, tab: t };
        });
        if (n.className === "Repeater") return [{ list: Array.isArray(n.children) ? n.children : [], key: "edit", area: "edit" }, { list: Array.isArray(n.readChildren) ? n.readChildren : [], key: "read", area: "read" }];
        return Array.isArray(n.children) ? [{ list: n.children, key: "children" }] : [];
      }
      function spendableIds(doc, withComputed) {
        var out = {};
        function visit(list2) {
          (Array.isArray(list2) ? list2 : []).forEach(function(n) {
            if (!isObj4(n)) return;
            if (n.className === "NumberInput" && (withComputed || !n.computed) && typeof n.id === "string") out[n.id] = n;
            if (n.className === "Repeater") return;
            slots(n).forEach(function(sl) {
              visit(sl.list);
            });
          });
        }
        (doc && doc.views || []).forEach(function(v) {
          if (isObj4(v)) visit(v.children);
        });
        return out;
      }
      function hasValue(n) {
        return !!(n && (COMPONENTS[n.className].value || n.className === "Label" && n.computed));
      }
      var isObj4 = function(v) {
        return v !== null && typeof v === "object" && !Array.isArray(v);
      };
      var STR_CTRL = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f\u0085\u2028\u2029]/g;
      function cleanText2(v, max) {
        var s = typeof v === "string" ? v : v == null ? "" : String(v);
        return s.replace(STR_CTRL, "").slice(0, max);
      }
      function escapeMarkup(s) {
        return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
      function unescapeMarkup(s) {
        return typeof s === "string" ? s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&") : s;
      }
      function parseFormula(source) {
        var s = String(source);
        var pos = 0;
        var refs = [], vars = [], contexts = [], warnings = [];
        var fail = function(msg) {
          throw { syntax: msg, at: pos };
        };
        var spaces = function() {
          while (s.charAt(pos) === " ") pos++;
        };
        var word = function() {
          var m = /^[0-9A-Za-z_]*/.exec(s.slice(pos));
          pos += m[0].length;
          return m[0];
        };
        var eat = function(t) {
          if (s.substr(pos, t.length) === t) {
            pos += t.length;
            return true;
          }
          return false;
        };
        function comparison() {
          var left = additive();
          var save = pos;
          spaces();
          var op = null;
          var ops = [">=", "<=", ">", "<", "=", "!="];
          for (var i = 0; i < ops.length; i++) if (s.substr(pos, ops[i].length) === ops[i]) {
            op = ops[i];
            break;
          }
          if (!op) {
            pos = save;
            return left;
          }
          pos += op.length;
          spaces();
          return { t: "cmp", op, l: left, r: additive() };
        }
        function additive() {
          var left = multiplicative();
          var save = pos;
          spaces();
          var op = s.charAt(pos);
          if (op !== "+" && op !== "-") {
            pos = save;
            return left;
          }
          pos++;
          spaces();
          var right = additive();
          if (right.t === "bin" && (right.op === "+" || right.op === "-") && !right.paren && (op === "-" || right.op === "-")) {
            warnings.push("\xAB a " + op + " b " + right.op + " c \xBB est calcul\xE9 par le jeu comme \xAB a " + op + " (b " + right.op + " c) \xBB : ajoute des parenth\xE8ses.");
          }
          return { t: "bin", op, l: left, r: right };
        }
        function multiplicative() {
          var left = reference();
          var save = pos;
          spaces();
          var op = s.charAt(pos);
          if (op !== "*" && op !== "/" && op !== "%") {
            pos = save;
            return left;
          }
          pos++;
          spaces();
          var right = multiplicative();
          if (right.t === "bin" && (right.op === "*" || right.op === "/" || right.op === "%") && !right.paren && (op !== "*" || right.op !== "*")) {
            warnings.push("\xAB a " + op + " b " + right.op + " c \xBB est calcul\xE9 par le jeu comme \xAB a " + op + " (b " + right.op + " c) \xBB : ajoute des parenth\xE8ses.");
          }
          return { t: "bin", op, l: left, r: right };
        }
        function reference() {
          if (eat("@")) {
            var id = word();
            refs.push(id);
            return { t: "ref", id };
          }
          if (eat("$")) {
            var v = word();
            vars.push(v);
            return { t: "var", id: v };
          }
          if (eat("#")) {
            var c = word();
            contexts.push(c);
            return { t: "ctx", id: c };
          }
          return fn();
        }
        function args2(name) {
          if (!eat("(")) fail("Parenth\xE8se ouvrante attendue apr\xE8s \xAB " + name + " \xBB.");
          var list2 = [additive()];
          spaces();
          while (eat(",")) {
            spaces();
            list2.push(additive());
            spaces();
          }
          if (!eat(")")) fail("Parenth\xE8se fermante attendue.");
          return list2;
        }
        function fn() {
          var names = ["round", "floor", "ceil", "avg", "sum", "if"];
          for (var i = 0; i < names.length; i++) {
            var n = names[i];
            if (s.substr(pos, n.length) === n && s.charAt(pos + n.length) === "(") {
              pos += n.length;
              if (n === "if") {
                pos++;
                var base = comparison();
                spaces();
                if (!eat(",")) fail("\xAB if \xBB attend : if(condition, alors, sinon).");
                spaces();
                var yes = additive();
                spaces();
                eat(",");
                spaces();
                var no = null;
                if (s.charAt(pos) !== ")") no = additive();
                spaces();
                if (!eat(")")) fail("Parenth\xE8se fermante attendue.");
                return { t: "if", c: base, y: yes, n: no };
              }
              if (n === "avg" || n === "sum") return { t: n, a: args2(n) };
              pos++;
              var inner = comparison();
              if (!eat(")")) fail("Parenth\xE8se fermante attendue.");
              return { t: n, a: [inner] };
            }
          }
          return primary();
        }
        function primary() {
          if (s.charAt(pos) === "(") {
            pos++;
            spaces();
            var inner = comparison();
            spaces();
            if (!eat(")")) fail("Parenth\xE8se fermante attendue.");
            return { t: "paren", e: inner, paren: true };
          }
          var m = /^-?[0-9]+(\.+[0-9]+)?/.exec(s.slice(pos));
          if (m) {
            pos += m[0].length;
            return { t: "num", v: parseFloat(m[0].replace(/\.+/, ".")) };
          }
          if (s.charAt(pos) === '"') {
            var end = s.indexOf('"', pos + 1);
            if (end < 0) fail("Guillemet fermant manquant.");
            var text = s.slice(pos + 1, end);
            pos = end + 1;
            return { t: "str", v: text };
          }
          fail(pos >= s.length ? "Formule incompl\xE8te." : "Caract\xE8re inattendu \xAB " + s.charAt(pos) + " \xBB.");
        }
        try {
          if (/[^\S ]/.test(s)) fail("Seul l\u2019espace est accept\xE9 comme s\xE9parateur (pas de tabulation ni de retour \xE0 la ligne).");
          if (s.length > LIMITS2.formula) fail("Formule trop longue.");
          spaces();
          var ast = comparison();
          spaces();
          if (pos < s.length) fail("Caract\xE8re inattendu \xAB " + s.charAt(pos) + " \xBB.");
          return { ok: true, ast, refs, vars, contexts, warnings };
        } catch (e) {
          if (e && e.syntax) return { ok: false, error: e.syntax + " (position " + (e.at + 1) + ")" };
          throw e;
        }
      }
      var isStringy = function(v) {
        return v.type === "string" || v.type === "reference" && typeof v.value === "string";
      };
      var number = function(total) {
        return { type: "number", total: total === null || total === void 0 ? 0 : total };
      };
      function evalAst(node, env, depth) {
        depth = depth || 0;
        if (depth > 30) return number(0);
        var ev = function(n) {
          return evalAst(n, env, depth + 1);
        };
        switch (node.t) {
          case "num":
            return number(node.v);
          case "str":
            return { type: "string", value: node.v, total: 1 };
          case "paren":
            return number(ev(node.e).total);
          case "ref": {
            var r = env.ref(node.id);
            return { type: "reference", total: r, value: typeof r === "string" ? r : null };
          }
          case "var": {
            var src = env.variable(node.id);
            if (src === void 0) return number(0);
            var parsed = parseFormula(src);
            return parsed.ok ? { type: "variable", total: evalFinal(evalAst(parsed.ast, env, depth + 1)) } : number(0);
          }
          case "ctx": {
            var cv = env.context ? env.context(node.id) : 0;
            if (typeof cv === "string" && /^-?\d{1,15}(?:\.\d{1,15})?$/.test(cv)) cv = Number(cv);
            return typeof cv === "string" ? { type: "string", value: cv, total: 1 } : number(typeof cv === "number" ? cv : 0);
          }
          case "cmp": {
            var a = ev(node.l).total, b = ev(node.r).total, ok;
            switch (node.op) {
              case ">":
                ok = a > b;
                break;
              case "<":
                ok = a < b;
                break;
              case "<=":
                ok = a <= b;
                break;
              case ">=":
                ok = a >= b;
                break;
              case "=":
                ok = a == b;
                break;
              // eslint-disable-line eqeqeq
              default:
                ok = a != b;
                break;
            }
            return { type: "comparison", total: ok ? 1 : 0 };
          }
          case "bin": {
            var l = ev(node.l), rr = ev(node.r);
            if (node.op === "+") {
              if (isStringy(l) && isStringy(rr)) return { type: "string", value: String(l.value) + String(rr.value), total: 1 };
              if (isStringy(l)) return { type: "string", value: String(l.value) + (rr.total === null ? "" : String(rr.total)), total: 1 };
              if (isStringy(rr)) return { type: "string", value: (l.total === null ? "" : String(l.total)) + String(rr.value), total: 1 };
              return number(l.total + rr.total);
            }
            if (node.op === "-") return number(l.total - rr.total);
            if (node.op === "*") return number(l.total * rr.total);
            if (node.op === "/") return number(l.total / rr.total);
            return number(l.total % rr.total);
          }
          case "round":
            return number(Math.round(ev(node.a[0]).total));
          case "floor":
            return number(Math.floor(ev(node.a[0]).total));
          case "ceil":
            return number(Math.ceil(ev(node.a[0]).total));
          case "sum":
          case "avg": {
            var totals = [ev(node.a[0]).total];
            for (var i = 1; i < node.a.length; i++) {
              var t = ev(node.a[i]).total;
              if (t) totals.push(t);
            }
            var sum = totals.reduce(function(p, c) {
              return p + c;
            }, 0);
            return number(node.t === "sum" ? sum : sum / totals.length);
          }
          case "if": {
            var base = ev(node.c);
            if (isStringy(base) && base.value != null) return ev(node.y);
            if (base.total > 0) return ev(node.y);
            return node.n ? ev(node.n) : number(0);
          }
        }
        return number(0);
      }
      function evalFinal(result) {
        if (result.type === "string") return result.value;
        return Number.isNaN(result.total) ? 0 : result.total;
      }
      function walk3(nodes, fn, path7, depth) {
        (nodes || []).forEach(function(n, i) {
          var p = (path7 || []).concat(i);
          fn(n, p, depth || 0);
          slots(n).forEach(function(sl) {
            walk3(sl.list, fn, p, (depth || 0) + 1);
          });
        });
      }
      function emptyDoc(name) {
        return {
          v: 1,
          id: "mon-systeme",
          name: name || "Mon syst\xE8me",
          version: "1.0.0",
          author: "",
          description: "",
          license: "",
          views: [{
            id: "main",
            type: "Main",
            name: "Personnage",
            width: 900,
            height: 700,
            tokenizable: true,
            craft: true,
            avatarId: "avatar",
            children: [
              { className: "Row", id: "row_head", children: [
                { className: "Column", id: "col_avatar", size: 3, children: [{ className: "Avatar", id: "avatar", name: "Portrait" }] },
                { className: "Column", id: "col_name", size: 9, children: [
                  { className: "Label", id: "lbl_name", text: "Nom", align: "Left" },
                  { className: "TextInput", id: "char_name", name: "Nom", defaultValue: "" }
                ] }
              ] }
            ]
          }],
          tables: {},
          variables: [],
          skins: [{ id: "defaut", name: "M\xE9tier (papier)", theme: Theme.presetTheme("metier") }]
        };
      }
      function upgradeDoc(doc) {
        if (!isObj4(doc) || !("theme" in doc)) return doc;
        var out = Object.assign({}, doc);
        out.skins = doc.theme ? [{ id: "defaut", name: "Par d\xE9faut", theme: doc.theme }] : [];
        delete out.theme;
        return out;
      }
      function validateSkins(doc, err) {
        var skins = doc.skins === void 0 ? [] : doc.skins;
        if (!Array.isArray(skins)) return err("theme", "Skins illisibles.");
        if (skins.length > LIMITS2.skins) err("theme", "Trop de skins (" + LIMITS2.skins + " au plus).");
        var seen = {};
        skins.forEach(function(s, i) {
          var label = "Skin " + (i + 1);
          if (!isObj4(s)) return err("theme", label + " illisible.");
          if (typeof s.id !== "string" || !Theme.SKIN_ID_RE.test(s.id)) err("theme", label + " : identifiant invalide (minuscules, chiffres et _, 24 au plus).");
          else if (seen[s.id]) err("theme", "Skin \xAB " + s.id + " \xBB en double.");
          else seen[s.id] = true;
          if (typeof s.name !== "string" || !cleanText2(s.name, 100).trim() || s.name.length > 40) err("theme", label + " : nom vide ou trop long (40 caract\xE8res au plus).");
          if (!isObj4(s.theme)) return err("theme", label + " : apparence manquante.");
          Theme.validateTheme(s.theme, doc.assets).forEach(function(m) {
            err("theme", label + " : " + m);
          });
        });
      }
      function allNodes(doc) {
        var out = [];
        (doc.views || []).forEach(function(v) {
          walk3(v.children, function(n) {
            out.push(n);
          });
        });
        return out;
      }
      function uniqueId(doc, base) {
        var used = {};
        allNodes(doc).forEach(function(n) {
          used[n.id] = true;
        });
        (doc.views || []).forEach(function(v) {
          used[v.id] = true;
        });
        var stem = String(base || "champ").replace(/\W+/g, "_").replace(/^_+|_+$/g, "").toLowerCase().slice(0, 30) || "champ";
        var id = stem, i = 2;
        while (used[id]) id = stem + "_" + i++;
        return id;
      }
      function newNode(doc, className) {
        var def = COMPONENTS[className];
        if (!def) throw new Error("Composant inconnu : " + className);
        var node = { className, id: uniqueId(doc, className === "Column" ? "col" : className === "Row" ? "row" : className) };
        def.props.forEach(function(p) {
          if (p.k === "options") node.options = [{ id: "option_1", label: "Option 1" }, { id: "option_2", label: "Option 2" }];
          else if (p.def !== null && p.def !== void 0) node[p.k] = p.def;
        });
        if (def.container) node.children = [];
        if (className === "Row") node.children = [newColumnFor(doc, node.id)];
        if (className === "Tab") {
          node.children = void 0;
          delete node.children;
          node.tabs = [{ id: "onglet_1", label: "Onglet 1", children: [] }, { id: "onglet_2", label: "Onglet 2", children: [] }];
        }
        if (className === "Repeater") node.readChildren = [];
        return node;
      }
      function newColumnFor(doc, rowId) {
        return { className: "Column", id: uniqueId(doc, "col"), size: 12, children: [] };
      }
      function formulaHtmlProblem(text) {
        var strings = String(text).match(/"[^"]*"/g) || [];
        for (var i = 0; i < strings.length; i++) if (/[<>&]/.test(strings[i])) return "un texte entre guillemets ne peut pas contenir \xAB < \xBB, \xAB > \xBB ou \xAB & \xBB.";
        if (/<[A-Za-z\/!?]/.test(String(text).replace(/"[^"]*"/g, '""'))) return "mets une espace apr\xE8s \xAB < \xBB quand une fonction ou un nom suit.";
        return "";
      }
      function withLimits(opts, fn) {
        var saved = { formula: LIMITS2.formula, roll: LIMITS2.roll, text: LIMITS2.text };
        if (opts && opts.maxText) LIMITS2.text = opts.maxText;
        if (opts && opts.maxFormula) LIMITS2.formula = opts.maxFormula;
        if (opts && opts.maxRoll) LIMITS2.roll = opts.maxRoll;
        try {
          return fn();
        } finally {
          LIMITS2.formula = saved.formula;
          LIMITS2.roll = saved.roll;
          LIMITS2.text = saved.text;
        }
      }
      function validate(doc, opts) {
        return withLimits(opts, function() {
          var result = validateInner(doc, opts);
          if (result.ok && hasEffects(doc)) {
            var worked = validateInner(applyEffects(doc), opts);
            if (!worked.ok) {
              result.ok = false;
              result.errors.push({ id: null, message: "Un effet rend un calcul invalide : " + worked.errors[0].message });
            }
          }
          return result;
        });
      }
      function validateInner(doc, opts) {
        doc = upgradeDoc(doc);
        var maxNodes = opts && opts.maxNodes || LIMITS2.nodes;
        var errors = [], warnings = [];
        var err = function(id, message2) {
          errors.push({ id: id || null, message: message2 });
        };
        var warn = function(id, message2) {
          warnings.push({ id: id || null, message: message2 });
        };
        if (!isObj4(doc) || doc.v !== 1) {
          err(null, "Document illisible.");
          return { ok: false, errors, warnings };
        }
        if (!SYSTEM_ID_RE.test(String(doc.id))) err(null, "Identifiant du syst\xE8me invalide : minuscules, chiffres et tirets (2 \xE0 40 caract\xE8res).");
        var nm = cleanText2(doc.name, LIMITS2.name).trim();
        if (nm.length < 2) err(null, "Donne un nom d\u2019au moins 2 caract\xE8res au syst\xE8me.");
        if (!VERSION_RE3.test(String(doc.version))) err(null, "Version invalide (ex. 1.0.0).");
        Theme.validateAssets(doc.assets).forEach(function(m) {
          err("theme", m);
        });
        validateSkins(doc, err);
        var views = Array.isArray(doc.views) ? doc.views : [];
        var main2 = views.filter(function(v) {
          return v && v.id === "main";
        })[0];
        if (!main2 || main2.type !== "Main") {
          err(null, "Il faut une fiche principale.");
          return { ok: false, errors, warnings };
        }
        if (views.length !== 1) err(null, "Une seule fiche principale (les onglets et listes ont leurs propres sous-vues, cr\xE9\xE9es automatiquement).");
        var count = 0;
        var idOwner = {};
        var byId = {};
        var scopes = {};
        var formulas = [];
        var avatars = [];
        if (!(main2.width >= 300 && main2.width <= 1600) || !(main2.height >= 200 && main2.height <= 1600)) err("main", "Taille de fiche invalide (300\u20131600 \xD7 200\u20131600).");
        function check(n, depth, parent, scope) {
          count++;
          if (count > maxNodes) return;
          if (!isObj4(n) || !COMPONENTS[n.className]) {
            err(n && n.id, "Composant inconnu : " + (n && n.className));
            return;
          }
          var def = COMPONENTS[n.className];
          if (n.gmOnly !== void 0 && typeof n.gmOnly !== "boolean") err(n.id, "\xAB R\xE9serv\xE9 au MJ \xBB doit \xEAtre oui ou non.");
          else if (n.gmOnly === true && !def.value) err(n.id, "\xAB R\xE9serv\xE9 au MJ \xBB ne s\u2019applique qu\u2019aux champs que le joueur remplit.");
          if (depth > LIMITS2.depth) err(n.id, "Imbrication trop profonde.");
          if (typeof n.id !== "string" || !ID_RE3.test(n.id)) err(n.id, "Cl\xE9 invalide \xAB " + n.id + " \xBB : lettres, chiffres et _ (40 max).");
          else if (idOwner[n.id]) err(n.id, "Cl\xE9 \xAB " + n.id + " \xBB utilis\xE9e deux fois.");
          else {
            idOwner[n.id] = true;
            byId[n.id] = n;
            scopes[n.id] = scope;
          }
          if (typeof n.id === "string" && RESERVED_IDS[n.id]) err(n.id, "La cl\xE9 \xAB " + n.id + " \xBB est r\xE9serv\xE9e \xE0 Ourdir.");
          var pc = parent && parent.className;
          var host = pc === "Column" || pc === "Container";
          if (n.className === "Row" && pc !== void 0 && !host) err(n.id, "Une ligne se place dans une colonne, un conteneur ou directement dans la fiche.");
          if (n.className === "Column" && pc !== "Row") err(n.id, "Une colonne se place dans une ligne.");
          if (n.className !== "Row" && n.className !== "Column" && !host) err(n.id, "\xAB " + def.label + " \xBB se place dans une colonne ou un conteneur.");
          if (n.className === "Repeater" && scope.repeater) err(n.id, "Une liste r\xE9p\xE9table ne peut pas se placer dans une autre liste r\xE9p\xE9table.");
          if (n.className === "Track") {
            if (!(Number.isInteger(n.count) && n.count >= 1 && n.count <= 20)) err(n.id, "Le nombre de pastilles va de 1 \xE0 20.");
            if (typeof n.id === "string" && n.id.length > 12) err(n.id, "La cl\xE9 d\u2019une s\xE9rie de pastilles est limit\xE9e \xE0 12 caract\xE8res (elle sert \xE0 nommer chaque pastille).");
            if (scope.repeater) err(n.id, "Les pastilles ne peuvent pas \xEAtre dans une liste r\xE9p\xE9table.");
            idOwner[n.id + "__box"] = true;
            for (var t = 1; t <= 20; t++) {
              if (idOwner[n.id + "__" + t]) err(n.id, "Cl\xE9 \xAB " + n.id + "__" + t + " \xBB d\xE9j\xE0 prise.");
            }
            for (var u = 1; u <= (n.count || 0) && u <= 20; u++) idOwner[n.id + "__" + u] = true;
          }
          if (n.className === "Gauge") {
            if (scope.repeater) err(n.id, "Une jauge ne peut pas \xEAtre dans une liste r\xE9p\xE9table.");
            if (typeof n.valueField !== "string" || !allNumbers[n.valueField]) err(n.id, "La valeur d\u2019une jauge doit \xEAtre un champ nombre de la fiche, hors d\u2019une liste.");
            var hasMaxField = typeof n.maxField === "string" && n.maxField !== "";
            if (hasMaxField && !allNumbers[n.maxField]) err(n.id, "Le maximum d\u2019une jauge doit \xEAtre un champ nombre de la fiche, hors d\u2019une liste.");
            if (!hasMaxField && !(Number.isInteger(n.max) && n.max >= 1 && n.max <= 9999)) err(n.id, "Donne \xE0 la jauge un champ maximum ou un maximum fixe (1 \xE0 9999).");
            if (n.segments !== void 0 && !(Number.isInteger(n.segments) && n.segments >= 0 && n.segments <= 40)) err(n.id, "Les cellules d\u2019une jauge vont de 0 \xE0 40.");
            if (idOwner[n.id + "__label"]) err(n.id, "Cl\xE9 \xAB " + n.id + "__label \xBB d\xE9j\xE0 prise.");
            idOwner[n.id + "__label"] = true;
          }
          if (n.align !== void 0 && n.align !== "" && ALIGN.indexOf(n.align) < 0) err(n.id, "Alignement invalide.");
          if (n.className === "Avatar" && scope.repeater) err(n.id, "Le portrait ne peut pas \xEAtre dans une liste r\xE9p\xE9table.");
          if ((n.className === "Container" || n.className === "Repeater") && n.layout !== void 0 && def.props[0].options.indexOf(n.layout) < 0) err(n.id, "Disposition invalide.");
          if (n.className === "Tab") {
            var tabs = Array.isArray(n.tabs) ? n.tabs : [];
            var seenTab = {};
            if (!tabs.length) err(n.id, "Ajoute au moins un onglet.");
            if (tabs.length > LIMITS2.tabs) err(n.id, "Trop d\u2019onglets (" + LIMITS2.tabs + " max).");
            if (n.verticalWidth != null && !(Number.isInteger(n.verticalWidth) && n.verticalWidth >= 1 && n.verticalWidth <= 11)) err(n.id, "La largeur des onglets verticaux va de 1 \xE0 11.");
            tabs.forEach(function(t2) {
              if (!isObj4(t2) || typeof t2.id !== "string" || !ID_RE3.test(t2.id)) err(n.id, "Cl\xE9 d\u2019onglet invalide.");
              else if (seenTab[t2.id]) err(n.id, "Onglet \xAB " + t2.id + " \xBB en double.");
              else {
                seenTab[t2.id] = true;
                if (idOwner[n.id + "__" + t2.id]) err(n.id, "Cl\xE9 \xAB " + n.id + "__" + t2.id + " \xBB d\xE9j\xE0 prise.");
                idOwner[n.id + "__" + t2.id] = true;
              }
              if (!isObj4(t2) || typeof t2.label !== "string" || !cleanText2(t2.label, 1e5).trim() || t2.label.length > LIMITS2.tabTitle) err(n.id, "Titre d\u2019onglet vide ou trop long.");
              if (isObj4(t2) && !Array.isArray(t2.children)) err(n.id, "Contenu d\u2019onglet illisible.");
            });
          }
          if (n.className === "Repeater") {
            idOwner[n.id + "__edit"] = true;
            idOwner[n.id + "__read"] = true;
            if (!Array.isArray(n.children) || !n.children.length) warn(n.id, "Le formulaire d\u2019\xE9dition de cette liste est vide : on ne pourra rien saisir.");
            if (!Array.isArray(n.readChildren) || !n.readChildren.length) warn(n.id, "L\u2019affichage d\u2019une entr\xE9e est vide : les entr\xE9es appara\xEEtront sans contenu.");
          }
          if (n.variant !== void 0 && n.variant !== "" && (Theme.VARIANTS[n.className] || []).indexOf(n.variant) < 0) err(n.id, "Style inconnu \xAB " + n.variant + " \xBB.");
          if (n.textSize !== void 0 && n.textSize !== "" && !Theme.TEXT_SIZES[n.textSize]) err(n.id, "Taille de texte inconnue.");
          if (n.className === "Column") {
            if (!(Number.isInteger(n.size) && n.size >= 1 && n.size <= 12)) err(n.id, "La largeur d\u2019une colonne va de 1 \xE0 12.");
          }
          if (n.className === "Row") {
            var kids = Array.isArray(n.children) ? n.children : [];
            var total = kids.reduce(function(s, c) {
              return s + (c && c.size ? c.size : 0);
            }, 0);
            if (total > 12) warn(n.id, "Les colonnes de cette ligne font " + total + "/12 : elles passeront \xE0 la ligne.");
            if (!kids.length) warn(n.id, "Ligne vide.");
          }
          ["name", "placeholder", "label", "rollTitle", "iconName", "tooltipLabel", "quickBarLabel"].forEach(function(k) {
            if (n[k] !== void 0 && (typeof n[k] !== "string" || n[k].length > LIMITS2.name)) err(n.id, "\xAB " + k + " \xBB trop long (" + LIMITS2.name + " caract\xE8res max).");
          });
          if (n.className === "Label") {
            if (typeof n.text !== "string" || n.text.length > LIMITS2.text) err(n.id, "Texte trop long (" + LIMITS2.text + " max).");
            else if (n.computed) formulas.push({ id: n.id, text: n.text, kind: "calc", scope });
            if (n.align !== void 0 && ALIGN.indexOf(n.align) < 0) err(n.id, "Alignement invalide.");
            if (n.clickable && !n.roll) warn(n.id, "Cliquable sans jet : le clic ne fera rien.");
            if (n.spendField !== void 0 && n.spendField !== "") {
              if (typeof n.spendField !== "string") err(n.id, "La ressource d\xE9pens\xE9e doit \xEAtre un champ.");
              else if (!n.clickable || !n.roll) err(n.id, "D\xE9penser une ressource demande un texte cliquable avec un jet.");
              else if (scope.repeater) err(n.id, "La d\xE9pense d\u2019une ressource n\u2019est possible que hors d\u2019une liste r\xE9p\xE9table.");
              else if (!spendable[n.spendField]) err(n.id, "La ressource d\xE9pens\xE9e doit \xEAtre un champ nombre saisi, hors d\u2019une liste (\xAB " + n.spendField + " \xBB n\u2019en est pas un).");
            }
            if (n.againstField !== void 0 && n.againstField !== "") {
              if (typeof n.againstField !== "string") err(n.id, "La d\xE9fense compar\xE9e doit \xEAtre un champ.");
              else if (!n.clickable || !n.roll) err(n.id, "Un duel demande un texte cliquable avec un jet.");
              else if (scope.repeater) err(n.id, "Un duel n\u2019est possible que hors d\u2019une liste r\xE9p\xE9table.");
              else if (!allNumbers[n.againstField]) err(n.id, "La d\xE9fense compar\xE9e doit \xEAtre un champ nombre de la fiche, hors d\u2019une liste (\xAB " + n.againstField + " \xBB n\u2019en est pas un). La cible a la m\xEAme fiche : elle doit avoir ce champ.");
            }
            if (n.againstMode !== void 0 && n.againstMode !== "" && n.againstMode !== "atLeast" && n.againstMode !== "atMost") err(n.id, "Le sens de la comparaison est inconnu.");
            if (n.spendN !== void 0 && !(typeof n.spendN === "number" && n.spendN >= 1 && n.spendN <= 99 && Math.floor(n.spendN) === n.spendN)) err(n.id, "La quantit\xE9 d\xE9pens\xE9e doit \xEAtre un entier de 1 \xE0 99.");
            if (n.roll) formulas.push({ id: n.id, text: n.roll, kind: "roll", scope });
          }
          if (n.className === "Icon" && n.roll) formulas.push({ id: n.id, text: n.roll, kind: "roll", scope });
          if (n.className === "Checkbox" && n.effectTarget !== void 0 && n.effectTarget !== "") {
            if (typeof n.effectTarget !== "string") err(n.id, "Le champ de l\u2019effet doit \xEAtre un champ.");
            else if (scope.repeater) err(n.id, "Un effet n\u2019est possible que hors d\u2019une liste r\xE9p\xE9table.");
            else if (!computedNumbers[n.effectTarget]) err(n.id, "Un effet s\u2019ajoute \xE0 un champ nombre calcul\xE9, hors d\u2019une liste (\xAB " + n.effectTarget + " \xBB n\u2019en est pas un). Rends d\u2019abord ce champ calcul\xE9.");
            else {
              var value = n.effectValue == null || n.effectValue === "" ? "1" : n.effectValue;
              if (typeof value !== "string" || value.length > 120) err(n.id, "La valeur de l\u2019effet est trop longue (120 caract\xE8res au plus).");
              else formulas.push({ id: n.id, text: value, kind: "calc", scope });
            }
          }
          if (n.className === "NumberInput") {
            if (n.min != null && !(typeof n.min === "number" && isFinite(n.min))) err(n.id, "Minimum invalide.");
            if (n.max != null && !(typeof n.max === "number" && isFinite(n.max))) err(n.id, "Maximum invalide.");
            if (typeof n.min === "number" && typeof n.max === "number" && n.min > n.max) err(n.id, "Le minimum d\xE9passe le maximum.");
            if (n.computed) formulas.push({ id: n.id, text: String(n.defaultValue == null ? "" : n.defaultValue), kind: "calc", scope });
            else if (n.defaultValue != null && n.defaultValue !== "" && !/^-?\d+(\.\d+)?$/.test(String(n.defaultValue))) err(n.id, "La valeur par d\xE9faut doit \xEAtre un nombre.");
          }
          if (n.className === "Choice") {
            if (!n.tableId) {
              var opts2 = Array.isArray(n.options) ? n.options : [];
              if (!opts2.length) err(n.id, "Ajoute au moins une option.");
              if (opts2.length > LIMITS2.options) err(n.id, "Trop d\u2019options (" + LIMITS2.options + " max).");
              var seen = {};
              opts2.forEach(function(o) {
                if (!isObj4(o) || typeof o.id !== "string" || !ID_RE3.test(o.id)) err(n.id, "Cl\xE9 d\u2019option invalide.");
                else if (seen[o.id]) err(n.id, "Option \xAB " + o.id + " \xBB en double.");
                else seen[o.id] = true;
                if (!isObj4(o) || typeof o.label !== "string" || !cleanText2(o.label, 1e5).trim() || o.label.length > LIMITS2.optionLabel) err(n.id, "Libell\xE9 d\u2019option vide ou trop long.");
              });
            } else if (!(doc.tables && doc.tables[n.tableId])) err(n.id, "Table \xAB " + n.tableId + " \xBB introuvable.");
          }
          if (n.className === "Avatar") avatars.push(n.id);
          slots(n).forEach(function(sl) {
            var inner = n.className === "Repeater" ? { repeater: n, area: sl.area } : scope;
            var owner = n.className === "Tab" || n.className === "Repeater" ? { className: "Column", id: n.id } : n;
            sl.list.forEach(function(c) {
              check(c, depth + 1, owner, inner);
            });
          });
        }
        var spendable = spendableIds(doc);
        var allNumbers = spendableIds(doc, true);
        var computedNumbers = computedNumberIds(doc);
        var NO_SCOPE = { repeater: null, area: null };
        if (main2.children !== void 0 && !Array.isArray(main2.children)) err("main", "Contenu de la fiche illisible.");
        (Array.isArray(main2.children) ? main2.children : []).forEach(function(c) {
          check(c, 0, { className: "Column", id: "main" }, NO_SCOPE);
        });
        if (count > maxNodes) err(null, "Trop d\u2019\xE9l\xE9ments (" + maxNodes + " max).");
        if (avatars.length > 1) err(avatars[1], "Un seul portrait par fiche.");
        var vars = {};
        if (doc.variables !== void 0 && !Array.isArray(doc.variables)) err(null, "Variables illisibles.");
        (Array.isArray(doc.variables) ? doc.variables : []).forEach(function(v) {
          if (!isObj4(v) || typeof v.id !== "string" || !ID_RE3.test(v.id)) err(null, "Nom de variable invalide.");
          else if (vars[v.id] !== void 0) err(null, "Variable \xAB " + v.id + " \xBB en double.");
          else {
            vars[v.id] = String(v.value);
            formulas.push({ id: "$" + v.id, text: String(v.value), kind: "calc", variable: true });
          }
        });
        function contextProblem(f, name) {
          if (!f.scope || f.scope.area !== "read") return "\xAB #" + name + " \xBB ne s\u2019utilise que dans l\u2019affichage d\u2019une entr\xE9e de liste r\xE9p\xE9table.";
          var t = byId[name], sc = scopes[name];
          if (!t || !sc || sc.repeater !== f.scope.repeater || sc.area !== "edit" || !hasValue(t)) return "\xAB #" + name + " \xBB n\u2019est pas un champ du formulaire de cette liste.";
          return "";
        }
        var deps2 = {};
        formulas.forEach(function(f) {
          var where = f.variable ? null : f.id;
          var label = f.variable ? "Variable \xAB " + f.id.slice(1) + " \xBB" : "";
          if (f.kind === "roll") {
            if (f.text.length > LIMITS2.roll) err(where, "Jet trop long (" + LIMITS2.roll + " max).");
            if (!/^[0-9A-Za-z_@$#+\-*\/%().,<>=! \[\]{}]*$/.test(f.text)) err(where, "Le jet contient des caract\xE8res non autoris\xE9s.");
            var refRe = /[@$#](\w*)/g, m;
            while (m = refRe.exec(f.text)) {
              var tok = m[0];
              if (!m[1]) err(where, "R\xE9f\xE9rence vide dans le jet.");
              else if (tok[0] === "@" && !hasValue(byId[m[1]])) err(where, "Le jet cite \xAB @" + m[1] + " \xBB : ce champ n\u2019existe pas ou n\u2019a pas de valeur.");
              else if (tok[0] === "@" && scopes[m[1]] && scopes[m[1]].repeater) err(where, "Le jet cite \xAB @" + m[1] + " \xBB : ce champ est dans une liste r\xE9p\xE9table, utilise \xAB #" + m[1] + " \xBB dans l\u2019affichage d\u2019une entr\xE9e.");
              else if (tok[0] === "$" && vars[m[1]] === void 0) err(where, "Le jet cite la variable \xAB $" + m[1] + " \xBB : elle n\u2019existe pas.");
              else if (tok[0] === "#") {
                var cp = contextProblem(f, m[1]);
                if (cp) err(where, "Le jet : " + cp);
              }
            }
            return;
          }
          var hazard = formulaHtmlProblem(f.text);
          if (hazard) {
            err(where, (label || "Formule") + " : " + hazard);
            return;
          }
          var p = parseFormula(f.text);
          if (!p.ok) {
            err(where, (label || "Formule") + " : " + p.error);
            return;
          }
          p.warnings.forEach(function(w) {
            warn(where, (label ? label + " : " : "") + w);
          });
          var mine = [];
          p.refs.forEach(function(r) {
            var t = byId[r];
            if (!r) err(where, (label || "Formule") + " : r\xE9f\xE9rence \xAB @ \xBB sans nom.");
            else if (!t) err(where, (label || "Formule") + " : \xAB @" + r + " \xBB n\u2019existe pas.");
            else if (!hasValue(t)) err(where, (label || "Formule") + " : \xAB @" + r + " \xBB n\u2019a pas de valeur (c\u2019est un " + COMPONENTS[t.className].label.toLowerCase() + ").");
            else if (scopes[r] && scopes[r].repeater) err(where, (label || "Formule") + " : \xAB @" + r + " \xBB est dans une liste r\xE9p\xE9table ; utilise \xAB #" + r + " \xBB dans l\u2019affichage d\u2019une entr\xE9e.");
            else mine.push(r);
          });
          p.vars.forEach(function(v) {
            if (!v) err(where, (label || "Formule") + " : variable \xAB $ \xBB sans nom.");
            else if (vars[v] === void 0) err(where, (label || "Formule") + " : la variable \xAB $" + v + " \xBB n\u2019existe pas.");
            else mine.push("$" + v);
          });
          p.contexts.forEach(function(c) {
            var cp2 = c ? contextProblem(f, c) : "\xAB # \xBB sans nom.";
            if (cp2) err(where, (label || "Formule") + " : " + cp2);
          });
          deps2[f.id] = mine;
        });
        var state = {};
        var stack = [];
        (function dfs() {
          var reported = false;
          function visit(id) {
            if (state[id] === 2 || reported) return;
            if (state[id] === 1) {
              reported = true;
              err(id.charAt(0) === "$" ? null : id, "Boucle de calcul : " + stack.slice(stack.indexOf(id)).concat(id).join(" \u2192 "));
              return;
            }
            state[id] = 1;
            stack.push(id);
            (deps2[id] || []).forEach(visit);
            stack.pop();
            state[id] = 2;
          }
          Object.keys(deps2).forEach(visit);
        })();
        return { ok: errors.length === 0, errors, warnings, stats: { nodes: count, formulas: formulas.length } };
      }
      var slugOf = function(text) {
        return String(text == null ? "" : text).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 24);
      };
      function kit(doc) {
        var used = {};
        allNodes(doc).forEach(function(n) {
          used[n.id] = true;
        });
        var k = {
          id: function(base) {
            var stem = slugOf(base) || "champ", id = stem, i = 2;
            while (used[id]) id = stem + "_" + i++;
            used[id] = true;
            return id;
          },
          row: function(cols) {
            return { className: "Row", id: k.id("ligne"), children: cols };
          },
          col: function(size, kids) {
            return { className: "Column", id: k.id("col"), size, children: kids };
          },
          label: function(text, extra) {
            return Object.assign({ className: "Label", id: k.id("txt_" + text), text }, extra || {});
          }
        };
        return k;
      }
      var listOf = function(text, max, maxLen) {
        return String(text == null ? "" : text).split(",").map(function(t) {
          return cleanText2(t, maxLen).trim();
        }).filter(Boolean).slice(0, max);
      };
      function listBlock(k, title, prefix, fields, displayText, roll) {
        var ids = {};
        fields.forEach(function(f) {
          ids[f.key] = k.id(prefix + "_" + f.key);
        });
        var fixText = function(t) {
          return t.replace(/#(\w+)/g, function(m, key) {
            return "#" + ids[key];
          });
        };
        var form = fields.map(function(f) {
          var cell = f.kind === "number" ? { className: "NumberInput", id: ids[f.key], name: f.label, defaultValue: f.def == null ? "0" : String(f.def) } : { className: "TextInput", id: ids[f.key], name: f.label, placeholder: f.label, defaultValue: f.def == null ? "" : String(f.def) };
          if (f.min != null) cell.min = f.min;
          return k.col(f.size || 12, [k.label(f.label, { variant: "muted" }), cell]);
        });
        var display = { className: "Label", id: k.id(prefix + "_ligne"), text: fixText(displayText), computed: true };
        if (roll) {
          display.clickable = true;
          display.roll = fixText(roll);
        }
        var repeater = { className: "Repeater", id: k.id(prefix), layout: "vertical", noAdd: false, children: [k.row(form)], readChildren: [k.row([k.col(12, [display])])] };
        return k.row([k.col(12, [k.label(title, { variant: "title" }), repeater])]);
      }
      var BLOCKS = [
        {
          id: "attributes",
          label: "Caract\xE9ristiques",
          description: "Une colonne par caract\xE9ristique : nom cliquable qui lance un jet, valeur, modificateur calcul\xE9.",
          params: [
            { k: "names", t: "text", def: "Force, Dext\xE9rit\xE9, Constitution, Intelligence, Sagesse, Charisme", label: "Noms (s\xE9par\xE9s par des virgules)" },
            { k: "rule", t: "select", def: "dnd", options: ["dnd", "flat", "percent"], labels: { dnd: "Score \u2192 modificateur (score \u2212 10) \xF7 2, jet 1d20 + modificateur", flat: "La valeur est le bonus directement, jet 1d20 + valeur", percent: "La valeur est un pourcentage (0 \xE0 100), jet 1d100 \xE0 comparer \xE0 la valeur" }, label: "R\xE8gle" }
          ],
          build: function(doc, p) {
            var k = kit(doc), names = listOf(p.names, 12, 30);
            if (!names.length) names = ["Force"];
            var pct = p.rule === "percent";
            var dnd = p.rule !== "flat" && !pct;
            var perRow = Math.min(names.length, 6), size = Math.max(2, Math.floor(12 / perRow));
            var rows = [];
            for (var i = 0; i < names.length; i += perRow) {
              rows.push(k.row(names.slice(i, i + perRow).map(function(name) {
                var id = k.id(name), modId = dnd ? k.id("mod_" + name) : null;
                var kids = [
                  k.label(name, { align: "Center", bold: true, variant: "subtitle", clickable: true, roll: pct ? "1d100" : "1d20+@" + (dnd ? modId : id) }),
                  { className: "NumberInput", id, name, defaultValue: pct ? "50" : dnd ? "10" : "0", variant: "stat", min: pct ? 0 : dnd ? 1 : -20, max: pct ? 100 : 30 }
                ];
                if (dnd) kids.push({ className: "NumberInput", id: modId, name: "Modificateur " + name, computed: true, defaultValue: "floor((@" + id + "-10)/2)", align: "Center" });
                return k.col(size, kids);
              })));
            }
            return rows;
          }
        },
        {
          id: "identity",
          label: "Identit\xE9",
          description: "Nom, classe (ou lign\xE9e, profession...) et niveau sur une ligne.",
          params: [{ k: "second", t: "text", def: "Classe", label: "Libell\xE9 du deuxi\xE8me champ" }, { k: "level", t: "text", def: "Niveau", label: "Libell\xE9 du niveau" }],
          build: function(doc, p) {
            var k = kit(doc), second = cleanText2(p.second, 30).trim() || "Classe", level = cleanText2(p.level, 30).trim() || "Niveau";
            return [k.row([
              k.col(6, [k.label("Nom", { variant: "muted" }), { className: "TextInput", id: k.id("nom_personnage"), name: "Nom", defaultValue: "" }]),
              k.col(4, [k.label(second, { variant: "muted" }), { className: "TextInput", id: k.id(second), name: second, defaultValue: "" }]),
              k.col(2, [k.label(level, { variant: "muted" }), { className: "NumberInput", id: k.id(level), name: level, defaultValue: "1", min: 0 }])
            ])];
          }
        },
        {
          id: "resource",
          label: "Ressource (actuel / max)",
          description: "Points de vie, mana, munitions... : valeur actuelle sur maximum, en gros chiffres.",
          params: [{ k: "name", t: "text", def: "Points de vie", label: "Nom" }, { k: "max", t: "int", def: 10, min: 1, max: 999, label: "Maximum de d\xE9part" }],
          build: function(doc, p) {
            var k = kit(doc), name = cleanText2(p.name, 40).trim() || "Ressource", max = Math.max(1, Math.min(999, parseInt(p.max, 10) || 10));
            return [k.row([
              k.col(5, [k.label(name, { variant: "subtitle", align: "Center" }), { className: "NumberInput", id: k.id(name), name, defaultValue: String(max), min: 0, variant: "stat" }]),
              k.col(2, [k.label("/", { align: "Center", textSize: "large" })]),
              k.col(5, [k.label("Maximum", { variant: "muted", align: "Center" }), { className: "NumberInput", id: k.id(name + "_max"), name: name + " (max)", defaultValue: String(max), min: 1, variant: "stat" }])
            ])];
          }
        },
        {
          id: "track",
          label: "Pastilles \xE0 cocher",
          description: "Stress, blessures, \xE9checs de mort... : une s\xE9rie de pastilles dont on coche le nombre voulu.",
          params: [{ k: "name", t: "text", def: "Stress", label: "Nom" }, { k: "count", t: "int", def: 5, min: 1, max: 20, label: "Nombre de pastilles" }],
          build: function(doc, p) {
            var k = kit(doc), name = cleanText2(p.name, 40).trim() || "Pastilles", count = Math.max(1, Math.min(20, parseInt(p.count, 10) || 5));
            var id = k.id(name);
            if (id.length > 12) id = id.slice(0, 12).replace(/_+$/, "");
            return [k.row([k.col(12, [k.label(name, { variant: "subtitle" }), { className: "Track", id, name, count, showTotal: true }])])];
          }
        },
        {
          id: "skills",
          label: "Liste de comp\xE9tences",
          description: "Liste que le joueur remplit : nom et bonus. Un clic sur une entr\xE9e lance 1d20 + bonus.",
          params: [{ k: "title", t: "text", def: "Comp\xE9tences", label: "Titre" }],
          build: function(doc, p) {
            var k = kit(doc), title = cleanText2(p.title, 40).trim() || "Comp\xE9tences";
            return [listBlock(k, title, slugOf(title) || "liste", [
              { key: "nom", kind: "text", label: "Nom", size: 8 },
              { key: "bonus", kind: "number", label: "Bonus", def: 0, size: 4 }
            ], '#nom + " : " + #bonus', "1d20+#bonus")];
          }
        },
        {
          id: "attacks",
          label: "Liste d'attaques",
          description: "Nom, bonus d'attaque et d\xE9g\xE2ts. Un clic lance 1d20 + bonus ; les d\xE9g\xE2ts s'affichent \xE0 c\xF4t\xE9.",
          params: [{ k: "title", t: "text", def: "Attaques", label: "Titre" }],
          build: function(doc, p) {
            var k = kit(doc), title = cleanText2(p.title, 40).trim() || "Attaques";
            return [listBlock(k, title, slugOf(title) || "attaques", [
              { key: "nom", kind: "text", label: "Arme", size: 5 },
              { key: "bonus", kind: "number", label: "Bonus", def: 0, size: 3 },
              { key: "degats", kind: "text", label: "D\xE9g\xE2ts", def: "1d6", size: 4 }
            ], '#nom + " (" + #degats + ")"', "1d20+#bonus")];
          }
        },
        {
          id: "inventory",
          label: "Inventaire",
          description: "Liste d'objets avec quantit\xE9 et poids.",
          params: [{ k: "title", t: "text", def: "\xC9quipement", label: "Titre" }],
          build: function(doc, p) {
            var k = kit(doc), title = cleanText2(p.title, 40).trim() || "\xC9quipement";
            return [listBlock(k, title, slugOf(title) || "inventaire", [
              { key: "nom", kind: "text", label: "Objet", size: 6 },
              { key: "qte", kind: "number", label: "Quantit\xE9", def: 1, min: 0, size: 3 },
              { key: "poids", kind: "number", label: "Poids", def: 0, min: 0, size: 3 }
            ], '#nom + " \xD7" + #qte', null)];
          }
        },
        {
          id: "spells",
          label: "Liste de sorts",
          description: "Nom, niveau et effet de chaque sort. Le joueur ajoute ses sorts un par un.",
          params: [{ k: "title", t: "text", def: "Sorts", label: "Titre" }],
          build: function(doc, p) {
            var k = kit(doc), title = cleanText2(p.title, 40).trim() || "Sorts";
            return [listBlock(k, title, slugOf(title) || "sorts", [
              { key: "nom", kind: "text", label: "Sort", size: 5 },
              { key: "niveau", kind: "number", label: "Niveau", def: 0, min: 0, size: 2 },
              { key: "effet", kind: "text", label: "Effet", size: 5 }
            ], '#nom + " (niv. " + #niveau + ")"', null)];
          }
        },
        {
          id: "features",
          label: "Liste d'aptitudes",
          description: "Nom, origine et description de chaque aptitude, don ou capacit\xE9.",
          params: [{ k: "title", t: "text", def: "Aptitudes", label: "Titre" }],
          build: function(doc, p) {
            var k = kit(doc), title = cleanText2(p.title, 40).trim() || "Aptitudes";
            return [listBlock(k, title, slugOf(title) || "aptitudes", [
              { key: "nom", kind: "text", label: "Aptitude", size: 4 },
              { key: "source", kind: "text", label: "Origine", size: 3 },
              { key: "effet", kind: "text", label: "Description", size: 5 }
            ], '#nom + " \xB7 " + #source', null)];
          }
        },
        {
          id: "customlist",
          label: "Liste libre",
          description: "Une liste dont tu nommes les colonnes (jusqu'\xE0 5) : contacts, alli\xE9s, tr\xE9sors, indices\u2026",
          params: [
            { k: "title", t: "text", def: "Contacts", label: "Titre" },
            { k: "columns", t: "text", def: "Nom, R\xF4le, Attitude", label: "Colonnes (s\xE9par\xE9es par des virgules)" }
          ],
          build: function(doc, p) {
            var k = kit(doc), title = cleanText2(p.title, 40).trim() || "Liste";
            var names = listOf(p.columns, 5, 30);
            if (!names.length) names = ["Nom"];
            var size = Math.max(2, Math.floor(12 / names.length));
            var fields = names.map(function(name, i) {
              return { key: "c" + (i + 1), kind: "text", label: name, size };
            });
            var display = names.length > 1 ? '#c1 + " \xB7 " + #c2' : "#c1";
            return [listBlock(k, title, slugOf(title) || "liste", fields, display, null)];
          }
        },
        {
          id: "notes",
          label: "Notes libres",
          description: "Un titre et une grande zone de texte.",
          params: [{ k: "title", t: "text", def: "Notes", label: "Titre" }],
          build: function(doc, p) {
            var k = kit(doc), title = cleanText2(p.title, 40).trim() || "Notes";
            return [k.row([k.col(12, [k.label(title, { variant: "title" }), { className: "Textarea", id: k.id(title), name: title, defaultValue: "" }])])];
          }
        }
      ];
      function buildBlock(doc, id, params) {
        var b = BLOCKS.filter(function(x) {
          return x.id === id;
        })[0];
        if (!b) throw new Error("Bloc inconnu : " + id);
        var p = {};
        b.params.forEach(function(d) {
          var v = params && params[d.k] !== void 0 ? params[d.k] : d.def;
          if (d.t === "select" && d.options.indexOf(v) < 0) v = d.def;
          p[d.k] = v;
        });
        return b.build(doc, p);
      }
      function stripBuilderFields(n) {
        var out = {};
        Object.keys(n).forEach(function(k) {
          if (k !== "options" && k !== "children" && k !== "variant" && k !== "textSize" && k !== "bold" && k !== "upper" && k !== "tabs" && k !== "readChildren" && k !== "noAdd" && k !== "gmOnly" && k !== "spendField" && k !== "spendN" && k !== "againstField" && k !== "againstMode" && k !== "effectTarget" && k !== "effectValue") out[k] = n[k];
        });
        return out;
      }
      function hasEffects(doc) {
        return allNodes(doc).some(function(n) {
          return n.className === "Checkbox" && typeof n.effectTarget === "string" && n.effectTarget !== "";
        });
      }
      function applyEffects(doc) {
        if (!hasEffects(doc)) return doc;
        var copy = JSON.parse(JSON.stringify(doc));
        var byId = {};
        allNodes(copy).forEach(function(n) {
          if (typeof n.id === "string") byId[n.id] = n;
        });
        allNodes(copy).forEach(function(box) {
          if (box.className !== "Checkbox" || typeof box.effectTarget !== "string" || box.effectTarget === "") return;
          var target = byId[box.effectTarget];
          if (!target || target.className !== "NumberInput" || !target.computed) return;
          var value = String(box.effectValue == null || box.effectValue === "" ? "1" : box.effectValue).trim();
          target.defaultValue = "(" + String(target.defaultValue == null ? "" : target.defaultValue) + ")+if(@" + box.id + ">0,(" + value + "),0)";
        });
        return copy;
      }
      function computedNumberIds(doc) {
        var out = {}, all = spendableIds(doc, true);
        Object.keys(all).forEach(function(id) {
          if (all[id].computed) out[id] = all[id];
        });
        return out;
      }
      function derivedSheet(doc, wanted) {
        doc = applyEffects(doc);
        var all = {};
        function visit(list2) {
          (Array.isArray(list2) ? list2 : []).forEach(function(n2) {
            if (!isObj4(n2)) return;
            if (typeof n2.id === "string") all[n2.id] = n2;
            if (n2.className === "Repeater") return;
            slots(n2).forEach(function(sl) {
              visit(sl.list);
            });
          });
        }
        (doc && doc.views || []).forEach(function(v) {
          if (isObj4(v)) visit(v.children);
        });
        var variables = {};
        (doc && doc.variables || []).forEach(function(v) {
          if (isObj4(v) && typeof v.id === "string") variables[v.id] = String(v.value);
        });
        var nodes = {}, vars = {}, todo = (wanted || []).slice(), guard = 0;
        function reads(formula2) {
          var p = parseFormula(formula2);
          if (!p.ok) return;
          p.refs.forEach(function(r) {
            todo.push(r);
          });
          p.vars.forEach(function(name) {
            if (variables[name] === void 0 || vars[name] !== void 0) return;
            vars[name] = variables[name].slice(0, LIMITS2.formula);
            reads(vars[name]);
          });
        }
        while (todo.length && guard++ < 2e3 && Object.keys(nodes).length < 200) {
          var id = todo.pop();
          var n = all[id];
          if (nodes[id] || !n) continue;
          if ((n.className === "NumberInput" || n.className === "Label") && n.computed) {
            var formula = String(n.className === "Label" ? n.text : n.defaultValue == null ? "" : n.defaultValue).slice(0, LIMITS2.formula);
            nodes[id] = { k: "calc", formula };
            reads(formula);
          } else if (n.className === "NumberInput") {
            var def = parseFloat(n.defaultValue);
            var node = { k: "number", def: Number.isNaN(def) ? 0 : def };
            if (typeof n.min === "number") node.min = n.min;
            if (typeof n.max === "number") node.max = n.max;
            nodes[id] = node;
          } else if (n.className === "Checkbox") nodes[id] = { k: "check" };
          else if (n.className === "Track") nodes[id] = { k: "track", count: n.count || 0 };
          else if (n.className === "Choice") nodes[id] = { k: "choice", first: n.optional ? "" : ((n.options || [])[0] || {}).id || "" };
          else if (n.className === "TextInput" || n.className === "Textarea") nodes[id] = { k: "text", def: String(n.defaultValue == null ? "" : n.defaultValue).slice(0, 400) };
        }
        return { nodes, vars };
      }
      function compileRules(doc) {
        var gmOnly = [], actions = {}, writable = {}, computedDefences = [];
        var spendable = spendableIds(doc);
        var allNumbers = spendableIds(doc, true);
        function visit(list2, prefix) {
          (Array.isArray(list2) ? list2 : []).forEach(function(n) {
            if (!isObj4(n)) return;
            if (n.gmOnly === true && COMPONENTS[n.className] && COMPONENTS[n.className].value && typeof n.id === "string") gmOnly.push(prefix + n.id);
            if (n.className === "Label" && !prefix && n.clickable && n.roll && typeof n.spendField === "string" && spendable[n.spendField]) {
              var target = spendable[n.spendField];
              actions[n.id] = { spend: [{ field: target.id, n: typeof n.spendN === "number" && n.spendN >= 1 ? n.spendN : 1, name: cleanText2(target.name, 40) }] };
              writable[target.id] = { t: "number", min: typeof target.min === "number" ? Math.min(0, target.min) : 0, max: typeof target.max === "number" ? target.max : 1e6 };
            }
            if (n.className === "Label" && !prefix && n.clickable && n.roll && typeof n.againstField === "string" && allNumbers[n.againstField]) {
              var defence = allNumbers[n.againstField];
              actions[n.id] = actions[n.id] || { spend: [] };
              actions[n.id].against = { field: defence.id, name: cleanText2(defence.name, 40), mode: n.againstMode === "atMost" ? "atMost" : "atLeast" };
              if (defence.computed) computedDefences.push(defence.id);
            }
            slots(n).forEach(function(sl) {
              if (n.className === "Repeater") {
                if (sl.area === "edit") visit(sl.list, prefix + n.id + ".*.");
              } else visit(sl.list, prefix);
            });
          });
        }
        (doc && doc.views || []).forEach(function(v) {
          if (isObj4(v)) visit(v.children, "");
        });
        var out = { v: 1 };
        if (gmOnly.length) out.gmOnly = gmOnly.slice(0, 200);
        if (Object.keys(writable).length) out.writable = writable;
        if (Object.keys(actions).length) out.actions = actions;
        if (computedDefences.length) out.sheet = derivedSheet(doc, computedDefences);
        return Object.keys(out).length > 1 ? out : null;
      }
      function compile(doc, opts) {
        return withLimits(opts, function() {
          return compileInner(doc, opts);
        });
      }
      function compileInner(doc, opts) {
        doc = upgradeDoc(doc);
        var v = validate(doc, opts);
        if (!v.ok) throw new Error("Syst\xE8me invalide : " + v.errors[0].message);
        doc = applyEffects(doc);
        var tables = JSON.parse(JSON.stringify(doc.tables || {}));
        var avatarId = null;
        var subViews = [];
        function subView(id, name, children) {
          return {
            className: "View",
            type: "SubComponent",
            id,
            name: escapeMarkup(cleanText2(name, LIMITS2.name)),
            craft: null,
            tokenizable: null,
            droppable: null,
            avatarId: null,
            width: 650,
            height: 400,
            classes: "",
            children
          };
        }
        var byId = {};
        var formulas = [];
        var inList = 0;
        function node(n) {
          if (n.className === "Gauge") {
            var cells = n.segments > 0 ? n.segments : 20;
            var gcls = ["tt-gauge", "tt-gv-" + n.valueField, typeof n.maxField === "string" && n.maxField ? "tt-gm-" + n.maxField : "tt-gmax-" + n.max, "tt-gs-" + cells];
            if (n.showValue !== false) gcls.push("tt-gshow");
            var glabel = { className: "Label", id: n.id + "__label", text: escapeMarkup(cleanText2(n.name || "", LIMITS2.name)), align: "Left", clickable: false, computed: false, classes: "tt-gauge-label" };
            var gauge = { className: "Container", id: n.id, layout: "horizontal", classes: gcls.join(" "), children: [glabel] };
            byId[n.id] = gauge;
            byId[glabel.id] = glabel;
            return gauge;
          }
          var out = stripBuilderFields(n);
          byId[n.id] = out;
          if (!inList && n.className === "Label" && n.computed) formulas.push({ id: n.id, text: n.text });
          if (!inList && n.className === "NumberInput" && n.computed) formulas.push({ id: n.id, text: String(n.defaultValue == null ? "" : n.defaultValue) });
          ["text", "name", "placeholder", "label", "rollTitle", "defaultValue", "tooltipLabel", "quickBarLabel"].forEach(function(k) {
            if (typeof out[k] === "string") out[k] = escapeMarkup(cleanText2(out[k], LIMITS2.text));
          });
          if (typeof out.iconName === "string") out.iconName = out.iconName.replace(/[^\w\- ]/g, "");
          if (n.className === "Label" && n.computed) out.text = cleanText2(n.text, LIMITS2.formula);
          if (n.className === "NumberInput" && n.computed) out.defaultValue = cleanText2(n.defaultValue, LIMITS2.formula);
          var cls = Theme.classesFor(n);
          if (cls) out.classes = cls;
          if (out.tooltipLabel) out.tooltip = true;
          else {
            delete out.tooltipLabel;
          }
          if (out.align === "") delete out.align;
          if (n.className === "Label" && !out.quickBarLabel) delete out.quickBarLabel;
          if (n.className === "Track") {
            var pips = [], sum = [];
            for (var i = 1; i <= n.count; i++) {
              pips.push({ className: "Checkbox", id: n.id + "__" + i, name: n.id + "__" + i, label: "" });
              sum.push("@" + n.id + "__" + i);
            }
            pips.forEach(function(pip) {
              byId[pip.id] = pip;
            });
            formulas.push({ id: n.id, text: sum.join("+") });
            var total = { className: "NumberInput", id: n.id, name: out.name, defaultValue: sum.join("+"), computed: true, computedValue: sum.join("+"), classes: n.showTotal ? "tt-track-total" : "d-none" };
            pips.push(total);
            byId[n.id] = total;
            return { className: "Container", id: n.id + "__box", layout: "horizontal", classes: "tt-track", children: pips };
          }
          if (n.className === "Label") {
            out.align = n.align || "Left";
            out.clickable = !!n.clickable || !!n.roll;
            out.computed = !!n.computed;
            if (n.roll) out.roll = n.roll;
          }
          if (n.className === "NumberInput") {
            out.computed = !!n.computed;
            if (n.computed) out.computedValue = out.defaultValue;
            if (n.min == null) delete out.min;
            if (n.max == null) delete out.max;
          }
          if (n.className === "Choice" && !n.tableId) {
            var tid = "choice_" + n.id;
            tables[tid] = { id: tid, columns: ["id", "label"], data: (n.options || []).map(function(o) {
              return { id: o.id, label: escapeMarkup(cleanText2(o.label, LIMITS2.optionLabel)) };
            }) };
            out.tableId = tid;
            out.label = "label";
          }
          if (n.className === "Avatar") avatarId = avatarId || n.id;
          if (n.className === "Tab") {
            var tabTable = "tabs_" + n.id;
            var tabs = n.tabs || [];
            tables[tabTable] = { id: tabTable, columns: ["view", "title"], data: tabs.map(function(t) {
              return { view: n.id + "__" + t.id, title: escapeMarkup(cleanText2(t.label, LIMITS2.tabTitle)) };
            }) };
            out.tableId = tabTable;
            out.titleAttribute = "title";
            out.viewAttribute = "view";
            out.vertical = !!n.vertical;
            out.verticalWidth = n.verticalWidth || 3;
            out.children = [];
            tabs.forEach(function(t) {
              var sv = subView(n.id + "__" + t.id, t.label, []);
              subViews.push(sv);
              sv.children = (t.children || []).map(node);
            });
            return out;
          }
          if (n.className === "Repeater") {
            delete out.layout;
            var rcls = [out.classes, n.layout === "horizontal" ? "layout-horizontal" : "", n.noAdd ? "no-add" : ""].filter(Boolean).join(" ");
            if (rcls) out.classes = rcls;
            out.viewId = n.id + "__edit";
            out.readViewId = n.id + "__read";
            out.children = [];
            var editView = subView(out.viewId, "edit", []), readView = subView(out.readViewId, "read", []);
            subViews.push(editView, readView);
            inList++;
            editView.children = (n.children || []).map(node);
            readView.children = (n.readChildren || []).map(node);
            inList--;
            return out;
          }
          if (n.children) out.children = n.children.map(node);
          return out;
        }
        var main2 = doc.views[0];
        var tree = [{
          className: "View",
          type: "Main",
          id: "main",
          name: cleanText2(main2.name, LIMITS2.name) || "Personnage",
          craft: true,
          avatarId: null,
          // the game only lists views flagged craft in "Content Crafting": without it no sheet can be created
          tokenizable: !!main2.tokenizable,
          droppable: null,
          width: main2.width,
          height: main2.height,
          classes: "",
          children: (main2.children || []).map(node)
        }];
        tree[0].avatarId = avatarId;
        subViews.forEach(function(v2) {
          tree.push(v2);
        });
        var varText = {};
        (doc.variables || []).forEach(function(x) {
          varText[x.id] = String(x.value);
        });
        var reads = function(text, seen) {
          var parsed = parseFormula(text);
          if (!parsed.ok) return [];
          var found = parsed.refs.slice();
          parsed.vars.forEach(function(v2) {
            if (varText[v2] !== void 0 && !seen[v2]) {
              seen[v2] = true;
              found = found.concat(reads(varText[v2], seen));
            }
          });
          return found;
        };
        var dependents = {};
        formulas.forEach(function(f) {
          reads(f.text, {}).forEach(function(dep) {
            if (!dep || dep === f.id || !byId[dep]) return;
            var list2 = dependents[dep] || (dependents[dep] = []);
            if (list2.indexOf(f.id) < 0) list2.push(f.id);
          });
        });
        Object.keys(dependents).forEach(function(id) {
          byId[id].references = dependents[id];
        });
        if ((doc.variables || []).length) {
          tables.variables = { id: "variables", columns: ["id", "value"], data: doc.variables.map(function(x) {
            return { id: x.id, value: String(x.value) };
          }) };
        }
        var result = {
          tree,
          tables,
          // Nothing typed by a person goes into the script: the engine's script sandbox executes it.
          script: "// built with the Ourdir System Builder"
        };
        var skins = Array.isArray(doc.skins) ? doc.skins : [];
        if (skins.length) {
          var faces = {};
          result.skins = skins.map(function(s) {
            var css = Theme.themeCss(s.theme, "game", doc.assets, s.id).split("\n").filter(function(line) {
              if (line.indexOf("@font-face") !== 0) return true;
              if (faces[line]) return false;
              return faces[line] = true;
            }).join("\n");
            return { id: s.id, name: cleanText2(s.name, 40).trim(), css };
          });
        }
        return result;
      }
      function fromSystem(system, meta) {
        meta = meta || {};
        var doc = emptyDoc(meta.name || "Syst\xE8me import\xE9");
        doc.id = meta.id || "systeme-importe";
        doc.version = meta.version || "1.0.0";
        doc.author = cleanText2(meta.author, LIMITS2.name);
        doc.description = cleanText2(meta.description, 1e3);
        doc.license = cleanText2(meta.license, LIMITS2.name);
        var views = (system.tree || []).filter(function(t) {
          return t.id === "main";
        });
        if (!views.length) throw new Error("Cette fiche n\u2019a pas de vue principale.");
        var src = views[0];
        var unknown = {};
        var tables = isObj4(system.tables) ? JSON.parse(JSON.stringify(system.tables)) : {};
        if (Array.isArray(system.tables)) {
          tables = {};
          system.tables.forEach(function(t) {
            if (t && t.id) tables[t.id] = t;
          });
        }
        var viewMap = {};
        (system.tree || []).forEach(function(t) {
          if (t && t.type === "SubComponent" && typeof t.id === "string") viewMap[t.id] = t;
        });
        var variables = [];
        if (tables.variables) {
          variables = (tables.variables.data || []).map(function(l) {
            return { id: l.id, value: String(l.value) };
          });
          delete tables.variables;
        }
        function convList(list2) {
          return (list2 || []).map(conv).filter(Boolean);
        }
        function conv(n) {
          if (!COMPONENTS[n.className]) {
            unknown[n.className] = true;
            return null;
          }
          if (n.className === "Tab") {
            var tt = tables[n.tableId];
            if (!tt || !n.viewAttribute || !n.titleAttribute) {
              unknown["Tab (sans table d\u2019onglets)"] = true;
              return null;
            }
            var tab = { className: "Tab", id: n.id, vertical: !!n.vertical, verticalWidth: n.verticalWidth || 3, tabs: [] };
            (tt.data || []).forEach(function(line) {
              var viewId = String(line[n.viewAttribute]);
              var local = viewId.indexOf(n.id + "__") === 0 ? viewId.slice(n.id.length + 2) : viewId.replace(/\W/g, "_").slice(0, 40);
              tab.tabs.push({ id: local, label: unescapeMarkup(String(line[n.titleAttribute] == null ? local : line[n.titleAttribute])), children: viewMap[viewId] ? convList(viewMap[viewId].children) : [] });
            });
            delete tables[n.tableId];
            return tab;
          }
          if (n.className === "Repeater") {
            return {
              className: "Repeater",
              id: n.id,
              layout: /(^|\s)layout-horizontal(\s|$)/.test(n.classes || "") ? "horizontal" : "vertical",
              noAdd: /(^|\s)no-add(\s|$)/.test(n.classes || ""),
              children: viewMap[n.viewId] ? convList(viewMap[n.viewId].children) : [],
              readChildren: viewMap[n.readViewId] ? convList(viewMap[n.readViewId].children) : []
            };
          }
          var out = {};
          Object.keys(n).forEach(function(k) {
            if (k !== "children" && n[k] !== null && k !== "collapsed" && k !== "references" && k !== "type" && k !== "classes" && k !== "parentId") out[k] = n[k];
          });
          out.className = n.className;
          if (n.className === "NumberInput" && n.computed && n.computedValue) out.defaultValue = n.computedValue;
          if (n.className === "Choice" && n.tableId && tables[n.tableId] && n.label) {
            var t = tables[n.tableId];
            var col = n.label;
            out.options = (t.data || []).map(function(l) {
              return { id: l.id, label: unescapeMarkup(String(l[col] == null ? l.id : l[col])) };
            });
            delete out.tableId;
            delete out.label;
            delete tables[n.tableId];
          }
          ["text", "name", "placeholder", "label", "rollTitle", "defaultValue", "computedValue", "tooltipLabel", "quickBarLabel"].forEach(function(k) {
            if (typeof out[k] === "string") out[k] = unescapeMarkup(out[k]);
          });
          if (n.children) out.children = n.children.map(conv).filter(Boolean);
          return out;
        }
        doc.views[0] = {
          id: "main",
          type: "Main",
          name: src.name || "Personnage",
          width: src.width || 900,
          height: src.height || 700,
          tokenizable: !!src.tokenizable,
          craft: !!src.craft,
          avatarId: src.avatarId || null,
          children: (src.children || []).map(conv).filter(Boolean)
        };
        doc.tables = tables;
        doc.variables = variables;
        var names = Object.keys(unknown);
        if (names.length) throw new Error("Cette fiche utilise des \xE9l\xE9ments que l\u2019\xE9diteur ne g\xE8re pas encore : " + names.join(", ") + ".");
        return doc;
      }
      function evaluateSheet(doc, inputs) {
        doc = applyEffects(doc);
        inputs = inputs || {};
        var byId = {};
        allNodes(doc).forEach(function(n) {
          byId[n.id] = n;
        });
        var vars = {};
        (doc.variables || []).forEach(function(x) {
          vars[x.id] = String(x.value);
        });
        var cache = {}, busy = {};
        var errors = {};
        function value(id) {
          if (cache.hasOwnProperty(id)) return cache[id];
          var n = byId[id];
          if (!n) return 0;
          if (busy[id]) {
            errors[id] = "boucle";
            return 0;
          }
          var result;
          var isCalc = n.className === "Label" && n.computed || n.className === "NumberInput" && n.computed;
          if (isCalc) {
            busy[id] = true;
            var text = n.className === "Label" ? n.text : String(n.defaultValue == null ? "" : n.defaultValue);
            var p = parseFormula(text);
            if (p.ok) result = evalFinal(evalAst(p.ast, env));
            else {
              errors[id] = p.error;
              result = 0;
            }
            busy[id] = false;
          } else if (n.className === "NumberInput") {
            var raw = inputs[id] !== void 0 ? inputs[id] : n.defaultValue;
            var num = parseFloat(raw);
            result = Number.isNaN(num) ? 0 : num;
            if (typeof n.min === "number" && result < n.min) result = n.min;
            if (typeof n.max === "number" && result > n.max) result = n.max;
          } else if (n.className === "Checkbox") {
            result = inputs[id] ? 1 : 0;
          } else if (n.className === "Track") {
            result = 0;
            for (var pi = 1; pi <= (n.count || 0); pi++) if (inputs[id + "__" + pi]) result++;
          } else if (n.className === "Choice") {
            result = inputs[id] !== void 0 ? inputs[id] : n.optional ? "" : ((n.options || [])[0] || {}).id || "";
          } else {
            result = inputs[id] !== void 0 ? inputs[id] : n.defaultValue == null ? "" : n.defaultValue;
          }
          cache[id] = result;
          return result;
        }
        var env = { ref: value, variable: function(id) {
          return vars[id];
        } };
        function sample(rep) {
          var ctx = {};
          walk3(rep.children || [], function(n) {
            if (COMPONENTS[n.className].value && !n.computed) ctx[n.id] = value(n.id);
          });
          return ctx;
        }
        function envFor(ctx) {
          return { ref: value, variable: env.variable, context: function(id) {
            return ctx ? ctx[id] : 0;
          } };
        }
        var values = {};
        allNodes(doc).forEach(function(n) {
          if (COMPONENTS[n.className].value || n.className === "Label" && n.computed) values[n.id] = value(n.id);
        });
        return {
          values,
          errors,
          /** The roll as the game would send it: @ids replaced by their values. */
          roll: function(expression, ctx) {
            var e = ctx ? envFor(ctx) : env;
            return String(expression).replace(/[@$#]\w+/g, function(tok) {
              var p = parseFormula(tok);
              return p.ok ? String(evalFinal(evalAst(p.ast, e))) : tok;
            });
          },
          sample,
          /** Text of a label; inside a repeater's display pass the entry (`sample(repeater)`) so #fields resolve. */
          text: function(n, ctx) {
            if (n.className === "Label" && n.computed) {
              if (!ctx) return String(value(n.id));
              var p = parseFormula(n.text);
              return p.ok ? String(evalFinal(evalAst(p.ast, envFor(ctx)))) : "";
            }
            return n.text;
          }
        };
      }
      return {
        LIMITS: LIMITS2,
        COMPONENTS,
        ID_RE: ID_RE3,
        emptyDoc,
        newNode,
        uniqueId,
        allNodes,
        walk: walk3,
        slots,
        hasValue,
        BLOCKS,
        buildBlock,
        validate,
        compile,
        upgradeDoc,
        compileRules,
        derivedSheet,
        applyEffects,
        computedNumberIds,
        spendableIds,
        fromSystem,
        parseFormula,
        evalAst,
        evalFinal,
        evaluateSheet,
        cleanText: cleanText2,
        escapeMarkup,
        slugOf,
        Theme
      };
    });
  }
});

// apps/desktop/verifier/cli.ts
var import_node_fs6 = __toESM(require("node:fs"));
var import_node_path6 = __toESM(require("node:path"));

// apps/desktop/src/catalog/pipeline.ts
var import_node_crypto3 = __toESM(require("node:crypto"));
var import_node_fs4 = __toESM(require("node:fs"));
var import_node_os2 = __toESM(require("node:os"));
var import_node_path4 = __toESM(require("node:path"));

// apps/desktop/src/modules/install.ts
var import_node_crypto = __toESM(require("node:crypto"));
var import_node_fs2 = __toESM(require("node:fs"));
var import_node_os = __toESM(require("node:os"));
var import_node_path2 = __toESM(require("node:path"));

// apps/desktop/src/identity.ts
var import_crypto = __toESM(require("crypto"));
var SPKI_ED25519_PREFIX = Buffer.from("302a300506032b6570032100", "hex");
var MAX_NAME = 32;
var b64u = (buf) => buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
var fromB64u = (text) => Buffer.from(text.replace(/-/g, "+").replace(/_/g, "/"), "base64");
function generateIdentity() {
  const pair = import_crypto.default.generateKeyPairSync("ed25519");
  const spki = pair.publicKey.export({ type: "spki", format: "der" });
  const pkcs8 = pair.privateKey.export({ type: "pkcs8", format: "der" });
  return { publicKey: b64u(spki.slice(spki.length - 32)), privateKey: b64u(pkcs8) };
}
function isValidPublicKey(publicKey) {
  if (typeof publicKey !== "string" || !/^[A-Za-z0-9_-]{43}$/.test(publicKey)) {
    return false;
  }
  return fromB64u(publicKey).length === 32;
}
function sanitizeName(raw) {
  return String(raw == null ? "" : raw).replace(/'/g, "\u2019").replace(/[\u0000-\u001f\u007f<>&"`]/g, "").replace(/\s+/g, " ").trim().slice(0, MAX_NAME);
}
function signedBytes(context, data) {
  return Buffer.concat([Buffer.from("tabletop/v1/" + context + "\0", "utf8"), data]);
}
function sign(identity, context, data) {
  const key = import_crypto.default.createPrivateKey({
    key: fromB64u(identity.privateKey),
    format: "der",
    type: "pkcs8"
  });
  return b64u(import_crypto.default.sign(null, signedBytes(context, data), key));
}
function verify(publicKey, context, data, signature) {
  if (!isValidPublicKey(publicKey) || typeof signature !== "string" || signature.length > 128) {
    return false;
  }
  try {
    const key = import_crypto.default.createPublicKey({
      key: Buffer.concat([SPKI_ED25519_PREFIX, fromB64u(publicKey)]),
      format: "der",
      type: "spki"
    });
    return import_crypto.default.verify(null, signedBytes(context, data), key, fromB64u(signature));
  } catch (e) {
    return false;
  }
}

// apps/desktop/src/modules/compat.ts
var RULES = [
  // ---- shimmed
  { api: "Hooks", re: /\bHooks\.(on|once|off|call|callAll)\b/g, status: "supported", note: "\xC9v\xE9nements du moteur.", permission: "engine.hook" },
  { api: "game.settings", re: /\bgame\.settings\.(register|registerMenu|get|set)\b/g, status: "supported", note: "R\xE9glages du module, stock\xE9s localement.", permission: "storage.local" },
  { api: "game.i18n", re: /\bgame\.i18n\.(localize|format|has)\b/g, status: "supported", note: "Traductions du module." },
  { api: "game.modules", re: /\bgame\.modules\.(get|has)\b/g, status: "supported", note: "Liste des modules install\xE9s." },
  { api: "game.user", re: /\bgame\.(user|users)\b/g, status: "partial", note: "Nom, id et statut MJ seulement." },
  { api: "ui.notifications", re: /\bui\.notifications\.(info|warn|error|notify)\b/g, status: "supported", note: "Notifications \xE0 l\u2019\xE9cran.", permission: "ui.panel" },
  { api: "ChatMessage", re: /\bChatMessage\.(create|getSpeaker)\b/g, status: "partial", note: "Messages simples ; pas de rendu de gabarit personnalis\xE9.", permission: "chat.write" },
  { api: "Hooks chatMessage", re: /["']chatMessage["']/g, status: "partial", note: "Commandes de chat via chat.command.", permission: "chat.command" },
  { api: "Roll", re: /\bnew\s+Roll\s*\(|\bRoll\.(create|validate|fromTerms)\b/g, status: "partial", note: "Syntaxe de d\xE9s du moteur : la plupart des formules simples passent.", permission: "dice.formula" },
  { api: "Dialog", re: /\bnew\s+Dialog\s*\(|\bDialog\.(prompt|confirm|wait)\b/g, status: "partial", note: "Bo\xEEtes de dialogue simples.", permission: "ui.panel" },
  { api: "foundry.utils", re: /\bfoundry\.utils\.\w+|\b(mergeObject|deepClone|duplicate|randomID|isEmpty|getProperty|setProperty|hasProperty|expandObject|flattenObject)\s*\(/g, status: "supported", note: "Utilitaires de donn\xE9es." },
  { api: "Handlebars / templates", re: /\bHandlebars\.register(Helper|Partial)\b|\b(loadTemplates|renderTemplate)\s*\(/g, status: "partial", note: "Gabarits utilisables dans les panneaux du module.", permission: "ui.panel" },
  { api: "jQuery", re: /\bjQuery\b|\$\s*\(\s*["'`<]/g, status: "partial", note: "Disponible seulement dans les panneaux du module, pas sur la page du jeu." },
  { api: "CONFIG", re: /\bCONFIG\.\w+/g, status: "partial", note: "Quelques cl\xE9s en lecture seule." },
  { api: "game.actors/items/scenes/journal", re: /\bgame\.(actors|items|scenes|journal|tables|folders|combats)\b/g, status: "partial", note: "Lecture seule d\u2019une vue simplifi\xE9e.", permission: "sheet.read" },
  { api: "render hooks", re: /["']render(Actor|Item|Chat|Journal|Application|Dialog|Scene|Token|Player)\w*["']/g, status: "partial", note: "Seuls les rendus de chat et de fiche sont expos\xE9s.", permission: "ui.sheet" },
  { api: "document hooks", re: /["'](pre|update|create|delete)(Actor|Token|Item|Scene|Combat|Combatant|Journal)\w*["']/g, status: "partial", note: "Quelques \xE9v\xE9nements de jeton, sc\xE8ne et fiche.", permission: "engine.hook" },
  { api: "game.system", re: /\bgame\.system\b/g, status: "partial", note: "Nom et version du syst\xE8me seulement." },
  // ---- not available
  { api: "canvas / PIXI", re: /\bcanvas\.(tokens|stage|scene|grid|walls|lighting|drawings|app|primary|effects|interface|hud|controls|templates)\b|\bPIXI\./g, status: "unsupported", note: "Le rendu de la carte est diff\xE9rent (Konva). Utilise scene.draw pour des superpositions." },
  { api: "Actor / Item classes", re: /\bextends\s+(Actor|Item|ActorSheet|ItemSheet|Token|TokenDocument|Application|ApplicationV2|FormApplication|DocumentSheet|Combat|Combatant)\b|\bCONFIG\.(Actor|Item)\.(documentClass|sheetClasses)\b/g, status: "unsupported", note: "Le mod\xE8le de donn\xE9es des fiches est celui du syst\xE8me de jeu." },
  { api: "libWrapper", re: /\blibWrapper\b/g, status: "unsupported", note: "Remplac\xE9 par les intercepteurs (engine.intercept)." },
  { api: "sockets", re: /\bgame\.socket\b|\bsocketlib\b/g, status: "unsupported", note: "Pas de communication directe entre clients." },
  { api: "FilePicker / UI classes", re: /\bFilePicker\b|\bContextMenu\b|\bSettingsConfig\b|\bTabs\b\s*\(/g, status: "unsupported", note: "\xC9l\xE9ments d\u2019interface propres \xE0 Foundry." },
  { api: "Macros", re: /\bgame\.macros\b|\bMacro\.\w+|\bexecuteMacro\b/g, status: "unsupported", note: "Les macros Foundry ne sont pas ex\xE9cut\xE9es." },
  // ---- blocked by the sandbox, on purpose
  { api: "eval / Function", re: /\beval\s*\(|\bnew\s+Function\s*\(|\bFunction\s*\(\s*["'`]/g, status: "blocked", note: "Ex\xE9cution de texte comme code : interdite." },
  { api: "network", re: /\bfetch\s*\(|\bXMLHttpRequest\b|\bWebSocket\b|\bEventSource\b|\bsendBeacon\b/g, status: "blocked", note: "Aucun acc\xE8s r\xE9seau pour les modules." },
  { api: "dynamic import", re: /\bimport\s*\(/g, status: "blocked", note: "Chargement de code \xE0 la vol\xE9e : interdit." },
  { api: "browser storage / cookies", re: /\bdocument\.cookie\b|\blocalStorage\b|\bsessionStorage\b|\bindexedDB\b/g, status: "blocked", note: "Utilise le stockage du module (storage.local)." },
  { api: "window escape", re: /\bwindow\.(open|top|parent|opener)\b|\bparent\.postMessage\b/g, status: "blocked", note: "Le module ne peut pas sortir de son espace isol\xE9." },
  { api: "node access", re: /\brequire\s*\(|\bprocess\.(env|binding|mainModule)\b|\bchild_process\b/g, status: "blocked", note: "Aucun acc\xE8s au syst\xE8me." }
];
function stripComments(src) {
  let out = "";
  let i = 0;
  const n = src.length;
  while (i < n) {
    const c = src[i];
    const d = src[i + 1];
    if (c === "/" && d === "/") {
      while (i < n && src[i] !== "\n") i++;
    } else if (c === "/" && d === "*") {
      i += 2;
      while (i < n && !(src[i] === "*" && src[i + 1] === "/")) {
        if (src[i] === "\n") out += "\n";
        i++;
      }
      i += 2;
    } else if (c === '"' || c === "'" || c === "`") {
      const q = c;
      out += c;
      i++;
      while (i < n && src[i] !== q) {
        if (src[i] === "\\") {
          out += src[i++];
        }
        if (i < n) out += src[i++];
      }
      if (i < n) out += src[i++];
    } else {
      out += c;
      i++;
    }
  }
  return out;
}
function analyzeScripts(sources) {
  const found = /* @__PURE__ */ new Map();
  for (const file of sources) {
    const text = stripComments(file.text);
    for (const rule of RULES) {
      const matches = text.match(new RegExp(rule.re.source, "g"));
      if (!matches) continue;
      const entry = found.get(rule.api) ?? {
        api: rule.api,
        status: rule.status,
        note: rule.note,
        count: 0,
        files: [],
        permission: rule.permission
      };
      entry.count += matches.length;
      if (!entry.files.includes(file.path)) entry.files.push(file.path);
      found.set(rule.api, entry);
    }
  }
  return summarize([...found.values()].sort((x, y) => y.count - x.count), sources.length > 0);
}
function summarize(apis, hasScripts) {
  const counts = { supported: 0, partial: 0, unsupported: 0, blocked: 0 };
  for (const a of apis) counts[a.status]++;
  const weight = { supported: 1, partial: 0.5, unsupported: 0, blocked: 0 };
  const score = apis.length ? apis.reduce((s, a) => s + weight[a.status], 0) / apis.length : 1;
  const suggested = /* @__PURE__ */ new Set();
  for (const a of apis) {
    if (a.permission && (a.status === "supported" || a.status === "partial")) suggested.add(a.permission);
  }
  let verdict;
  if (!hasScripts && !apis.length) verdict = "data-only";
  else if (counts.unsupported === 0 && counts.blocked === 0 && score >= 0.75) verdict = "compatible";
  else if (score >= 0.4 && counts.unsupported <= 2) verdict = "partial";
  else verdict = "incompatible";
  if (verdict === "compatible" && counts.blocked > 0) verdict = "partial";
  return { verdict, score: Math.round(score * 100) / 100, apis, suggestedPermissions: [...suggested].sort(), counts };
}
var UNSUPPORTED_LIBS = {
  "lib-wrapper": "Biblioth\xE8que de patch du moteur Foundry : remplac\xE9e ici par les intercepteurs (engine.intercept).",
  socketlib: "Communication directe entre clients : non prise en charge.",
  "lib-df-hotkeys": "D\xE9pend de l\u2019interface de Foundry."
};
function withDependencies(report, requires, hasScripts) {
  const extra = requires.filter((r) => UNSUPPORTED_LIBS[r.id]).map((r) => ({ api: `d\xE9pendance : ${r.id}`, status: "unsupported", note: UNSUPPORTED_LIBS[r.id], count: 1, files: ["module.json"] }));
  return extra.length ? summarize([...report.apis, ...extra], hasScripts) : report;
}

// apps/desktop/src/modules/foundry.ts
var MAX_PACK_BYTES = 50 * 1024 * 1024;

// apps/desktop/src/modules/permissions.ts
var PERMISSIONS = [
  // interface
  { id: "ui.panel", risk: "low", group: "ui" },
  // own panels / windows / dialogs
  { id: "ui.toolbar", risk: "low", group: "ui" },
  // buttons, menus, keybindings
  { id: "ui.style", risk: "low", group: "ui" },
  // CSS scoped to the app
  { id: "ui.sheet", risk: "medium", group: "ui" },
  // tabs and blocks on character sheets
  // events and interception
  { id: "engine.hook", risk: "low", group: "engine" },
  // observe events
  { id: "engine.intercept", risk: "high", group: "engine" },
  // change or cancel an action before it happens
  // chat and dice
  { id: "chat.write", risk: "low", group: "chat" },
  { id: "chat.command", risk: "low", group: "chat" },
  { id: "chat.read", risk: "medium", group: "chat" },
  { id: "dice.formula", risk: "low", group: "dice" },
  // new functions / modifiers in formulas
  { id: "dice.intercept", risk: "high", group: "dice" },
  // alter roll results
  // scene and tokens
  { id: "scene.read", risk: "low", group: "scene" },
  { id: "scene.draw", risk: "medium", group: "scene" },
  // overlays drawn on the map
  { id: "scene.modify", risk: "high", group: "scene" },
  { id: "tokens.read", risk: "low", group: "scene" },
  { id: "tokens.modify", risk: "high", group: "scene" },
  // characters
  { id: "sheet.read", risk: "medium", group: "sheet" },
  { id: "sheet.write", risk: "high", group: "sheet" },
  // misc
  { id: "storage.local", risk: "low", group: "misc" },
  // its own key/value store
  { id: "audio.play", risk: "low", group: "misc" },
  { id: "host.script", risk: "high", group: "misc" }
  // run code in the GM's host sandbox
];
var RESERVED_PERMISSIONS = ["net.fetch", "fs.read", "fs.write", "dom.raw"];
var BY_ID = new Map(PERMISSIONS.map((p) => [p.id, p]));
function classify(requested) {
  const known = [];
  const reserved = [];
  const unknown = [];
  for (const id of new Set(requested)) {
    if (BY_ID.has(id)) known.push(id);
    else if (RESERVED_PERMISSIONS.includes(id)) reserved.push(id);
    else unknown.push(id);
  }
  return { known, reserved, unknown };
}

// apps/desktop/src/modules/manifest.ts
var MAX_MANIFEST_BYTES = 256 * 1024;
var SUPPORTED_API = "1";
var ID_RE = /^[a-z0-9_][a-z0-9_-]{1,63}$/;
var VERSION_RE = /^\d+(\.\d+){0,3}(-[0-9A-Za-z.-]+)?$/;
var ALLOWED_EXT = /* @__PURE__ */ new Set([
  ".js",
  ".mjs",
  ".css",
  ".json",
  ".html",
  ".hbs",
  ".md",
  ".txt",
  ".db",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".mp3",
  ".ogg",
  ".wav",
  ".webm",
  ".woff",
  ".woff2",
  ".ttf",
  ".svg",
  ".map",
  ".yml",
  ".yaml"
]);
var CONTROL = /[\u0000-\u001f\u007f]/g;
var clean = (v, max) => typeof v === "string" ? v.replace(CONTROL, "").trim().slice(0, max) : "";
function safeRelPath(p, allowNoExt = false) {
  if (typeof p !== "string" || p.length === 0 || p.length > 240) {
    return null;
  }
  if (/[\u0000-\u001f\u007f:*?"<>|]/.test(p)) {
    return null;
  }
  const norm = p.replace(/\\/g, "/").replace(/^\.\//, "");
  if (norm.startsWith("/") || /^[a-zA-Z]:/.test(norm) || norm.includes("//")) {
    return null;
  }
  const parts = norm.split("/");
  if (parts.some((s) => s === ".." || s === "." || s === "")) {
    return null;
  }
  const dot = parts[parts.length - 1].lastIndexOf(".");
  const ext = dot >= 0 ? parts[parts.length - 1].slice(dot).toLowerCase() : "";
  if (!ext ? !allowNoExt : !ALLOWED_EXT.has(ext)) {
    return null;
  }
  return norm;
}
function isAllowedExtension(file) {
  const dot = file.lastIndexOf(".");
  return dot >= 0 && ALLOWED_EXT.has(file.slice(dot).toLowerCase());
}
function normalizeVersion(v) {
  const s = typeof v === "number" ? String(v) : typeof v === "string" ? v.trim().replace(/^v/i, "") : "";
  if (!VERSION_RE.test(s)) {
    return null;
  }
  const [core2, pre] = s.split(/-(.+)/);
  const nums = core2.split(".");
  while (nums.length < 3) nums.push("0");
  return nums.join(".") + (pre ? "-" + pre : "");
}
var asArray = (v) => Array.isArray(v) ? v : v == null ? [] : [v];
function parseManifest(raw) {
  const errors = [];
  const warnings = [];
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return { ok: false, errors: ["module.json doit \xEAtre un objet JSON."] };
  }
  const m = raw;
  const tt = m.tabletop && typeof m.tabletop === "object" ? m.tabletop : null;
  const kind = tt ? "native" : "foundry";
  const id = clean(m.id ?? m.name, 64).toLowerCase();
  if (!ID_RE.test(id)) {
    errors.push("id invalide : minuscules, chiffres, - et _ (2 \xE0 64 caract\xE8res).");
  }
  const version = normalizeVersion(m.version);
  if (!version) {
    errors.push("version invalide (ex. 1.2.0).");
  }
  const title = clean(m.title ?? m.name, 100) || id;
  const scriptsRaw = [...asArray(m.esmodules), ...asArray(m.scripts)];
  const scripts = [];
  for (const s of scriptsRaw) {
    const p = safeRelPath(s);
    if (!p || !/\.m?js$/i.test(p)) errors.push(`script refus\xE9 : ${String(s).slice(0, 80)}`);
    else scripts.push(p);
  }
  const styles = [];
  for (const s of asArray(m.styles)) {
    const p = safeRelPath(s);
    if (!p || !/\.css$/i.test(p)) errors.push(`feuille de style refus\xE9e : ${String(s).slice(0, 80)}`);
    else styles.push(p);
  }
  const languages = [];
  for (const l of asArray(m.languages)) {
    const o = l || {};
    const p = safeRelPath(o.path);
    const lang = clean(o.lang, 12);
    if (!p || !/\.json$/i.test(p) || !/^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})?$/.test(lang)) {
      errors.push("langue refus\xE9e : " + clean(o.path, 60));
    } else languages.push({ lang, name: clean(o.name, 40) || lang, path: p });
  }
  const packs = [];
  for (const pk of asArray(m.packs)) {
    const o = pk || {};
    const p = safeRelPath(o.path, true);
    const name = clean(o.name, 64);
    if (!p || !/^[a-zA-Z0-9_-]{1,64}$/.test(name)) {
      errors.push("compendium refus\xE9 : " + clean(o.path ?? o.name, 60));
    } else packs.push({ name, label: clean(o.label, 100) || name, type: clean(o.type, 24) || "unknown", path: p });
  }
  const requires = [];
  const requiresSystem = [];
  const rel = m.relationships && typeof m.relationships === "object" ? m.relationships : {};
  for (const r of [...asArray(rel.requires), ...asArray(m.dependencies)]) {
    const o = r || {};
    const rid = clean(o.id ?? o.name, 64).toLowerCase();
    if (!ID_RE.test(rid)) continue;
    if (o.type === "system") requiresSystem.push(rid);
    else requires.push({ id: rid, minVersion: normalizeVersion(o.compatibility?.minimum) || void 0 });
  }
  const conflicts = asArray(rel.conflicts).map((c) => clean((c || {}).id, 64).toLowerCase()).filter((c) => ID_RE.test(c));
  const authors = [
    ...asArray(m.authors).map((a) => clean(typeof a === "string" ? a : a?.name, 60)),
    clean(m.author, 60)
  ].filter(Boolean);
  let api;
  let permissions = [];
  if (tt) {
    const apiVersion = clean(tt.api, 8);
    if (apiVersion !== SUPPORTED_API) errors.push(`tabletop.api doit \xEAtre "${SUPPORTED_API}".`);
    const entry = safeRelPath(tt.entry);
    if (!entry || !/\.m?js$/i.test(entry)) errors.push("tabletop.entry manquant ou invalide.");
    else api = { version: apiVersion, entry };
    const requested = asArray(tt.permissions).map((p) => clean(p, 40));
    const split = classify(requested);
    if (split.unknown.length) errors.push("permissions inconnues : " + split.unknown.join(", "));
    if (split.reserved.length) errors.push("permissions non disponibles : " + split.reserved.join(", "));
    permissions = split.known;
    if (styles.length && !permissions.includes("ui.style")) {
      errors.push('Le module a des feuilles de style : il doit demander la permission "ui.style".');
    }
    if (api && !scripts.includes(api.entry)) scripts.push(api.entry);
  } else if (!scripts.length && !styles.length && !languages.length && !packs.length) {
    errors.push("module vide : aucun script, style, langue ni compendium.");
  }
  if (m.socket === true) warnings.push("Le module d\xE9clare des sockets : la communication entre clients n\u2019est pas prise en charge.");
  const compat = m.compatibility && typeof m.compatibility === "object" ? m.compatibility : {};
  if (errors.length || !version) {
    return { ok: false, errors };
  }
  return {
    ok: true,
    warnings,
    manifest: {
      id,
      title,
      version,
      description: clean(m.description, 1e3),
      authors,
      license: clean(m.license, 60),
      url: /^https:\/\//i.test(String(m.url || "")) ? clean(m.url, 200) : "",
      kind,
      api,
      files: { scripts, styles, languages, packs },
      requires,
      requiresSystem,
      conflicts,
      permissions,
      access: tt && tt.access === "licensed" ? "licensed" : "free",
      foundryCompat: kind === "foundry" ? {
        minimum: clean(compat.minimum ?? m.minimumCoreVersion, 20) || void 0,
        verified: clean(compat.verified ?? m.compatibleCoreVersion, 20) || void 0,
        maximum: clean(compat.maximum, 20) || void 0
      } : void 0
    }
  };
}

// apps/desktop/src/modules/bundle.ts
var MAX_BUNDLE_BYTES = 4 * 1024 * 1024;
var MAX_FILE_BYTES = 2 * 1024 * 1024;
var usesModuleSyntax = (text) => /^\s*(import\s*[\w{*"']|export\s)/m.test(text);

// apps/desktop/src/modules/zip.ts
var import_node_fs = __toESM(require("node:fs"));
var import_node_path = __toESM(require("node:path"));
var import_node_zlib = __toESM(require("node:zlib"));
var DEFAULT_LIMITS = {
  maxEntries: 5e3,
  maxFileBytes: 128 * 1024 * 1024,
  maxTotalBytes: 512 * 1024 * 1024,
  maxRatio: 200,
  ratioFloor: 1024 * 1024
};
var ZipError = class extends Error {
};
var u16 = (b, o) => b.readUInt16LE(o);
var u32 = (b, o) => b.readUInt32LE(o);
function safeEntryName(raw) {
  if (!raw || raw.includes("\0")) {
    return null;
  }
  const name = raw.replace(/\\/g, "/");
  if (name.startsWith("/") || /^[a-zA-Z]:/.test(name)) {
    return null;
  }
  const parts = name.split("/").filter((p, i, a) => !(p === "" && i === a.length - 1));
  if (parts.some((p) => p === "" || p === "." || p === ".." || /[<>:"|?*]/.test(p) || /[. ]$/.test(p))) {
    return null;
  }
  return parts.join("/");
}
function listZip(buf, limits = DEFAULT_LIMITS) {
  const min = Math.max(0, buf.length - 65557);
  let eocd = -1;
  for (let i = buf.length - 22; i >= min; i--) {
    if (u32(buf, i) === 101010256) {
      eocd = i;
      break;
    }
  }
  if (eocd < 0) {
    throw new ZipError("Archive ZIP invalide.");
  }
  const total = u16(buf, eocd + 10);
  const cdSize = u32(buf, eocd + 12);
  const cdOffset = u32(buf, eocd + 16);
  if (total === 65535 || cdSize === 4294967295 || cdOffset === 4294967295) {
    throw new ZipError("ZIP64 non pris en charge.");
  }
  if (total > limits.maxEntries) {
    throw new ZipError(`Archive trop grosse : ${total} fichiers (max ${limits.maxEntries}).`);
  }
  if (cdOffset + cdSize > buf.length) {
    throw new ZipError("Archive ZIP corrompue.");
  }
  const entries = [];
  let p = cdOffset;
  for (let i = 0; i < total; i++) {
    if (p + 46 > buf.length || u32(buf, p) !== 33639248) {
      throw new ZipError("Archive ZIP corrompue (r\xE9pertoire central).");
    }
    const flags = u16(buf, p + 8);
    const method = u16(buf, p + 10);
    const nameLen = u16(buf, p + 28);
    const extraLen = u16(buf, p + 30);
    const commentLen = u16(buf, p + 32);
    const madeBy = u16(buf, p + 4) >> 8;
    const extAttr = u32(buf, p + 38);
    const rawName = buf.subarray(p + 46, p + 46 + nameLen).toString("utf8");
    if (flags & 1) {
      throw new ZipError("Archive chiffr\xE9e : refus\xE9e.");
    }
    if (madeBy === 3 && (extAttr >>> 16 & 61440) === 40960) {
      throw new ZipError(`Lien symbolique refus\xE9 : ${rawName.slice(0, 80)}`);
    }
    const name = safeEntryName(rawName);
    if (name === null) {
      throw new ZipError(`Chemin dangereux dans l\u2019archive : ${rawName.slice(0, 80)}`);
    }
    entries.push({
      name,
      method,
      compressedSize: u32(buf, p + 20),
      size: u32(buf, p + 24),
      crc: u32(buf, p + 16),
      offset: u32(buf, p + 42),
      isDir: rawName.endsWith("/")
    });
    p += 46 + nameLen + extraLen + commentLen;
  }
  const seen = /* @__PURE__ */ new Set();
  for (const e of entries) {
    const key = e.name.toLowerCase();
    if (seen.has(key)) {
      throw new ZipError(`Fichier en double dans l\u2019archive : ${e.name}`);
    }
    seen.add(key);
  }
  return entries;
}
function readEntry(buf, e, limits) {
  if (e.size > limits.maxFileBytes) {
    throw new ZipError(`Fichier trop gros : ${e.name}`);
  }
  if (e.size > limits.ratioFloor && e.compressedSize > 0 && e.size / e.compressedSize > limits.maxRatio) {
    throw new ZipError(`Taux de compression suspect (bombe ?) : ${e.name}`);
  }
  if (e.offset + 30 > buf.length || u32(buf, e.offset) !== 67324752) {
    throw new ZipError("Archive ZIP corrompue (en-t\xEAte local).");
  }
  const start = e.offset + 30 + u16(buf, e.offset + 26) + u16(buf, e.offset + 28);
  if (start + e.compressedSize > buf.length) {
    throw new ZipError("Archive ZIP corrompue (donn\xE9es).");
  }
  const packed = buf.subarray(start, start + e.compressedSize);
  let data;
  if (e.method === 0) {
    data = Buffer.from(packed);
  } else if (e.method === 8) {
    try {
      data = import_node_zlib.default.inflateRawSync(packed, { maxOutputLength: Math.max(1, e.size + 1) });
    } catch {
      throw new ZipError(`Donn\xE9es corrompues ou trop grandes : ${e.name}`);
    }
  } else {
    throw new ZipError(`M\xE9thode de compression non prise en charge (${e.method}) : ${e.name}`);
  }
  if (data.length !== e.size) {
    throw new ZipError(`Taille incoh\xE9rente : ${e.name}`);
  }
  if (import_node_zlib.default.crc32(data) !== e.crc) {
    throw new ZipError(`Somme de contr\xF4le invalide : ${e.name}`);
  }
  return data;
}
function extractZip(buf, dest, limits = DEFAULT_LIMITS) {
  const entries = listZip(buf, limits);
  const root = import_node_path.default.resolve(dest);
  import_node_fs.default.mkdirSync(root, { recursive: true });
  let total = 0;
  const written = [];
  for (const e of entries) {
    const target = import_node_path.default.resolve(root, e.name);
    if (target !== root && !target.startsWith(root + import_node_path.default.sep)) {
      throw new ZipError(`Chemin dangereux dans l\u2019archive : ${e.name}`);
    }
    if (e.isDir) {
      import_node_fs.default.mkdirSync(target, { recursive: true });
      continue;
    }
    total += e.size;
    if (total > limits.maxTotalBytes) {
      throw new ZipError("Archive trop volumineuse une fois d\xE9compress\xE9e.");
    }
    const data = readEntry(buf, e, limits);
    import_node_fs.default.mkdirSync(import_node_path.default.dirname(target), { recursive: true });
    import_node_fs.default.writeFileSync(target, data);
    written.push(e.name);
  }
  return written;
}

// apps/desktop/src/catalog/licensed.ts
var LICENSED_REFUSAL = "Ce contenu s\u2019ach\xE8te : ouvre-le depuis le catalogue d\u2019Ourdir.";

// apps/desktop/src/modules/install.ts
var officialKeys = [];
var SIGNATURE_FILE = "SIGNATURE.json";
var GENERATED_DIR = ".tabletop";
var MAX_FILES = 5e3;
var MAX_TOTAL = 512 * 1024 * 1024;
var MAX_SCRIPT_READ = 5 * 1024 * 1024;
var InstallError = class extends Error {
};
function copyTree(src, dest) {
  import_node_fs2.default.mkdirSync(dest, { recursive: true });
  for (const e of import_node_fs2.default.readdirSync(src, { withFileTypes: true })) {
    const from = import_node_path2.default.join(src, e.name);
    const to = import_node_path2.default.join(dest, e.name);
    const st = import_node_fs2.default.lstatSync(from);
    if (st.isSymbolicLink()) continue;
    if (st.isDirectory()) copyTree(from, to);
    else if (st.isFile()) import_node_fs2.default.copyFileSync(from, to);
  }
}
var sha256 = (data) => import_node_crypto.default.createHash("sha256").update(data).digest("hex");
function walk(dir, base = dir) {
  const out = [];
  for (const e of import_node_fs2.default.readdirSync(dir, { withFileTypes: true })) {
    const full = import_node_path2.default.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full, base));
    else out.push(import_node_path2.default.relative(base, full).split(import_node_path2.default.sep).join("/"));
  }
  return out;
}
function hashPackage(root) {
  const files = walk(root).filter((f) => f !== SIGNATURE_FILE && !f.startsWith(GENERATED_DIR + "/")).sort();
  const h = import_node_crypto.default.createHash("sha256");
  for (const f of files) {
    h.update(`${f}\0${sha256(import_node_fs2.default.readFileSync(import_node_path2.default.join(root, f)))}
`);
  }
  return { hash: h.digest("hex"), files };
}
var signedPayload = (id, version, hash) => Buffer.from(`${id}|${version}|${hash}`, "utf8");
function signPackage(root, publisher, name) {
  const parsed = readManifest(root);
  const { hash } = hashPackage(root);
  const body = {
    v: 1,
    publisher: { name: sanitizeName(name), publicKey: publisher.publicKey },
    hash,
    signature: sign(publisher, "module", signedPayload(parsed.id, parsed.version, hash)),
    signedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  import_node_fs2.default.writeFileSync(import_node_path2.default.join(root, SIGNATURE_FILE), JSON.stringify(body, null, 2), "utf8");
}
var MANIFEST_FILES = ["module.json", "system.json"];
function manifestFile(root) {
  for (const name of MANIFEST_FILES) {
    const file = import_node_path2.default.join(root, name);
    if (import_node_fs2.default.existsSync(file)) return { file, packageType: name === "system.json" ? "system" : "module" };
  }
  return null;
}
function readManifest(root) {
  const found = manifestFile(root);
  if (!found) throw new InstallError("module.json (ou system.json) introuvable.");
  const file = found.file;
  if (import_node_fs2.default.statSync(file).size > MAX_MANIFEST_BYTES) throw new InstallError("module.json trop volumineux.");
  let raw;
  try {
    raw = JSON.parse(import_node_fs2.default.readFileSync(file, "utf8").replace(/^\uFEFF/, ""));
  } catch {
    throw new InstallError("module.json n\u2019est pas du JSON valide.");
  }
  const parsed = parseManifest(raw);
  if (!parsed.ok) throw new InstallError("Manifeste refus\xE9 :\n- " + parsed.errors.join("\n- "));
  return parsed.manifest;
}
function verifySignature(root, m, hash) {
  const file = import_node_path2.default.join(root, SIGNATURE_FILE);
  if (!import_node_fs2.default.existsSync(file)) return { trust: "unsigned" };
  try {
    const s = JSON.parse(import_node_fs2.default.readFileSync(file, "utf8"));
    const key = s.publisher?.publicKey;
    if (s.v !== 1 || !isValidPublicKey(key) || typeof s.signature !== "string") {
      return { trust: "unsigned", warning: "Signature illisible : ignor\xE9e." };
    }
    if (s.hash !== hash || !verify(key, "module", signedPayload(m.id, m.version, hash), s.signature)) {
      return { trust: "unsigned", warning: "La signature ne correspond pas au contenu : le paquet a \xE9t\xE9 modifi\xE9." };
    }
    const publisher = { name: sanitizeName(s.publisher?.name) || "\xC9diteur", publicKey: key };
    return { trust: officialKeys.includes(key) ? "official" : "signed", publisher };
  } catch {
    return { trust: "unsigned", warning: "Signature illisible : ignor\xE9e." };
  }
}
function copyClean(src, dest, skipped) {
  let count = 0;
  let total = 0;
  const visit = (dir, rel) => {
    for (const e of import_node_fs2.default.readdirSync(dir, { withFileTypes: true })) {
      const from = import_node_path2.default.join(dir, e.name);
      const to = rel ? `${rel}/${e.name}` : e.name;
      const lst = import_node_fs2.default.lstatSync(from);
      if (lst.isSymbolicLink()) {
        skipped.push(`${to} (lien symbolique)`);
      } else if (lst.isDirectory()) {
        if (e.name === ".git" || e.name === "node_modules" || e.name === GENERATED_DIR) {
          skipped.push(`${to}/ (dossier ignor\xE9)`);
        } else visit(from, to);
      } else if (lst.isFile()) {
        const okName = isAllowedExtension(e.name) || /^(LICENSE|README|CHANGELOG|NOTICE)$/i.test(e.name);
        if (!okName) {
          skipped.push(`${to} (type de fichier non autoris\xE9)`);
          continue;
        }
        if (++count > MAX_FILES) throw new InstallError("Trop de fichiers dans le module.");
        total += lst.size;
        if (total > MAX_TOTAL) throw new InstallError("Module trop volumineux.");
        import_node_fs2.default.mkdirSync(import_node_path2.default.dirname(import_node_path2.default.join(dest, to)), { recursive: true });
        import_node_fs2.default.copyFileSync(from, import_node_path2.default.join(dest, to));
      }
    }
  };
  visit(src, "");
  return count;
}
function findRoot(dir) {
  if (manifestFile(dir)) return dir;
  const subs = import_node_fs2.default.readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory());
  if (subs.length === 1 && manifestFile(import_node_path2.default.join(dir, subs[0].name))) {
    return import_node_path2.default.join(dir, subs[0].name);
  }
  throw new InstallError("module.json (ou system.json) introuvable, \xE0 la racine du dossier ou de l\u2019archive.");
}
function prepare(source, tmpBase = import_node_os.default.tmpdir(), opts = {}) {
  const work = import_node_fs2.default.mkdtempSync(import_node_path2.default.join(tmpBase, "td-mod-"));
  const dispose = () => import_node_fs2.default.rmSync(work, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  try {
    const stat = import_node_fs2.default.statSync(source);
    const skipped = [];
    const raw = import_node_path2.default.join(work, "raw");
    if (stat.isDirectory()) {
      import_node_fs2.default.mkdirSync(raw);
      copyTree(source, raw);
    } else if (/\.zip$/i.test(source)) {
      if (stat.size > DEFAULT_LIMITS.maxTotalBytes) throw new InstallError("Archive trop volumineuse.");
      extractZip(import_node_fs2.default.readFileSync(source), raw);
    } else {
      throw new InstallError("Choisis un dossier de module ou une archive .zip.");
    }
    const clean2 = import_node_path2.default.join(work, "clean");
    import_node_fs2.default.mkdirSync(clean2);
    const fileCount = copyClean(findRoot(raw), clean2, skipped);
    const manifest = readManifest(clean2);
    if (manifest.access === "licensed" && !opts.allowLicensed) throw new InstallError(LICENSED_REFUSAL);
    const warnings = [];
    const missing = [];
    const refs = [
      ...manifest.files.scripts,
      ...manifest.files.styles,
      ...manifest.files.languages.map((l) => l.path)
    ];
    for (const r of refs) if (!import_node_fs2.default.existsSync(import_node_path2.default.join(clean2, r))) missing.push(r);
    if (missing.length) throw new InstallError("Fichiers d\xE9clar\xE9s mais absents :\n- " + missing.join("\n- "));
    const { hash } = hashPackage(clean2);
    const sig = verifySignature(clean2, manifest, hash);
    if (sig.warning) warnings.push(sig.warning);
    if (skipped.length) warnings.push(`${skipped.length} fichier(s) ignor\xE9(s) par s\xE9curit\xE9.`);
    const parsedAgain = parseManifest(JSON.parse(import_node_fs2.default.readFileSync(manifestFile(clean2).file, "utf8")));
    if (parsedAgain.ok) warnings.push(...parsedAgain.warnings);
    let multiFile = false;
    for (const rel of manifest.files.scripts) {
      const full = import_node_path2.default.join(clean2, rel);
      if (import_node_fs2.default.statSync(full).size <= MAX_SCRIPT_READ && usesModuleSyntax(import_node_fs2.default.readFileSync(full, "utf8"))) multiFile = true;
    }
    let compat;
    if (manifest.kind === "foundry") {
      const scripts = walk(clean2).filter((f) => /\.m?js$/i.test(f) && !f.startsWith(GENERATED_DIR + "/")).slice(0, 400);
      const sources = scripts.map((p) => {
        const full = import_node_path2.default.join(clean2, p);
        return { path: p, text: import_node_fs2.default.statSync(full).size > MAX_SCRIPT_READ ? "" : import_node_fs2.default.readFileSync(full, "utf8") };
      });
      compat = withDependencies(analyzeScripts(sources), manifest.requires, sources.length > 0);
    }
    return {
      root: clean2,
      manifest,
      warnings,
      skipped,
      hash,
      trust: sig.trust,
      publisher: sig.publisher,
      compat,
      fileCount,
      packageType: manifestFile(clean2).packageType,
      multiFile,
      dispose
    };
  } catch (err) {
    dispose();
    if (err instanceof ZipError) throw new InstallError(err.message);
    throw err;
  }
}

// apps/desktop/src/modules/safeFetch.ts
var import_node_dns = __toESM(require("node:dns"));
var import_node_http = __toESM(require("node:http"));
var import_node_https = __toESM(require("node:https"));
var import_node_net = __toESM(require("node:net"));
var FetchError = class extends Error {
};
var v4 = (ip) => {
  const m = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.exec(ip);
  return m ? [Number(m[1]), Number(m[2]), Number(m[3]), Number(m[4])] : null;
};
function isBlockedAddress(raw) {
  const ip = raw.toLowerCase().replace(/^\[|\]$/g, "").split("%")[0];
  const mapped = /^::ffff:(\d+\.\d+\.\d+\.\d+)$/.exec(ip);
  if (mapped) {
    return isBlockedAddress(mapped[1]);
  }
  const a = v4(ip);
  if (a) {
    const [p, q] = a;
    return p === 0 || p === 10 || p === 127 || p >= 224 || p === 100 && q >= 64 && q <= 127 || p === 169 && q === 254 || p === 172 && q >= 16 && q <= 31 || p === 192 && q === 168 || p === 192 && q === 0 && a[2] === 0 || p === 198 && (q === 18 || q === 19);
  }
  if (import_node_net.default.isIPv6(ip)) {
    return ip === "::" || ip === "::1" || /^f[cd]/.test(ip) || /^fe[89ab]/.test(ip) || /^ff/.test(ip);
  }
  return true;
}
function checkUrl(u, opts) {
  if (u.protocol !== "https:" && !(opts.allowHttp && u.protocol === "http:")) {
    throw new FetchError("Seules les adresses https:// sont accept\xE9es.");
  }
  if (u.username || u.password) {
    throw new FetchError("L\u2019adresse ne doit pas contenir d\u2019identifiants.");
  }
  const port2 = u.port ? Number(u.port) : u.protocol === "https:" ? 443 : 80;
  const okPort = port2 === 443 || (opts.allowedPorts || []).includes(port2);
  if (!okPort) {
    throw new FetchError("Port non autoris\xE9.");
  }
  const host = u.hostname.replace(/^\[|\]$/g, "");
  if (!opts.allowPrivate && import_node_net.default.isIP(host) && isBlockedAddress(host)) {
    throw new FetchError("Adresse non autoris\xE9e (r\xE9seau local ou r\xE9serv\xE9).");
  }
}
function guardedLookup(allowPrivate) {
  return (hostname, options, cb) => {
    import_node_dns.default.lookup(hostname, options, (err, address, family) => {
      if (err) {
        return cb(err, address, family);
      }
      const list2 = Array.isArray(address) ? address.map((a) => a.address) : [address];
      if (!allowPrivate && list2.some((a) => isBlockedAddress(a))) {
        return cb(new FetchError("Adresse non autoris\xE9e (r\xE9seau local ou r\xE9serv\xE9)."), "", 0);
      }
      cb(null, address, family);
    });
  };
}
async function fetchLimited(url, opts) {
  const deadline = Date.now() + (opts.timeoutMs ?? 3e4);
  let current;
  try {
    current = new URL(url);
  } catch {
    throw new FetchError("Adresse invalide.");
  }
  for (let hop = 0; hop <= (opts.maxRedirects ?? 5); hop++) {
    checkUrl(current, opts);
    const step = await once(current, opts, Math.max(1e3, deadline - Date.now()));
    if (step.redirect) {
      try {
        current = new URL(step.redirect, current);
      } catch {
        throw new FetchError("Redirection invalide.");
      }
      continue;
    }
    return { body: step.body, finalUrl: current.href };
  }
  throw new FetchError("Trop de redirections.");
}
function once(u, opts, timeoutMs) {
  return new Promise((resolve, reject) => {
    const lib = u.protocol === "https:" ? import_node_https.default : import_node_http.default;
    const req = lib.request(
      u,
      {
        method: "GET",
        agent: false,
        timeout: timeoutMs,
        lookup: guardedLookup(!!opts.allowPrivate),
        headers: { "user-agent": "Ourdir", accept: "*/*", "accept-encoding": "identity" }
      },
      (res) => {
        const status = res.statusCode || 0;
        if ([301, 302, 303, 307, 308].includes(status) && res.headers.location) {
          res.resume();
          resolve({ redirect: String(res.headers.location) });
          return;
        }
        if (status !== 200) {
          res.resume();
          reject(new FetchError(`Le serveur a r\xE9pondu ${status}.`));
          return;
        }
        const declared = Number(res.headers["content-length"] || 0);
        if (declared > opts.maxBytes) {
          res.resume();
          reject(new FetchError("Fichier trop volumineux."));
          return;
        }
        const chunks = [];
        let size = 0;
        res.on("data", (c) => {
          size += c.length;
          if (size > opts.maxBytes) {
            req.destroy(new FetchError("Fichier trop volumineux."));
            return;
          }
          chunks.push(c);
        });
        res.on("end", () => resolve({ body: Buffer.concat(chunks) }));
        res.on("error", reject);
      }
    );
    req.on("timeout", () => req.destroy(new FetchError("Le serveur ne r\xE9pond pas.")));
    req.on("error", (e) => reject(e instanceof FetchError ? e : new FetchError(`Connexion impossible : ${e.message}`)));
    req.end();
  });
}

// apps/desktop/src/catalog/builder.ts
var import_node_crypto2 = __toESM(require("node:crypto"));
var import_node_fs3 = __toESM(require("node:fs"));
var import_node_path3 = __toESM(require("node:path"));

// apps/desktop/src/catalog/format.ts
var CATALOG_FORMAT = "ourdir-catalog";
var CATALOG_VERSION = 2;
var INDEX_FILE = "index.json";
var SIGNATURE_FILE2 = "index.json.sig";
var KINDS = ["system", "theme", "compendium", "maps", "adventure", "translation", "module"];
var MB = 1024 * 1024;
var LIMITS = {
  indexBytes: 8 * MB,
  entries: 2e3,
  versions: 100,
  tags: 8,
  name: 80,
  summary: 300,
  description: 4e3,
  changelog: 2e3,
  permissions: 40,
  revokedKeys: 500,
  revokedPackages: 2e3,
  languages: 12,
  dependencies: 20,
  packageBytes: 256 * MB,
  systemBytes: 10 * MB
};
var KIND_BYTES = {
  module: LIMITS.packageBytes,
  system: LIMITS.systemBytes,
  theme: 4 * MB,
  translation: 4 * MB,
  compendium: 256 * MB,
  maps: 512 * MB,
  adventure: 512 * MB
};
var ID_RE2 = /^[a-z0-9][a-z0-9_-]{1,63}$/;
var VERSION_RE2 = /^\d+\.\d+\.\d+(-[0-9A-Za-z.-]{1,30})?$/;
var SHA_RE = /^[0-9a-f]{64}$/;
var TAG_RE = /^[a-z0-9][a-z0-9-]{0,23}$/;
var PERM_RE = /^[a-z][a-z0-9]*(\.[a-z][a-z0-9]*){1,3}$/;
var REL_URL_RE = /^(?!\/)(?!.*\.\.)(?!.*\/\/)[A-Za-z0-9._\-/]{1,200}$/;
var LANG_RE = /^[a-z]{2,3}(-[A-Z]{2})?$/;
var CONTROL_RE = new RegExp("[" + [[0, 8], [11, 12], [14, 31], [127, 133], [8232, 8233]].map(([a, b]) => String.fromCharCode(a) + "-" + String.fromCharCode(b)).join("") + "]", "g");
var isObj = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
function cleanText(v, max) {
  return (typeof v === "string" ? v : "").replace(CONTROL_RE, "").trim().slice(0, max);
}
function isoDate(v) {
  if (typeof v !== "string" || v.length > 40) return null;
  const t = Date.parse(v);
  return Number.isFinite(t) ? new Date(t).toISOString() : null;
}
function isAcceptableUrl(url, opts = {}) {
  if (typeof url !== "string") return false;
  if (REL_URL_RE.test(url)) return true;
  try {
    const u = new URL(url);
    if (u.username || u.password || url.length > 500) return false;
    if (u.protocol === "https:") return true;
    return !!opts.loopbackPort && u.protocol === "http:" && u.hostname === "127.0.0.1" && Number(u.port) === opts.loopbackPort;
  } catch {
    return false;
  }
}
function requirement(v) {
  if (!isObj(v) || typeof v.id !== "string" || !ID_RE2.test(v.id)) return null;
  if (v.minVersion === void 0) return { id: v.id };
  return typeof v.minVersion === "string" && VERSION_RE2.test(v.minVersion) ? { id: v.id, minVersion: v.minVersion } : null;
}
function parseIndex(bytes, opts = {}) {
  const errors = [];
  const err = (m) => {
    if (errors.length < 8) errors.push(m);
  };
  const size = typeof bytes === "string" ? Buffer.byteLength(bytes) : bytes.length;
  if (size > LIMITS.indexBytes) return { ok: false, errors: ["Index trop volumineux."] };
  let raw;
  try {
    const text = typeof bytes === "string" ? bytes : bytes.toString("utf8");
    raw = JSON.parse(text.charCodeAt(0) === 65279 ? text.slice(1) : text);
  } catch {
    return { ok: false, errors: ["Index illisible (JSON invalide)."] };
  }
  if (!isObj(raw) || raw.format !== CATALOG_FORMAT) return { ok: false, errors: ["Ce n\u2019est pas un index de catalogue Ourdir."] };
  if (raw.v !== CATALOG_VERSION) return { ok: false, errors: ["Version d\u2019index non prise en charge (mets l\u2019application \xE0 jour)."] };
  const sequence = raw.sequence;
  if (!(typeof sequence === "number" && Number.isSafeInteger(sequence) && sequence >= 0)) err("Num\xE9ro de s\xE9quence invalide.");
  const generatedAt = isoDate(raw.generatedAt);
  const expiresAt = isoDate(raw.expiresAt);
  if (!generatedAt) err("Date de g\xE9n\xE9ration invalide.");
  if (!expiresAt) err("Date d\u2019expiration invalide.");
  if (generatedAt && expiresAt && Date.parse(expiresAt) <= Date.parse(generatedAt)) err("L\u2019index expire avant d\u2019\xEAtre g\xE9n\xE9r\xE9.");
  const entries = [];
  const rawEntries = Array.isArray(raw.entries) ? raw.entries : (err("Liste d\u2019entr\xE9es manquante."), []);
  if (rawEntries.length > LIMITS.entries) err("Trop d\u2019entr\xE9es.");
  const seenIds = /* @__PURE__ */ new Set();
  for (const e of rawEntries.slice(0, LIMITS.entries)) {
    if (!isObj(e)) {
      err("Entr\xE9e illisible.");
      continue;
    }
    const id = e.id;
    if (typeof id !== "string" || !ID_RE2.test(id)) {
      err(`Identifiant d\u2019entr\xE9e invalide : ${String(id).slice(0, 40)}.`);
      continue;
    }
    if (seenIds.has(id)) {
      err(`Entr\xE9e en double : ${id}.`);
      continue;
    }
    seenIds.add(id);
    const kind = e.kind;
    if (typeof kind !== "string" || !KINDS.includes(kind)) {
      err(`${id} : type inconnu.`);
      continue;
    }
    const system = e.system === void 0 ? void 0 : requirement(e.system);
    if (system === null) {
      err(`${id} : syst\xE8me vis\xE9 invalide.`);
      continue;
    }
    const languages = (Array.isArray(e.languages) ? e.languages : []).filter((l) => typeof l === "string" && LANG_RE.test(l)).slice(0, LIMITS.languages);
    const access = e.access === void 0 ? "free" : e.access;
    if (access !== "free" && access !== "licensed") {
      err(`${id} : acc\xE8s inconnu.`);
      continue;
    }
    const store = typeof e.store === "string" && e.store.startsWith("https://") && isAcceptableUrl(e.store) ? e.store : void 0;
    if (access === "licensed" && !store) {
      err(`${id} : un contenu payant doit indiquer sa boutique.`);
      continue;
    }
    const rawDeps = Array.isArray(e.dependencies) ? e.dependencies : [];
    if (rawDeps.length > LIMITS.dependencies) {
      err(`${id} : trop de d\xE9pendances.`);
      continue;
    }
    const deps2 = rawDeps.map(requirement);
    if (deps2.some((d) => !d || d.id === id)) {
      err(`${id} : d\xE9pendance invalide.`);
      continue;
    }
    const dependencies = deps2;
    const name = cleanText(e.name, LIMITS.name);
    if (name.length < 2) {
      err(`${id} : nom manquant.`);
      continue;
    }
    const pub = isObj(e.publisher) ? e.publisher : {};
    if (!isValidPublicKey(pub.key)) {
      err(`${id} : cl\xE9 d\u2019\xE9diteur invalide.`);
      continue;
    }
    const tags = (Array.isArray(e.tags) ? e.tags : []).filter((t) => typeof t === "string" && TAG_RE.test(t)).slice(0, LIMITS.tags);
    const homepage = typeof e.homepage === "string" && isAcceptableUrl(e.homepage) && e.homepage.startsWith("https://") ? e.homepage : void 0;
    const versions = [];
    const seenVersions = /* @__PURE__ */ new Set();
    const rawVersions = Array.isArray(e.versions) ? e.versions : [];
    if (rawVersions.length > LIMITS.versions) err(`${id} : trop de versions.`);
    for (const v of rawVersions.slice(0, LIMITS.versions)) {
      if (!isObj(v)) {
        err(`${id} : version illisible.`);
        continue;
      }
      const version = v.version;
      if (typeof version !== "string" || !VERSION_RE2.test(version)) {
        err(`${id} : num\xE9ro de version invalide.`);
        continue;
      }
      if (seenVersions.has(version)) {
        err(`${id} ${version} : version en double.`);
        continue;
      }
      const sha2564 = v.sha256;
      if (typeof sha2564 !== "string" || !SHA_RE.test(sha2564)) {
        err(`${id} ${version} : empreinte invalide.`);
        continue;
      }
      const cap = KIND_BYTES[kind];
      const vsize = v.size;
      if (!(typeof vsize === "number" && Number.isInteger(vsize) && vsize > 0 && vsize <= cap)) {
        err(`${id} ${version} : taille invalide.`);
        continue;
      }
      if (!isAcceptableUrl(v.url, opts)) {
        err(`${id} ${version} : adresse de t\xE9l\xE9chargement refus\xE9e.`);
        continue;
      }
      const publishedAt = isoDate(v.publishedAt);
      if (!publishedAt) {
        err(`${id} ${version} : date de publication invalide.`);
        continue;
      }
      const status = v.status === void 0 ? "active" : v.status;
      if (status !== "active" && status !== "deprecated" && status !== "revoked") {
        err(`${id} ${version} : statut inconnu.`);
        continue;
      }
      const permissions = (Array.isArray(v.permissions) ? v.permissions : []).filter((p) => typeof p === "string" && PERM_RE.test(p)).slice(0, LIMITS.permissions);
      const minApp = typeof v.minApp === "string" && VERSION_RE2.test(v.minApp) ? v.minApp : void 0;
      seenVersions.add(version);
      versions.push({ version, sha256: sha2564, size: vsize, url: v.url, publishedAt, permissions, minApp, changelog: cleanText(v.changelog, LIMITS.changelog) || void 0, status });
    }
    if (!versions.length) {
      err(`${id} : aucune version valide.`);
      continue;
    }
    entries.push({
      id,
      kind,
      name,
      summary: cleanText(e.summary, LIMITS.summary),
      description: cleanText(e.description, LIMITS.description),
      license: cleanText(e.license, LIMITS.name),
      tags,
      homepage,
      system,
      languages,
      access,
      store,
      dependencies,
      publisher: { name: cleanText(pub.name, LIMITS.name) || "\xC9diteur inconnu", key: pub.key },
      versions
    });
  }
  const graph = new Map(entries.map((x) => [x.id, x.dependencies.map((d) => d.id)]));
  const seen = /* @__PURE__ */ new Map();
  const loops = (n) => {
    if (seen.get(n) === 2) return false;
    if (seen.get(n) === 1) return true;
    seen.set(n, 1);
    for (const m of graph.get(n) ?? []) if (loops(m)) return true;
    seen.set(n, 2);
    return false;
  };
  for (const x of entries) if (loops(x.id)) {
    err(`${x.id} : d\xE9pendances en boucle.`);
    break;
  }
  const rev = isObj(raw.revoked) ? raw.revoked : {};
  const keys = (Array.isArray(rev.keys) ? rev.keys : []).filter((k) => isValidPublicKey(k)).slice(0, LIMITS.revokedKeys);
  const packages = (Array.isArray(rev.packages) ? rev.packages : []).filter(isObj).filter((p) => typeof p.id === "string" && ID_RE2.test(p.id) && (p.version === void 0 || typeof p.version === "string" && VERSION_RE2.test(p.version))).slice(0, LIMITS.revokedPackages).map((p) => ({ id: p.id, version: p.version }));
  if (errors.length) return { ok: false, errors };
  return {
    ok: true,
    index: { format: CATALOG_FORMAT, v: CATALOG_VERSION, sequence, generatedAt, expiresAt, entries, revoked: { keys, packages } }
  };
}

// apps/desktop/src/catalog/signing.ts
var INDEX_CONTEXT = "ourdir-catalog/v2";
function signBytes(bytes, identity, context, now = /* @__PURE__ */ new Date()) {
  const body = { v: 1, publicKey: identity.publicKey, signature: sign(identity, context, bytes), signedAt: now.toISOString() };
  return JSON.stringify(body, null, 2);
}
function verifyBytes(bytes, signatureText, keys, context, what = "le catalogue") {
  const What = what.charAt(0).toUpperCase() + what.slice(1);
  if (!keys.length) return { ok: false, reason: "Aucune cl\xE9 de catalogue n\u2019est \xE9pingl\xE9e : le catalogue ne peut pas \xEAtre v\xE9rifi\xE9." };
  let sig;
  try {
    const text = signatureText.toString();
    if (text.length > 2048) return { ok: false, reason: "Fichier de signature trop volumineux." };
    sig = JSON.parse(text);
  } catch {
    return { ok: false, reason: "Fichier de signature illisible." };
  }
  if (sig.v !== 1 || !isValidPublicKey(sig.publicKey) || typeof sig.signature !== "string") return { ok: false, reason: "Fichier de signature invalide." };
  if (!keys.includes(sig.publicKey)) return { ok: false, reason: `${What} porte la signature d\u2019une cl\xE9 que l\u2019application ne conna\xEEt pas.` };
  if (!verify(sig.publicKey, context, bytes, sig.signature)) return { ok: false, reason: `La signature ne correspond pas au contenu (${what}).` };
  return { ok: true, publicKey: sig.publicKey };
}
var signIndex = (indexBytes, identity, now = /* @__PURE__ */ new Date()) => signBytes(indexBytes, identity, INDEX_CONTEXT, now);
var verifyIndex = (indexBytes, signatureText, keys) => verifyBytes(indexBytes, signatureText, keys, INDEX_CONTEXT);

// apps/desktop/src/catalog/trust.ts
var DELEGATION_FILE = "delegation.json";
var TIERS_FILE = "tiers.json";
var TIERS_SIGNATURE_FILE = "tiers.json.sig";
var DELEGATION_CONTEXT = "ourdir-delegation/v1";
var TIERS_CONTEXT = "ourdir-tiers/v1";
var TIERS_LIMITS = { bytes: 1024 * 1024, keys: 500, versions: 5e3, name: 80 };
var isObj2 = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
var bad = (reason) => ({ ok: false, reason });
function checkDelegation(text, rootKeys, now, minSerial = 0, opts = {}) {
  const s = text.toString();
  if (s.length > 4096) return bad("D\xE9l\xE9gation trop volumineuse.");
  let file;
  try {
    file = JSON.parse(s);
  } catch {
    return bad("D\xE9l\xE9gation illisible.");
  }
  if (!isObj2(file) || typeof file.body !== "string" || !isObj2(file.sig)) return bad("D\xE9l\xE9gation invalide.");
  const v = verifyBytes(Buffer.from(file.body), JSON.stringify(file.sig), rootKeys, DELEGATION_CONTEXT, "la d\xE9l\xE9gation");
  if (!v.ok) return v;
  let d;
  try {
    d = JSON.parse(file.body);
  } catch {
    return bad("D\xE9l\xE9gation invalide.");
  }
  if (!isObj2(d) || d.v !== 1 || !isValidPublicKey(d.key) || !(Number.isSafeInteger(d.serial) && d.serial >= 1)) return bad("D\xE9l\xE9gation invalide.");
  const from = Date.parse(String(d.notBefore));
  const to = Date.parse(String(d.notAfter));
  if (!Number.isFinite(from) || !Number.isFinite(to)) return bad("D\xE9l\xE9gation invalide.");
  if (now < from) return bad("La d\xE9l\xE9gation n\u2019est pas encore valable.");
  if (now > to && !opts.allowExpired) return bad("La d\xE9l\xE9gation a expir\xE9.");
  if (d.serial < minSerial) return bad("D\xE9l\xE9gation plus ancienne qu\u2019une d\xE9j\xE0 vue (retour en arri\xE8re refus\xE9).");
  return { ok: true, delegation: { v: 1, key: d.key, serial: d.serial, notBefore: new Date(from).toISOString(), notAfter: new Date(to).toISOString() } };
}
var named = (list2) => {
  if (!Array.isArray(list2) || list2.length > TIERS_LIMITS.keys) return null;
  const out = [];
  for (const n of list2) {
    if (!isObj2(n) || !isValidPublicKey(n.key) || typeof n.name !== "string") return null;
    out.push({ key: n.key, name: n.name.slice(0, TIERS_LIMITS.name) });
  }
  return out;
};
function parseTiers(bytes) {
  const size = typeof bytes === "string" ? Buffer.byteLength(bytes) : bytes.length;
  if (size > TIERS_LIMITS.bytes) return bad("Fichier des niveaux trop volumineux.");
  let raw;
  try {
    raw = JSON.parse(bytes.toString());
  } catch {
    return bad("Fichier des niveaux illisible.");
  }
  if (!isObj2(raw) || raw.v !== 1) return bad("Fichier des niveaux invalide.");
  if (!(Number.isSafeInteger(raw.sequence) && raw.sequence >= 0)) return bad("Fichier des niveaux invalide (s\xE9quence).");
  const expires = Date.parse(String(raw.expiresAt));
  if (!Number.isFinite(expires)) return bad("Fichier des niveaux invalide (expiration).");
  const ourdir = Array.isArray(raw.ourdir) && raw.ourdir.length <= TIERS_LIMITS.keys && raw.ourdir.every((k) => isValidPublicKey(k)) ? raw.ourdir : null;
  const official = named(raw.official);
  const sellers = named(raw.sellers);
  const val = isObj2(raw.validated) ? raw.validated : null;
  const publishers = val ? named(val.publishers) : null;
  const versions = val && Array.isArray(val.versions) && val.versions.length <= TIERS_LIMITS.versions && val.versions.every((x) => isObj2(x) && typeof x.id === "string" && ID_RE2.test(x.id) && typeof x.version === "string" && VERSION_RE2.test(x.version) && typeof x.sha256 === "string" && SHA_RE.test(x.sha256)) ? val.versions.map((x) => ({ id: x.id, version: x.version, sha256: x.sha256 })) : null;
  if (!ourdir || !official || !sellers || !publishers || !versions) return bad("Fichier des niveaux invalide (une liste est mal form\xE9e).");
  return { ok: true, tiers: { v: 1, sequence: raw.sequence, expiresAt: new Date(expires).toISOString(), ourdir, official, validated: { versions, publishers }, sellers } };
}
function checkTiers(bytes, signatureText, rootKeys, now, minSequence = 0) {
  const v = verifyBytes(bytes, signatureText, rootKeys, TIERS_CONTEXT, "le fichier des niveaux");
  if (!v.ok) return v;
  const p = parseTiers(bytes);
  if (!p.ok) return p;
  if (Date.parse(p.tiers.expiresAt) < now) return bad("Le fichier des niveaux a expir\xE9.");
  if (p.tiers.sequence < minSequence) return bad("Fichier des niveaux plus ancien qu\u2019un d\xE9j\xE0 vu (retour en arri\xE8re refus\xE9).");
  return p;
}
function tierOf(tiers, kind, id, publisherKey, version) {
  if (!tiers) return "community";
  if (tiers.ourdir.includes(publisherKey)) return "ourdir";
  if (tiers.official.some((o) => o.key === publisherKey)) return "official";
  if (kind === "module") {
    if (tiers.validated.versions.some((v) => v.id === id && v.version === version.version && v.sha256 === version.sha256)) return "validated";
  } else if (tiers.validated.publishers.some((p) => p.key === publisherKey)) {
    return "validated";
  }
  return "community";
}
function maySell(tiers, publisherKey) {
  if (!tiers) return false;
  return tiers.ourdir.includes(publisherKey) || tiers.official.some((o) => o.key === publisherKey) || tiers.sellers.some((s) => s.key === publisherKey);
}

// apps/desktop/src/catalog/client.ts
var MARKS = new RegExp("[" + String.fromCharCode(768) + "-" + String.fromCharCode(879) + "]", "g");

// apps/desktop/src/catalog/download.ts
function requestedPermissions(p) {
  const m = p.manifest;
  return m.kind === "native" ? m.permissions : [.../* @__PURE__ */ new Set([...p.compat?.suggestedPermissions ?? [], ...m.files.styles.length ? ["ui.style"] : []])];
}

// apps/desktop/src/catalog/builder.ts
var dirs = (root) => ({
  entries: import_node_path3.default.join(root, "entries"),
  packages: import_node_path3.default.join(root, "packages"),
  revoked: import_node_path3.default.join(root, "revoked.json"),
  state: import_node_path3.default.join(root, "state.json"),
  out: import_node_path3.default.join(root, "public")
});
var sha2562 = (b) => import_node_crypto2.default.createHash("sha256").update(b).digest("hex");
var readJson = (file, fallback) => {
  try {
    return JSON.parse(import_node_fs3.default.readFileSync(file, "utf8"));
  } catch {
    return fallback;
  }
};
var writeJson = (file, data) => {
  import_node_fs3.default.mkdirSync(import_node_path3.default.dirname(file), { recursive: true });
  import_node_fs3.default.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
};
var CatalogError = class extends Error {
};
function build2(root, identity, opts = {}) {
  const d = dirs(root);
  const now = opts.now ?? /* @__PURE__ */ new Date();
  const days = opts.days ?? 30;
  const entries = import_node_fs3.default.existsSync(d.entries) ? import_node_fs3.default.readdirSync(d.entries).filter((f) => f.endsWith(".json")).sort().map((f) => readJson(import_node_path3.default.join(d.entries, f), null)) : [];
  const tiersFile = import_node_path3.default.join(root, TIERS_FILE);
  const tiers = import_node_fs3.default.existsSync(tiersFile) ? parseTiers(import_node_fs3.default.readFileSync(tiersFile)) : null;
  for (const e of entries) {
    if (e.access === "licensed" && !maySell(tiers && tiers.ok ? tiers.tiers : null, e.publisher.key)) {
      throw new CatalogError(`\xAB ${e.id} \xBB est payant, mais son \xE9diteur n\u2019est ni Ourdir, ni Officiel, ni vendeur agr\xE9\xE9 : publication refus\xE9e.`);
    }
  }
  const sequence = opts.sequence ?? (readJson(d.state, {}).sequence ?? 0) + 1;
  const index = {
    format: CATALOG_FORMAT,
    v: CATALOG_VERSION,
    sequence,
    generatedAt: now.toISOString(),
    expiresAt: new Date(now.getTime() + days * 864e5).toISOString(),
    entries: entries.map((e) => ({ ...e, versions: e.versions.map(({ file, url, ...rest }) => ({ ...rest, url: url ?? file })) })),
    revoked: readJson(d.revoked, { keys: [], packages: [] })
  };
  const bytes = Buffer.from(JSON.stringify(index, null, 2) + "\n", "utf8");
  const parsed = parseIndex(bytes, { loopbackPort: opts.loopbackPort });
  if (!parsed.ok) throw new CatalogError("L\u2019index produit serait refus\xE9 par l\u2019application : " + parsed.errors.join(" ; "));
  import_node_fs3.default.rmSync(d.out, { recursive: true, force: true });
  import_node_fs3.default.mkdirSync(d.out, { recursive: true });
  for (const e of entries) {
    for (const v of e.versions) {
      if (!v.file) continue;
      const dest = import_node_path3.default.join(d.out, v.file);
      import_node_fs3.default.mkdirSync(import_node_path3.default.dirname(dest), { recursive: true });
      import_node_fs3.default.copyFileSync(import_node_path3.default.join(root, v.file), dest);
    }
  }
  import_node_fs3.default.writeFileSync(import_node_path3.default.join(d.out, INDEX_FILE), bytes);
  import_node_fs3.default.writeFileSync(import_node_path3.default.join(d.out, SIGNATURE_FILE2), signIndex(bytes, identity, now));
  for (const f of [DELEGATION_FILE, TIERS_FILE, TIERS_SIGNATURE_FILE]) {
    if (import_node_fs3.default.existsSync(import_node_path3.default.join(root, f))) import_node_fs3.default.copyFileSync(import_node_path3.default.join(root, f), import_node_path3.default.join(d.out, f));
  }
  writeJson(d.state, { sequence });
  return { sequence, entries: entries.length, versions: entries.reduce((n, e) => n + e.versions.length, 0), expiresAt: index.expiresAt };
}
function verifyPublished(outDir, rootKeys, opts = {}) {
  const errors = [];
  const now = (opts.now ?? /* @__PURE__ */ new Date()).getTime();
  let bytes, sig;
  try {
    bytes = import_node_fs3.default.readFileSync(import_node_path3.default.join(outDir, INDEX_FILE));
    sig = import_node_fs3.default.readFileSync(import_node_path3.default.join(outDir, SIGNATURE_FILE2));
  } catch {
    return { ok: false, errors: ["index.json ou index.json.sig manquant."] };
  }
  let keys = rootKeys;
  const delegationFile = import_node_path3.default.join(outDir, DELEGATION_FILE);
  if (import_node_fs3.default.existsSync(delegationFile)) {
    const dl = checkDelegation(import_node_fs3.default.readFileSync(delegationFile), rootKeys, now);
    if (!dl.ok) return { ok: false, errors: ["D\xE9l\xE9gation refus\xE9e : " + dl.reason] };
    keys = [...rootKeys, dl.delegation.key];
  }
  const v = verifyIndex(bytes, sig, keys);
  if (!v.ok) return { ok: false, errors: [v.reason] };
  const parsed = parseIndex(bytes, { loopbackPort: opts.loopbackPort });
  if (!parsed.ok) return { ok: false, errors: parsed.errors };
  const tiersFile = import_node_path3.default.join(outDir, TIERS_FILE);
  if (import_node_fs3.default.existsSync(tiersFile)) {
    let t;
    try {
      t = checkTiers(import_node_fs3.default.readFileSync(tiersFile), import_node_fs3.default.readFileSync(import_node_path3.default.join(outDir, TIERS_SIGNATURE_FILE)), rootKeys, now);
    } catch {
      t = { ok: false, reason: "tiers.json.sig manquant." };
    }
    if (!t.ok) errors.push("Fichier des niveaux refus\xE9 : " + t.reason);
  }
  let files = 0;
  let external = 0;
  for (const e of parsed.index.entries) {
    for (const ver of e.versions) {
      if (/^[a-z][a-z0-9+.-]*:/i.test(ver.url)) {
        external++;
        continue;
      }
      const f = import_node_path3.default.join(outDir, ver.url);
      try {
        const b = import_node_fs3.default.readFileSync(f);
        if (b.length !== ver.size || sha2562(b) !== ver.sha256) errors.push(`${e.id} ${ver.version} : le fichier ne correspond pas \xE0 l\u2019index.`);
        files++;
      } catch {
        errors.push(`${e.id} ${ver.version} : fichier manquant (${ver.url}).`);
      }
    }
  }
  return errors.length ? { ok: false, errors } : { ok: true, sequence: parsed.index.sequence, files, external };
}

// apps/desktop/src/catalog/package.ts
var PACKAGE_CONTEXT = "ourdir-package/v1";
function signPackageFile(bytes, identity) {
  return sign(identity, PACKAGE_CONTEXT, bytes);
}
function verifyPackageFile(bytes, publicKey, signature) {
  return isValidPublicKey(publicKey) && typeof signature === "string" && verify(publicKey, PACKAGE_CONTEXT, bytes, signature);
}

// apps/desktop/src/catalog/submission.ts
var OPEN_KINDS = ["module", "system"];
var MAX_SUBMISSIONS_PER_PR = 10;
var SUBMISSION_PATH_RE = /^entries\/([a-z0-9][a-z0-9_-]{1,63})\/(\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]{1,30})?)\.json$/;
var PERM_RE2 = /^[a-z][a-z0-9]*(\.[a-z][a-z0-9]*){1,3}$/;
var MAX_SUBMISSION_BYTES = 64 * 1024;
var isObj3 = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
function requirement2(v) {
  if (!isObj3(v) || typeof v.id !== "string" || !ID_RE2.test(v.id)) return null;
  if (v.minVersion === void 0) return { id: v.id };
  return typeof v.minVersion === "string" && VERSION_RE2.test(v.minVersion) ? { id: v.id, minVersion: v.minVersion } : null;
}
function parseSubmission(file, text, opts = {}) {
  const where = SUBMISSION_PATH_RE.exec(file);
  if (!where) return { ok: false, errors: [`\xAB ${file.slice(0, 120)} \xBB : une soumission est un fichier entries/<id>/<version>.json.`] };
  if (text.length > MAX_SUBMISSION_BYTES) return { ok: false, errors: ["Soumission trop volumineuse."] };
  let raw;
  try {
    raw = JSON.parse(text);
  } catch {
    return { ok: false, errors: ["Soumission illisible (JSON invalide)."] };
  }
  if (!isObj3(raw) || raw.v !== 1) return { ok: false, errors: ["Soumission invalide (format)."] };
  const errors = [];
  const [, id, version] = where;
  if (raw.id !== id || raw.version !== version) errors.push("Le nom du fichier ne correspond pas \xE0 l\u2019identifiant et \xE0 la version.");
  const kind = raw.kind;
  const known = typeof kind === "string" && KINDS.includes(kind);
  if (!known) errors.push("Type inconnu.");
  else if (!OPEN_KINDS.includes(kind)) errors.push(`Le type \xAB ${kind} \xBB n\u2019est pas encore ouvert au catalogue.`);
  const name = cleanText(raw.name, LIMITS.name);
  if (name.length < 2) errors.push("Nom manquant.");
  const url = raw.url;
  if (typeof url !== "string" || !/^[a-z][a-z0-9+.-]*:/i.test(url) || !isAcceptableUrl(url, opts)) errors.push("Adresse du fichier refus\xE9e : une adresse https compl\xE8te, sans identifiants.");
  const cap = known ? KIND_BYTES[kind] : 0;
  const size = raw.size;
  if (!(typeof size === "number" && Number.isInteger(size) && size > 0 && size <= cap)) errors.push("Taille invalide.");
  if (typeof raw.sha256 !== "string" || !SHA_RE.test(raw.sha256)) errors.push("Empreinte SHA-256 invalide.");
  const pub = isObj3(raw.publisher) ? raw.publisher : {};
  if (!isValidPublicKey(pub.key)) errors.push("Cl\xE9 d\u2019\xE9diteur invalide.");
  const publisherName = cleanText(pub.name, LIMITS.name);
  if (!publisherName) errors.push("Nom d\u2019\xE9diteur manquant.");
  if (kind === "system" && typeof raw.signature !== "string") errors.push("Un syst\xE8me doit porter sa signature (node scripts/sign-module.js --system).");
  const perms = Array.isArray(raw.permissions) ? raw.permissions : [];
  if (perms.length > LIMITS.permissions || !perms.every((p) => typeof p === "string" && PERM_RE2.test(p))) errors.push("Liste de permissions invalide.");
  const license = cleanText(raw.license, LIMITS.name);
  if (!license) errors.push("Licence manquante.");
  const summary = cleanText(raw.summary, LIMITS.summary);
  if (!summary) errors.push("R\xE9sum\xE9 manquant.");
  const system = raw.system === void 0 ? void 0 : requirement2(raw.system);
  if (system === null) errors.push("Syst\xE8me vis\xE9 invalide.");
  const access = raw.access === void 0 ? "free" : raw.access;
  if (access !== "free" && access !== "licensed") errors.push("Acc\xE8s inconnu.");
  const store = typeof raw.store === "string" && raw.store.startsWith("https://") && isAcceptableUrl(raw.store) ? raw.store : void 0;
  if (access === "licensed" && !store) errors.push("Un contenu payant doit indiquer sa boutique.");
  if (errors.length) return { ok: false, errors };
  return {
    ok: true,
    sub: {
      id,
      version,
      kind,
      name,
      url,
      size,
      sha256: raw.sha256,
      publisher: { name: publisherName, key: pub.key },
      signature: typeof raw.signature === "string" ? raw.signature.slice(0, 200) : void 0,
      permissions: perms,
      license,
      summary,
      description: cleanText(raw.description, LIMITS.description),
      tags: (Array.isArray(raw.tags) ? raw.tags : []).filter((t) => typeof t === "string" && TAG_RE.test(t)).slice(0, LIMITS.tags),
      system: system ?? void 0,
      languages: (Array.isArray(raw.languages) ? raw.languages : []).filter((l) => typeof l === "string" && LANG_RE.test(l)).slice(0, LIMITS.languages),
      homepage: typeof raw.homepage === "string" && raw.homepage.startsWith("https://") && isAcceptableUrl(raw.homepage) ? raw.homepage : void 0,
      changelog: cleanText(raw.changelog, LIMITS.changelog) || void 0,
      access,
      store
    }
  };
}
function filePolicy(changes) {
  if (!changes.length) return ["La pull request n\u2019ajoute aucun fichier."];
  const out = [];
  if (changes.length > MAX_SUBMISSIONS_PER_PR) out.push(`Au plus ${MAX_SUBMISSIONS_PER_PR} soumissions par pull request.`);
  for (const c of changes.slice(0, 50)) {
    const name = String(c.filename).slice(0, 120);
    if (!SUBMISSION_PATH_RE.test(c.filename)) out.push(`\xAB ${name} \xBB : seuls des fichiers entries/<id>/<version>.json peuvent \xEAtre ajout\xE9s ; le reste passe par le mainteneur.`);
    else if (c.status !== "added") out.push(`\xAB ${name} \xBB : on ne modifie ni ne supprime une soumission publi\xE9e (ajoute une nouvelle version).`);
  }
  return out;
}
function ownership(sub, existing) {
  const same = existing.filter((e) => e.id === sub.id);
  const out = [];
  if (same.some((e) => e.key !== sub.publisher.key)) out.push(`\xAB ${sub.id} \xBB appartient \xE0 un autre \xE9diteur.`);
  if (same.some((e) => e.kind !== sub.kind)) out.push(`\xAB ${sub.id} \xBB est d\xE9j\xE0 un autre type de paquet.`);
  if (same.some((e) => e.version === sub.version)) out.push(`La version ${sub.version} de \xAB ${sub.id} \xBB est d\xE9j\xE0 publi\xE9e : les versions ne changent jamais.`);
  return out;
}
function mergeDecision(o) {
  if (o.conclusion !== "success") return { merge: false, reason: "Le contr\xF4le n\u2019a pas r\xE9ussi." };
  if (!o.checkedSha || o.checkedSha !== o.headSha) return { merge: false, reason: "La pull request a chang\xE9 depuis le contr\xF4le : il sera refait." };
  const policy = filePolicy(o.changes);
  if (policy.length) return { merge: false, reason: policy.join(" ") };
  return { merge: true, reason: "Contr\xF4le r\xE9ussi." };
}
var publishSequence = (now) => Math.floor(now.getTime() / 1e3);
var safe = (s) => String(s).replace(/[`\r\n]+/g, " ").replace(/@/g, "@\u200B").slice(0, 300);
function renderReport(r) {
  const lines = ["### Contr\xF4le du catalogue / Catalogue check", ""];
  lines.push(r.ok ? "\u2714 Tout est bon : la soumission va \xEAtre fusionn\xE9e. / All good: it will be merged." : "\u2718 La soumission est refus\xE9e pour l\u2019instant. / The submission is refused for now.");
  lines.push("");
  for (const p of r.policy.slice(0, 10)) lines.push("- \u2718 " + safe(p));
  for (const e of r.results.slice(0, 10)) {
    lines.push(`- ${e.ok ? "\u2714" : "\u2718"} ${safe(e.file)}${e.ok ? "" : " : " + e.errors.slice(0, 4).map(safe).join(" ; ")}`);
  }
  lines.push("", "R\xE8gles : RULES.md \xB7 Guide : CONTRIBUTING.md");
  return lines.join("\n");
}

// apps/desktop/src/catalog/pipeline.ts
var sha2563 = (b) => import_node_crypto3.default.createHash("sha256").update(b).digest("hex");
var message = (err) => err instanceof Error ? err.message : String(err);
var extOf = (kind) => kind === "module" ? "zip" : "ttsystem.json";
function fetcher(deps2) {
  if (deps2.fetchBytes) return deps2.fetchBytes;
  return async (url, maxBytes) => {
    const u = new URL(url);
    const loop = !!deps2.loopbackPort && u.protocol === "http:" && u.hostname === "127.0.0.1" && Number(u.port) === deps2.loopbackPort;
    const dev = loop ? { allowHttp: true, allowPrivate: true, allowedPorts: [deps2.loopbackPort] } : {};
    return (await fetchLimited(url, { maxBytes, timeoutMs: 6e4, ...dev })).body;
  };
}
function readSubmissions(repoDir, deps2 = {}) {
  const top = import_node_path4.default.join(repoDir, "entries");
  if (!import_node_fs4.default.existsSync(top)) return [];
  const out = [];
  for (const id of import_node_fs4.default.readdirSync(top).sort()) {
    const dir = import_node_path4.default.join(top, id);
    if (!import_node_fs4.default.statSync(dir).isDirectory()) continue;
    for (const f of import_node_fs4.default.readdirSync(dir).filter((x) => x.endsWith(".json")).sort()) {
      const p = parseSubmission(`entries/${id}/${f}`, import_node_fs4.default.readFileSync(import_node_path4.default.join(dir, f), "utf8"), deps2);
      if (p.ok) out.push(p.sub);
    }
  }
  return out;
}
function readTiers(repoDir) {
  const f = import_node_path4.default.join(repoDir, TIERS_FILE);
  if (!import_node_fs4.default.existsSync(f)) return null;
  const p = parseTiers(import_node_fs4.default.readFileSync(f));
  return p.ok ? p.tiers : null;
}
function withPackage(bytes, fn) {
  const tmp = import_node_path4.default.join(import_node_os2.default.tmpdir(), `ourdir-check-${process.pid}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.zip`);
  import_node_fs4.default.writeFileSync(tmp, bytes);
  let p;
  try {
    p = prepare(tmp, void 0, { allowLicensed: true });
  } finally {
    import_node_fs4.default.rmSync(tmp, { force: true });
  }
  try {
    return fn(p);
  } finally {
    p.dispose();
  }
}
async function makeSubmission(bytes, o, _deps) {
  let id;
  let version;
  let permissions = [];
  let access;
  let publisher;
  let signature;
  let kind;
  if (bytes.subarray(0, 2).toString("latin1") === "PK") {
    kind = "module";
    const info = withPackage(bytes, (p) => {
      if (p.trust === "unsigned" || !p.publisher) throw new Error("Ce module n\u2019est pas sign\xE9 : node scripts/sign-module.js <dossier> --key <cl\xE9.json>.");
      return {
        id: p.manifest.id,
        version: p.manifest.version,
        permissions: requestedPermissions(p),
        access: p.manifest.access === "licensed" ? "licensed" : "free",
        publisher: { name: p.publisher.name, key: p.publisher.publicKey }
      };
    });
    ({ id, version, permissions, access, publisher } = info);
  } else {
    kind = "system";
    const file = JSON.parse(bytes.toString("utf8"));
    if (!file || file.format !== "tabletop-system" || !file.doc) throw new Error("Ce fichier n\u2019est pas un syst\xE8me Ourdir.");
    if (!o.identity) throw new Error("Un syst\xE8me se signe avec la cl\xE9 de son \xE9diteur (--key).");
    id = String(file.doc.id);
    version = String(file.doc.version);
    access = file.doc.access === "licensed" ? "licensed" : "free";
    publisher = { name: o.publisherName || "\xC9diteur", key: o.identity.publicKey };
    signature = signPackageFile(bytes, o.identity);
  }
  return {
    v: 1,
    id,
    version,
    kind,
    name: o.name,
    url: o.url,
    size: bytes.length,
    sha256: sha2563(bytes),
    publisher,
    ...signature ? { signature } : {},
    permissions,
    license: o.license,
    summary: o.summary,
    description: o.description ?? "",
    tags: o.tags ?? [],
    system: o.system,
    languages: o.languages ?? [],
    homepage: o.homepage,
    changelog: o.changelog,
    access,
    store: o.store
  };
}
function checkSystem(bytes, s, deps2) {
  if (!verifyPackageFile(bytes, s.publisher.key, s.signature)) return ["La signature du syst\xE8me ne correspond pas \xE0 la cl\xE9 de l\u2019\xE9diteur."];
  let file;
  try {
    file = JSON.parse(bytes.toString("utf8"));
  } catch {
    return ["Ce fichier n\u2019est pas un syst\xE8me Ourdir (JSON illisible)."];
  }
  if (!file || file.format !== "tabletop-system" || file.v !== 1 || !file.doc || typeof file.doc !== "object") return ["Ce fichier n\u2019est pas un syst\xE8me Ourdir."];
  const out = [];
  if (file.doc.id !== s.id || file.doc.version !== s.version) out.push("Le syst\xE8me annonce un autre identifiant ou une autre version que la soumission.");
  if (file.doc.access === "licensed" !== (s.access === "licensed")) out.push("L\u2019acc\xE8s d\xE9clar\xE9 ne correspond pas \xE0 celui du syst\xE8me.");
  const invalid = deps2.validateSystem(file.doc);
  if (invalid) out.push("Syst\xE8me invalide : " + invalid);
  return out;
}
function checkModule(bytes, s) {
  try {
    return withPackage(bytes, (p) => {
      const out = [];
      if (p.manifest.id !== s.id || p.manifest.version !== s.version) out.push("Le module annonce un autre identifiant ou une autre version que la soumission.");
      if (p.trust === "unsigned" || !p.publisher) out.push("Le module n\u2019est pas sign\xE9 (node scripts/sign-module.js).");
      else if (p.publisher.publicKey !== s.publisher.key) out.push("Le module est sign\xE9 par une autre cl\xE9 que celle d\xE9clar\xE9e.");
      const real = [...requestedPermissions(p)].sort().join(",");
      if (real !== [...s.permissions].sort().join(",")) out.push(`Les permissions d\xE9clar\xE9es ne sont pas celles du module (${real || "aucune"}).`);
      if (p.manifest.access === "licensed" !== (s.access === "licensed")) out.push("L\u2019acc\xE8s d\xE9clar\xE9 ne correspond pas \xE0 celui du module.");
      return out;
    });
  } catch (err) {
    return ["Module refus\xE9 : " + message(err)];
  }
}
async function checkSubmission(file, text, repoDir, deps2) {
  const p = parseSubmission(file, text, { loopbackPort: deps2.loopbackPort });
  if (!p.ok) return { file, ok: false, errors: p.errors };
  const s = p.sub;
  const errors = ownership(s, readSubmissions(repoDir, deps2).map((x) => ({ id: x.id, version: x.version, kind: x.kind, key: x.publisher.key })));
  if (s.access === "licensed" && !maySell(readTiers(repoDir), s.publisher.key)) errors.push("Contenu payant : seuls Ourdir, les \xE9diteurs officiels et les vendeurs agr\xE9\xE9s peuvent vendre.");
  if (errors.length) return { file, id: s.id, version: s.version, ok: false, errors };
  let bytes;
  try {
    bytes = await fetcher(deps2)(s.url, s.size + 1);
  } catch (err) {
    return { file, id: s.id, version: s.version, ok: false, errors: ["T\xE9l\xE9chargement impossible : " + message(err)] };
  }
  if (bytes.length !== s.size) errors.push(`Taille : ${bytes.length} octets au lieu de ${s.size}.`);
  else if (sha2563(bytes) !== s.sha256) errors.push("Empreinte SHA-256 diff\xE9rente de celle d\xE9clar\xE9e.");
  else errors.push(...s.kind === "system" ? checkSystem(bytes, s, deps2) : checkModule(bytes, s));
  return { file, id: s.id, version: s.version, ok: errors.length === 0, errors };
}
async function checkPullRequest(o, deps2) {
  const policy = filePolicy(o.changes);
  if (policy.length) return { ok: false, policy, results: [] };
  const results = [];
  for (const c of o.changes) {
    if (!SUBMISSION_PATH_RE.test(c.filename)) continue;
    const full = import_node_path4.default.resolve(o.prDir, c.filename);
    if (!full.startsWith(import_node_path4.default.resolve(o.prDir) + import_node_path4.default.sep)) continue;
    let text;
    try {
      text = import_node_fs4.default.readFileSync(full, "utf8");
    } catch {
      results.push({ file: c.filename, ok: false, errors: ["Fichier introuvable dans la pull request."] });
      continue;
    }
    results.push(await checkSubmission(c.filename, text, o.repoDir, deps2));
  }
  return { ok: results.length > 0 && results.every((r) => r.ok), policy: [], results };
}
async function problemWith(fetch2, s) {
  try {
    const b = await fetch2(s.url, s.size + 1);
    if (b.length !== s.size) return "la taille du fichier a chang\xE9";
    if (sha2563(b) !== s.sha256) return "le fichier a chang\xE9 (empreinte diff\xE9rente)";
    return null;
  } catch (err) {
    return "injoignable : " + message(err);
  }
}
async function publishCatalog(o, deps2) {
  const now = o.now ?? /* @__PURE__ */ new Date();
  const fetch2 = fetcher(deps2);
  const tiers = readTiers(o.repoDir);
  const seen = /* @__PURE__ */ new Map();
  if (o.previousIndex) {
    try {
      const idx = JSON.parse(o.previousIndex.toString("utf8"));
      for (const e of idx.entries ?? []) for (const v of e.versions ?? []) seen.set(`${e.id}@${v.version}`, String(v.publishedAt));
    } catch {
    }
  }
  const work = import_node_fs4.default.mkdtempSync(import_node_path4.default.join(import_node_os2.default.tmpdir(), "ourdir-publish-"));
  const broken = [];
  const entries = /* @__PURE__ */ new Map();
  let hosted = 0;
  let external = 0;
  for (const s of readSubmissions(o.repoDir, deps2)) {
    const key = `${s.id}@${s.version}`;
    const tier = tierOf(tiers, s.kind, s.id, s.publisher.key, s);
    let where;
    if (tier !== "community") {
      const rel = `packages/${s.id}/${s.version}.${extOf(s.kind)}`;
      const mirror = import_node_path4.default.join(o.hostedDir, s.id, `${s.version}.${extOf(s.kind)}`);
      let bytes = import_node_fs4.default.existsSync(mirror) ? import_node_fs4.default.readFileSync(mirror) : null;
      if (!bytes || sha2563(bytes) !== s.sha256) {
        const why = await problemWith(fetch2, s);
        if (why) {
          broken.push({ id: s.id, version: s.version, reason: why });
          continue;
        }
        bytes = await fetch2(s.url, s.size + 1);
      }
      import_node_fs4.default.mkdirSync(import_node_path4.default.dirname(import_node_path4.default.join(work, rel)), { recursive: true });
      import_node_fs4.default.writeFileSync(import_node_path4.default.join(work, rel), bytes);
      where = { file: rel };
      hosted++;
    } else {
      if (o.links === "all" || !seen.has(key)) {
        const why = await problemWith(fetch2, s);
        if (why) {
          broken.push({ id: s.id, version: s.version, reason: why });
          continue;
        }
      }
      where = { url: s.url };
      external++;
    }
    const e = entries.get(s.id) ?? { versions: [] };
    Object.assign(e, {
      id: s.id,
      kind: s.kind,
      name: s.name,
      summary: s.summary,
      description: s.description,
      license: s.license,
      tags: s.tags,
      homepage: s.homepage,
      system: s.system,
      languages: s.languages,
      access: s.access,
      store: s.store,
      dependencies: [],
      publisher: s.publisher
    });
    e.versions.push({ version: s.version, sha256: s.sha256, size: s.size, ...where, publishedAt: seen.get(key) ?? now.toISOString(), permissions: s.permissions, changelog: s.changelog, status: "active" });
    entries.set(s.id, e);
  }
  import_node_fs4.default.mkdirSync(import_node_path4.default.join(work, "entries"), { recursive: true });
  for (const [id, e] of entries) import_node_fs4.default.writeFileSync(import_node_path4.default.join(work, "entries", `${id}.json`), JSON.stringify(e, null, 2));
  for (const f of [DELEGATION_FILE, TIERS_FILE, TIERS_SIGNATURE_FILE, "revoked.json"]) {
    if (import_node_fs4.default.existsSync(import_node_path4.default.join(o.repoDir, f))) import_node_fs4.default.copyFileSync(import_node_path4.default.join(o.repoDir, f), import_node_path4.default.join(work, f));
  }
  const sequence = publishSequence(now);
  build2(work, o.identity, { now, days: 7, sequence, loopbackPort: deps2.loopbackPort });
  const check = verifyPublished(import_node_path4.default.join(work, "public"), o.rootKeys, { now, loopbackPort: deps2.loopbackPort });
  if (!check.ok) throw new Error("Le catalogue produit serait refus\xE9 par l\u2019application : " + check.errors.join(" ; "));
  import_node_fs4.default.rmSync(o.outDir, { recursive: true, force: true });
  copyDir(import_node_path4.default.join(work, "public"), o.outDir);
  import_node_fs4.default.rmSync(work, { recursive: true, force: true });
  return { sequence, entries: entries.size, hosted, external, broken };
}
function copyDir(from, to) {
  import_node_fs4.default.mkdirSync(to, { recursive: true });
  for (const name of import_node_fs4.default.readdirSync(from)) {
    const a = import_node_path4.default.join(from, name);
    const b = import_node_path4.default.join(to, name);
    if (import_node_fs4.default.statSync(a).isDirectory()) copyDir(a, b);
    else import_node_fs4.default.copyFileSync(a, b);
  }
}

// apps/desktop/src/catalog/pack.ts
var import_node_fs5 = __toESM(require("node:fs"));
var import_node_path5 = __toESM(require("node:path"));
var import_node_zlib2 = __toESM(require("node:zlib"));
var SKIP = /* @__PURE__ */ new Set(["node_modules"]);
function walk2(root, rel = "") {
  const out = [];
  for (const e of import_node_fs5.default.readdirSync(import_node_path5.default.join(root, rel), { withFileTypes: true })) {
    if (e.name.startsWith(".") || SKIP.has(e.name) || e.isSymbolicLink()) continue;
    const r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) out.push(...walk2(root, r));
    else if (e.isFile()) out.push(r);
  }
  return out;
}
function packFolder(dir) {
  const files = walk2(dir).sort();
  if (!files.length) throw new Error("Le dossier est vide.");
  const locals = [];
  const centrals = [];
  let offset = 0;
  for (const f of files) {
    const data = import_node_fs5.default.readFileSync(import_node_path5.default.join(dir, f));
    const packed = import_node_zlib2.default.deflateRawSync(data, { level: 9 });
    const name = Buffer.from(f, "utf8");
    const crc = import_node_zlib2.default.crc32(data);
    const local = Buffer.alloc(30);
    local.writeUInt32LE(67324752, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(2048, 6);
    local.writeUInt16LE(8, 8);
    local.writeUInt16LE(0, 10);
    local.writeUInt16LE(33, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(packed.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(name.length, 26);
    locals.push(local, name, packed);
    const central = Buffer.alloc(46);
    central.writeUInt32LE(33639248, 0);
    central.writeUInt16LE(3 << 8 | 20, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(2048, 8);
    central.writeUInt16LE(8, 10);
    central.writeUInt16LE(0, 12);
    central.writeUInt16LE(33, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(packed.length, 20);
    central.writeUInt32LE(data.length, 24);
    central.writeUInt16LE(name.length, 28);
    central.writeUInt32LE(33188 << 16 >>> 0, 38);
    central.writeUInt32LE(offset, 42);
    centrals.push(central, name);
    offset += local.length + name.length + packed.length;
  }
  const centralBytes = Buffer.concat(centrals);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(101010256, 0);
  end.writeUInt16LE(files.length, 8);
  end.writeUInt16LE(files.length, 10);
  end.writeUInt32LE(centralBytes.length, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, centralBytes, end]);
}

// apps/desktop/verifier/cli.ts
var core = require_builder_core();
var USAGE = [
  "Ourdir catalogue verifier",
  "  gen-key <key.json>                                  your publisher key (keep it secret, out of any package)",
  "  sign-module <folder> --key <key.json> --name N      sign a module folder (module.json at its root)",
  "  pack <folder> --out <file.zip>                      zip it, the same bytes on every machine",
  "  entry <package> --url <https> --name N --summary S --license L [--key k.json --publisher-name P] [--tags a,b]",
  '        [--system id[@min]] [--languages fr,en] [--homepage https] [--changelog "..."] [--store https]',
  "  check --repo <base> --pr <pr folder> --files <files.json> --report <report.json> --markdown <report.md>",
  "  merge-decision --conclusion C --checked-sha S --head-sha H --files <files.json>",
  "  publish --repo <dir> --hosted <mirror> --out <dir> --links all|new [--previous <index.json>] --broken <broken.json> --pin <root key>",
  "  issues --broken <broken.json> --mode all|new --repo-name owner/name",
  "  sign-system <file> --key <key.json>"
].join("\n");
var args = process.argv.slice(2);
var flag = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : void 0;
};
var need = (v, what) => {
  if (!v) throw new Error(`Il manque ${what}.`);
  return v;
};
var list = (s) => s ? s.split(",").map((x) => x.trim()).filter(Boolean) : void 0;
var requirement3 = (s) => {
  const [id, minVersion] = s.split("@");
  return minVersion ? { id, minVersion } : { id };
};
var readKey = (file) => {
  const k = JSON.parse(import_node_fs6.default.readFileSync(file, "utf8"));
  if (!k.publicKey || !k.privateKey) throw new Error("Fichier de cl\xE9 invalide.");
  return k;
};
var port = flag("--loopback-port") ? Number(flag("--loopback-port")) : void 0;
var deps = {
  validateSystem: (doc) => {
    const r = core.validate(doc);
    return r.ok ? null : r.errors[0]?.message ?? "erreur inconnue";
  },
  loopbackPort: port
};
var readChanges = (file) => JSON.parse(import_node_fs6.default.readFileSync(file, "utf8")).map((c) => ({ filename: String(c.filename), status: String(c.status) }));
async function github(method, url, body) {
  const r = await fetch("https://api.github.com" + url, {
    method,
    headers: { authorization: `Bearer ${need(process.env.GH_TOKEN, "GH_TOKEN")}`, accept: "application/vnd.github+json", "user-agent": "ourdir-catalogue" },
    body: body === void 0 ? void 0 : JSON.stringify(body)
  });
  if (!r.ok) throw new Error(`${method} ${url} : ${r.status}`);
  return r.status === 204 ? null : r.json();
}
async function main() {
  const [command, first] = args;
  switch (command) {
    case "entry": {
      const bytes = import_node_fs6.default.readFileSync(need(first, "le fichier du paquet"));
      const sub = await makeSubmission(
        bytes,
        {
          url: need(flag("--url"), "--url"),
          name: need(flag("--name"), "--name"),
          summary: need(flag("--summary"), "--summary"),
          license: need(flag("--license"), "--license"),
          description: flag("--description"),
          tags: list(flag("--tags")),
          system: flag("--system") ? requirement3(flag("--system")) : void 0,
          languages: list(flag("--languages")),
          homepage: flag("--homepage"),
          changelog: flag("--changelog"),
          store: flag("--store"),
          identity: flag("--key") ? readKey(flag("--key")) : void 0,
          publisherName: flag("--publisher-name")
        },
        deps
      );
      console.log(JSON.stringify(sub, null, 2));
      console.error(`\xC0 enregistrer sous entries/${sub.id}/${sub.version}.json`);
      return;
    }
    case "check": {
      const report = await checkPullRequest({ repoDir: need(flag("--repo"), "--repo"), prDir: need(flag("--pr"), "--pr"), changes: readChanges(need(flag("--files"), "--files")) }, deps);
      import_node_fs6.default.writeFileSync(need(flag("--report"), "--report"), JSON.stringify(report, null, 2));
      import_node_fs6.default.writeFileSync(need(flag("--markdown"), "--markdown"), renderReport(report));
      console.log(renderReport(report));
      if (!report.ok) process.exitCode = 1;
      return;
    }
    case "merge-decision": {
      const d = mergeDecision({ conclusion: String(flag("--conclusion")), checkedSha: String(flag("--checked-sha") ?? ""), headSha: String(flag("--head-sha") ?? ""), changes: readChanges(need(flag("--files"), "--files")) });
      console.log(d.merge ? "merge" : "skip: " + d.reason);
      return;
    }
    case "publish": {
      const identity = JSON.parse(need(process.env.CATALOG_CI_KEY, "CATALOG_CI_KEY"));
      const prev = flag("--previous");
      const r = await publishCatalog(
        {
          repoDir: need(flag("--repo"), "--repo"),
          hostedDir: need(flag("--hosted"), "--hosted"),
          outDir: need(flag("--out"), "--out"),
          identity,
          rootKeys: need(flag("--pin"), "--pin").split(",").map((k) => k.trim()).filter(Boolean),
          links: flag("--links") === "all" ? "all" : "new",
          previousIndex: prev && import_node_fs6.default.existsSync(prev) ? import_node_fs6.default.readFileSync(prev) : null
        },
        deps
      );
      import_node_fs6.default.writeFileSync(need(flag("--broken"), "--broken"), JSON.stringify(r.broken, null, 2));
      console.log(`Publi\xE9 : s\xE9quence ${r.sequence}, ${r.entries} paquets, ${r.hosted} fichiers chez nous, ${r.external} chez leurs cr\xE9ateurs, ${r.broken.length} lien(s) cass\xE9(s).`);
      return;
    }
    case "issues": {
      const repo = need(flag("--repo-name"), "--repo-name");
      if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repo)) throw new Error("Nom de d\xE9p\xF4t invalide.");
      const broken = JSON.parse(import_node_fs6.default.readFileSync(need(flag("--broken"), "--broken"), "utf8"));
      const open = await github("GET", `/repos/${repo}/issues?labels=lien-casse&state=open&per_page=100`);
      const titleOf = (b) => `Lien cass\xE9 : ${b.id} ${b.version}`;
      for (const b of broken) {
        if (open.some((i) => i.title === titleOf(b))) continue;
        const commits = await github("GET", `/repos/${repo}/commits?path=${encodeURIComponent(`entries/${b.id}/${b.version}.json`)}&per_page=1`);
        const who = commits[0]?.author?.login ? `@${commits[0].author.login} ` : "";
        await github("POST", `/repos/${repo}/issues`, {
          title: titleOf(b),
          labels: ["lien-casse"],
          body: `${who}Le fichier de **${b.id} ${b.version}** n\u2019est plus disponible (${b.reason}) : la version est retir\xE9e de l\u2019index jusqu\u2019\xE0 son retour. Remets le fichier tel quel, ou publie une nouvelle version.

The file is no longer available: the version is left out of the index until it comes back.`
        });
      }
      if (flag("--mode") === "all") {
        for (const i of open) {
          if (!broken.some((b) => i.title === titleOf(b))) await github("PATCH", `/repos/${repo}/issues/${i.number}`, { state: "closed", state_reason: "completed" });
        }
      }
      return;
    }
    case "gen-key": {
      const file = need(first, "le fichier de cl\xE9");
      if (import_node_fs6.default.existsSync(file)) throw new Error(`${file} existe d\xE9j\xE0 : je ne l\u2019\xE9crase pas.`);
      const id = generateIdentity();
      import_node_fs6.default.writeFileSync(file, JSON.stringify(id, null, 2), { mode: 384 });
      console.log(`Cl\xE9 cr\xE9\xE9e : ${file}
Cl\xE9 publique : ${id.publicKey}
Garde ce fichier secret et sauvegard\xE9 : un paquet appartient \xE0 la cl\xE9 qui l\u2019a publi\xE9.`);
      return;
    }
    case "sign-module": {
      const dir = need(first, "le dossier du module");
      const keyFile = need(flag("--key"), "--key");
      if (import_node_path6.default.resolve(keyFile).startsWith(import_node_path6.default.resolve(dir) + import_node_path6.default.sep)) throw new Error("La cl\xE9 est DANS le dossier du module : elle serait publi\xE9e. D\xE9place-la.");
      signPackage(dir, readKey(keyFile), flag("--name") || "\xC9diteur");
      console.log(`Sign\xE9 : ${dir}`);
      return;
    }
    case "pack": {
      const out = need(flag("--out"), "--out");
      import_node_fs6.default.writeFileSync(out, packFolder(need(first, "le dossier")));
      console.log(`Archive \xE9crite : ${out}`);
      return;
    }
    case "sign-system": {
      console.log(signPackageFile(import_node_fs6.default.readFileSync(need(first, "le fichier")), readKey(need(flag("--key"), "--key"))));
      return;
    }
    default:
      console.log(USAGE);
      if (command) process.exitCode = 1;
  }
}
main().catch((err) => {
  console.error("Erreur : " + (err instanceof Error ? err.message : String(err)));
  process.exit(1);
});
