/*//deprecated.js  
export default (fileInfo, api) => {   
	const j = api.jscodeshift;   
	const root = j(fileInfo.source);    
	return root.toSource(); }; */

/*export default (fileInfo, api) => { 
	const j = api.jscodeshift;
	const root = j(fileInfo.source);

	const importDeclaration = root.find(j.ImportDeclaration, 
		{ source: { type: 'Literal', value: 'geometry',},}); 
	// find the Identifiers - figure out dynamically what our geometry module has been imported as
	const identifierCollection = importDeclaration.find(j.Identifier);  
	// get the first NodePath from the Collection 
	const nodePath = identifierCollection.get(0);  
	// get the Node in the NodePath and grab its "name" 
	const localName = nodePath.node.name; 

	//j.MemberExpression, { object: { name: localName,}, property: { name: "circleArea",},}) 
 
	return root.toSource(); */

/*	//deprecated.js 
	export default (fileInfo, api) => { const j = api.jscodeshift;   
	const root = j(fileInfo.source);    
	// find declaration for "geometry" import   
	const importDeclaration = root.find(j.ImportDeclaration, 
	{ source: { type: 'Literal', value: 'geometry',},});    
	// get the local name for the imported module   
	const localName =     
		// find the Identifiers     
		importDeclaration.find(j.Identifier)    
		// get the first NodePath from the Collection     
		.get(0)     
		// get the Node in the NodePath and grab its "name"     
		.node.name;    

	 return root.find(j.MemberExpression, { object: {  
	 	name: localName, }, property: { name: 'circleArea',},})

		.replaceWith(nodePath => {// get the underlying Node
		 	const { node } = nodePath;
		 	// change to our new prop
		 	node.property.name = 'getCircleArea';
		 	// replaceWith should return a Node, not a NodePath
		 	return node;}).toSource(); }; */

//deprecated.js 
export default (fileInfo, api) => { 
	const j = api.jscodeshift;   
	const root = j(fileInfo.source);    
	// find declaration for "geometry" import   
	const importDeclaration = root.find(j.ImportDeclaration, 
		{ source: { type: 'Literal', value: 'geometry',},});    
	// get the local name for the imported module   
	const localName =     
		// find the Identifiers     
		importDeclaration.find(j.Identifier)     
		// get the first NodePath from the Collection     
		.get(0)     
		// get the Node in the NodePath and grab its "name"     
		.node.name;    

	return root.find(j.MemberExpression, { object: { name: localName,}, property: { name: 'circleArea',},}).replaceWith(nodePath => {
		// get the underlying Node      
		const { node } = nodePath;       
		// change to our new prop       
		node.property.name = 'getCircleArea';       
		// replaceWith should return a Node, not a NodePath       
		return node;}).toSource(); }; 


