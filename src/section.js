
// we are creating a set of functions to simplify creating actions,all will return an object
const create = ({title}) => ({ // we destructuring as we have more values
  type: 'SECTION_CREATE',
  payload: {
    title,
    id: Math.random(),
    createdOn: new Date(),
  },
});

const update = (section) => ({
  type: 'SECTION_UPDATE', // can be also 'UPDATE_SECTION'
  payload: section, // the same section you are trying to pass
});

const remove = (section) => ({
  type: 'SECTION_REMOVE',
  payload: section,
});