import { SkillsExperienceProps } from "@crew/field";
import { DispatchProps } from "./map-state-to-props";

export type OwnProps = Record<string, unknown>;

export type StateProps = {
  experience: SkillsExperienceProps;
} & OwnProps;

export type ComponentProps = StateProps & DispatchProps;
