export default function WinBanner({ tries }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {tries} {tries === 1 ? "guess" : "guesses"}
        </strong>
        .
      </p>
    </div>
  );
}
