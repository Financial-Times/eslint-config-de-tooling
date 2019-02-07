describe('Some test', () => {
	it('should be a jest test', () => {
		jest.spy(console, 'log');

		const myMock = jest.fn();

		expect(myMock).not.toHaveBeenCalled();
	});
});
