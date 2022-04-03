import { InitialState } from "@crew/types";
import { connect } from "react-redux";
import FourZeroFour from "./404";
import { mapStateToProps, mapDispatchProps, DispatchProps } from "./map-state-to-props";
import { ComponentProps, StateProps } from "./props";

export default connect<StateProps, DispatchProps, ComponentProps, InitialState>(
  mapStateToProps,
  mapDispatchProps
)(FourZeroFour);
