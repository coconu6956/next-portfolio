import { NOTION_TOKEN, PROJECT_DATABASE_ID } from "../../../config"
import ProjectItem from "../../components/projects/project-item";

async function getProjects() {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${NOTION_TOKEN}`
    },
    body: JSON.stringify({
        sorts: [
            {
                "property": "WorkPeriod",
                "direction": "descending"
            }
        ],
        page_size: 100
    }), 
    cache: 'no-store'
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${PROJECT_DATABASE_ID}/query`, options)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  // console.log(res)
  return res.json()
}

export default async function Projects({}){
  const projectData = getProjects()
  const projects = await projectData

  const projectIds = projects.results.map((project) => (
    project.properties.Name.title[0].plain_text
  ))
  console.log(projectIds)

  return (
    <section className="container">
      <h1>총 프로젝트 : {projects.results.length}</h1>
      {
        projects.results.map((project) => (
          <ProjectItem key={project.id} data={project} />
        ))
      }
    </section>
  )
}