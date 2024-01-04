type MastheadProps = {
  title: string;
  description?: string;
};

export default function Masthead({ title, description }: MastheadProps) {
  return (
    <section className="masthead">
      <h1 className="masthead__title">{title}</h1>
      {description && <p className="masthead__description">{description}</p>}
    </section>
  );
}
