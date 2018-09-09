export const getOutletRef = (): HTMLElement => {
	const root = document.createElement('div');
	root.className = 'jar-outlet';

	document.body.appendChild(root);

	return root;
};
