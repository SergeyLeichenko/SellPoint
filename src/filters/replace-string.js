export default function strippedContent(string) {
  // return string.replace(/<.*?>/gi, " ");
  return string.replace(/<[^>]+>|&nbsp;|&mdash;|&ndash;|&shy;|&laquo;/gi, "");
}
