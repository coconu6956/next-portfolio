import Image from "next/legacy/image";

export default function ProjectItem({ data }) {
  const id = data.id; // show = a:fw
  const visible = data.properties.visible.select.id; // show = a:fw
  const title = data.properties.Name.title[0].plain_text;
  const descrtion = data.properties.Description.rich_text[0].plain_text;
  const github = data.properties.Github.url;
  const figma = data.properties.Figma.url;
  const zeplin = data.properties.Zeplin.url;
  const url = data.properties.URL.url;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tag.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;

  console.log(start, end);

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    console.log(`startDate: ${startDate}`);
    console.log(`endDate: ${endDate}`);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    console.log(`기간 : ${result}`);
    return result;
  };

  if (visible === "a:fw") {
    return (
      <div className="project-card">
        <Image
          className="rounded-t-xl"
          src={imgSrc}
          alt="cover image"
          width="100%"
          height="50%"
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
        <div className="p-4 w-full">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="my-1">작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)} 일)</p>
          <h3 className="mt-4 text-xl">{descrtion}</h3>
          <div className="flex items-start mt-2">
            {tags.map((tag) => (
              <h1
                className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:gb-sky-700 w-30"
                key={tag.id}
              >
                {tag.name}
              </h1>
            ))}
          </div>

          {github !== null ? (
            <a href={github} target="_blank">
              Github 바로가기
            </a>
          ) : null}
          {figma !== null ? (
            <a href={figma} target="_blank">
              Figma 바로가기
            </a>
          ) : null}
          {zeplin !== null ? (
            <a href={zeplin} target="_blank">
              Zeplin 바로가기
            </a>
          ) : null}
          <a href={url} target="_blank">
            방문하기
          </a>
        </div>
      </div>
    );
  }
  return null;
}
