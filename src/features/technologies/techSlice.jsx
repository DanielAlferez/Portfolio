import { createSlice } from '@reduxjs/toolkit';
import Projects from '../../data/Projects';

const initialState = {
  filteredProjects: Projects,
  activeTech: 'All',
};

const techSlice = createSlice({
    name: "tech",
    initialState,
    reducers: {
      filterTech: (state, action) => {
        const {activeTech}  = action.payload;
        if (activeTech === 'All') {
          state.filteredProjects = Projects;
        } else {
          state.filteredProjects = Projects.filter((project) =>
            project.technologies.some((tech) => tech.name === activeTech)
          );
        }
        state.activeTech = activeTech;
      },
    }
  })


export const { filterTech } = techSlice.actions;

export default techSlice.reducer;
