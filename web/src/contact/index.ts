import { connect } from "react-redux";
import { InitialState } from "@crew/types";
import { DispatchProps, mapDispatchProps, mapStateToProps } from "./map-sate-to-props";
import { StateProps, OwnProps } from "./props";
import Contact from "./contact";

export default connect<StateProps, DispatchProps, OwnProps, InitialState>(mapStateToProps, mapDispatchProps)(Contact);
