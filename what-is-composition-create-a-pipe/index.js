/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
	return x => funcs.reduce((y, fn) => fn(y), x);
}
