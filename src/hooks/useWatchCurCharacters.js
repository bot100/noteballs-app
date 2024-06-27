import { watch } from "vue";

export function useWatchCurCharacters(text, maxlength = 100) {
  watch(text, (newV) => {
    if (newV.length === maxlength) {
      alert(`Max limit of ${maxlength} characters!`);
    }
  });
}
