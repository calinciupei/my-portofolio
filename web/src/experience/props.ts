import { SkillsExperienceProps } from "@crew/field";
import { DispatchProps } from "./map-state-to-props";

export type OwnProps = Record<string, never>;

export type StateProps = {
  experience: SkillsExperienceProps;
};

export type ComponentProps = StateProps & DispatchProps;
