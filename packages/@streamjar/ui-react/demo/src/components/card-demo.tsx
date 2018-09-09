import * as React from 'react';

import { Button, Card, CardActions, CardContent } from '../../../src/lib';
import { Demo } from '../demo/demo';

export class CardDemo extends React.Component {
	public config = {
		name: 'Card',
	};

	public render() {
		return (
			<Demo config={this.config}>
				<div style={{ padding: '15px', background: 'black'}}>
					<Card>
						<CardContent icon={{ email: 'ethan@streamjar.tv' }}>
							<p> You've been invited to edit <strong> Ethan</strong> overlay? </p>
						</CardContent>
						<CardActions>
							<Button raised colour='danger'> Deny </Button>
							<Button raised> Accept </Button>
						</CardActions>
					</Card>
				</div>
			</Demo>
		);
	}
}
