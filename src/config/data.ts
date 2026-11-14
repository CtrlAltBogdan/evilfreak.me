export const development = [
  { id: 'full-stack', index: '01', title: 'Full-stack development', text: 'Web applications from interface to backend and deployment.' },
  { id: 'frontend', index: '02', title: 'Frontend', text: 'Responsive interfaces, dashboards, product flows and interaction.' },
  { id: 'backend', index: '03', title: 'Backend', text: 'APIs, business logic, integrations, databases and WebSocket systems.' },
  { id: 'infrastructure', index: '04', title: 'Infrastructure', text: 'Linux, Docker, VPS, deployment, automation and server administration.' },
  { id: 'roblox', index: '05', title: 'Roblox game development', text: 'Roblox systems, gameplay logic and development.' },
] as const

export const stackGroups = [
  { title: 'Web', primary: ['PHP', 'JavaScript', 'HTML', 'CSS'], secondary: ['Laravel', 'Blade', 'AJAX'] },
  { title: 'Backend / Data', primary: ['MySQL', 'Redis', 'APIs', 'WebSocket'], secondary: [] },
  { title: 'Infrastructure', primary: ['Linux', 'Docker', 'VPS', 'SSH', 'Shell / sh'], secondary: ['Deployment', 'Rollback', 'Automation', 'Permissions', 'Server administration'] },
  { title: 'Workflow', primary: ['Git', 'GitHub'], secondary: ['npm', 'Composer'] },
] as const

export const productSkills = ['Responsive UI', 'UI / UX', 'Design systems', 'Accessibility', 'ARIA', 'PWA', 'SEO', 'Micro-interactions', 'Motion'] as const
export const creativeSkills = [
  { title: 'Adobe Photoshop', text: 'Image processing, cutouts, grading and asset preparation.' },
  { title: 'Adobe After Effects', text: 'Motion, video editing and compositing.' },
  { title: 'FFmpeg', text: 'Repeatable media conversion and delivery workflows.' },
] as const
