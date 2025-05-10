export function Footer() {
  return (
    <footer className="py-8 mt-12 bg-muted/50">
      <div className="container mx-auto text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Vizzie 360. All rights reserved.</p>
        <p className="text-sm mt-1">Immerse Yourself in a New Reality.</p>
      </div>
    </footer>
  );
}
