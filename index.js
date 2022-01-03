// an example to create a new mapping `ctrl-y`
api.mapkey("<Ctrl-y>", "Show me the money", function () {
  Front.showPopup(
    "a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close)."
  );
});

api.mapkey("<Ctrl-x>", "Remove Ad", function () {
  const adEl = document.getElementById("ad_topslot");
  adEl.remove();
});

api.mapkey("<Meta-Shift-Enter>", "Open post-tweet", function () {
  const selectedText = window.getSelection().toString();
  location.href = `post-tweet://?url=${encodeURIComponent(
    window.top.location.href
  )}&title=${encodeURIComponent(
    window.top.document.title
  )}&quote=${encodeURIComponent(selectedText)}`;
});

// an example to replace `T` with `gt`, click `Default mappings` to see how `T` works.
api.map("gt", "T");

// an example to remove mapkey `Ctrl-i`
api.unmap("<Ctrl-i>");

// Navigation
api.map("<Ctrl-a>", "0");
api.unmap("0");
api.map("<Alt-v>", "e");
api.unmap("e");
api.map("<Ctrl-v>", "d");
api.map("<Alt-<>", "gg");
api.unmap("gg");
api.map("<Alt->>", "G");
api.unmap("G");
api.map("<Ctrl-n>", "j");
api.map("<Ctrl-p>", "k");
api.map("<Ctrl-f>", "l");
api.map("<Ctrl-b>", "h");
api.map("<Ctrl-e>", "$");
api.unmap("$");

// Tabs
api.map("h", "E");
api.map("l", "R");
api.unmap("t");

// History
api.map("B", "S");
api.unmap("S");
api.map("F", "D");
api.unmap("D");

// Reload
api.map("R", "r");
api.unmap("r");

// Disable insert mode binding because it's handled by Gtk+
api.iunmap("<Ctrl-e>");
api.iunmap("<Ctrl-f>");
api.iunmap("<Ctrl-u>");
api.iunmap("<Alt-b>");
api.iunmap("<Alt-f>");
api.iunmap("<Alt-d>");
api.iunmap("<Alt-w>");

// visual mode navigation
// vmap('<Ctrl-f>', 'l');
// vmap('<Ctrl-b>', 'h');
// vmap('<Ctrl-n>', 'j');
// vmap('<Ctrl-p>', 'k');
// vmap('<Ctrl-e>', '$');
// vmap('<Ctrl-a>', '0');
// vmap('<Alt-f>', 'w');
// vmap('<Alt-b>', 'b');
// vmap('<Alt->>', 'G');
// vmap('<Alt-<>', 'gg');
// vmap('<Ctrl-l>', 'zz');

settings.smoothScroll = false;

// Search settings
// addSearchAliasX('D', 'ddgH', 'https://duckduckgo.com/html/?q=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
//     var res = JSON.parse(response.text);
//     return res.map(function(r){
//         return r.phrase;
//     });
// });
settings.defaultSearchEngine = "D";

// Hints settings
// Hints.characters = "asdfghjkl";
// Hints.scrollKeys = "";
settings.hintAlign = "left";

// (function() {
//     /// Add hooks to Hints so that we can modify Hints.characters ad-hoc.
//     var orig = {
//         // create: Hints.create,
//         // exit: Hints.exit
//     };
//     var default_characters = null;
//     Hints.create = function(_x, _y, attrs) {
//         if(attrs !== null && typeof(attrs) === "object" && ("debugitos_characters" in attrs)) {
//             // default_characters = Hints.characters;
//             // Hints.characters = attrs["debugitos_characters"];
//         }
//         orig.create.apply(this, arguments);
//     };
//     Hints.exit = function() {
//         if(default_characters !== null) {
//             // Hints.characters = default_characters;
//             default_characters = null;
//         }
//         orig.exit.apply(this, arguments);
//     };
// }());
//
// (function() {
//     var nums = "456";
//     mapkey('^f', "#1Open a link (for numpad)", function () {
//         // Hints.create("", Hints.dispatchMouseClick, {debugitos_characters: nums});
//     });
//     mapkey('^C', '#1Open a link in non-active new tab (for numpad)', function() {
//         // Hints.create("", Hints.dispatchMouseClick, {tabbed: true, active: false, debugitos_characters: nums});
//     });
// }());

// set theme
settings.theme = `
.sk_theme {
  font-family: Input Sans Condensed, Charcoal, sans-serif;
  font-size: 10pt;
  background: #24272e;
  color: #abb2bf;
}
.sk_theme tbody {
  color: #fff;
}
.sk_theme input {
  color: #d0d0d0;
}
.sk_theme .url {
  color: #61afef;
}
.sk_theme .annotation {
  color: #56b6c2;
}
.sk_theme .omnibar_highlight {
  color: #528bff;
}
.sk_theme .omnibar_timestamp {
  color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
  color: #98c379;
}
.sk_theme #sk_omnibarSearchResult>ul>li:nth-child(odd) {
  background: #303030;
}
.sk_theme #sk_omnibarSearchResult>ul>li.focused {
  background: #3e4452;
}
#sk_status, #sk_find {
  font-size: 20pt;
}`;
// click `Save` button to make above settings to take effect.
