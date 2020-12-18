export { validateTransitionSpeed };

function validateTransitionSpeed(speed) {
    if (speed.length === 0) return [true, []]; // Assuming transition speed is an optional
    const value = parseFloat(speed);
    if (typeof value !== 'number')
        return [false, ['Please input number only!']];
    if (value < 0 || value > 10)
        return [
            false,
            ['Please input number from 0 to 10 only such as 0.3, 0.5'],
        ];
    return [true, []];
}
