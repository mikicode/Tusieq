export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-foreground">Tusieq</span>
          <span className="text-muted-foreground">|</span>
          <span className="text-sm text-muted-foreground">Profesjonalny technik minecraft</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tusieq. Wszystkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  )
}
