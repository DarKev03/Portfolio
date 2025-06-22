export default function Footer() {
    return (
        <footer className="text-center py-6 text-xs text-neutral-500 border-t border-neutral-800 bg-neutral-900">
            &copy; {new Date().getFullYear()} Kevin García. No right reserved.
        </footer>
    );
}
