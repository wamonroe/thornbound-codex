import React, {
  Fragment,
  type ReactElement,
  type ReactNode,
  cloneElement,
  isValidElement
} from "react";

const renderMarkdown = (node: ReactNode): ReactNode => {
  if (typeof node === "string") {
    return node.split(/(\*\*.*?\*\*|\*.*?\*)/g).map((part, i) => {
      const key = `${part}-${i}`;
      if (/^\*\*(.*)\*\*$/.test(part)) {
        // Bold text
        return <strong key={key}>{part.slice(2, -2)}</strong>;
      } else if (/^\*(.*)\*$/.test(part)) {
        // Italic text
        return <em key={key}>{part.slice(1, -1)}</em>;
      } else {
        // Plain text
        return <Fragment key={key}>{part}</Fragment>;
      }
    });
  }
  if (Array.isArray(node)) {
    return node.map(renderMarkdown);
  }
  if (isValidElement(node)) {
    const element = node as ReactElement<{ children?: ReactNode }>;
    return cloneElement(element, {
      children: renderMarkdown(element.props.children)
    });
  }
  return node;
};

type MarkdownProps = {
  children: ReactNode;
};

const Markdown = ({ children }: MarkdownProps) => {
  return <>{renderMarkdown(children)}</>;
};

export default Markdown;
