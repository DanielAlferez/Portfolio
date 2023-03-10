import { createSlice } from '@reduxjs/toolkit';
import Projects from '../../data/Projects';
import technologies from "../../data/technologies";

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
        } else if (activeTech === 'Frontend') {
          const frontendTech = technologies.filter((tech) => tech.field === 'Frontend').map((tech) => tech.name);
          console.log(frontendTech)
          state.filteredProjects = Projects.filter((project) =>
            project.technologies.some((tech) => frontendTech.includes(tech.name))
          );
        } else if (activeTech === 'Backend') {
          const backendTech = technologies.filter((tech) => tech.field === 'Backend').map((tech) => tech.name);
          state.filteredProjects = Projects.filter((project) =>
            project.technologies.some((tech) => backendTech.includes(tech.name))
          );
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
