export interface Content {
  show?: boolean;
  title?: string;
  links?: { url: string; description: string; bulletPoints?: string[] }[];
  /**
   * @format date
   */
  publishDate?: string;
  topics?: string[];
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
