import * as React from 'react';
import { ValidationError } from 'yup';

export interface IFormContext {
	valid: boolean;
	inputs: { [key: string]: {
		error: ValidationError | null;
		value: string;
		dirty: boolean;
	}; };
	setValue(key: string, value: string, dirty?: boolean): void;
	clearValue(key: string): void;
	hasErrored(key: string): boolean;
	getMessage(key: string): string;
}

// tslint:disable-next-line
export const FormContext = React.createContext<IFormContext>({
	getMessage: () => '',
	hasErrored: () => false,
	inputs: {},
	setValue: () => { /* */ },
	clearValue: () => { /* */ },
	valid: true,
});

export interface IFormProps {
	validation?: any;
	onSubmit(): void;
}

export interface IFormState {
	valid: boolean;
	inputs: { [key: string]: {
		error: ValidationError | null;
		value: string;
		dirty: boolean;
	}; };
}

export class Form extends React.PureComponent<IFormProps, IFormState> {
	public static defaultProps: Partial<IFormProps> = {
		onSubmit: () => { /* */ },
	};

	constructor(props: IFormProps) {
		super(props);

		this.state = {
			inputs: {},
			valid: true,
		};
	}

	public clearValue = (key: string): void => {
		if (this.state.inputs[key]) {
			this.state.inputs[key].dirty = false;
			this.state.inputs[key].value = '';
		} else {
			this.state.inputs[key] = {
				dirty: false,
				error: null,
				value: '',
			};
		}

		this.setState({
			inputs: { ...this.state.inputs },
			valid: !Object.keys(this.state.inputs).map(i => this.state.inputs[i].error).filter(i => !!i).length,
		});
	}

	public setValue = (key: string, value: string, resetDirty = false): void => {
		if (this.state.inputs.hasOwnProperty(key)) {
			if (this.state.inputs[key].value !== value) {
				this.state.inputs[key].dirty = resetDirty ? false : true;
				this.state.inputs[key].value = value;
			}
		} else {
			this.state.inputs[key] = {
				dirty: false,
				error: null,
				value,
			};
		}

		const obj: { [key: string]: string } = {};
		Object.keys(this.state.inputs).forEach((k: string) => { obj[k] = this.state.inputs[k].value; });

		this.props.validation.validateAt(key, obj)
			.then(() => null)
			.catch((e: ValidationError) => e)
			.then((e: ValidationError | null) => {
				this.state.inputs[key].error = e;

				this.setState({
					inputs: { ...this.state.inputs },
					valid: !Object.keys(this.state.inputs).map(i => this.state.inputs[i].error).filter(i => !!i).length,
				});
			});
	}

	public submit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		event.stopPropagation();

		if (this.state.valid) {
			this.props.onSubmit();
		} else {
			this.setState(state => {
				Object.keys(state.inputs).forEach(input => {
					state.inputs[input].dirty = true;
				});

				return { inputs: { ...state.inputs } };
			});
		}
	}

	public getMessage = (key: string): string => {
		if (this.state.inputs.hasOwnProperty(key) && this.state.inputs[key].error !== null) {
			return this.state.inputs[key].error!.message;
		}

		return '';
	}

	public hasErrored = (key: string): boolean => {
		return this.state.inputs.hasOwnProperty(key) && !!this.state.inputs[key].error && !!this.state.inputs[key].dirty;
	}

	public render() {
		const { children } = this.props;
		const { inputs, valid } = this.state;

		const value: IFormContext = {
			getMessage: this.getMessage,
			hasErrored: this.hasErrored,
			clearValue: this.clearValue,
			inputs,
			setValue: this.setValue,
			valid,
		};

		return (
			<FormContext.Provider value={value}>
				<form noValidate={true} onSubmit={this.submit}>
					{children}
				</form>
			</FormContext.Provider>
		);
	}
}
