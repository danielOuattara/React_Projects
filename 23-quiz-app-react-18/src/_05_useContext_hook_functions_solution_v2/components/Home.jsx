import { useQuizContext } from "./../context/QuizContext";
import { Loading, Modal, QuizSetupForm, Quiz } from "./";

export default function AppUseContextHookFunction() {
  const { isWaiting, isLoading } = useQuizContext();

  if (isWaiting) {
    return <QuizSetupForm />;
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <Modal />
      <Quiz />
    </main>
  );
}
