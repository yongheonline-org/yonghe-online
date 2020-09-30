const { describe, it } = intern.getPlugin('interface.bdd');
const { expect } = intern.getPlugin('chai');

describe('1st test', () => {
	it('should say hello', () => {
		const a = 1;
		expect(a).to.equal(1);
	});
});