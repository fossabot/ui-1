import * as React from 'react';
import { ValidationError } from 'yup';

export interface IFormContext {
	setValue: (key: string, value: string) => void;
	hasErrored: (key: string) => boolean;
	getMessage: (key: string) => string;
	valid: boolean,
	inputs: { [key: string]: {
		error: ValidationError | null;
		value: string;
		dirty: boolean;
	}};
}

// tslint:disable-next-line
export const FormContext = React.createContext<IFormContext>({
	getMessage: () => '',
	valid: true,
	hasErrored: () => false,
	inputs: {},
	setValue: () => { /* */ },
});

export interface IFormProps {
	validation?: any;
}

export interface IFormState {
	valid: boolean;
	inputs: { [key: string]: {
		error: ValidationError | null;
		value: string;
		dirty: boolean;
	}};
}

export class Form extends React.PureComponent<IFormProps, IFormState> {
	constructor(props: IFormProps) {
		super(props);

		this.setValue = this.setValue.bind(this);

		this.state = {
			inputs: {},
		};
	}

	public setValue(key: string, value: string): void {
		if (this.state.inputs.hasOwnProperty(key)) {
			if (this.state.inputs[key].value !== value) {
				this.state.inputs[key].dirty = true;
				this.state.inputs[key].value = value;
			}
		} else {
			this.state.inputs[key] = {
				dirty: false,
				error: null,
				value,
			};
		}

		this.props.validation.validateAt(key, { [key]: value })
			.then(() => null)
			.catch(e => e)
			.then(e => {
				this.state.inputs[key].error = e;

				this.setState({
					inputs: { ...this.state.inputs },
					valid: !Object.keys(this.state.inputs).map(i => this.state.inputs[i].error).filter(i => !!i).length,
				});
			});
	}

	public render() {
		const { children } = this.props;
		const { inputs, valid } = this.state;

		const value = {
			getMessage: (key: string) => this.state.inputs[key] && this.state.inputs[key].error && this.state.inputs[key].error!.message || '',
			hasErrored: (key: string) => this.state.inputs[key] && !!this.state.inputs[key].error,
			inputs,
			setValue: this.setValue,
			valid,
		};

		return <FormContext.Provider value={value}>
			{ children}
		</FormContext.Provider>;
	}
}
