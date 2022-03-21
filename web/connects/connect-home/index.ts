import { InitialState } from "@crew/types";
import { connect } from "react-redux";
import ConnectHome from "./connect-home";
import { mapStateToProps, mapDispatchProps, DispatchProps } from "./map-to-props";
import { ComponentProps, StateProps } from "./props";

export default connect<StateProps, DispatchProps, ComponentProps, InitialState>(
  mapStateToProps,
  mapDispatchProps
)(ConnectHome);
