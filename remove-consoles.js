//this line will run the api but transform nothing
//export default (fileInfo, api) => { };

//Template
/*export default (fileInfo, api) => {   
	const j = api.jscodeshift;   
	const root = j(fileInfo.source);
	//what you want to find and remove/replace goes here!!!    
	return root.toSource(); 
};*/

/*{ "type": "CallExpression", "callee": { "type": "MemberExpression", "object": { "type": "Identifier",  "name": "console" }}} */

//const callExpressions = root.find(j.CallExpression);

/*Our transform alters the underlying AST. Using .toSource() generates a different string from the original. The -p option from our command displays the result to console and a tally of dispositions for each file processed is shown at the bottom. Removing the -d option from our command, would replace the content of remove-consoles.input.js with the output from the transform.*/
export default (fileInfo, api) => {   
	const j = api.jscodeshift;    
	const root = j(fileInfo.source)

	const callExpressions = root.find(j.CallExpression, { callee: { type: 'MemberExpression', object: { type: 'Identifier', name: 'console' },},});

	callExpressions.remove();    
	return root.toSource(); 
}; 




