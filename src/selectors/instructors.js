// Get visible instructors
export default (instructors, { text, sortBy }) => {
    return instructors.filter((instructor) => {
        const textMatch = instructor.name.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    }).sort((a, b) => {
        if (sortBy === 'name') {
            return a.name < b.name ? 1 : -1;
        } 
    });
};