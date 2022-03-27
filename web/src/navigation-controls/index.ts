import { connect } from "react-redux";
import { InitialState } from "@crew/types";
import { StateProps, OwnProps } from "./props";
import { DispatchProps, mapDispatchProps, mapStateToProps } from "./map-state-to-props";
import NavigationControls from "./navigation-controls";

export default connect<StateProps, DispatchProps, OwnProps, InitialState>(
  mapStateToProps,
  mapDispatchProps
)(NavigationControls);
