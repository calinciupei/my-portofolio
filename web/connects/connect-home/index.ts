import { InitialState } from "@crew/types";
import { connect } from "react-redux";
import ConnectHome from "./connect-home";
import { mapStateToProps, mapDispatchProps, StateProps, DispatchProps } from "./map-to-props";
import { ConnectHomeProps } from "./props";

export default connect<StateProps, DispatchProps, ConnectHomeProps, InitialState>(
  mapStateToProps,
  mapDispatchProps
)(ConnectHome);
