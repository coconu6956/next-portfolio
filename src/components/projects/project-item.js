import Image from "next/image";

export default function ProjectItem({ data }) {
  const visible = data.properties.visible.select.id // show = a:fw
  const title = data.properties.Name.title[0].plain_text
  const descrtion = data.properties.Description.rich_text[0].plain_text
  const github = data.properties.Github.url
  const figma = data.properties.Figma.url
  const zeplin = data.properties.Zeplin.url
  const url = data.properties.URL.url
  const imgSrc = data.cover.file?.url || data.cover.external.url
  const tags = data.properties.Tag.multi_select
  const start = data.properties.WorkPeriod.date.start
  const end = data.properties.WorkPeriod.date.end

  if (visible === "a:fw") {
    return (
      <div className="flex flex-col p-6 m-3 bg-slate-700 rounded-md">
        <Image 
          src={imgSrc}
          width="100"
          height="200"
        />
        <h1>{title}</h1>
        <h3>{descrtion}</h3>
        {github !== null ? <a href={github} target="_blank">Github 바로가기</a> : null}
        {figma !== null ? <a href={figma} target="_blank">Figma 바로가기</a> : null}
        {zeplin !== null ? <a href={zeplin} target="_blank">Zeplin 바로가기</a> : null}
        <a href={url} target="_blank">방문하기</a>
      </div>
    );
  }
  return null;
}
