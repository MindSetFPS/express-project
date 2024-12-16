export default function generateUniqueFilename(): string {
    // Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
    const randomPart = Math.random().toString(36).substring(2);

    return `${Date.now()}-${randomPart}`;
}