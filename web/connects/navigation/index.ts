import { InitialState } from "@crew/types";
import { connect } from "react-redux";
import { DispatchProps, mapDispatchProps, mapStateToProps } from "./map-state-to-props";
import { StateProps, OwnProps } from "./props";
import NavigationMenu from "./navigation";

export default connect<StateProps, DispatchProps, OwnProps, InitialState>(
  mapStateToProps,
  mapDispatchProps
)(NavigationMenu);
