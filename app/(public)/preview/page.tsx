// preview page for newly created UI components
import Skeleton from "@/components/Skeleton";
import Avatar from "@/components/Avatar";

export default function PreviewPage() {
  return (
    <div className="page-content">
      <h2>Preview</h2>
      <Skeleton />

      <section>
        <h3>Avatar</h3>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            marginTop: "0.5rem",
          }}
        >
          <Avatar name="alice" />
          <Avatar name="John" />
          <Avatar name="JohnDoe" />
          <Avatar name="MaryJane" />
        </div>
      </section>
    </div>
  );
}
