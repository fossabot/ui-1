import * as React from 'react';
import * as yup from 'yup';

import { Button, Form, Input, Textarea } from '../../../src/lib';
import { Demo } from '../demo/demo';

export class FormDemo extends React.PureComponent {
	public config = {
		name: 'Input / Form',
	};

	public validation = yup.object().shape({
		cactus: yup.number().required().min(1).max(5),
		name: yup.string().required().max(5),
		area: yup.string().required().max(5),
	});

	public render(): JSX.Element {
		return <Demo config={this.config}>
			<Form validation={this.validation}>
				<Input name='name' type='text' title='Suffix' value='hello' />
				<Input name='cactus' type='number' title='Suffix' value='1' />

				<Textarea name='area' title='a'></Textarea>

				<Button>Save</Button>
			</Form>

			<Button raised colour='success'>Upload</Button>

			<Input type='text' title='Text' value='hello' />
			<Input type='number' title='Number' value='5' min={2} max={10} />

			<Input prefix={<React.Fragment>£</React.Fragment>} type='text' title='Prefix' value='hello' min={2} max={10} />
			<Input suffix={<React.Fragment>x</React.Fragment>} type='text' title='Suffix' value='hello' min={2} max={10} />

			<Input type='text' title='Suffix' value='hello' />

			<Textarea title='static' rows={5} value='blah'></Textarea>
			<Textarea title='dynamic size' rows={2} resize></Textarea>
		</Demo>;
	}
}
