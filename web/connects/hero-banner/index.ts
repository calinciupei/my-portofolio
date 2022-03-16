import { InitialState } from "@crew/types";
import { connect } from "react-redux";
import HeroBanner from "./hero-banner";
import { DispatchProps, mapDispatchProps, mapStateToProps } from "./map-state-to-props";
import { StateProps, OwnProps } from "./props";

export default connect<StateProps, DispatchProps, OwnProps, InitialState>(
  mapStateToProps,
  mapDispatchProps
)(HeroBanner);
