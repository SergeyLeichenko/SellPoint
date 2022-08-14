export default function strippedContentImg(string) {
  return string.match(/(https?:\/\/).*(\.png|\.jpg|\.gif)/g);
}
