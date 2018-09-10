// Get visible venues
export default (venues, { text, sortBy }) => {
    return venues.filter((venue) => {
        const textMatch = venue.name.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    }).sort((a, b) => {
        if (sortBy === 'name') {
            return a.name < b.name ? 1 : -1;
        } else if (sortBy === 'address') {
            return a.address < b.address ? 1 : -1;
        }
    });
};