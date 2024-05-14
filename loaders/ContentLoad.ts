export interface Content {
  show?: boolean;
  title?: string;
  links?: { url: string; description: string }[];
  /**
   * @format date
   */
  publishDate?: string;
  /**
   * @format rich-text
   */
  content: string;
}

export interface Props {
  content: Content;
}

export default function ContentLoad({ content }: Props): Content {
  return content;
}
