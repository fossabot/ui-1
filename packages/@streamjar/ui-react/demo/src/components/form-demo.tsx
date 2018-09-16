import * as React from 'react';

import { Button, Input, Textarea } from '../../../src/lib';
import { Demo } from '../demo/demo';

export class FormDemo extends React.PureComponent {
	public config = {
		name: 'Input / Form',
	};

	public render(): JSX.Element {
		return <Demo config={this.config}>
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
