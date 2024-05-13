import type { Content } from "../loaders/ContentLoad.ts";

export interface BaseContent {
  content: Content;
}

export interface Props {
  content?: Content[];
}

export default function Content({ content }: Props) {
  return (
    <div>
    <aside class="fixed h-full lg:w-60 w-12 bg-gray-50 py-8 lg:px-4 px-2">
      <div class="space-y-2 overflow-hidden">
        {content?.map((content, index) => (
          <a href={`#id-${index}`} class="block py-2 truncate">{`${content?.title}`}</a>
        ))
        }
      </div>
    </aside>
    <div class="flex justify-center lg:ml-60 ml-12 w-full">
        {content?.map((content, index) => (
          <div id={`id-${index}`} class={"py-10 flex justify-center w-full " + (index % 2 === 0 ? "bg-gray-100" : "bg-gray-200")}>
            <div class="p-4 max-w-screen-lg" dangerouslySetInnerHTML={{ __html: content.content }}></div>
          </div>
        ))
        }
   </div>
    </div>
  )
}
