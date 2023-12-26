import type { QRL } from "@builder.io/qwik";
import { $, Slot, component$ } from "@builder.io/qwik";

export default component$(
  ({
    onClick$ = $(() => {}),
    size = "regular",
  }: {
    onClick$?: QRL<() => void>;
    size?: "regular" | "big";
  }) => {
    return (
      <button
        class={`bg-blue-500 hover:bg-blue-700 text-white font-bold ${
          size === "regular" ? "py-2 px-4" : "py-4 px-8"
        } rounded w-auto`}
        onClick$={onClick$}
      >
        <Slot />
      </button>
    );
  }
);
