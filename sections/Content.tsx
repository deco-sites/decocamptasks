interface Content {
  show?: boolean;
  title?: string;
  anchor?: string;
  /**
   * @format rich-text
   */
  content: string;
}

interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
  content?: Array<Content>;
}

export default function Content({ name, content }: Props) {
  return (
    <div>
    <aside class="fixed h-full w-60 bg-gray-50 py-8 px-4">
      <div class="space-y-2">
        {content?.map((c, index) => (
          <a href={`#id-${index}`} class="block py-2">{`${c.title}`}</a>
        ))
        }
      </div>
    </aside>
    <div class="grid grid-cols-1 ml-60">
        {content?.map((c, index) => (
          <div id={`id-${index}`} class={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"} dangerouslySetInnerHTML={{ __html: c.content }}
></div>
        ))
        }
   </div>
    </div>
  )
}
