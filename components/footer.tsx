import { TranslatedText } from "@/components/translated-text"

export function Footer() {
    return (
        <footer className="py-12 border-t bg-card">
            <div className="container px-4">
                <p className="text-center text-muted-foreground">
                    <TranslatedText text="© 2024 Safe Go. All rights reserved." />
                </p>
            </div>
        </footer>
    )
}
