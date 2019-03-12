
export default (fileInfo, api) => {
	const j = api.jscodeshift;
	const root = j(fileInfo.source)
	
	const methodDefinitions = root.find(j.MethodDefinition, { key: 
		{ type: 'Identifier', name: 'render',},});

	methodDefinitions.remove();
	return root.toSource();
}