import Editor from "~/components/editor";

export function meta() {
  return [{ title: "Basic English Spellchecker" }];
}

// conceptually this is simple
// we 'just' need to parse the text and check each word against the dictionary
// we're going to use a text editor as our "editing window" as it's the simplest component
// I found in my brief search that a) has only one window (rather than two)
// and b) seems to play nice with rehype plugins
// the latter is how we're going to add a class to words that are misspelled
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Editor />
    </div>
  );
}
