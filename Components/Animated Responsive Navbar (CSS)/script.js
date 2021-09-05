const toggleThemeButton = document.getElementById("toggleThemeButton");
const themeName = document.getElementById("themeName");
const lightSVG = document.getElementById("lightSVG");
const darkSVG = document.getElementById("darkSVG");
const themes = {
  light: {
    name: "light",
    "--text-primary": "#b6b6b6",
    "--text-secondary": "#ececec",
    "--bg-primary": "white",
    "--bg-secondary": "#5d6163",
    "--accent": "#13e475",
  },
  dark: {
    name: "dark",
    "--text-primary": "#b6b6b6",
    "--text-secondary": "#ececec",
    "--bg-primary": "#23232e",
    "--bg-secondary": "#141418",
    "--accent": "rgb(255, 212, 0)",
  },
};
const setTheme = (name) => {
  // Set root color theme
  document.documentElement.style.cssText = `
    --text-primary: ${
      name === themes.light.name
        ? themes.light["--text-primary"]
        : themes.dark["--text-primary"]
    };
    --text-secondary: ${
      name === themes.light.name
        ? themes.light["--text-secondary"]
        : themes.dark["--text-secondary"]
    };
    --bg-primary: ${
      name === themes.light.name
        ? themes.light["--bg-primary"]
        : themes.dark["--bg-primary"]
    };
    --bg-secondary: ${
      name === themes.light.name
        ? themes.light["--bg-secondary"]
        : themes.dark["--bg-secondary"]
    };
    --accent: ${
      name === themes.light.name
        ? themes.light["--accent"]
        : themes.dark["--accent"]
    };
  `;

  // Set inverse theme name
  themeName.innerHTML =
    themes.light.name === name ? themes.dark.name : themes.light.name;

  // Set inverse SVG icon
  lightSVG.style.display = themes.light.name === name ? "none" : "block";
  darkSVG.style.display = themes.light.name !== name ? "none" : "block";
};

// Set default dark theme when user gets in page the first time
if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", themes.dark.name);
  setTheme(themes.dark.name);
}

// Set theme according to the local storage of user
if (localStorage.getItem("theme")) {
  if (localStorage.getItem("theme") === themes.dark.name)
    setTheme(themes.dark.name);
  if (localStorage.getItem("theme") === themes.light.name)
    setTheme(themes.light.name);
}

// Toggle theme handler
toggleThemeButton.addEventListener("click", () => {
  if (localStorage.getItem("theme") === themes.light.name) {
    localStorage.setItem("theme", themes.dark.name);
    setTheme(themes.dark.name);
  } else if (localStorage.getItem("theme") === themes.dark.name) {
    localStorage.setItem("theme", themes.light.name);
    setTheme(themes.light.name);
  }
});
