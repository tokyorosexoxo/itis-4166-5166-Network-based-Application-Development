const courses = [{
        prefix: 'ITIS',
        id: 5166,
        title: 'Network based app development'
    },
    {
        prefix: 'ITIS',
        id: 5180,
        title: 'Mobile application development'
    },
    {
        prefix: 'ITCS',
        id: 5156,
        title: 'Applied machine learning'
    },
    {
        prefix: 'ITCS',
        id: 5160,
        title: 'Database systems'
    }
];

// return course that matches the id
function findById(id) {
    return courses.find(course => course.id === id);
}

// implementation of save(course) function 
function save(course) {
    // use push() method to insert an 
    // element (course) into the array
    courses.push(course);
}

// implementation of findByPrefix(prefix) function
function findByPrefix(prefix) {
    let result = [];

    // iterate through the array of courses
    courses.forEach(course => {
        // if this course prefix matched with
        // specified prefix
        if (course.prefix == prefix) {
            // insert into result array
            result.push(course)
        }
    });
    // return result array
    return result
}

// implementation of updateById(id, course) function
function updateById(id, course) {
    // get index of specified course in courses array
    let index = courses.findIndex(c => c.id == id);
    // if found in the array
    if (index != -1) {
        // assign new course at index
        courses[index] = course;
        return true
    }
    // if not found return false
    return false
}

// implementation of removeById(id) function
function removeById(id) {
    // get index of specified course in courses array
    let index = courses.findIndex(c => c.id == id);

    // if course found in array
    if (index != -1) {
        // remove element at index
        courses.splice(index, 1); // 1 => delete count
        return true
    }
    // if course not found in array
    return false
}

// To do: uncomment the following testing code when you are ready to test your functions

save({ prefix: 'ITIS', id: 5250, title: 'Computer forensics' });
save({ prefix: 'ITIS', id: 6220, title: 'Data privacy' });
save({ prefix: 'ITIS', id: 6420, title: 'Usable security and privacy' });
console.log(courses);
console.log(findById(5166));
console.log(findByPrefix('ITIS'));
console.log(removeById(6000));
console.log(updateById(6000));
console.log(updateById(5166, {
    prefix: 'ITIS',
    id: 5166,
    title: 'Network-based app development'
}, ));
console.log(removeById(6420));
console.log(courses);