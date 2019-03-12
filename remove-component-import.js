
export default (fileInfo, api) => {
	const j = api.jscodeshift;
	const root = j(fileInfo.source)

	const importSpecifiers = root.find(j.ImportSpecifier, { imported: 
	{ type: 'Identifier', name: 'Component'},},);

	importSpecifiers.remove();
	return root.toSource(); 
};