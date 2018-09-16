import * as React from 'react';
import TextareaAutoresize from 'react-autosize-textarea';

import TextareaAutosize from 'react-autosize-textarea';
import { InputLabel } from './input-label';

export interface ITextareaProps {
	title?: string;
	value?: string;

	rows?: number;
	resize?: boolean;
	maxLength?: number;
	readonly?: boolean;
	placeholder?: string;

	onChange?: (value: string) => void;
}

export interface ITextareaState {
	value: string;
}

export class Textarea extends React.PureComponent<ITextareaProps, ITextareaState> {
	public static defaultProps: Partial<ITextareaProps> = {
		onChange: () => { /* */ },
	};

	constructor(props: ITextareaProps) {
		super(props);

		this.state = { value: this.props.value || '' };
	}

	public onChange(event: React.SyntheticEvent<HTMLTextAreaElement>): void {
		this.setState({
			value: event.currentTarget.value,
		});

		this.props.onChange!(event.currentTarget.value);
	}

	public render() {
		const { title, rows, resize, placeholder, maxLength, readonly } = this.props;
		const { value } = this.state;

		const teProps = {
			className: 'jar-textarea__container',
			maxLength,
			onChange: this.onChange.bind(this),
			placeholder,
			readOnly: readonly,
			rows,
			value,
		};

		return <React.Fragment>
			{ title && <InputLabel>{title}</InputLabel>}

			<div className='jar-textarea layout-column'>
				{ resize && <TextareaAutosize {...teProps} /> }
				{ !resize && <textarea {...teProps} /> }
			</div>
		</React.Fragment>;
	}
}
