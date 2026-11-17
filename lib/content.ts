import type { Project } from './supabase';

export const sampleProjects: Project[] = [
  { id:'sample-1', title:'The Courtyard Residence', category:'Residential Architecture', location:'Indore, Madhya Pradesh', description:'A contemporary home shaped around light, openness and a quiet connection to nature.', image_url:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85', featured:true },
  { id:'sample-2', title:'The Ivory Living Space', category:'Interior Design', location:'Indore, Madhya Pradesh', description:'A warm, understated interior with thoughtful materials and timeless detailing.', image_url:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85', featured:true },
  { id:'sample-3', title:'The Modern Residence', category:'Residential Architecture', location:'Madhya Pradesh', description:'Clean geometry, natural textures and carefully framed views define this residence.', image_url:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85', featured:true }
];
