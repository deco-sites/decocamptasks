import type { Content } from "../loaders/ContentLoad.ts";

export interface BaseContent {
  content: Content;
}

export interface Props {
  content?: Content[];
}

export default function Content({ content }: Props) {
  const filteredContent = content?.filter((c) =>
    c.show ||
    (!c.publishDate ||
      (new Date(c.publishDate).getTime() <= (new Date()).getTime()))
  );
  return (
    <div>
      <aside class="fixed h-full lg:w-60 w-12 bg-gray-50 py-8 lg:px-4 px-2">
        <div class="space-y-2 overflow-hidden">
          {filteredContent?.map((content, index) => (
            <a href={`#id-${index}`} class="block py-2 truncate">
              {`${content?.title}`}
            </a>
          ))}
        </div>
      </aside>
      <div class="flex flex-col justify-center lg:pl-60 pl-12 w-full">
        {filteredContent?.map((content, index) => (
          <div
            id={`id-${index}`}
            class={"gap-4 py-10 flex flex-col justify-center w-full " +
              (index % 2 === 0 ? "bg-gray-100" : "bg-gray-200")}
          >
            <h1 class="px-4 max-w-screen-lg">{content.title}</h1>
            {content.links && (
              <div class="px-4 max-w-screen-lg">
                {content.topics && content.topics.length > 0 && <><h2>Topics</h2>
                <ul>
                  {content.topics.map(topic => <li>{topic}</li>)}
                </ul>                
                </>}
                <h2>Links</h2>
                <ul>
                  {content.links?.map((link) => (
                    <li>
                      <a href={link.url}>{link.description}</a>
                      {link.bulletPoints &&
                      <ul>
                        {link.bulletPoints.map(bp => <li class="italic">{bp}</li>)}
                      </ul>}
                    </li>
                    
                  ))}
                </ul>
              </div>
            )}
            <div
              class="p-4 max-w-screen-lg"
              dangerouslySetInnerHTML={{ __html: content.content }}
            >
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
