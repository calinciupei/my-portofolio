import React, { FunctionComponent } from "react";
import COLORS from "../../assets/css/colors.css";
import styles from "./color.css";

/* eslint-disable no-undef */
const style = getComputedStyle(document.body);

type Palette = {
  name: string;
  hex: string;
  cssVar: string;
};

type Palettes = {
  title: string;
  colors: Palette[];
};

type PaletteByColor = {
  [name: string]: Palettes;
};

// initial state
const COLORS_BASELINE = {
  baseline: {
    title: "flash",
    colors: [
      { name: "black", hex: "#000000", cssVar: "var(--black)" },
      { name: "white", hex: "#ffffff", cssVar: "var(--white)" },
      { name: "grey", hex: "#acacac", cssVar: "var(--grey)" }
    ]
  }
};

/**
 * Get all colors from Colors.css dynamically
 * Group them by color with BASE colors
 */
const paletteByColor: PaletteByColor = Object.entries(COLORS).reduce((acc: PaletteByColor, color: string[]) => {
  const cssPropertyValue = color[1].slice(6, -1); // eg: yellow-600
  const colorByName = {
    name: color[0], // eg: yellow600
    hex: style.getPropertyValue(`--${cssPropertyValue}`), // eg: #ffb80c
    cssVar: color[1] // eg: var(--yellow-600)
  };

  // get palette name from CSS variable
  const cssVar: string = colorByName.cssVar.split("--").pop() || "";
  const paletteName: string = cssVar.split("-")[0];

  if (!acc[paletteName]) {
    acc[paletteName] = {
      title: paletteName,
      colors: []
    };
  }

  acc[paletteName].colors.push(colorByName);

  return acc;
}, COLORS_BASELINE);

const ColorStory: FunctionComponent = () => (
  <>
    {Object.values(paletteByColor).map((palette: Palettes) => {
      return (
        <div key={palette.title}>
          <h5>{palette.title.toLocaleUpperCase()}</h5>
          {palette.colors.map((color) => (
            <div key={color.name} className={styles.colorContainer}>
              <div className={styles.colorCard} style={{ backgroundColor: color.cssVar }} />
              <div className={styles.label}>
                <div className={`${styles.hex} typography-h120`}>{color.hex}</div>
                <div className="typography-h180">{color.name}</div>
              </div>
            </div>
          ))}
        </div>
      );
    })}
  </>
);

export default ColorStory;
