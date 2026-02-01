type Bit = 0 | 1;

type BitSequence = Bit[];

const toBits = (n: number, length: number = 8): BitSequence => {
    /**
     * Converts a number to a bit sequence.
     *
     * Args:
     *     n (number): The number to convert.
     *     length (number): The length of the bit sequence.
     *
     * Returns:
     *     BitSequence: The bit sequence.
     */

    const bits: BitSequence = [];

    for (let i = length - 1; i >= 0; i--) {
        bits.push(((n >> i) & 1) as Bit);
    }

    return bits;
};
