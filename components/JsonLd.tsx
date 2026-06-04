/**
 * JsonLd — renders a <script type="application/ld+json"> tag.
 * Use inside any Server Component (page.tsx or layout.tsx).
 * The generic <T> keeps the schema fully typed.
 */
export default function JsonLd<T extends Record<string, unknown>>({
  schema,
}: {
  schema: T;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
