import { connect } from "react-redux";
import { InitialState } from "@crew/types";
import { OwnProps, StateProps } from "./props";
import { DispatchProps, mapDispatchProps, mapStateToProps } from "./map-state-to-props";
import { Header } from "./header";

export default connect<StateProps, DispatchProps, OwnProps, InitialState>(mapStateToProps, mapDispatchProps)(Header);
