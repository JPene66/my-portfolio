import React from "react";

export function PythonLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M11.87 2c-4.43 0-4.15 1.93-4.15 1.93l.01 2h4.22v.6h-5.9s-2.83.32-2.83 4.14c0 3.83 2.47 3.99 2.47 3.99h1.47v-2.07s-.08-2.47 2.44-2.47h4.15s2.34.04 2.34-2.31c0-2.34-1.95-3.81-4.22-3.81zm-2.28 1.25a.8.8 0 110 1.6.8.8 0 010-1.6z"
        fill="#3776AB"
      />
      <path
        d="M12.13 22c4.43 0 4.15-1.93 4.15-1.93l-.01-2h-4.22v-.6h5.9s2.83-.32 2.83-4.14c0-3.83-2.47-3.99-2.47-3.99h-1.47v2.07s.08 2.47-2.44 2.47h-4.15s-2.34-.04-2.34 2.31c0 2.34 1.95 3.81 4.22 3.81zm2.28-1.25a.8.8 0 110-1.6.8.8 0 010 1.6z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function OpenAILogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9 6.0651 6.0651 0 0 0-4.9806-2.01 6.0094 6.0094 0 0 0-5.703 4.0933 6.0462 6.0462 0 0 0-4.3412 3.123 5.9847 5.9847 0 0 0 .5157 4.9108 6.0462 6.0462 0 0 0 6.5098 2.9 6.0651 6.0651 0 0 0 4.9806 2.01 6.0094 6.0094 0 0 0 5.703-4.0933 6.0462 6.0462 0 0 0 4.3412-3.123zM12.8687 21.6841a4.526 4.526 0 0 1-2.4431-.7036l.1424-.247 3.5516-6.1517a.75.75 0 0 0-.2745-1.0245.7366.7366 0 0 0-1.0177.2745l-3.327 5.7621-1.3934-.8046v-7.106a.75.75 0 0 0-1.5 0v8.1966a4.538 4.538 0 0 1-4.0538-2.7354 4.526 4.526 0 0 1 .3897-4.526l4.2882-7.4273.1424-.247 1.3934.8046a.75.75 0 1 0 .75-1.299l-1.3934-.8046a4.5422 4.5422 0 0 1 4.8876-.2323 4.526 4.526 0 0 1 2.0534 4.1363l-.1424.247-3.5516 6.1517a.75.75 0 0 0 .2745 1.0245.7366.7366 0 0 0 1.0177-.2745l3.327-5.7621 1.3934.8046v7.106a.75.75 0 0 0 1.5 0v-8.1966a4.538 4.538 0 0 1 4.0538 2.7354 4.526 4.526 0 0 1-.3897 4.526l-4.2882 7.4273z" />
    </svg>
  );
}

export function AnthropicLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.827 3.516h3.676L24 20.484h-3.676l-1.748-4.052H10.457l-1.748 4.052H5.033L13.827 3.516zm3.567 10.358l-2.656-6.158-2.657 6.158h5.313zM.72 20.484h3.676L7.336 13.6h-3.676L.72 20.484z" />
    </svg>
  );
}

export function HuggingFaceLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-3.5 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-7.9 7.3a.75.75 0 011.05-.15c1.4.98 2.9 1.35 4.35 1.35s2.95-.37 4.35-1.35a.75.75 0 11.87 1.22c-1.7 1.2-3.6 1.63-5.22 1.63s-3.52-.43-5.22-1.63a.75.75 0 01-.18-1.07z" />
    </svg>
  );
}

export function PyTorchLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#EE4C2C">
      <path d="M16.5 3a.75.75 0 00-.75.75v1.28c-1.38-.85-3.03-1.35-4.8-1.35-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-1.77-.5-3.42-1.35-4.8h1.28a.75.75 0 000-1.5h-3.38a.75.75 0 00-.75.75v3.38a.75.75 0 001.5 0v-1.28c.85 1.38 1.35 3.03 1.35 4.8 0 4.14-3.36 7.5-7.5 7.5s-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5c1.77 0 3.42.5 4.8 1.35V3.75A.75.75 0 0016.5 3z" />
    </svg>
  );
}

export function FastAPILogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#009688">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm1.06 19.38l-1.07.03 1.4-5.41H9.08l4.47-8.03 1.07-.03-1.4 5.41h4.31l-4.47 8.03z" />
    </svg>
  );
}

export function StreamlitLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FF4B4B">
      <path d="M12 2L2 19.5h20L12 2zm0 4.5l6.5 11.5h-13L12 6.5z" />
    </svg>
  );
}

export function NextjsLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.82 17.5l-6.72-9.61V17.5H9.5V6.5h1.75l6.57 9.43V6.5h1.59v11h-1.59z" />
    </svg>
  );
}

export function TypeScriptLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#3178C6">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M11.75 14.25c-.25.88-.95 1.5-2.25 1.5-1.5 0-2.25-1-2.25-2.5v-4.5h1.75v4.25c0 .6.25 Code 1 .75 1 .5 0 .75-.35.88-.75v-4.5h1.75v5.5h-1.63v-.5zm3.75.25c.5.38 1.13.63 1.88.63.88 0 1.38-.38 1.38-.88 0-.5-.38-.75-1.25-1-.1.25-.13.3-.25.5-1.88-.63-2.63-1.63-2.63-2.75 0-1.63 1.38-2.63 3.38-2.63 1.13 0 2.13.38 2.75.88l-.75 1.25c-.5-.38-1.25-.63-2-.63-.88 0-1.5.38-1.5.88 0 .5.38.75 1.25 1 1.88.63 2.63 1.63 2.63 2.75 0 1.75-1.5 2.75-3.5 2.75-1.38 0-2.5-.38-3.25-1l.87-1.25z"
        fill="white"
      />
    </svg>
  );
}

export function VercelLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L24 22H0L12 1z" />
    </svg>
  );
}

export function DockerLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
      <path d="M13.98 11.08h1.83V9.25h-1.83v1.83zm-2.4 0h1.83V9.25h-1.83v1.83zm-2.4 0h1.83V9.25H9.18v1.83zm-2.4 0h1.83V9.25H6.78v1.83zm4.8-2.39h1.83V6.86h-1.83v1.83zm-2.4 0h1.83V6.86H9.18v1.83zm-2.4 0h1.83V6.86H6.78v1.83zm4.8-2.39h1.83V4.47h-1.83v1.83zm6.31 4.78c-.28-.18-.84-.25-1.42-.14-.24.05-.48.15-.7.28-.2-.47-.57-.86-1.04-1.12l-.24-.13V6.02h-1.83v2.85h.01c0 .06.01.12.01.18 0 .42-.13.82-.36 1.15H1.42c-.22 0-.41.14-.47.35-.61 2.05-.28 4.2.91 5.92 1.34 1.94 3.57 3.09 5.93 3.09 6.83 0 11.51-4.7 11.83-11.02.05-.18 0-.37-.09-.53z" />
    </svg>
  );
}

export function ChromaDBLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="7" cy="7" r="4" fill="#E65100" />
      <circle cx="17" cy="7" r="4" fill="#FFB300" />
      <circle cx="12" cy="16" r="5" fill="#1E88E5" />
    </svg>
  );
}

export function LangChainLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2L18.8 8 12 11.8 5.2 8 12 4.2zM5 9.4l6 3.3v6.7l-6-3.3V9.4zm14 6.7l-6 3.3v-6.7l6-3.3v6.7z"
        fill="#1C3C3C"
        stroke="#1BA098"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function LangfuseLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12h4l3-7 4 14 3-7h2"
        stroke="#1BA098"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function N8nLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FF6D5A">
      <circle cx="6" cy="12" r="4" fill="#FF6D5A" />
      <circle cx="18" cy="12" r="4" fill="#FF6D5A" />
      <path d="M6 12h12" stroke="#FF6D5A" strokeWidth="3" />
    </svg>
  );
}
