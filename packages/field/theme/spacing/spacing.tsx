import React, { FunctionComponent } from "react";
import SPACING from "../../assets/css/spacing.css";
import theme from "./spacing.css";

type RemInPx = {
  [name: string]: number;
};

/* eslint-disable no-undef */
const style = getComputedStyle(document.body);
const remInPx: RemInPx = {
  spacing1: 4,
  spacing2: 8,
  spacing3: 12,
  spacing4: 16,
  spacing5: 24,
  spacing6: 32,
  spacing7: 40,
  spacing8: 48
};

const SpacingStory: FunctionComponent = () => (
  <>
    <h1>Spacing</h1>
    <h5>Spacing for margin or padding properties</h5>
    <table className={`${theme.spacingContainer} typography-h220`}>
      <thead>
        <tr className={theme.header}>
          <td>variable</td>
          <td>rem</td>
          <td>px</td>
          <td>example</td>
        </tr>
      </thead>
      <tbody>
        {Object.entries(SPACING).map(([key, value]: string[]) => (
          <tr key={key} className={theme.row}>
            <td>{key}</td>
            <td>{style.getPropertyValue(value.replace("var(", "").replace(")", ""))}</td>
            <td>{remInPx[key]}</td>
            <td>
              <div
                className={theme.example}
                style={{
                  width: value,
                  height: value
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default SpacingStory;
