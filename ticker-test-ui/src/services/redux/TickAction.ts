import { Action } from "redux";

export default interface TickAction extends Action {
	type: string;
	payload: string;
};
