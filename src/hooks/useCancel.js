import { useRouter } from "vue-router";

export function useCancel() {
  const router = useRouter();

  function cancel() {
    router.push("/notes");
  }

  return { cancel };
}
