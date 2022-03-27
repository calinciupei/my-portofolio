import { InitialState } from "@crew/types";
import { connect } from "react-redux";
import Experience from "./experience";
import { DispatchProps, mapDispatchProps, mapStateToProps } from "./map-state-to-props";
import { StateProps, OwnProps } from "./props";

export default connect<StateProps, DispatchProps, OwnProps, InitialState>(
  mapStateToProps,
  mapDispatchProps
)(Experience);
