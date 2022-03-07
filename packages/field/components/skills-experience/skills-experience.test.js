import { render } from "@testing-library/react";
import React from "react";
import { SkillsExperience } from "./skills-experience";
import styles from "./skills-experience.css";

const mockIconsContent = [
  { title: "default", icon: "", url: "" },
  { title: "Html5", icon: "html5", url: "https://en.wikipedia.org/wiki/HTML5" },
  { title: "Css", icon: "css", url: "" },
  { title: "Javascript", icon: "javascript", url: "" },
  { title: "Typescript", icon: "typescript", url: "" },
  { title: "React", icon: "reactIcon", url: "" },
  { title: "Redux", icon: "redux", url: "" },
  { title: "ReduxSaga", icon: "reduxSaga", url: "" },
  { title: "Sass", icon: "node", url: "" },
  { title: "Node", icon: "express", url: "" },
  { title: "Express", icon: "graphql", url: "" },
  { title: "Graphql", icon: "jest", url: "" },
  { title: "Jest", icon: "firebase", url: "" },
  { title: "Firebase", icon: "jenkins", url: "" },
  { title: "Jenkins", icon: "github", url: "" },
  { title: "Github", icon: "sass", url: "" }
];
const mockContent = [
  "My passion to create things that contributed with a very minuscular portion to the vast space of the internet started in high school by hacking and building my first website that represented my school."
];
const mockTitle = "Tools & <br /> Experience";

jest.mock("baseui/tooltip", () => ({
  StatefulTooltip: jest.fn(() => <stateful-tooltip content={() => jest.fn()} />)
}));

function setup(content, skills, title) {
  return render(<SkillsExperience content={content} skills={skills} title={title} />);
}

describe("skills experience component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should have first element end progress bars sections", () => {
    const component = setup(mockContent, mockIconsContent, mockTitle);
    const content = component.getAllByTestId("skills-content");
    const progress = component.getAllByTestId("skills-progress");

    expect(content[0].classList.contains(styles.first)).toBe(true);
    expect(progress[0].firstChild.classList.contains(styles.progresses)).toBe(true);
    expect(progress[0].lastChild.classList.contains(styles.icons)).toBe(true);
  });
});
